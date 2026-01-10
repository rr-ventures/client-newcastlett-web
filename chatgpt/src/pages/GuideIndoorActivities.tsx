import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { TimetablePreview } from "../components/TimetablePreview";

export function GuideIndoorActivitiesPage() {
  return (
    <>
      <SEO
        title="Indoor Activities in Newcastle: Table Tennis at PCYC Broadmeadow"
        description="Looking for indoor activities in Newcastle? Table tennis at PCYC Broadmeadow is perfect for all ages and fitness levels. First session free, no booking required."
        path="/guides/indoor-activities-newcastle"
      />

      {/* Hero */}
      <section className="hero" style={{ background: "#0f172a", color: "#e2e8f0", padding: "3rem 1rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 800 }}>
          <div className="tag" style={{ background: "#e0f2fe", color: "#075985", marginBottom: "1rem" }}>
            Guide
          </div>
          <h1 style={{ marginBottom: "0.5rem" }}>Indoor Activities in Newcastle: Table Tennis at PCYC Broadmeadow</h1>
          <p style={{ color: "#94a3b8" }}>
            A fun, social, year-round activity for all ages and skill levels
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <article>
            <p>
              Looking for something active to do indoors in Newcastle? Whether it's a rainy day, scorching summer heat, or you simply prefer climate-controlled activities, <strong>table tennis</strong> is one of the best indoor sports you can try.
            </p>

            <h2>Why Table Tennis?</h2>
            <p>Table tennis (also known as ping pong) offers something for everyone:</p>
            <ul className="list">
              <li><strong>All fitness levels welcome</strong> — You can play at your own pace, from gentle rallies to intense competitive matches</li>
              <li><strong>Low impact on joints</strong> — Great for people of all ages, including seniors</li>
              <li><strong>Improves reflexes and coordination</strong> — It's a fantastic way to stay sharp</li>
              <li><strong>Social and fun</strong> — Meet new people and enjoy friendly games</li>
              <li><strong>Indoor and weather-proof</strong> — Play year-round regardless of what's happening outside</li>
            </ul>

            <h2>Where to Play Table Tennis in Newcastle</h2>
            <p>
              Newcastle PCYC Table Tennis Club has been operating at PCYC Newcastle in Broadmeadow since 1996. We're a friendly, community-focused club that welcomes beginners and experienced players alike.
            </p>

            <h3>What We Offer</h3>
            <ul className="list">
              <li><strong>Three sessions per week</strong> — Monday and Wednesday evenings, plus Saturday afternoons</li>
              <li><strong>Equipment provided</strong> — No need to bring your own racket</li>
              <li><strong>No booking required</strong> — Just show up during session times</li>
              <li><strong>First session free</strong> — Come and try before you commit</li>
              <li><strong>Affordable pricing</strong> — Just $9 per visit, or $40 for annual PCYC membership</li>
            </ul>

            <h2>Session Times</h2>
            <TimetablePreview />

            <h2>Getting Started</h2>
            <p>
              If you've never played table tennis before (or haven't played since school), don't worry! Our members are friendly and happy to play with newcomers. Here's what you need to know:
            </p>
            <ul className="list">
              <li>Wear comfortable clothes and indoor sports shoes</li>
              <li>Bring a water bottle (it can get warm!)</li>
              <li>Arrive a few minutes early to sign in</li>
              <li>Say hello and we'll help you find a game</li>
            </ul>

            <div className="card" style={{ marginTop: "2rem", background: "#f0fdf4", border: "1px solid #86efac" }}>
              <h3 style={{ marginTop: 0, color: "#166534" }}>Ready to try it?</h3>
              <p style={{ marginBottom: "1rem" }}>
                Your first session is free — no booking required. Just show up!
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
