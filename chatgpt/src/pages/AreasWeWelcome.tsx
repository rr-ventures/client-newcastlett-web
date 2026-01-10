import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { CTAButtons } from "../components/CTAButtons";
import { track } from "../analytics";

const AREAS = [
  {
    name: "Newcastle & Surrounds",
    icon: "🏙️",
    description: "Our home! Just minutes from Newcastle CBD, Mayfield, Hamilton, Merewether, and surrounding suburbs. Easy access with plenty of on-site parking at PCYC Broadmeadow.",
  },
  {
    name: "Lake Macquarie",
    icon: "🌳",
    description: "Players from Charlestown, Belmont, Warners Bay, Toronto, and other Lake Macquarie suburbs regularly make the short trip to join our sessions.",
  },
  {
    name: "Maitland & Lower Hunter",
    icon: "🏘️",
    description: "Whether you're in Maitland, Cessnock, Kurri Kurri, or nearby areas — we're an easy drive down the expressway. A great option for table tennis in the lower Hunter.",
  },
  {
    name: "Hunter Valley",
    icon: "🍇",
    description: "From Singleton to Muswellbrook and the wine country in between — if you're looking for organised table tennis in the Hunter Valley, we'd love to have you.",
  },
];

const DRIVE_TIMES = [
  { location: "Newcastle CBD", time: "~10 minutes" },
  { location: "Charlestown", time: "~15 minutes" },
  { location: "Maitland", time: "~25 minutes" },
  { location: "Cessnock", time: "~40 minutes" },
  { location: "Singleton", time: "~50 minutes" },
];

const WHY_CHOOSE = [
  "Established club since 1996 — Nearly 30 years of bringing the Hunter region together through table tennis",
  "Three weekly sessions — Monday evenings, Wednesday evenings, and Saturday afternoons give you flexibility",
  "All skill levels welcome — From complete beginners to competitive players, everyone fits in",
  "Indoor venue — Play year-round regardless of weather at PCYC Newcastle's climate-controlled facility",
  "No booking required — Just show up during session times",
  "Equipment provided — No need to buy a racket before you try",
  "Affiliated with Table Tennis NSW — Compete in sanctioned events and earn ratings",
];

export function AreasWeWelcomePage() {
  return (
    <>
      <SEO
        title="Table Tennis for Newcastle, Maitland, Lake Macquarie & Hunter Valley | NPTTC"
        description="Newcastle PCYC Table Tennis Club welcomes players from across the Hunter region — Newcastle, Maitland, Lake Macquarie, and Hunter Valley. Friendly club, first session free."
        path="/areas-we-welcome"
      />

      {/* Hero */}
      <section className="hero" style={{ background: "#0f172a", color: "#e2e8f0", padding: "3rem 1rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "0.5rem" }}>Welcoming Players from Across the Hunter</h1>
          <p style={{ maxWidth: 600, margin: "0 auto", color: "#94a3b8" }}>
            Newcastle PCYC Table Tennis Club is proud to serve the broader Hunter region
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Where Our Players Come From</h2>
          <p style={{ textAlign: "center", color: "#475569", marginBottom: "2rem" }}>
            While we're based at PCYC Newcastle in Broadmeadow, our members travel from across the Hunter region to play with us.
          </p>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {AREAS.map((area) => (
              <div key={area.name} className="card">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{area.icon}</div>
                <h3 style={{ marginTop: 0 }}>{area.name}</h3>
                <p style={{ color: "#475569", marginBottom: 0 }}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Why Players Choose Us</h2>
          <div className="card">
            <ul className="list">
              {WHY_CHOOSE.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Getting Here</h2>
          <p style={{ textAlign: "center", color: "#475569", marginBottom: "1.5rem" }}>
            We're centrally located at PCYC Newcastle in Broadmeadow
          </p>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            <div className="card">
              <h4 style={{ marginTop: 0 }}>📍 Our Location</h4>
              <p><strong>PCYC Newcastle</strong><br />Broadmeadow, NSW</p>
              <p style={{ marginBottom: 0, color: "#475569" }}>
                Free on-site parking available. Easy access from the expressway and major roads.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0 }}>⏱️ Approximate Drive Times</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {DRIVE_TIMES.map((dt) => (
                  <li key={dt.location} style={{ padding: "0.35rem 0" }}>
                    {dt.location}: {dt.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link
              to="/location"
              className="button primary"
              onClick={() => track("directions_click")}
              data-track="directions_click"
            >
              Get Directions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "#0f172a", color: "#e2e8f0", padding: "3rem 1rem", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ marginBottom: "0.5rem" }}>Ready to Give It a Try?</h2>
          <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
            Your first session is free — no booking required, just show up!
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <CTAButtons variant="primary" />
            <Link to="/what-to-expect" className="button ghost">
              What to Expect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
