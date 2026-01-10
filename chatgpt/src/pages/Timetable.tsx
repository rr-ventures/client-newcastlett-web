import { useEffect } from "react";
import { SEO } from "../components/SEO";
import { NextSession } from "../components/NextSession";
import { TimetableTable } from "../components/TimetableTable";
import { CTAButtons } from "../components/CTAButtons";
import { FAQAccordion } from "../components/FAQAccordion";
import { FAQS, META } from "../config";
import { track } from "../analytics";

export function TimetablePage() {
  useEffect(() => {
    track("timetable_view", { page: "/timetable" });
  }, []);

  return (
    <>
      <SEO title="Timetable | Newcastle PCYC Table Tennis Club (PCYC Broadmeadow)" description={META.description} path="/timetable" />
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div className="card" style={{ background: "#e0f2fe" }}>
            <h1 style={{ marginTop: 0 }}>Timetable</h1>
            <p style={{ marginBottom: 12 }}>Pick any session — no booking needed. Sunday: Email us for updates.</p>
            <CTAButtons variant="primary" />
          </div>
          <NextSession />
          <div className="card">
            <div className="badge">What to bring</div>
            <ul className="list" style={{ marginTop: 8 }}>
              <li>Shoes required (sports shoes)</li>
              <li>Casual clothing or sportswear is fine</li>
              <li>No racket needed — we have spares</li>
              <li>Bring a water bottle (and towel if you like)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "1fr" }}>
          <TimetableTable />
        </div>
      </section>
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          <CTAButtons variant="primary" />
          <CTAButtons variant="secondary" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
