# Delhi NCR Fest Discovery Platform — Full Project Plan

## 🎯 Project Overview

A community-driven platform where anyone can discover, post, and discuss college fests & events happening in Delhi NCR — categorized into Free and Paid events, with social features like upvotes, comments, and one-click registration.

---

## 🏗️ Tech Stack Recommendation

| Layer | Technology | Why |
|---|---|---|
| Frontend | Next.js 14 (App Router) | SSR for SEO, fast page loads |
| Styling | Tailwind CSS + shadcn/ui | Fast, clean UI |
| Backend | Next.js API Routes | Monorepo simplicity |
| Database | Supabase (PostgreSQL) | Auth + DB + Realtime in one |
| Auth | Supabase Auth | Google/Email login out of the box |
| File Storage | Supabase Storage | Fest posters/banners |
| Deployment | Vercel | Zero-config Next.js deploy |

---

## 🗄️ Database Schema

### `users`
```
id (uuid, PK)
email
name
avatar_url
created_at
```

### `events`
```
id (uuid, PK)
title
description
category → ENUM('free', 'paid')
price (nullable, for paid)
college_name
venue
city (default: Delhi NCR)
start_date
end_date
registration_link (external or internal)
poster_url
tags (array) → e.g. ["cultural", "technical", "sports"]
posted_by (FK → users.id)
upvotes (int, default 0)
downvotes (int, default 0)
created_at
is_approved (bool) → optional moderation flag
```

### `registrations`
```
id
event_id (FK)
user_id (FK)
registered_at
```

### `comments`
```
id
event_id (FK)
user_id (FK)
parent_comment_id (nullable, for threading)
content
created_at
```

### `votes`
```
id
event_id (FK)
user_id (FK)
vote_type → ENUM('up', 'down')
```
*(One row per user per event — prevents double voting)*

---

## 📱 Pages & Routes

### Public Pages
| Route | Description |
|---|---|
| `/` | Home — featured fests, Free/Paid tabs, search bar |
| `/events` | All events with filters (category, date, tags) |
| `/events/[id]` | Single event detail page + comment section |
| `/events/free` | Only free events |
| `/events/paid` | Only paid events |

### Auth Pages
| Route | Description |
|---|---|
| `/login` | Email + Google login |
| `/signup` | New user registration |

### Authenticated Pages
| Route | Description |
|---|---|
| `/post-event` | Simple multi-step form to add a new fest |
| `/my-events` | Events the logged-in user has posted |
| `/my-registrations` | Events the user has registered for |
| `/profile` | Edit profile |

---

## 🎨 UI/UX Flow

### Home Page Layout
```
[Navbar: Logo | Free | Paid | Post a Fest | Login]

[Hero Banner: "Discover Delhi NCR's Best College Fests"]
[Search Bar] [Filter: This Week / This Month / Free / Paid]

[Tabs: ALL | FREE 🟢 | PAID 🔴]

[Card Grid]
  ┌─────────────────┐
  │  [Poster Image] │
  │  College Name   │
  │  Fest Name      │
  │  📅 Date  📍 Venue│
  │  🟢 FREE / 🔴 ₹299│
  │  [Register] [💬 12]│
  └─────────────────┘
```

### Event Detail Page Layout
```
[Full Banner Image]
[Title + College]
[Date | Venue | Category Badge]
[Tags: #cultural #dance #music]
[Description]
[Register Button → external link OR in-platform modal]

─────────────────────────────
DISCUSSION (Reddit-style)
─────────────────────────────
[👍 234  👎 12]  [+ Add Comment]

  [User Avatar] @username · 2h ago
  "Is there a solo dance category?"
    ↳ [User] "Yes! Check their Instagram"
    [Reply] [👍 5]
```

---

## ✍️ Post Event Flow (Super Simple — 3 Steps)

### Step 1 — Basic Info
- Fest Name
- College/Organization Name
- Category toggle: **FREE** or **PAID** (+ price field if paid)
- Short description (textarea)

### Step 2 — Date & Location
- Start Date + End Date (date pickers)
- Venue name
- Google Maps link (optional)

### Step 3 — Media & Registration
- Upload poster image
- External registration link (optional — if they want to redirect to Unstop/Devfolio)
- Tags (multi-select: Cultural, Technical, Sports, Business, Music, etc.)
- **[Submit Fest 🚀]**

That's it. 3 steps, minimal friction.

---

## 💬 Comment & Voting System

- **Threaded comments** (1 level deep — reply to top-level only, keeps it clean)
- **Upvote/Downvote** on the event itself (not on comments, to keep it simple)
- Comments sorted by **Newest first** (toggle to Top)
- Any logged-in user can comment
- Comment author can delete their own comment
- Event poster can delete any comment on their event

---

## 🔐 Auth & Permissions

| Action | Guest | Logged In | Event Owner |
|---|---|---|---|
| Browse events | ✅ | ✅ | ✅ |
| View comments | ✅ | ✅ | ✅ |
| Register for event | ❌ | ✅ | ✅ |
| Post an event | ❌ | ✅ | ✅ |
| Vote / Comment | ❌ | ✅ | ✅ |
| Edit/Delete event | ❌ | ❌ | ✅ |
| Delete any comment | ❌ | ❌ | ✅ |

---

## 🔔 Nice-to-Have Features (Phase 2)

- **Email notifications** when someone comments on your event
- **Save/Bookmark** events
- **Share card** — auto-generated OG image for WhatsApp/Instagram sharing
- **Admin dashboard** for content moderation
- **Trending section** — events sorted by upvotes in last 48h
- **Google Calendar** add button on event page

---

## 📦 Folder Structure (Next.js)

```
/app
  /page.tsx              ← Home
  /events
    /page.tsx            ← All events
    /[id]/page.tsx       ← Event detail + comments
  /post-event/page.tsx   ← Post form
  /login & /signup
  /my-events & /profile

/components
  /EventCard.tsx
  /CommentSection.tsx
  /VoteButtons.tsx
  /PostEventForm.tsx
  /CategoryTabs.tsx

/lib
  /supabase.ts           ← Supabase client
  /auth.ts
  /api/events.ts
  /api/comments.ts
```

---

## 🚀 Build Order for Codex

Give Codex this priority sequence:

1. **Supabase setup** — schema, RLS policies, auth config
2. **Auth pages** — login/signup with Supabase Auth
3. **Event listing page** — fetch + display cards with Free/Paid filter
4. **Event detail page** — full info display
5. **Post Event form** — 3-step form with image upload
6. **Comment + Vote system** — realtime if possible via Supabase subscriptions
7. **Registration flow** — in-platform or redirect
8. **My Events / Profile pages**
9. **Polish** — search, filters, responsive design

---

This plan is self-contained and ready to hand off directly to Codex. Every table, route, component, and user flow is defined — Codex just needs to execute it.