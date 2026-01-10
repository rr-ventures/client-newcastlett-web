import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { TimetablePreview } from "../components/TimetablePreview";

export function GuideMaitlandPage() {
  return (
    <>
      <SEO
        title="Table Tennis Near Maitland: A Welcoming Club in Broadmeadow"
        description="Looking for table tennis near Maitland? Newcastle PCYC Table Tennis Club in Broadmeadow is just 25 minutes away. First session free, all skill levels welcome."
        path="/guides/table-tennis-near-maitland"
      />

      {/* Hero */}
      <section className="hero" style={{ background: "#0f172a", color: "#e2e8f0", padding: "3rem 1rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 800 }}>
          <div className="tag" style={{ background: "#e0f2fe", color: "#075985", marginBottom: "1rem" }}>
            Guide
          </div>
          <h1 style={{ marginBottom: "0.5rem" }}>Table Tennis Near Maitland: A Welcoming Club in Broadmeadow</h1>
          <p style={{ color: "#94a3b8" }}>
            Just a 25-minute drive to Newcastle's friendliest table tennis club
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <article>
            <p>
              If you're in Maitland, Cessnock, or the lower Hunter and looking for organised table tennis, Newcastle PCYC Table Tennis Club is your closest option — and we'd love to have you.
            </p>

            <h2>Easy Access from Maitland</h2>
            <p>
              Located at PCYC Newcastle in Broadmeadow, we're just a 25-minute drive from Maitland via the New England Highway or Hunter Expressway. With three sessions per week (including Saturday afternoons), you can easily fit a game into your schedule.
            </p>

            <div className="card" style={{ marginTop: "1.5rem" }}>
              <h4 style={{ marginTop: 0 }}>⏱️ Drive Times from the Lower Hunter</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ padding: "0.35rem 0" }}>Maitland: ~25 minutes</li>
                <li style={{ padding: "0.35rem 0" }}>Cessnock: ~40 minutes</li>
                <li style={{ padding: "0.35rem 0" }}>Kurri Kurri: ~35 minutes</li>
                <li style={{ padding: "0.35rem 0" }}>Singleton: ~50 minutes</li>
              </ul>
            </div>

            <h2>What Makes Our Club Special</h2>
            <p>
              Newcastle PCYC Table Tennis Club has been operating since 1996. We're a friendly, community-focused club where the emphasis is on having fun, meeting people, and improving your game — regardless of your current skill level.
            </p>

            <h3>Perfect for Beginners</h3>
            <ul className="list">
              <li><strong>No experience required</strong> — Complete beginners are always welcome</li>
              <li><strong>Equipment provided</strong> — We have rackets you can borrow</li>
              <li><strong>No booking needed</strong> — Just show up during session times</li>
              <li><strong>First session free</strong> — Try before you commit</li>
              <li><strong>Friendly atmosphere</strong> — Our members love welcoming newcomers</li>
            </ul>

            <h3>For Competitive Players</h3>
            <p>
              If you're looking to take your game to the next level, we offer:
            </p>
            <ul className="list">
              <li>Regular club competitions throughout the year</li>
              <li>Affiliation with Table Tennis NSW</li>
              <li>Ratings Central registration for tracking your progress</li>
              <li>Coaching available (rates on request)</li>
            </ul>

            <h2>Session Times</h2>
            <TimetablePreview />

            <h2>Making the Trip Worth It</h2>
            <p>
              Many of our members travel from Maitland and surrounding areas. Here's why they make the journey:
            </p>
            <ul className="list">
              <li><strong>Quality facilities</strong> — Indoor, climate-controlled venue at PCYC Newcastle</li>
              <li><strong>Free parking</strong> — Plenty of on-site parking at PCYC</li>
              <li><strong>Flexible sessions</strong> — Three times per week to fit your schedule</li>
              <li><strong>Great value</strong> — $9 per session, or $40 for annual PCYC membership</li>
              <li><strong>Social atmosphere</strong> — Make new friends who share your interest</li>
            </ul>

            <div className="card" style={{ marginTop: "2rem", background: "#f0fdf4", border: "1px solid #86efac" }}>
              <h3 style={{ marginTop: 0, color: "#166534" }}>Ready to make the trip?</h3>
              <p style={{ marginBottom: "1rem" }}>
                Your first session is free — no booking required. Just show up and say hello!
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link to="/timetable" className="button primary">
                  See the Timetable
                </Link>
                <Link to="/location" className="button ghost">
                  Get Directions
                </Link>
                <Link to="/what-to-expect" className="button ghost">
                  What to Expect
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
