## UI Audit — ChatGPT site (React + Vite)

### Executive summary (why it reads “amateur” right now)
- **No cohesive system**: styles are split between `src/styles/global.css` and lots of per-page inline styles, so spacing/typography/color decisions drift page to page.
- **“Default component” feeling**: buttons/cards/tables look like lightly-styled defaults (no deliberate hierarchy, states, or composition patterns).
- **Hero isn’t premium**: it’s a card-in-a-hero with inconsistent contrast, weak subhead hierarchy, and no “single-minded” primary conversion path.
- **Weak rhythm**: inconsistent vertical spacing (sections/cards/headings) makes pages feel stitched together rather than designed.
- **No real imagery**: `PhotoStrip` is placeholder text blocks; there’s no logo lockup or hero image treatment to establish trust and polish.
- **Navigation feels utilitarian**: it’s text-only, inline styles, no active-state system, and no mobile-first behavior (wraps awkwardly).
- **Timetable experience is generic**: table styling is plain, not optimized for scanning or mobile, and the “show up” path lacks a clear “next step” module.
- **Trust signals are thin/childish**: emoji bullets + short lists without venue, safety/requirements, and community cues (photos, affiliation links, clear location).
- **SEO signals are inconsistent**: some pages exist in `src/pages` but are **not routed**, and the sitemap uses `https://npttc.com.au` (not environment-driven).
- **Metadata/social sharing is incomplete**: no Open Graph/Twitter tags, and structured data is minimal (good start, but not complete/consistent).

---

### Step 1 — Site map + route reality check

**What it currently does**
- `src/pages` contains additional content pages like `Guides.tsx`, `AreasWeWelcome.tsx`, `GuideMaitland.tsx`, `GuideIndoorActivities.tsx`.
- `src/App.tsx` only routes:
  - `/`, `/timetable`, `/competitions`, `/location`, `/what-to-expect`, `/pricing`, `/about`

**Why it reads amateur**
- Shipping “orphaned” pages means the content strategy looks unfinished and hurts internal linking + crawlability.

**Exact fix**
- Add routes for the existing guide/area pages (no content removed) and link them in nav/footer where appropriate:
  - `/guides`
  - `/guides/indoor-activities-newcastle`
  - `/guides/table-tennis-near-maitland`
  - `/areas-we-welcome`
- Update `public/sitemap.xml` to include these pages and use `VITE_SITE_URL`/`SITE.siteUrl` as the base.

Files: `src/App.tsx`, `src/components/Layout.tsx`, `public/sitemap.xml`, `src/config.ts`

---

### 1) Typography: “Inter” is referenced but not actually loaded

**What it currently does**
- `src/styles/global.css` sets `font-family: "Inter", system-ui, ...` but `index.html` doesn’t load Inter.

**Why it reads amateur**
- Typography changes across devices; headings/body don’t feel intentionally designed.

**Exact fix**
- Add a lightweight font loading strategy (prefer system stack + optional Inter via `<link>` in `index.html`) and define a consistent type scale via tokens.

Files: `index.html`, `src/styles/global.css`

---

### 2) Inconsistent layout rhythm (spacing/section composition)

**What it currently does**
- `.section` is fixed padding; many pages override layout with inline `style={{ gridTemplateColumns... }}` and ad-hoc `marginTop/marginBottom`.

**Why it reads amateur**
- Every page “reinvents” spacing; headings feel randomly sized/placed.

**Exact fix**
- Define a spacing scale and section patterns:
  - `.section` + `.section--tight`
  - `.stack` utilities for vertical rhythm
  - consistent container widths (content vs wide)
- Remove high-churn inline spacing where possible.

Files: `src/styles/global.css`, multiple pages/components

---

### 3) Color + elevation are not systematic

**What it currently does**
- Colors are hard-coded across files (`#0f172a`, `#e0f2fe`, `#475569`, etc.).
- Card shadow/border are single values; no clear “surface” hierarchy (base, raised, inverted).

**Why it reads amateur**
- Hard-coded values cause inconsistency and “patchwork” design.

**Exact fix**
- Introduce CSS variables (tokens) for:
  - neutrals, accent, focus ring
  - surface backgrounds (default, subtle, inverted)
  - borders/shadows
- Use them everywhere (global + component styles).

Files: `src/styles/global.css`, `Layout.tsx`, pages/components

---

### 4) Buttons lack a professional system (states, sizes, icon rhythm)

**What it currently does**
- `.button` exists, but variants are basic; no disabled/loading pattern; hover is only translateY; focus ring is global but not tuned per component.

**Why it reads amateur**
- Buttons don’t feel designed; primary CTA isn’t clearly dominant; secondary buttons can compete visually.

**Exact fix**
- Create a button system:
  - sizes: `sm`, `md` (default)
  - variants: `primary`, `secondary`, `ghost`
  - states: hover, active, focus-visible, disabled
- Ensure the “Come for a tryout / Show up this week” CTA is always visually primary.

Files: `src/styles/global.css`, `src/components/CTAButtons.tsx`, `src/components/Layout.tsx`

---

### 5) Navigation/header is text-only and overly inline-styled

**What it currently does**
- `Layout.tsx` uses inline styles for header/nav and NavLink active background.
- No logo mark; no mobile-first layout (nav wraps).

**Why it reads amateur**
- Inline style nav looks like a prototype; wrapping links looks broken on mobile.

**Exact fix**
- Move header/nav into class-based components:
  - left: logo + name lockup
  - center/right: primary nav (desktop), compact “Menu” for mobile
  - right: primary CTA button

Files: `src/components/Layout.tsx`, `src/styles/global.css`

---

### 6) Hero doesn’t “sell the first 5 seconds”

**What it currently does**
- Hero is a single card with a tag + H1 + paragraph + a couple of cards (NextSession, TimetablePreview).

**Why it reads amateur**
- No premium hero composition (background/imagery, controlled width, clear hierarchy).

**Exact fix**
- Create a hero pattern:
  - H1: local intent (Newcastle/Broadmeadow)
  - subhead: “first session free” + “no booking”
  - primary CTA: “Come for a tryout (see times)”
  - secondary CTA: “Get directions”
  - supporting micro-trust: “Shoes required, equipment provided”
- Add hero image treatment (if available) with proper alt and aspect ratio.

Files: `src/pages/Home.tsx`, `src/styles/global.css`, assets in `public/`

---

### 7) Timetable table isn’t optimized for scanning or mobile

**What it currently does**
- Basic `<table>` styling with header background and borders.

**Why it reads amateur**
- Tables need deliberate scan patterns (row emphasis, chip notes) and horizontal handling on small screens.

**Exact fix**
- Improve table component styling:
  - zebra rows, sticky header (optional)
  - “next session” emphasis
  - mobile: allow horizontal scroll with a subtle fade/edge hint

Files: `src/components/TimetableTable.tsx`, `src/styles/global.css`, `src/pages/Timetable.tsx`

---

### 8) Missing real imagery + logo treatment

**What it currently does**
- No images in ChatGPT public folder.
- `PhotoStrip.tsx` renders placeholder blocks with filenames.

**Why it reads amateur**
- Imagery is a primary trust cue for community clubs; placeholders feel unfinished.

**Exact fix**
- Add assets into `chatgpt/public/images/`:
  - `logo.png` (prefer transparent PNG or SVG)
  - `hero.jpg` (wide hero)
  - `group.jpg` (community photo)
- Update `PhotoStrip` to show real images (with `loading="lazy"` and correct `alt`).
- If the logo isn’t transparent: document the required export (transparent PNG or SVG) and use a temporary version without CSS hacks.

Files: `public/images/*`, `src/components/PhotoStrip.tsx`, `src/components/Layout.tsx`, `docs/IMAGES.md` (optional update)

---

### 9) Trust signals are underdeveloped and “emoji-coded”

**What it currently does**
- `TrustProof` uses emojis and a small list.

**Why it reads amateur**
- Emojis can be charming, but without stronger trust modules (venue clarity, social proof, affiliation links, simple “what to expect”), it reads informal.

**Exact fix**
- Convert trust into a deliberate “Trust bar”:
  - “Established 1996”
  - “Affiliated with Table Tennis NSW”
  - “Equipment provided”
  - “PCYC Broadmeadow venue”
  - “Join Facebook community”
- Use consistent icon style (SVG or restrained emoji) and layout.

Files: `src/components/TrustProof.tsx`, `src/styles/global.css`

---

### 10) SEO + metadata gaps (and one concrete issue)

**What it currently does**
- `SEO.tsx` sets title/description/canonical + injects JSON-LD (good).
- `public/sitemap.xml` hardcodes `https://npttc.com.au/*`.
- No Open Graph/Twitter tags in `SEO.tsx`.

**Why it reads amateur**
- Social previews look blank/low-trust, sitemap can be wrong per environment, and orphan pages aren’t discoverable.

**Exact fix**
- Extend `SEO.tsx` to set:
  - `og:title`, `og:description`, `og:url`, `og:type`
  - `og:image` (use hero/group image)
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Make sitemap base URL environment-driven (`SITE.siteUrl`) and include all indexable routes.
- Keep **one H1 per page** and strengthen internal linking to `/timetable` + `/location` CTAs.

Files: `src/components/SEO.tsx`, `src/config.ts`, `public/sitemap.xml`, pages/components

