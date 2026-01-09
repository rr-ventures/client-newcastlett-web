# SEO Documentation

## Page Titles & Meta Descriptions

| Page | Title | Meta Description |
|------|-------|------------------|
| Home | Table Tennis Newcastle \| PCYC Broadmeadow \| NPTTC | Play table tennis in Newcastle. Casual play, coaching & competitions at PCYC Broadmeadow. First session free. All skill levels welcome. |
| Timetable | Timetable \| Newcastle Table Tennis Club | See when we play — Monday, Wednesday & Saturday sessions at PCYC Broadmeadow. No booking required. |
| What to Expect | Your First Visit \| Newcastle Table Tennis Club | New to table tennis? Here's everything you need to know for your first visit. Equipment provided, all levels welcome. |
| Pricing | Pricing \| Newcastle Table Tennis Club | First session free. Casual visits $9, annual membership $40. Coaching available. |
| Location | Find Us \| Newcastle Table Tennis Club | PCYC Newcastle, Broadmeadow NSW. Directions, entry instructions, and contact form. |
| About | About \| Newcastle PCYC Table Tennis Club | Newcastle's table tennis club since 1996. Affiliated with Table Tennis NSW. |
| Competitions | Competitions \| Newcastle Table Tennis Club | Upcoming table tennis competitions and results at PCYC Newcastle. |

## Schema.org Structured Data

The homepage includes SportsActivityLocation schema:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Newcastle PCYC Table Tennis Club",
  "description": "Table tennis club at PCYC Newcastle offering casual play, coaching, and competitions.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Broadmeadow",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "email": "enquiries@npttc.com.au",
  "url": "https://npttc.com.au",
  "sameAs": [
    "https://www.facebook.com/groups/742238756140959"
  ],
  "sport": "Table Tennis",
  "openingHoursSpecification": [
    { "dayOfWeek": "Monday", "opens": "18:30", "closes": "22:00" },
    { "dayOfWeek": "Wednesday", "opens": "18:30", "closes": "22:00" },
    { "dayOfWeek": "Saturday", "opens": "14:30", "closes": "18:00" }
  ]
}
```

## Internal Linking Structure

```
Home
├── → Timetable (primary CTA)
├── → What to Expect (fear reduction)
├── → Location (directions)
├── → Pricing (via preview)
└── → Competitions (footer)

Timetable
├── → What to Expect
├── → Location
└── → Home

What to Expect
├── → Timetable
├── → Location
└── → Pricing

Pricing
├── → Timetable
├── → Location (contact for coaching)
└── → What to Expect

Location
├── → Timetable
├── → What to Expect
└── → Home

About
├── → Timetable
├── → Competitions
└── → Location

Competitions
├── → Location (contact)
├── → Timetable
└── → About
```

## Setup Checklist

- [ ] Register domain: npttc.com.au
- [ ] Set up Google Analytics 4
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Verify NAP consistency across all platforms
