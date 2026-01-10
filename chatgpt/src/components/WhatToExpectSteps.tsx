type Step = { title: string; body: string };

const steps: Step[] = [
  { title: "Arrive & say hello", body: "Head to the table tennis area inside PCYC Newcastle. We’ll greet you and get you started." },
  { title: "Grab a racket", body: "We have spare rackets. Wear sports shoes; casual clothing is fine. Bring water (and a towel if you like)." },
  { title: "Jump into games", body: "We’ll match you with someone friendly. No booking needed — come any listed session." },
];

export function WhatToExpectSteps() {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>What to expect on your first visit</h3>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {steps.map((step, i) => (
          <div key={step.title} style={{ padding: "0.5rem 0" }}>
            <div className="badge">Step {i + 1}</div>
            <div style={{ fontWeight: 800, marginTop: 8 }}>{step.title}</div>
            <div style={{ color: "#475569" }}>{step.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
