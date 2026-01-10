import { Link, NavLink } from "react-router-dom";
import { SITE, TIMETABLE } from "../config";
import { track } from "../analytics";

type Props = { children: React.ReactNode };

const navItems = [
  { label: "Home", to: "/" },
  { label: "Timetable", to: "/timetable" },
  { label: "Competitions", to: "/competitions" },
  { label: "Location & Contact", to: "/location" },
  { label: "Guides", to: "/guides" },
];

export function Layout({ children }: Props) {
  return (
    <div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label={`${SITE.name} home`}>
            <img className="brand__logo" src="/images/logo.png" alt="" aria-hidden="true" />
            <span className="brand__name">{SITE.name}</span>
          </Link>
          <nav className="nav" aria-label="Main">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="nav__link">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/timetable" className="button primary" onClick={() => track("timetable_view")} style={{ whiteSpace: "nowrap" }}>
            Come for a tryout
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer style={footerStyle}>
        <div className="container" style={{ display: "grid", gap: "1.25rem" }}>
          <div>
            <div style={{ fontWeight: 800 }}>{SITE.name}</div>
            <div>{SITE.locationLabel}</div>
            <div style={{ marginTop: "0.35rem" }}>
              <a href={`mailto:${SITE.email}`} onClick={() => track("email_click")}>
                {SITE.email}
              </a>
            </div>
            <div style={{ marginTop: "0.35rem" }}>
              <a href={SITE.facebook} onClick={() => track("facebook_click")} target="_blank" rel="noreferrer">
                Join Facebook Group
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Quick links</div>
            <div style={linkColumn}>
              <Link to="/what-to-expect">What to Expect</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
              <Link to="/competitions">Competitions</Link>
              <Link to="/areas-we-welcome">Areas we welcome</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Timetable</div>
            <div style={linkColumn}>
              {TIMETABLE.map((t) => (
                <div key={t.day}>
                  {t.day}: {t.isTba ? "TBA — Email us for updates" : `${t.start} - ${t.end}`}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 18, color: "#475569", fontSize: "0.9rem" }}>
          Friendly, community-first — operating since 1996.
        </div>
      </footer>
    </div>
  );
}

const footerStyle: React.CSSProperties = {
  marginTop: "64px",
  padding: "32px 0 48px",
  background: "#0f172a",
  color: "#e2e8f0",
};

const linkColumn: React.CSSProperties = {
  display: "grid",
  gap: "0.35rem",
};
