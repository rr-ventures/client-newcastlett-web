# Design System: Newcastle PCYC Table Tennis Club

## Philosophy
**Mature, Credible, Welcoming.**
The design should feel like an established sports club, not a startup or a casual meetup. We lean on neutral tones, disciplined whitespace, and a single strong accent color.

## 1. Color System
Avoid "toy" colors. Use a sophisticated palette.

*   **Primary (Brand):** `Navy Blue`
    *   `primary-900`: `#0f172a` (slate-900) - Text, Footer, Dark Backgrounds
    *   `primary-800`: `#1e293b` (slate-800) - Secondary Backgrounds
    *   `primary-600`: `#2563eb` (blue-600) - **Primary Action** (Buttons, Links)
    *   `primary-500`: `#3b82f6` (blue-500) - Focus rings, borders
*   **Secondary (Accent):** `Subtle Gold/Yellow` (Use sparingly for "New" or "Free" badges, but muted)
    *   `accent-500`: `#eab308` (yellow-500) - Badges (Text usually dark on this)
*   **Neutrals:**
    *   `neutral-50`: `#f8fafc` (slate-50) - Page Backgrounds
    *   `neutral-100`: `#f1f5f9` (slate-100) - Card Backgrounds / Hovers
    *   `neutral-200`: `#e2e8f0` (slate-200) - Borders
    *   `neutral-500`: `#64748b` (slate-500) - Body Text (Secondary)
    *   `neutral-900`: `#0f172a` (slate-900) - Headings

## 2. Typography
**Font Family:** Inter or system sans-serif (clean, readable, standard).
**Weights:**
*   `Regular (400)`: Body text
*   `Medium (500)`: Buttons, Navigation, Sublabels
*   `Bold (700)`: Headings

**Scale:**
*   `H1`: `text-4xl sm:text-5xl font-bold tracking-tight text-slate-900`
*   `H2`: `text-3xl font-bold text-slate-900`
*   `H3`: `text-xl font-bold text-slate-900`
*   `Body`: `text-base text-slate-600 leading-relaxed`
*   `Small`: `text-sm text-slate-500`

## 3. Components

### Buttons
*   **Primary:**
    *   `bg-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`
*   **Secondary (Outline):**
    *   `bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 font-medium py-3 px-6 rounded-lg transition-all`
*   **Ghost (Links):**
    *   `text-blue-600 hover:text-blue-800 font-medium hover:underline decoration-2 underline-offset-2`

### Cards
*   `bg-white rounded-xl shadow-sm border border-slate-100 p-6`
*   Hover effect (interactive only): `hover:shadow-md transition-shadow`

### Badges / Chips
*   **NO EMOJIS**
*   `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800` (Information)
*   `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800` (Attention/Free)

### Sections / Spacing
*   **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
*   **Vertical Padding:** `py-16` or `py-24` (Generous spacing defines maturity)
*   **Grid Gaps:** `gap-8` (Standard) or `gap-12` (Loose)

## 4. Iconography
*   Use purely decorative SVG icons (Heroicons or similar).
*   Color: `text-blue-600` (Primary) or `text-slate-400` (Neutral).
*   Size: `w-6 h-6` (Standard) or `w-12 h-12` (Feature).

## 5. Trust Cues
*   Place logos of PCYC / TTNSW in grayscale opacity-50, hover to full color or opacity-100.
