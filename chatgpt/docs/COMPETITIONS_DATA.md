# Competitions data guide

Goal: spreadsheet-updatable competitions at `/competitions` using a Google Sheet published as CSV.

## Live feed (preferred)
1. In Google Sheets, File → Share → Publish to web → CSV link.
2. Copy the CSV URL and set `VITE_COMPETITIONS_CSV_URL` in environment.
3. Deploy. The page fetches the CSV, sorts by date ascending, highlights the next event, and shows draw/registration links when present.

## Columns (header row)
- `competition` (or `name`)
- `date` (YYYY-MM-DD)
- `start` (HH:MM local)
- `venue`
- `status` (e.g., Scheduled, Registration open, Finalised)
- `draw` (URL, optional)
- `registration` (URL, optional)
- `result` (optional; if present, appears in “Recent results”)

## Fallback data
- File: `/data/competitions.csv`
- Used automatically when `VITE_COMPETITIONS_CSV_URL` is missing or unreachable.

## Admin checks
- Keep dates in ISO format for correct sorting.
- Ensure HTTPS for outbound links.
- When updating results, keep concise (e.g., “Winner: [TBD]”).
