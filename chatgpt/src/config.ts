export const SITE = {
  name: "Newcastle PCYC Table Tennis Club",
  locationLabel: "PCYC Newcastle, Broadmeadow NSW",
  email: "enquiries@npttc.com.au",
  facebook: "https://www.facebook.com/groups/742238756140959",
  siteUrl: import.meta.env.VITE_SITE_URL || "[TBD]",
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
  competitionsCsvUrl: import.meta.env.VITE_COMPETITIONS_CSV_URL || "",
};

export type Session = {
  day: string;
  start: string; // HH:mm (local)
  end?: string; // HH:mm
  label?: string;
  isTba?: boolean;
  note?: string;
};

export const TIMETABLE: Session[] = [
  { day: "Monday", start: "18:30", end: "22:00" },
  { day: "Wednesday", start: "18:30", end: "22:00" },
  { day: "Saturday", start: "14:30", end: "18:00" },
  { day: "Sunday", start: "00:00", end: "00:00", isTba: true, note: "Email us for updates" },
];

export const CTA = {
  primary: [
    { label: "View Timetable", to: "/timetable", event: "timetable_view" },
    { label: "Get Directions", to: "/location", event: "directions_click" },
  ],
  secondary: [
    { label: "Email Us", href: `mailto:${SITE.email}`, event: "email_click" },
    { label: "Ask a Question", to: "/location#contact", event: "form_submit" },
  ],
  facebook: { label: "Join Facebook Group", href: SITE.facebook, event: "facebook_click" },
};

export const ENTRY = {
  weekday: "Weekdays: enter via PCYC front entrance.",
  weekend: "Weekends: enter via gate entry on right side of the building.",
  parking: "On-site parking available. Details [TBD].",
};

export const OFFER = {
  freeFirst: "Come & try — first session free.",
  visitPrice: "$9 per visit",
  membership: "$40 annual PCYC membership",
  coaching: "Coaching available — rates on request",
  payments: "Payments: Cash + Card/EFTPOS",
};

export const FEAR_KILLER_POINTS = [
  "You don’t need to be good to start.",
  "No equipment required — rackets available.",
  "Wear sports shoes; casual clothes are fine.",
  "Come along on any session — no booking needed.",
  "Bring a water bottle (and towel if you like).",
];

export const ARRIVAL_STEPS = [
  "Arrive at PCYC Newcastle, Broadmeadow NSW.",
  "Use the correct entrance (weekday/weekend).",
  "Say hi at the table tennis area — someone will point you in the right direction.",
];

export const PLACEHOLDER_IMAGES = [
  { file: "hero-players-01.webp", alt: "Players enjoying a social game at Newcastle PCYC Table Tennis Club", caption: "All levels welcome." },
  { file: "entry-doors-weekday.webp", alt: "PCYC front entrance (weekday entry)", caption: "Weekdays: front entrance" },
  { file: "entry-gate-weekend.webp", alt: "Gate entry on right side (weekend entry)", caption: "Weekends: right-side gate" },
  { file: "community-group-01.webp", alt: "Friendly group photo / casual social play", caption: "Come & try — first session free" },
  { file: "timetable-action-01.webp", alt: "People playing table tennis in the hall", caption: "Pick any session" },
  { file: "first-night-steps-01.webp", alt: "New player arriving / greeting members", caption: "You’ll be shown where to go" },
  { file: "coaching-01.webp", alt: "Coach helping a player", caption: "Coaching available — rates on request" },
  { file: "pcyc-exterior-01.webp", alt: "Outside PCYC Newcastle building", caption: "PCYC Newcastle, Broadmeadow NSW" },
  { file: "committee-placeholder-01.webp", alt: "Committee / volunteers headshot placeholder", caption: "Committee / volunteers" },
  { file: "comp-night-01.webp", alt: "Players in a competitive match", caption: "Competitions throughout the year" },
];

export const META = {
  description: "Newcastle PCYC Table Tennis Club — friendly sessions in Broadmeadow NSW.",
};

export const FAQS = [
  { question: "Do I need to book?", answer: "No booking needed — just show up during any listed session." },
  { question: "Do I need a racket?", answer: "No — we have rackets available to borrow." },
  { question: "What should I wear?", answer: "Wear sports shoes and comfortable clothing." },
  { question: "Is it OK to come alone?", answer: "Yes — friendly players will match you for games." },
];
