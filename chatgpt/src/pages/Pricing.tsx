import { SEO } from "../components/SEO";
import { CTAButtons } from "../components/CTAButtons";
import { OFFER, META } from "../config";

export function PricingPage() {
  return (
    <>
      <SEO title="Pricing | Newcastle PCYC Table Tennis Club" description={META.description} path="/pricing" />
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div className="card">
            <h1 style={{ marginTop: 0 }}>Pricing</h1>
            <ul className="list">
              <li>Come & try — first session free</li>
              <li>{OFFER.visitPrice}</li>
              <li>{OFFER.membership} (PCYC annual)</li>
              <li>{OFFER.coaching}</li>
              <li>{OFFER.payments}</li>
            </ul>
            <div style={{ marginTop: 12 }}>
              <CTAButtons variant="primary" />
              <div style={{ height: 8 }} />
              <CTAButtons variant="secondary" />
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Why membership?</h3>
            <p>
              PCYC membership keeps insurance current and supports the venue. Per-visit fees cover hall hire, tables, and equipment upkeep.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
