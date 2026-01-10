import { SEO } from "../components/SEO";
import { CompetitionTable } from "../components/CompetitionTable";
import { CTAButtons } from "../components/CTAButtons";
import { META, SITE } from "../config";

export function CompetitionsPage() {
  return (
    <>
      <SEO title="Competitions & Draws | Newcastle PCYC Table Tennis Club" description={META.description} path="/competitions" />
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          <div className="card">
            <h1 style={{ marginTop: 0 }}>Competitions</h1>
            <p>
              Spreadsheet-updatable from Google Sheets CSV. Showing upcoming schedule first; results appear when provided. If the live feed is
              unavailable, placeholder data is shown.
            </p>
            <div className="pill-row" style={{ marginTop: 10 }}>
              <CTAButtons variant="primary" />
              <a className="button ghost" href={`mailto:${SITE.email}`}>
                Email us about competitions
              </a>
            </div>
          </div>
          <CompetitionTable csvUrl={SITE.competitionsCsvUrl} />
        </div>
      </section>
    </>
  );
}
