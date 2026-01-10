# Offsite rollout checklist (Railway POC)

- Set env vars in Railway: `VITE_SITE_URL`, `VITE_COMPETITIONS_CSV_URL` (optional), `VITE_GA_MEASUREMENT_ID` (optional).
- Run `npm run build`; deploy `dist/` (static) or use `npm run preview` as the start command.
- Replace `[SITE_URL]` in `public/sitemap.xml` during CI/CD or generate a fresh sitemap.
- Verify robots.txt is reachable.
- Verify GA4 events fire if Measurement ID is present.
- Add Search Console property for SITE_URL (HTML or DNS verification).
- Smoke test: home variants, timetable page, competitions fallback, location map query, mailto contact, Facebook link.
- Confirm timezone correctness for “Next session” (Australia/Sydney).
