import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export type GoogleUser = {
  sub: string;
  email: string;
  name: string;
  picture?: string;
};

const sessionCookieName = "ncr_scene_session";
const stateCookieName = "google_oauth_state";

export const googleOAuthCookies = {
  session: sessionCookieName,
  state: stateCookieName,
};

export function getGoogleOAuthConfig(origin: string) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri =
    process.env.GOOGLE_OAUTH_REDIRECT_URI ??
    `${origin}/api/auth/google/callback`;

  if (!clientId || !clientSecret) {
    throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET");
  }

  return { clientId, clientSecret, redirectUri };
}

export function createOAuthState() {
  return randomBytes(32).toString("base64url");
}

export function createSignedSession(user: GoogleUser) {
  const payload = Buffer.from(JSON.stringify(user), "utf8").toString("base64url");
  const signature = sign(payload);

  return `${payload}.${signature}`;
}

export function readSignedSession(value: string | undefined) {
  if (!value) {
    return null;
  }

  const [payload, signature] = value.split(".");

  if (!payload || !signature || !isValidSignature(payload, signature)) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as GoogleUser;
  } catch {
    return null;
  }
}

function sign(payload: string) {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("Missing AUTH_SECRET");
  }

  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function isValidSignature(payload: string, signature: string) {
  const expected = sign(payload);
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);

  return (
    expectedBuffer.length === signatureBuffer.length &&
    timingSafeEqual(expectedBuffer, signatureBuffer)
  );
}
