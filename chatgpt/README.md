# Newcastle PCYC Table Tennis Club — ChatGPT build

POC front-end for Railway, built with Vite + React + TypeScript. Attendance-first UX with timetable visibility, location clarity, beginner reassurance, and CSV-driven competitions.

## Quick start
- `npm install`
- `npm run dev` (http://localhost:5173)
- `npm run build` → production bundle in `dist/`
- `npm run preview` to serve the build locally

## Environment
Copy `env.example` to `.env.local` (or `.env`) and fill:
- `VITE_SITE_URL` — canonical base URL (e.g., https://npttc.com.au)
- `VITE_COMPETITIONS_CSV_URL` — published Google Sheet CSV URL (leave blank to use fallback CSV)
- `VITE_GA_MEASUREMENT_ID` — GA4 measurement ID (optional; events no-op if absent)

## Pages
- `/` Home Variant A (default logistics-led). Add `?variant=confidence` to switch to Variant B (confidence-led).
- `/timetable` — timetable + next session + what-to-bring + FAQ.
- `/competitions` — CSV-driven competitions with fallback data.
- `/location` — directions, entry instructions, parking note, mailto contact, Facebook.
- `/what-to-expect`, `/pricing`, `/about` — supporting pages.

## Content rules (source of truth)
- Client: Newcastle PCYC Table Tennis Club (Broadmeadow, NSW).
- Primary CTA: “Show up” (timetable, directions).
- Secondary: Email/form enquiry (POC form opens mailto), tertiary: Facebook group.
- Location wording only: “PCYC Newcastle, Broadmeadow NSW” (no street address).
- Entry: Weekdays front entrance; weekends right-side gate; parking on-site [TBD].
- Pricing: Come & try free; $9 per visit; $40 annual PCYC membership; coaching rates on request; cash + card/EFTPOS.
- Timetable: Mon & Wed 6:30–10:00, Sat 2:30–6:00, Sun TBA (email for updates).
- Offer copy: “Come & try — first session free.”
- Trust: Operating since 1996; Table Tennis NSW; Ratings Central; Facebook group.

## Tracking
- GA4 optional: events fire when gtag is present—`directions_click`, `timetable_view` (page + section), `email_click`, `form_submit` (mailto helper), `facebook_click`.
- Search Console: add property for `SITE_URL`.

## Deployment (Railway POC)
- Build: `npm run build`
- Serve: `npm run preview` (or host static `dist/` on Railway static). Set env vars above.
- Contact form: POC uses mailto helper only; production can swap to a provider when approved.

## Assets & SEO
- Placeholder filenames + alt/caption guidance appear in UI; swap real photos when ready.
- `public/robots.txt` and `public/sitemap.xml` included. Replace `[SITE_URL]` in sitemap at deploy (or generate in CI).
- JSON-LD schema injected via `SEO` component (SportsActivityLocation).

## Competitions data
- Live: published Google Sheet CSV via `VITE_COMPETITIONS_CSV_URL`.
- Fallback: `data/competitions.csv`.
- Admin how-to: `docs/COMPETITIONS_DATA.md`.

## To confirm
- SITE_URL canonical domain.
- Parking specifics.
- Real photos and committee names/headshots.
- GA4 ID (if used) and Search Console verification method.
