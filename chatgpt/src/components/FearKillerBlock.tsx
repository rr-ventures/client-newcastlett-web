import { ARRIVAL_STEPS, FEAR_KILLER_POINTS } from "../config";

export function FearKillerBlock() {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>New player? You’re covered.</h3>
      <ul className="list">
        {FEAR_KILLER_POINTS.map((point) => (
          <li key={point}>
            <span aria-hidden="true">🏓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ fontWeight: 700, marginBottom: 6 }}>What happens when you arrive</div>
        <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#0b1021" }}>
          {ARRIVAL_STEPS.map((step, idx) => (
            <li key={step} style={{ marginBottom: 4 }}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
