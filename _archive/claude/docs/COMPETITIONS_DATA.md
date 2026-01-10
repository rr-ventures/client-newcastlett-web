# Competition Data Documentation

## Data Source Options

### Option 1: Google Sheets (Recommended)

**Setup:**
1. Create a Google Sheet with the schema below
2. Go to File → Share → Publish to web
3. Select "Comma-separated values (.csv)" format
4. Copy the published URL
5. Update `COMPETITIONS_SHEET_URL` in `js/main.js`

**Benefits:**
- Anyone with sheet access can update
- Changes reflect immediately on the website
- No code changes needed for updates

### Option 2: Local CSV Fallback

The file `data/competitions.csv` serves as a fallback when:
- Google Sheet URL is not configured
- Google Sheet is unavailable
- Network issues prevent fetching

## Data Schema

| Column | Type | Required | Description | Example |
|--------|------|----------|-------------|---------|
| `comp_name` | string | Yes | Competition name | "Club Championship 2026" |
| `date` | YYYY-MM-DD | Yes | Competition date | "2026-02-15" |
| `start_time` | HH:MM | Yes | Start time (24hr) | "14:00" |
| `venue` | string | No | Venue name | "PCYC Newcastle Broadmeadow" |
| `divisions` | string | No | Competition divisions | "Open, Juniors" |
| `registration_info` | string | No | How to register | "Register at club" |
| `registration_link` | URL | No | Link to registration | "https://..." |
| `status` | enum | Yes | Competition status | "Upcoming" / "In Progress" / "Completed" |
| `results_summary` | string | No | Brief results text | "Winner: John Smith" |
| `results_link` | URL | No | Link to full results | "https://..." |

## Status Values

| Status | Display | Description |
|--------|---------|-------------|
| `Upcoming` | Green badge | Future competitions |
| `In Progress` | Orange badge | Currently running |
| `Completed` | Gray text | Past competitions |

## Example Google Sheet

```
comp_name,date,start_time,venue,divisions,registration_info,registration_link,status,results_summary,results_link
Club Championship 2026,2026-02-15,14:00,PCYC Newcastle Broadmeadow,"Open, Juniors",Register at club,,Upcoming,,
Autumn Open,2026-03-22,14:00,PCYC Newcastle Broadmeadow,All Divisions,Coming soon,,Upcoming,,
```

## Updating Competition Data

### Via Google Sheets
1. Open the shared Google Sheet
2. Add/edit rows as needed
3. Changes appear on website automatically (may take a few minutes due to caching)

### Via CSV File (Manual)
1. Edit `data/competitions.csv`
2. Deploy updated file to hosting

## Technical Notes

- The JavaScript fetches and parses CSV data client-side
- Past competitions (status: Completed) are not currently displayed but data is retained
- Date formatting converts YYYY-MM-DD to readable format (e.g., "Sat, 15 Feb 2026")
