type Item = { question: string; answer: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>FAQ</h3>
      <div className="grid" style={{ gap: 12 }}>
        {items.map((item) => (
          <details key={item.question} style={detailsStyle}>
            <summary style={summaryStyle}>
              <span>{item.question}</span>
              <span aria-hidden="true" style={{ color: "var(--muted)", fontWeight: 900 }}>
                +
              </span>
            </summary>
            <div style={{ padding: "0 1rem 1rem 1rem", color: "var(--text-2)" }}>{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

const detailsStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 14,
  background: "var(--surface)",
  boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
};

const summaryStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  padding: "0.9rem 1rem",
  cursor: "pointer",
  fontWeight: 700,
};
