# SEO essentials (v1)

## Canonical & metadata
- Set `VITE_SITE_URL` in environment; `SEO` component uses it for canonical links.
- Unique titles/metas per page (already wired).
- Update `public/sitemap.xml` replacing `[SITE_URL]` or generate during deploy.
- Robots: `public/robots.txt` present and open.

## Local SEO
- NAP: “Newcastle PCYC Table Tennis Club”, location wording only, email enquiries@npttc.com.au, Facebook group as `sameAs`.
- Do **not** publish street address until approved.
- Schema: Local business (SportsActivityLocation) injected client-side with sessions represented as openingHoursSpecification.

## Image SEO
- Use descriptive filenames (see `docs/IMAGES.md`).
- Alt text mentions what is in the image + Newcastle/PCYC when natural.
- Provide captions where helpful (entrances, reassurance).
- Use modern formats (webp/avif when available), lazy-load non-critical images, set width/height to avoid CLS.

## Internal linking (already in UI)
- Home → Timetable, Location, What to Expect, Pricing, Competitions.
- Timetable → Location.
- What to Expect → Timetable + Location.
- Competitions → Email us.

## Tracking
- Optional GA4: set `VITE_GA_MEASUREMENT_ID`.
- Events: directions_click, timetable_view (page + section), email_click, form_submit (mailto helper), facebook_click.

## Search Console
- Add property for SITE_URL; verification can be HTML file or DNS (not included here).
