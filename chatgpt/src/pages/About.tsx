import { SEO } from "../components/SEO";
import { PhotoStrip } from "../components/PhotoStrip";
import { META } from "../config";

export function AboutPage() {
  const committee = [
    { name: "[TBD] Name", role: "President" },
    { name: "[TBD] Name", role: "Secretary" },
    { name: "[TBD] Name", role: "Coach" },
  ];

  return (
    <>
      <SEO title="About | Established 1996 | Newcastle PCYC Table Tennis Club" description={META.description} path="/about" />
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          <div className="card">
            <h1 style={{ marginTop: 0 }}>About the club</h1>
            <p>Community-first table tennis in Newcastle, operating since 1996 at PCYC Broadmeadow.</p>
            <ul className="list">
              <li>Affiliated with Table Tennis NSW</li>
              <li>Uses Ratings Central</li>
              <li>Beginner to competitive pathways</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Committee & coaches</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
              {committee.map((person) => (
                <div key={person.role} style={{ display: "grid", gap: "0.25rem" }}>
                  <div
                    style={{
                      background: "#e2e8f0",
                      borderRadius: 12,
                      aspectRatio: "1 / 1",
                      display: "grid",
                      placeItems: "center",
                      color: "#475569",
                      fontWeight: 700,
                    }}
                  >
                    committee-placeholder-01.webp
                  </div>
                  <div style={{ fontWeight: 800 }}>{person.name}</div>
                  <div style={{ color: "#475569" }}>{person.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PhotoStrip limit={3} />
        </div>
      </section>
    </>
  );
}
