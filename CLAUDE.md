# CLAUDE.md

This file provides context and instructions for Claude Code when working on this repository.

## Project Overview

This is the website for **Newcastle PCYC Table Tennis Club** — a community table tennis club in the Hunter region of NSW, Australia. The site is built with Astro 5.0 and Tailwind CSS, deployed as a static site.

## Critical Club Facts (DO NOT HALLUCINATE)

Always verify these details from source files before using them. Never make up addresses, times, or contact details.

| Fact | Correct Value | Source File |
|------|---------------|-------------|
| Address | Young Road, Broadmeadow NSW 2292 | `src/components/Footer.astro` |
| Venue | PCYC Newcastle (Broadmeadow) | `src/pages/index.astro` |
| Phone | 02 4961 4493 | `src/components/Footer.astro` |
| Email | newcastletabletennis@gmail.com | `src/components/Footer.astro` |
| Website | newcastletabletennis.com.au | — |
| Session times | Mon 6:30-10pm, Wed 6:30-10pm, Sat 2:30-6pm | `src/components/Hero.astro` |
| Cost per session | $8.50 (members), $9.50 (non-members) | `src/pages/index.astro` |
| Annual membership | $40 | `src/pages/index.astro` |
| First session | Free | Multiple files |
| Club established | 1996 | `src/components/Footer.astro` |

**If you're unsure about any club detail, READ THE SOURCE FILE first. Do not guess or infer.**

## Brand Guidelines

- Primary brand color: `#DC2626` (red) — used for CTAs, accents
- Hero background: `bg-neutral-900`
- Body text: `text-neutral-700`
- Font: System sans-serif stack

## Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Key Directories

- `src/pages/` — Astro pages including guide pages for SEO
- `src/components/` — Reusable components (Hero, Footer, etc.)
- `src/layouts/` — Layout templates with structured data
- `public/` — Static assets, robots.txt, llms.txt

## SEO/GEO Notes

- Guide pages use "answer capsules" — 120-150 char direct answers after H2 headings for AI citation
- `llms.txt` exists for AI search engine optimization
- `robots.txt` allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
