## Professional UI System (tokens + rules)

This design system is intentionally small: it upgrades polish and consistency without adding heavy UI libraries.

---

### Brand goal
Primary conversion: **“Come for a tryout / show up this week”**.

Design principles:
- **Confident hierarchy**: first 5 seconds on mobile tells you *where, when, and what to do next*.
- **Trust-first**: venue clarity, session times, what to bring, community cues.
- **Cohesive rhythm**: consistent spacing and type scale across every page.
- **Accessible by default**: contrast, focus-visible, semantic structure.

---

### Tokens (copy/paste)

#### Color
Neutrals + one accent (blue) + semantic states.

```css
:root {
  /* Neutrals */
  --bg: #f8fafc;
  --surface: #ffffff;
  --surface-2: #f1f5f9;
  --surface-invert: #0b1224;
  --text: #0b1021;
  --text-2: #334155;
  --muted: #64748b;
  --border: #e2e8f0;

  /* Accent (primary) */
  --primary: #0ea5e9;
  --primary-600: #0284c7;
  --primary-700: #0369a1;
  --primary-soft: #e0f2fe;

  /* Semantics */
  --success: #16a34a;
  --warning: #f59e0b;
  --danger: #ef4444;

  /* Focus */
  --focus: #38bdf8;
}
```

Rules:
- Use **text on surface** by default.
- Use **inverted surface** only for hero/footer/CTA bars.
- Use `--primary` for primary CTA, links, and key highlights only.

#### Typography
System stack (optionally load Inter for consistency). Keep scale simple.

```css
:root {
  --font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";

  --text-xs: 0.8125rem;
  --text-sm: 0.9375rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: clamp(1.6rem, 2.4vw, 2rem);
  --text-3xl: clamp(2rem, 3.5vw, 2.75rem);

  --leading-tight: 1.15;
  --leading-normal: 1.6;
}
```

Heading rules:
- Exactly **one H1 per page**.
- H2/H3 used for section/card headings, never skipping levels.
- Keep H1 short + local intent (“Table Tennis in Newcastle (Broadmeadow)”).

#### Spacing + layout rhythm

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  --container: 1120px;
  --container-narrow: 780px;
}
```

Rhythm rules:
- Sections use `padding-block: var(--space-12)` desktop; `var(--space-10)` mobile.
- Use `.stack` utilities instead of one-off margins.

#### Radius, borders, shadows

```css
:root {
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;

  --shadow-sm: 0 10px 25px rgba(15, 23, 42, 0.08);
  --shadow-md: 0 18px 50px rgba(15, 23, 42, 0.12);
}
```

---

### Component rules

#### Buttons
- Primary: gradient or solid accent, always reserved for the main action.
- Secondary: dark surface for non-primary CTAs.
- Ghost: border + subtle hover for tertiary actions.
- Always show `:focus-visible` ring; touch target ≥ 44px.

#### Cards
- Default: `--surface` + border + soft shadow.
- Avoid inline background colors; use variants via class (e.g. `.card--soft`, `.card--invert`).

#### Badges/Chips
- Use for “first session free”, “no booking”, “shoes required”.
- Chips should be low-contrast surfaces with readable text (not neon).

#### Tables
- Optimize for scanning: strong header, zebra rows, consistent cell padding.
- Mobile: allow horizontal scroll with a wrapper (don’t squash text).

#### Navigation
- Desktop: inline links + clear active state.
- Mobile: avoid wrapping; use a simple disclosure menu if needed.

#### CTA bars
- End of each page: short copy + primary CTA + secondary CTA.

