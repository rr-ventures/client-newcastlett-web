import { SITE } from "../config";

export function TrustProof() {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Trust & affiliations</h3>
      <ul className="list">
        <li>
          <span aria-hidden="true">📅</span>
          <span>Operating since 1996</span>
        </li>
        <li>
          <span aria-hidden="true">🏓</span>
          <span>Affiliated with Table Tennis NSW</span>
        </li>
        <li>
          <span aria-hidden="true">📊</span>
          <span>Uses Ratings Central</span>
        </li>
        <li>
          <span aria-hidden="true">👥</span>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">
            Facebook group — friendly community
          </a>
        </li>
      </ul>
    </div>
  );
}
