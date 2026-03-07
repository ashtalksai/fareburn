# Fareburn — AI Rewards Scanner for Credit Card Points

Fareburn scans 50+ airlines and hotels to find when YOUR points unlock premium seats — and alerts you instantly.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Components:** shadcn/ui
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Auth:** NextAuth.js v5 (email/password + Google OAuth)
- **Database:** PostgreSQL (Prisma ORM)
- **Payments:** Stripe (test mode)
- **Fonts:** DM Serif Display, Plus Jakarta Sans, JetBrains Mono

## Getting Started

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `DATABASE_URL` — PostgreSQL connection string
- `AUTH_SECRET` — NextAuth secret
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth
- `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Stripe

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page (10 sections) |
| `/about` | Company story, mission, values, timeline |
| `/pricing` | 3-tier pricing with monthly/yearly toggle |
| `/tools/calculator` | Free public calculator (lead magnet, no auth) |
| `/signup` | Registration with email + Google OAuth |
| `/login` | Login page |
| `/dashboard` | Main app — programs, stats, opportunities |
| `/dashboard/alerts` | Award alert management |
| `/dashboard/calculator` | Authenticated calculator with alerts |
| `/blog` | Blog listing page |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/deck` | Pitch deck (Framer Motion slides) |
| `/docs` | Documentation hub (5 sections) |
| `/api/health` | Health check endpoint |

## Deploy

Deploy via Coolify to `fareburn.ashketing.com`.
