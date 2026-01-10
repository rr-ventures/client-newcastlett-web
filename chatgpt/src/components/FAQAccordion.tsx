type Item = { question: string; answer: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>FAQ</h3>
      <div className="grid">
        {items.map((item) => (
          <details key={item.question} style={detailsStyle}>
            <summary style={summaryStyle}>{item.question}</summary>
            <div style={{ padding: "0 0.5rem 0.5rem 0.5rem", color: "#475569" }}>{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

const detailsStyle: React.CSSProperties = {
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  background: "#fff",
};

const summaryStyle: React.CSSProperties = {
  padding: "0.75rem 0.9rem",
  cursor: "pointer",
  fontWeight: 700,
};
