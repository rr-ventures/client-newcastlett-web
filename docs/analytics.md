# Analytics & Tracking Documentation (Gemini Version)

## Overview

The Gemini version uses Google Analytics 4 (GA4) for tracking. Event tracking can be implemented via GTM or inline scripts.

## Setup Requirements

1. Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID in `Layout.astro`
2. Configure GTM container for custom event tracking

## Recommended Events to Track

| Event Name | Description | Selector/Trigger |
|------------|-------------|------------------|
| `timetable_view` | User views timetable page | Page path = /timetable |
| `directions_click` | User clicks map/directions | `a[href*="google.com/maps"]` |
| `email_click` | User clicks email link | `a[href^="mailto:"]` |
| `form_submit` | Contact form submission | Form on /location page |
| `pricing_view` | User views pricing page | Page path = /pricing |
| `competition_view` | User views competitions | Page path = /competitions |
| `cta_click` | CTA button clicks | `.bg-blue-600` buttons |
| `facebook_click` | Facebook link clicks | `a[href*="facebook.com"]` |

## GTM Implementation

### Triggers

1. **Page View - Timetable**
   - Trigger Type: Page View
   - Fire on: Page path equals /timetable

2. **Click - Email Links**
   - Trigger Type: Click - Just Links
   - Fire on: Click URL starts with "mailto:"

3. **Click - Directions**
   - Trigger Type: Click - Just Links
   - Fire on: Click URL contains "google.com/maps"

4. **Form Submit - Contact**
   - Trigger Type: Form Submission
   - Fire on: Page path equals /location

### Tags

Create GA4 Event tags for each trigger above.

## Key Metrics

### Primary Conversions
- Timetable page views
- Directions/map clicks
- Contact form submissions

### Secondary Conversions
- Pricing page views
- What to Expect page views
- Email link clicks

## Data Attributes (Optional Enhancement)

Add data attributes to key elements for more precise tracking:

```html
<a href="/timetable" data-track="timetable_view">View Timetable</a>
<a href="mailto:..." data-track="email_click">Email Us</a>
<button type="submit" data-track="form_submit">Send</button>
```

## Testing

1. Use GA4 DebugView to verify events
2. Check real-time reports for page views
3. Verify form submissions are captured
4. Test on mobile devices

## Notes

- Astro generates static HTML, so all tracking is client-side
- Consider adding a cookie consent banner before production launch
- Form uses Formspree - ensure the placeholder ID is replaced
