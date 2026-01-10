# UI Audit: Newcastle PCYC Table Tennis Club

## Executive Summary
The current site design undermines the credibility of the club. While the information is generally correct, the presentation feels amateur, "novice," and overly playful. This creates a disconnect: the club has been running since 1996 and has "competitive" offerings, but the site signals "casual backyard play" or "kids' birthday party."

**Top reasons the site feels amateur:**
1.  **Overuse of Emojis:** Emojis are used as primary icons, cheapening the aesthetic.
2.  **Inconsistent Typography:** Headings lack authority; font weights and sizes are inconsistent.
3.  **Toy-like Color Palette:** High-saturation greens and blues are used without restraint.
4.  **Weak Visual Hierarchy:** The "First Session Free" CTA often gets lost or looks like a banner ad rather than a core offering.
5.  **Card/Container Design:** Cards lack disciplined padding and consistent shadow usage.
6.  **Navigation:** Mobile menu feels generic; desktop menu lacks a strong "active" state or clear hierarchy.
7.  **Footer:** Generic layout with weak "trust signals."
8.  **Lack of Brand Identity:** No strong logo presence or cohesive design language (shapes, patterns).

## No More Emoji UI
Emojis are currently used as a crutch for actual iconography or meaningful content. This must stop to achieve a "club-grade" look.

| Location | Current Emoji | Why it fails | Replacement |
| :--- | :--- | :--- | :--- |
| **Hero Badge** | 🎉 Come & try | Looks like a spam promo | `bg-blue-900` text-white badge: "First Session Free" |
| **Feature Cards** | 🏓 Equipment | Looks childish/lazy | Phosphor/Lucide icon (e.g., `Racket`, `TShirt`, `Smiley`) or no icon |
| **Benefits** | 👋 All Levels | "Wave" emoji is too casual | Text-only heading or professional community icon |
| **Trust Signals** | 🏛️, 🏆, 📊 | Reads like a list of text messages | Grayscale/Monochrome logos of PCYC, TTNSW, Ratings Central |

## Section-by-Section Diagnosis & Fixes

### 1. Header / Navigation
*   **Current:** Standard Bootstrap-style navbar. "First Session Free" button is generic blue.
*   **Why Amateur:** Spacing is tight; hover states are basic browser defaults. Mobile menu is a generic dropdown.
*   **Fix:**
    *   Increase navbar height.
    *   Use a stronger font weight for the logo/brand name.
    *   Make "First Session Free" a high-contrast primary button (e.g., dark navy or specific brand accent).
    *   Add active states (border-bottom or bold text) for current page.

### 2. Hero Section
*   **Current:**
    *   Variant A: "Table Tennis in Newcastle" (centered) with Green "Party" badge.
    *   Variant B: Image right, text left. Good layout, but typography is loose.
*   **Why Amateur:** The green badge with 🎉 looks cheap. The "Next Session" box overlaps clumsily in Variant A.
*   **Fix:**
    *   **Unified Hero:** Use a strong, left-aligned layout with a high-quality hero image (darkened with overlay for text contrast).
    *   **Typography:** H1 should be tight, bold, and authoritative. "Newcastle's Home of Table Tennis."
    *   **CTA:** Two distinct buttons: "Come for a Tryout" (Primary, Solid) and "View Timetable" (Secondary, Outline).

### 3. Cards & Feature Blocks ("New to Table Tennis?")
*   **Current:** White cards on gray background with centered emojis (🏓, 👋, 😊).
*   **Why Amateur:** Emojis as headers. Centered text often harder to read for lists.
*   **Fix:**
    *   **Grid Layout:** Keep the 3-4 column grid.
    *   **Styling:** Remove emojis. Use bold H3s. Left-align text for better readability.
    *   **Icons:** Use a consistent icon set (e.g., Heroicons, Phosphor) in a subtle accent color, or just use strong typography.

### 4. Timetable / Schedule
*   **Current:**
    *   Variant A: "Weekly Schedule" cards.
    *   Variant B: (Not fully visible in snippet, but likely similar).
*   **Why Amateur:** Cards are bulky. "TBA" for Sunday looks unfinished.
*   **Fix:**
    *   **Table/List View:** A clean, striped list or compact table is more professional for schedules than big blocky cards.
    *   **Highlight:** Distinctly highlight "Next Session" or "Tonight" if applicable.
    *   **Sunday:** If no session, don't show an "empty" card; just list the active days.

### 5. Footer
*   **Current:** Dark background, 4 columns.
*   **Why Amateur:** Text hierarchy is weak (headers barely distinct from links). Copyright section is cluttered.
*   **Fix:**
    *   **Trust:** Add the "Affiliated with PCYC" statement prominently.
    *   **Hierarchy:** Make "Quick Links" uppercase/tracking-wide.
    *   **Contact:** Ensure email is clearly clickable and address is easy to find.

## Next Steps
Proceed to create `/docs/design-system.md` to codify these decisions into reusable tokens (colors, type scale, spacing).
