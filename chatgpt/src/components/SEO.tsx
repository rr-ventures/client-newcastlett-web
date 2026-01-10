import { useEffect } from "react";
import { SITE, TIMETABLE } from "../config";

type Props = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function SEO({ title, description, path = "/", image = "/images/group.jpg" }: Props) {
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

    // Open Graph / social
    const ogTitle = ensureTag("meta[property='og:title']", "meta");
    ogTitle?.setAttribute("property", "og:title");
    ogTitle?.setAttribute("content", title);
    const ogDesc = ensureTag("meta[property='og:description']", "meta");
    ogDesc?.setAttribute("property", "og:description");
    ogDesc?.setAttribute("content", description);
    const ogType = ensureTag("meta[property='og:type']", "meta");
    ogType?.setAttribute("property", "og:type");
    ogType?.setAttribute("content", "website");
    const ogUrl = ensureTag("meta[property='og:url']", "meta");
    ogUrl?.setAttribute("property", "og:url");
    ogUrl?.setAttribute("content", canonicalUrl || "");
    const ogImage = ensureTag("meta[property='og:image']", "meta");
    ogImage?.setAttribute("property", "og:image");
    const imageUrl = SITE.siteUrl && SITE.siteUrl !== "[TBD]" ? new URL(image, SITE.siteUrl).toString() : image;
    ogImage?.setAttribute("content", imageUrl);

    const twitterCard = ensureTag("meta[name='twitter:card']", "meta");
    twitterCard?.setAttribute("name", "twitter:card");
    twitterCard?.setAttribute("content", "summary_large_image");
    const twitterTitle = ensureTag("meta[name='twitter:title']", "meta");
    twitterTitle?.setAttribute("name", "twitter:title");
    twitterTitle?.setAttribute("content", title);
    const twitterDesc = ensureTag("meta[name='twitter:description']", "meta");
    twitterDesc?.setAttribute("name", "twitter:description");
    twitterDesc?.setAttribute("content", description);
    const twitterImage = ensureTag("meta[name='twitter:image']", "meta");
    twitterImage?.setAttribute("name", "twitter:image");
    twitterImage?.setAttribute("content", imageUrl);

    const ld = buildSchema(description, canonicalUrl);
    const ldScript = ensureTag("script[data-schema='local']", "script") as HTMLScriptElement;
    if (ldScript) {
      ldScript.type = "application/ld+json";
      ldScript.setAttribute("data-schema", "local");
      ldScript.textContent = JSON.stringify(ld);
    }
  }, [title, description, path, image]);

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
