# Analytics & Tracking Documentation

## Overview

The Claude version of the NPTTC website uses Google Analytics 4 (GA4) with custom event tracking to measure user engagement and conversion actions.

## Setup Requirements

1. Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID in all HTML files
2. Set up a corresponding GTM container if using Google Tag Manager

## Tracked Events

### Core Conversion Events

| Event Name | Description | Trigger | Data Attributes |
|------------|-------------|---------|-----------------|
| `timetable_view` | User views the timetable section | Scroll into view (50% threshold) | `data-track="timetable_view"` |
| `directions_click` | User clicks directions/map link | Click | `data-track="directions_click"` |
| `email_click` | User clicks email link | Click | `data-track="email_click"` |
| `form_submit` | User submits contact form | Form submission | `data-track="form_submit"` |
| `cta_click` | User clicks any CTA button | Click | `data-track="cta_click"` |
| `facebook_click` | User clicks Facebook group link | Click | `data-track="facebook_click"` |
| `competition_view` | User views competitions page | Page load | N/A (use page view) |

### Event Parameters

Events support additional parameters via `data-track-params` attribute (JSON format):

```html
<a href="#timetable" 
   data-track="cta_click" 
   data-track-params='{"cta_location": "hero", "cta_text": "See When We Play"}'>
  See When We Play ↓
</a>
```

### Standard Parameters Captured

- `cta_text`: Button/link text content
- `cta_location`: Where on the page (hero, footer, sidebar, etc.)
- `destination`: For direction clicks, the target location

## GTM Configuration

### Recommended Triggers

1. **Timetable View Trigger**
   - Type: Scroll Depth
   - Trigger on: 50% vertical scroll OR element visibility for `#timetable`

2. **CTA Click Trigger**
   - Type: Click - All Elements
   - Filter: `data-track` attribute contains "cta_click"

3. **Form Submit Trigger**
   - Type: Form Submission
   - Filter: Form ID = "contact-form"

4. **Email Click Trigger**
   - Type: Click - Just Links
   - Filter: Click URL starts with "mailto:"

5. **Directions Click Trigger**
   - Type: Click - Just Links
   - Filter: `data-track` = "directions_click"

### Recommended Tags

1. **GA4 Event Tag** for each trigger above
2. **Conversion Linker** for cross-domain tracking if needed

## Key Metrics to Monitor

### Primary Conversion Metrics

1. **Show-Up Intent Rate**: `(timetable_view + directions_click) / sessions`
2. **Contact Rate**: `(email_click + form_submit) / sessions`
3. **Timetable Engagement**: `timetable_view / sessions`

### Funnel Analysis

```
Homepage → Timetable View → Directions Click → (offline: Show up)
Homepage → What to Expect → Timetable → Directions
Homepage → Contact Form Submit
```

### Suggested Goals

1. **Primary Goal**: Timetable + Directions (combined)
2. **Secondary Goal**: Contact Form Submission
3. **Micro-conversion**: "What to Expect" page view (beginner interest)

## CSS Selectors for GTM

Use these selectors if preferred over data attributes:

```css
/* Primary CTAs */
.btn-primary[href*="timetable"]
.btn-primary[href*="location"]

/* Contact form */
#contact-form
#contact-form button[type="submit"]

/* Email links */
a[href^="mailto:enquiries@npttc.com.au"]

/* Map/directions */
a[href*="google.com/maps"]
iframe[title*="Map"]

/* Facebook */
a[href*="facebook.com/groups"]
```

## Implementation Notes

1. All tracking is implemented via `data-track` attributes in HTML
2. The `/js/main.js` file handles event dispatch to `gtag()`
3. Events are logged to console in development for debugging
4. No PII is collected beyond form submission data

## Testing Checklist

- [ ] GA4 Measurement ID replaced in all pages
- [ ] Test timetable_view fires on scroll
- [ ] Test directions_click fires on map/direction links
- [ ] Test email_click fires on mailto links
- [ ] Test form_submit fires on contact form
- [ ] Test cta_click fires on all CTA buttons
- [ ] Verify events appear in GA4 DebugView
- [ ] Check conversion goals are recording
