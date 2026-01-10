import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ENTRY, META } from "../config";
import { SEO } from "../components/SEO";
import { CTAButtons } from "../components/CTAButtons";
import { NextSession } from "../components/NextSession";
import { TimetablePreview } from "../components/TimetablePreview";
import { FearKillerBlock } from "../components/FearKillerBlock";
import { PricingPreview } from "../components/PricingPreview";
import { TrustProof } from "../components/TrustProof";
import { PhotoStrip } from "../components/PhotoStrip";

export function HomePage() {
  const [params] = useSearchParams();
  const variant = params.get("variant") === "confidence" ? "B" : "A";
  const isVariantB = variant === "B";

  const aboveFold = useMemo(() => {
    const headline = isVariantB ? "New to table tennis? You’ll fit in." : "Table Tennis at PCYC Newcastle (Broadmeadow)";
    const subhead = isVariantB
      ? "Beginner-friendly, social games, and a welcoming club. First session free — just show up."
      : "Friendly sessions, beginner-welcoming, no booking needed. First session free — just show up.";

    return (
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div className="card hero__card">
              <div className="tag">Come & try — first session free</div>
              <h1>{headline}</h1>
              <p className="hero__subhead">{subhead}</p>

              <div className="hero__actions">
                <Link to="/timetable" className="button primary">
                  See session times
                </Link>
                <Link to="/location" className="button ghost">
                  Get directions
                </Link>
              </div>

              <div className="hero__trust" aria-label="Quick info">
                <span className="tag">No booking</span>
                <span className="tag">Equipment provided</span>
                <span className="tag">Sports shoes required</span>
              </div>

              <div style={{ marginTop: 16, display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                <NextSession />
                <TimetablePreview />
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <CTAButtons variant="primary" />
              </div>
            </div>

            <div className="hero__image" aria-label="Club photo">
              <img src="/images/hero.jpg" alt="Players enjoying table tennis at PCYC Newcastle Broadmeadow" loading="eager" />
            </div>
          </div>
        </div>
      </section>
    );
  }, [isVariantB]);

  return (
    <>
      <SEO title="Table Tennis in Newcastle (Broadmeadow) | Newcastle PCYC Table Tennis Club" description={META.description} />
      {aboveFold}
      {isVariantB ? <BelowFoldB /> : <BelowFoldA />}
    </>
  );
}

function BelowFoldA() {
  return (
    <>
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>How to arrive</h3>
            <p>{ENTRY.weekday}</p>
            <p>{ENTRY.weekend}</p>
            <p>{ENTRY.parking}</p>
            <div className="pill-row" style={{ marginTop: 10 }}>
              <Link to="/location" className="button ghost">
                Get Directions
              </Link>
              <Link to="/timetable" className="button ghost">
                View Timetable
              </Link>
            </div>
          </div>
          <PricingPreview compact />
          <FearKillerBlock />
          <TrustProof />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PhotoStrip limit={4} />
        </div>
      </section>
    </>
  );
}

function BelowFoldB() {
  return (
    <>
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <FearKillerBlock />
          <WhatToExpectPreview />
          <PricingPreview compact />
        </div>
      </section>
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <TrustProof />
          <PhotoStrip limit={4} />
        </div>
      </section>
    </>
  );
}

function FearHighlights() {
  const items = [
    "You don’t need to be good to start.",
    "No equipment required — rackets available.",
    "Wear sports shoes; casual clothes are fine.",
  ];
  return (
    <div className="pill-row">
      {items.map((i) => (
        <div key={i} className="tag">
          {i}
        </div>
      ))}
    </div>
  );
}

function WhatToExpectPreview() {
  const steps = [
    "Arrive and say hi — we’ll show you the area.",
    "Grab a racket. Shoes required; casual clothing is fine.",
    "Jump into friendly games. No booking needed.",
  ];
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>What to expect on your first visit</h3>
      <ul className="list">
        {steps.map((s, i) => (
          <li key={s}>
            <span className="badge">Step {i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div className="pill-row" style={{ marginTop: 10 }}>
        <Link to="/what-to-expect" className="button ghost">
          More details
        </Link>
        <Link to="/location" className="button ghost">
          Get Directions
        </Link>
      </div>
    </div>
  );
}
