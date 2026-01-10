# Newcastle PCYC Table Tennis Club Website

Website for the Newcastle PCYC Table Tennis Club located at PCYC Broadmeadow, NSW.

## Quick Start

This is a static HTML/CSS/JS website. To run locally:

1. **Using VS Code Live Server:**
   - Install the "Live Server" extension in VS Code
   - Open the project folder
   - Right-click on `index.html` and select "Open with Live Server"

2. **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then open http://localhost:8000

3. **Using Node.js (npx):**
   ```bash
   npx serve
   ```

## Project Structure

```
claude/
├── index.html              # Homepage (Variant A: Logistics-Led)
├── index-variant-b.html    # Homepage (Variant B: Beginner-Confidence-Led)
├── timetable.html          # Timetable page
├── what-to-expect.html     # First-timer guide
├── pricing.html            # Pricing information
├── location.html           # Location & Contact page
├── about.html              # About the club
├── competitions.html       # Competitions page
├── css/
│   └── main.css            # Main stylesheet
├── js/
│   └── main.js             # JavaScript (mobile menu, next session, form handling)
├── public/
│   ├── images/             # Image assets (placeholders)
│   ├── robots.txt          # Search engine directives
│   └── sitemap.xml         # XML sitemap
├── data/
│   └── competitions.csv    # Fallback competition data
└── docs/                   # Documentation (if needed)
```

## Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home (Variant A) | `/` | Logistics-led layout for experienced visitors |
| Home (Variant B) | `/index-variant-b.html` | Beginner-confidence-led layout |
| Timetable | `/timetable.html` | Session schedule |
| What to Expect | `/what-to-expect.html` | First-timer guide |
| Pricing | `/pricing.html` | Full pricing details |
| Location & Contact | `/location.html` | Directions, entry instructions, contact form |
| About | `/about.html` | Club history and committee |
| Competitions | `/competitions.html` | Competition schedule |

## Configuration

### Google Analytics

Replace `G-XXXXXXXXXX` in all HTML files with your actual GA4 Measurement ID.

### Contact Form

The contact form uses Formspree. Replace `YOUR_FORM_ID` in:
- `location.html`
- `js/main.js`

To set up:
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID (e.g., `xabc1234`)
4. Replace `YOUR_FORM_ID` with your form ID

### Competition Data (Google Sheets)

To enable dynamic competition loading from Google Sheets:

1. Create a Google Sheet with these columns:
   - comp_name, date, start_time, venue, divisions, registration_info, registration_link, status, results_summary, results_link

2. Publish the sheet:
   - File → Share → Publish to web → CSV format

3. Copy the published URL and update `COMPETITIONS_SHEET_URL` in `js/main.js`

## Deployment (Railway)

1. Push this folder to a GitHub repository
2. Connect the repository to Railway
3. Railway will automatically detect and serve the static files

### Custom Domain

1. In Railway, go to Settings → Domains
2. Add custom domain: `npttc.com.au`
3. Update your DNS records as instructed

## Image Placeholders

Replace the placeholder images in `public/images/` with actual photos:

| Filename | Description |
|----------|-------------|
| hero-action-shot.jpg | Players mid-rally (homepage hero) |
| hero-welcoming.jpg | Smiling players (variant B hero) |
| venue-exterior.jpg | PCYC building exterior |
| venue-interior.jpg | Tables set up inside |
| group-photo.jpg | Club members |
| beginner-welcome.jpg | Someone being shown how to play |
| entry-weekday.jpg | Front entrance |
| entry-weekend.jpg | Side gate entrance |
| member-portrait-1.jpg | Member for testimonial |

**Image specs:**
- Format: JPG (photos), PNG (logos)
- Max size: 1920x1080px
- Target file size: <200KB
- Use descriptive alt text

## SEO Checklist

- [x] Title tags on all pages
- [x] Meta descriptions on all pages
- [x] Schema.org structured data (SportsActivityLocation)
- [x] robots.txt
- [x] sitemap.xml
- [x] Semantic HTML headings
- [x] Alt text on images (add when photos available)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain in Google Search Console

## Browser Support

Tested and works in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Accessibility

- Skip link for keyboard navigation
- Semantic HTML structure
- ARIA labels on interactive elements
- Minimum 44x44px touch targets
- Color contrast meets WCAG 2.1 AA
- Focus states on all interactive elements

## Performance

- Minimal JavaScript (vanilla JS, no frameworks)
- CSS loaded from single stylesheet
- Google Fonts with `display=swap`
- Lazy loading on below-fold images
- Target: Lighthouse Performance >90

## Contact

- **Email:** enquiries@npttc.com.au
- **Facebook:** https://www.facebook.com/groups/742238756140959

## License

© 2026 Newcastle PCYC Table Tennis Club. All rights reserved.
