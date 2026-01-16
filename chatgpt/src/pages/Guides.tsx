import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

const GUIDES = [
  {
    slug: "indoor-activities-newcastle",
    title: "Indoor Activities in Newcastle: Table Tennis at PCYC Broadmeadow",
    excerpt: "Looking for something to do indoors in Newcastle? Discover why table tennis is a great option for all ages and fitness levels.",
  },
  {
    slug: "table-tennis-near-maitland",
    title: "Table Tennis Near Maitland: A Welcoming Club in Broadmeadow",
    excerpt: "Live in Maitland and want to play table tennis? Newcastle PCYC is just a short drive away.",
  },
];

export function GuidesPage() {
  return (
    <>
      <SEO
        title="Table Tennis Guides | Newcastle PCYC Table Tennis Club"
        description="Helpful guides about table tennis in Newcastle and the Hunter region. Indoor activities, beginner tips, and more."
        path="/guides"
      />

      {/* Hero */}
      <section className="hero" style={{ background: "#0f172a", color: "#e2e8f0", padding: "3rem 1rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "0.5rem" }}>Guides & Resources</h1>
          <p style={{ maxWidth: 600, margin: "0 auto", color: "#94a3b8" }}>
            Helpful information about table tennis in Newcastle and the Hunter region
          </p>
        </div>
      </section>

      {/* Guides List */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="card"
                style={{ textDecoration: "none", display: "block" }}
              >
                <h3 style={{ marginTop: 0, color: "#0b1021" }}>{guide.title}</h3>
                <p style={{ marginBottom: 0, color: "#475569" }}>{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "#0f172a", color: "#e2e8f0", padding: "3rem 1rem", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ marginBottom: "0.5rem" }}>Ready to Play?</h2>
          <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
            Your first session is free — just show up!
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/timetable" className="button primary">
              See the Timetable
            </Link>
            <Link to="/what-to-expect" className="button ghost">
              What to Expect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
