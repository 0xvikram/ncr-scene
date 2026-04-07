import {
  createSignedSession,
  getGoogleOAuthConfig,
  googleOAuthCookies,
  type GoogleUser,
} from "@/lib/google-oauth";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type GoogleTokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

export async function GET(request: NextRequest) {
  const error = request.nextUrl.searchParams.get("error");
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const storedState = request.cookies.get(googleOAuthCookies.state)?.value;

  if (error) {
    return redirectWithError(request, error);
  }

  if (!code || !state || state !== storedState) {
    return redirectWithError(request, "invalid_oauth_state");
  }

  const { clientId, clientSecret, redirectUri } = getGoogleOAuthConfig(
    request.nextUrl.origin
  );

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
  });

  const tokenJson = (await tokenResponse.json()) as GoogleTokenResponse;

  if (!tokenResponse.ok || !tokenJson.access_token) {
    return redirectWithError(
      request,
      tokenJson.error ?? tokenJson.error_description ?? "token_exchange_failed"
    );
  }

  const userResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${tokenJson.access_token}`,
    },
  });

  if (!userResponse.ok) {
    return redirectWithError(request, "google_userinfo_failed");
  }

  const user = (await userResponse.json()) as GoogleUser;
  const response = NextResponse.redirect(new URL("/", request.url));

  response.cookies.delete(googleOAuthCookies.state);
  response.cookies.set(googleOAuthCookies.session, createSignedSession(user), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
  });

  return response;
}

function redirectWithError(request: NextRequest, error: string) {
  const url = new URL("/login", request.url);
  url.searchParams.set("error", error);

  const response = NextResponse.redirect(url);
  response.cookies.delete(googleOAuthCookies.state);

  return response;
}
