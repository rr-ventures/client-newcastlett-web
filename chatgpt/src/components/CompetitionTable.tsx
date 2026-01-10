import { useEffect, useMemo, useState } from "react";
import { SITE } from "../config";

type Row = {
  competition: string;
  date: string;
  start: string;
  venue: string;
  status: string;
  draw?: string;
  registration?: string;
  result?: string;
};

export function CompetitionTable({ csvUrl }: { csvUrl: string }) {
  const fallbackUrl = useMemo(() => new URL("../data/competitions.csv", import.meta.url).href, []);
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const url = csvUrl || fallbackUrl;
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        if (!active) return;
        const parsed = parseCsv(text);
        setRows(parsed);
      })
      .catch(() => {
        if (!active) return;
        setError("Live competitions feed unavailable. Showing placeholder schedule.");
        // fetch fallback if initial failed
        if (url !== fallbackUrl) {
          fetch(fallbackUrl)
            .then((res) => res.text())
            .then((text) => {
              if (!active) return;
              setRows(parseCsv(text));
            })
            .catch(() => setRows([]));
        }
      });

    return () => {
      active = false;
    };
  }, [csvUrl, fallbackUrl]);

  const upcoming = rows
    .filter((r) => !!r.date)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const hasResults = rows.some((r) => r.result);

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Upcoming competitions / draws</h3>
      {error && <div className="badge" style={{ marginBottom: 12 }}>{error}</div>}
      {upcoming.length === 0 ? (
        <p>Check back soon — no competitions listed yet.</p>
      ) : (
        <div className="grid" style={{ gap: "1rem" }}>
          {upcoming.map((row, idx) => (
            <div key={`${row.competition}-${idx}`} style={rowBoxStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 800 }}>{row.competition}</div>
                {idx === 0 && <span className="badge">Next up</span>}
              </div>
              <div>{row.date}</div>
              <div style={{ color: "#475569" }}>
                {row.start} · {row.venue || "PCYC Newcastle"}
              </div>
              <div style={{ fontWeight: 700 }}>{row.status || "Scheduled"}</div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: 6 }}>
                {row.draw && (
                  <a className="button ghost" href={row.draw} target="_blank" rel="noreferrer">
                    View Draw
                  </a>
                )}
                {row.registration && (
                  <a className="button primary" href={row.registration} target="_blank" rel="noreferrer">
                    Register
                  </a>
                )}
                <a className="button ghost" href={`mailto:${SITE.email}`} rel="noreferrer">
                  Email us about competitions
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {hasResults && (
        <div style={{ marginTop: 20 }}>
          <h4 style={{ marginBottom: 8 }}>Recent results</h4>
          <ul className="list">
            {rows
              .filter((r) => r.result)
              .map((r, i) => (
                <li key={`${r.competition}-result-${i}`}>
                  <span aria-hidden="true">🏅</span>
                  <span>
                    {r.competition}: {r.result}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: 16, color: "#475569", fontSize: "0.95rem" }}>
        Admin note: update via Google Sheet CSV at COMPETITIONS_CSV_URL (env). Placeholder data lives in
        /docs/COMPETITIONS_DATA.md and /data/competitions.csv.
      </div>
    </div>
  );
}

function parseCsv(text: string): Row[] {
  const lines = text.split(/\r?\n/).filter(Boolean);
  const [headerLine, ...rows] = lines;
  if (!headerLine) return [];
  const headers = headerLine.split(",").map((h) => h.trim().toLowerCase());
  return rows.map((line) => {
    const cols = line.split(",").map((c) => c.trim());
    const entry: any = {};
    headers.forEach((h, i) => {
      entry[h] = cols[i] || "";
    });
    return {
      competition: entry.competition || entry.name || "",
      date: entry.date || "",
      start: entry.start || entry.time || "",
      venue: entry.venue || "",
      status: entry.status || "",
      draw: entry.draw || "",
      registration: entry.registration || entry.signup || "",
      result: entry.result || "",
    } as Row;
  });
}

const rowBoxStyle: React.CSSProperties = {
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  padding: "1rem",
  background: "#fff",
  boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
};
