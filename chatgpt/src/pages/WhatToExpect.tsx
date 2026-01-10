import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { WhatToExpectSteps } from "../components/WhatToExpectSteps";
import { FearKillerBlock } from "../components/FearKillerBlock";
import { CTAButtons } from "../components/CTAButtons";
import { META } from "../config";

export function WhatToExpectPage() {
  return (
    <>
      <SEO title="What to Expect | Beginner-Friendly Table Tennis in Newcastle" description={META.description} path="/what-to-expect" />
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div className="card">
            <h1 style={{ marginTop: 0 }}>What to expect</h1>
            <p>Beginner-friendly, returning players welcome, juniors welcome with supervision. No booking needed.</p>
            <CTAButtons variant="primary" />
          </div>
          <FearKillerBlock />
        </div>
      </section>
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          <WhatToExpectSteps />
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Who it’s for</h3>
            <ul className="list">
              <li>Beginners — friendly guidance</li>
              <li>Returning players — social and match play</li>
              <li>Juniors — welcome with a parent/guardian nearby</li>
              <li>Competitive pathways — talk to us about competitions</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Equipment & clothing</h3>
            <ul className="list">
              <li>Shoes required (sports shoes)</li>
              <li>Casual clothing or sportswear is fine</li>
              <li>No equipment needed — rackets available</li>
              <li>Bring a water bottle; towel optional</li>
            </ul>
            <div className="pill-row" style={{ marginTop: 10 }}>
              <Link to="/pricing" className="button ghost">
                Pricing
              </Link>
              <Link to="/timetable" className="button ghost">
                Timetable
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
