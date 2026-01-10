import { TIMETABLE } from "../config";

type Props = { compact?: boolean };

export function TimetableTable({ compact = false }: Props) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>Timetable</h3>
        {!compact && <span className="badge">Pick any session — no booking needed</span>}
      </div>
      <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid var(--border)" }} aria-label="Session timetable table">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              {!compact && <th>Notes</th>}
            </tr>
          </thead>
          <tbody>
            {TIMETABLE.map((row, idx) => (
              <tr key={row.day} style={{ background: idx % 2 === 1 ? "var(--surface-2)" : "transparent" }}>
                <td style={{ fontWeight: 800, whiteSpace: "nowrap" }}>{row.day}</td>
                <td style={{ whiteSpace: "nowrap" }}>{row.isTba ? "TBA — Email us for updates" : `${row.start}–${row.end}`}</td>
                {!compact && <td>{row.note || (row.isTba ? "Email us for updates" : "Show up anytime")}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
