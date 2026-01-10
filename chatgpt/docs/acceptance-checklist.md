## Acceptance checklist — “Professional & modern” redesign (ChatGPT site)

### Visual cohesion
- [ ] The site uses **tokens** (colors/spacing/type) consistently (no random hex values in new work).
- [ ] Cards, buttons, badges, tables, and nav feel like the **same system** across all routes.
- [ ] Spacing rhythm is consistent: sections, headings, and card spacing don’t “jump”.

### Typography & hierarchy
- [ ] Typography has clear hierarchy (H1 > H2 > H3; body readable).
- [ ] Exactly **one H1 per page**.
- [ ] Line lengths are controlled (no ultra-wide paragraphs on desktop).

### Conversion path (“Come for a tryout”)
- [ ] Primary CTA (“Come for a tryout / See session times”) is obvious within **5 seconds on mobile**.
- [ ] Primary CTA appears:
  - [ ] in the header
  - [ ] in the home hero
  - [ ] near the timetable content
  - [ ] in at least one end-of-page CTA block
- [ ] Supporting info exists: “no booking”, “first session free”, “what to bring”, “directions”.

### Mobile-first polish
- [ ] Header/nav doesn’t wrap awkwardly on small screens.
- [ ] Touch targets are ≥ 44px.
- [ ] Timetable/table is readable on mobile (scrolls if needed; no crushed columns).

### SEO preserved / improved
- [ ] Titles + meta descriptions exist for key pages (and align with local intent + tryout goal).
- [ ] Canonicals are correct when `VITE_SITE_URL` is set.
- [ ] Sitemap includes all indexable routes that exist in-app.
- [ ] No important content was removed; intent is preserved.

### Accessibility
- [ ] Visible focus states (keyboard nav) across links/buttons/forms.
- [ ] Contrast is acceptable for text on surfaces and buttons.
- [ ] Images have appropriate alt text (descriptive, not keyword spam).

### Performance
- [ ] Hero image doesn’t cause layout shift (has stable aspect ratio).
- [ ] Non-critical images are lazy-loaded.
- [ ] No unnecessary libraries added.

