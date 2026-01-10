import { PLACEHOLDER_IMAGES } from "../config";

type Props = { limit?: number };

export function PhotoStrip({ limit = 4 }: Props) {
  const items = PLACEHOLDER_IMAGES.slice(0, limit);
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Photos coming soon</h3>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
        {items.map((img) => (
          <figure key={img.file} style={{ margin: 0 }}>
            <div
              style={{
                background: "#e2e8f0",
                borderRadius: 12,
                aspectRatio: "4 / 3",
                display: "grid",
                placeItems: "center",
                color: "#475569",
                fontWeight: 700,
              }}
            >
              {img.file}
            </div>
            <figcaption style={{ marginTop: 6, fontSize: "0.95rem", color: "#475569" }}>
              <strong>{img.caption}</strong>
              <br />
              Alt text: {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
