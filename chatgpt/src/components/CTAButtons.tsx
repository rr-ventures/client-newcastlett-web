import { Link } from "react-router-dom";
import { CTA } from "../config";
import { track } from "../analytics";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
  layout?: "row" | "column";
};

export function CTAButtons({ variant = "primary", layout = "row" }: Props) {
  const items = variant === "primary" ? CTA.primary : CTA.secondary;

  return (
    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", flexDirection: layout === "column" ? "column" : "row" }}>
      {items.map((cta) =>
        cta.to ? (
          <Link
            key={cta.label}
            to={cta.to}
            className={`button ${variant === "primary" ? "primary" : "ghost"}`}
            onClick={() => track(cta.event as any)}
          >
            {cta.label}
          </Link>
        ) : (
          <a
            key={cta.label}
            href={(cta as { href: string }).href}
            className={`button ${variant === "primary" ? "primary" : "ghost"}`}
            onClick={() => track(cta.event as any)}
          >
            {cta.label}
          </a>
        ),
      )}
    </div>
  );
}
