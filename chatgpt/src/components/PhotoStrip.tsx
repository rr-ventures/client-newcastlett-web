type Props = { limit?: number };

export function PhotoStrip({ limit = 4 }: Props) {
  const items = [
    {
      src: "/images/group.jpg",
      alt: "Group photo of Newcastle PCYC Table Tennis Club players at PCYC Broadmeadow",
      caption: "Friendly, community-first club",
    },
    {
      src: "/images/hero.jpg",
      alt: "Table tennis session at PCYC Newcastle Broadmeadow",
      caption: "All levels welcome — come and try",
    },
  ].slice(0, limit);

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Club photos</h3>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {items.map((img) => (
          <figure key={img.src} style={{ margin: 0 }}>
            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface-2)" }}>
              <img src={img.src} alt={img.alt} loading="lazy" style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
            </div>
            <figcaption style={{ marginTop: 8, fontSize: "0.95rem", color: "var(--muted)" }}>
              <strong style={{ color: "var(--text)" }}>{img.caption}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
