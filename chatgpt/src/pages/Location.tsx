import { SEO } from "../components/SEO";
import { CTAButtons } from "../components/CTAButtons";
import { ContactSection } from "../components/ContactSection";
import { ENTRY, META, SITE } from "../config";

export function LocationPage() {
  const mapQuery = encodeURIComponent(SITE.locationLabel);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <>
      <SEO title="Location & Contact | PCYC Newcastle Broadmeadow Table Tennis" description={META.description} path="/location" />
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          <div className="card">
            <h1 style={{ marginTop: 0 }}>Location</h1>
            <p style={{ marginBottom: 8 }}>{SITE.locationLabel}</p>
            <p>Directions use public wording only. No street address published until approved.</p>
            <CTAButtons variant="primary" />
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Entry instructions</h3>
            <ul className="list">
              <li>{ENTRY.weekday}</li>
              <li>{ENTRY.weekend}</li>
              <li>{ENTRY.parking}</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Map</h3>
            <iframe
              title="PCYC Newcastle map"
              src={mapSrc}
              style={{ width: "100%", minHeight: 260, border: 0, borderRadius: 12 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p style={{ color: "#475569", marginTop: 8 }}>Use the query above until street address approval.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
