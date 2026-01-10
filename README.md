# Newcastle PCYC Table Tennis Club (NPTTC) Website v1

Website for the Newcastle PCYC Table Tennis Club. Built to drive physical attendance and community trust.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Deployment:** Ready for Railway (Static Output or Docker)

## 🛠️ Project Structure

- `src/pages/`: Route components (Home, Timetable, Competitions, Location).
- `src/components/`: Reusable UI (Navigation, Footer, Home Variants).
- `src/config.ts`: Feature flags (Homepage A/B testing).
- `public/`: Static assets.

## 🏃‍♂️ Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🧪 Feature Flags

This project supports A/B testing for the homepage design.
Modify `src/config.ts` to switch variants:

```typescript
export const FEATURE_FLAGS = {
  USE_EMOTION_HOMEPAGE: false, // Set 'true' for Variant B (Emotion), 'false' for Variant A (Utility)
};
```

## 📊 Data Sources

- **Competitions:** Fetched client-side from a Google Sheet CSV (Configured in `src/pages/competitions.astro`).
- **Timetable:** Hardcoded in `src/pages/timetable.astro`.

## 📦 Deployment

This project is configured for static hosting.
For Railway:
1. Connect GitHub repo.
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
