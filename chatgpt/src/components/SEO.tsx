import { useEffect } from "react";
import { SITE, TIMETABLE } from "../config";

type Props = {
  title: string;
  description: string;
  path?: string;
};

export function SEO({ title, description, path = "/" }: Props) {
  useEffect(() => {
    document.title = title;

    const metaDesc = ensureTag("meta[name='description']", "meta");
    metaDesc?.setAttribute("name", "description");
    metaDesc?.setAttribute("content", description);

    const canonicalUrl = SITE.siteUrl && SITE.siteUrl !== "[TBD]" ? new URL(path, SITE.siteUrl).toString() : "";
    if (canonicalUrl) {
      const canonical = ensureTag("link[rel='canonical']", "link");
      canonical?.setAttribute("rel", "canonical");
      canonical?.setAttribute("href", canonicalUrl);
    }

    const ld = buildSchema(description, canonicalUrl);
    const ldScript = ensureTag("script[data-schema='local']", "script");
    if (ldScript) {
      ldScript.type = "application/ld+json";
      ldScript.setAttribute("data-schema", "local");
      ldScript.textContent = JSON.stringify(ld);
    }
  }, [title, description, path]);

  return null;
}

function ensureTag(selector: string, tagName: string) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tagName);
    document.head.appendChild(el);
  }
  return el as HTMLElement;
}

function buildSchema(description: string, canonical: string) {
  const hours = TIMETABLE.filter((t) => !t.isTba).map((session) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: session.day,
    opens: `${session.start}:00`,
    closes: `${session.end}:00`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: SITE.name,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Broadmeadow",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    foundingDate: "1996",
    areaServed: [
      { "@type": "City", name: "Newcastle" },
      { "@type": "City", name: "Maitland" },
      { "@type": "AdministrativeArea", name: "Hunter Valley" },
      { "@type": "AdministrativeArea", name: "Lake Macquarie" },
    ],
    email: SITE.email,
    sameAs: [SITE.facebook],
    url: canonical || SITE.siteUrl || "",
    sport: "Table Tennis",
    openingHoursSpecification: hours,
  };
}
