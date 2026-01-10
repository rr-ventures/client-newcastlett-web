import { Link, NavLink } from "react-router-dom";
import { SITE, TIMETABLE } from "../config";
import { track } from "../analytics";

type Props = { children: React.ReactNode };

const navItems = [
  { label: "Home", to: "/" },
  { label: "Timetable", to: "/timetable" },
  { label: "Competitions", to: "/competitions" },
  { label: "Location & Contact", to: "/location" },
];

export function Layout({ children }: Props) {
  return (
    <div>
      <header style={headerStyle}>
        <div className="container" style={headerInner}>
          <Link to="/" style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "0.02em" }}>
            {SITE.name}
          </Link>
          <nav style={navStyle} aria-label="Main">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  padding: "0.4rem 0.6rem",
                  borderRadius: 10,
                  background: isActive ? "#e0f2fe" : "transparent",
                  fontWeight: 700,
                  color: "#0b1021",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/timetable"
            className="button primary"
            onClick={() => track("timetable_view")}
            style={{ whiteSpace: "nowrap" }}
          >
            Show up this week
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

const headerStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 10,
  background: "rgba(248, 250, 252, 0.97)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid #e2e8f0",
};

const headerInner: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "0.9rem 1rem",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "0.35rem",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
};

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
