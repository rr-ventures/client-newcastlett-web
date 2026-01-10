import { OFFER } from "../config";

export function PricingPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{compact ? "Pricing at a glance" : "Pricing"}</h3>
      <ul className="list">
        <li>
          <span aria-hidden="true">✅</span>
          <span>{OFFER.freeFirst}</span>
        </li>
        <li>
          <span aria-hidden="true">💳</span>
          <span>{OFFER.visitPrice}</span>
        </li>
        <li>
          <span aria-hidden="true">🪪</span>
          <span>{OFFER.membership}</span>
        </li>
        <li>
          <span aria-hidden="true">🏓</span>
          <span>{OFFER.coaching}</span>
        </li>
        <li>
          <span aria-hidden="true">💵</span>
          <span>{OFFER.payments}</span>
        </li>
      </ul>
    </div>
  );
}
