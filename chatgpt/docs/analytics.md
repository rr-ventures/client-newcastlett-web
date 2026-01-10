# Analytics & Tracking Documentation (ChatGPT Version)

## Overview

The ChatGPT version uses React with a centralized analytics module (`src/analytics.ts`) that integrates with Google Analytics 4.

## Setup Requirements

1. Set `VITE_GA_MEASUREMENT_ID` environment variable with your GA4 ID
2. Update `index.html` or add GTM container

## Tracked Events

The `track()` function in `src/analytics.ts` supports these events:

| Event Name | Description | Usage Location |
|------------|-------------|----------------|
| `directions_click` | User clicks directions/map | Location page CTAs |
| `timetable_view` | User views timetable | Timetable page load |
| `email_click` | User clicks email link | Footer, contact sections |
| `form_submit` | Contact form submission | ContactSection component |
| `facebook_click` | Facebook link click | Footer, CTAs |

## Implementation

### Using the track function

```tsx
import { track } from "../analytics";

// In component
<a 
  href="mailto:enquiries@npttc.com.au" 
  onClick={() => track("email_click")}
>
  Email Us
</a>

// With parameters
<button onClick={() => track("form_submit", { form_location: "contact_page" })}>
  Submit
</button>
```

### Current Tracking Locations

- `Layout.tsx` - Footer email and Facebook links
- `CTAButtons.tsx` - Primary and secondary CTAs
- `ContactSection.tsx` - Form submission

## Key Metrics

### Primary Conversions
- `timetable_view` - Intent to show up
- `directions_click` - Ready to visit
- `form_submit` - Contact conversion

### Secondary
- `email_click` - Alternative contact
- `facebook_click` - Social proof engagement

## React SPA Considerations

Since this is a single-page application:

1. **Page views**: Configure GA4 to track route changes, or use `react-router`'s `useLocation` hook to fire page_view events on navigation.

2. **Virtual page views**: Add this to your router setup:

```tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: location.pathname,
      });
    }
  }, [location]);
  
  // ...
}
```

## GTM Alternative

If using GTM instead of inline GA4:

1. Create triggers for each event name
2. Use Data Layer variables to capture parameters
3. Fire GA4 Event tags

## Testing

1. Check browser console for track() calls in development
2. Use GA4 DebugView with preview mode
3. Verify page_path is captured on route changes
4. Test form submission tracking

## Notes

- The `track()` function is a no-op if `gtag` is not defined
- Events fire immediately on click/action
- No PII is collected beyond what's submitted via forms
