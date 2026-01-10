import { fromZonedTime, toZonedTime } from "date-fns-tz";
import { addDays } from "date-fns";
import { Session, TIMETABLE } from "../config";

const TZ = "Australia/Sydney";

export function NextSession() {
  const next = findNextSession(TIMETABLE);

  if (!next) {
    return (
      <div className="card">
        <div className="tag">Next session</div>
        <p style={{ margin: "0.5rem 0 0" }}>Timetable coming soon.</p>
      </div>
    );
  }

  const timeRange = next.isTba ? "TBA — Email us for updates" : `${next.start}–${next.end}`;

  return (
    <div className="card" aria-live="polite">
      <div className="tag">Next session</div>
      <h3 style={{ margin: "0.35rem 0 0.2rem" }}>{next.day}</h3>
      <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{timeRange}</div>
      {next.note && <div style={{ marginTop: 6, color: "#475569" }}>{next.note}</div>}
      <div style={{ marginTop: 8, color: "#0f172a", fontWeight: 600 }}>
        Australia/Sydney — updated automatically
      </div>
    </div>
  );
}

function findNextSession(timetable: Session[]) {
  const now = toZonedTime(new Date(), TZ);
  const weekdayMap: Record<string, number> = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const candidates = timetable
    .filter((t) => !t.isTba)
    .map((session) => {
      const targetDow = weekdayMap[session.day];
      const base = new Date(now);
      const daysToAdd = (targetDow - base.getDay() + 7) % 7;
      const targetDate = addDays(base, daysToAdd);
      const [h, m] = session.start.split(":").map(Number);
      targetDate.setHours(h, m, 0, 0);
      const utcDate = fromZonedTime(targetDate, TZ);
      return { ...session, when: utcDate };
    });

  if (!candidates.length) return timetable[0];

  const future = candidates
    .map((c) => ({ ...c, diff: c.when.getTime() - new Date().getTime() }))
    .sort((a, b) => a.diff - b.diff);

  return future[0] as Session & { when: Date };
}
