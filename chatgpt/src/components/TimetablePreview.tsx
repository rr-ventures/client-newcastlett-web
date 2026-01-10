import { useEffect, useRef } from "react";
import { TIMETABLE } from "../config";
import { track } from "../analytics";

export function TimetablePreview() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    let fired = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (fired) return;
        if (entries.some((e) => e.isIntersecting)) {
          track("timetable_view", { placement: "home_preview" });
          fired = true;
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="card" ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>Timetable preview</h3>
        <span className="badge">Show up any session</span>
      </div>
      <div className="pill-row">
        {TIMETABLE.map((t) => (
          <div key={t.day} className="tag">
            {t.day}: {t.isTba ? "TBA — Email us for updates" : `${t.start}–${t.end}`}
          </div>
        ))}
      </div>
    </div>
  );
}
