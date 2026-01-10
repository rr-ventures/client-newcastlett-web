# Newcastle PCYC Table Tennis Club - Website Variants

Three versions of the client website, built by different LLMs for comparison testing.

## Site Status

| Version | Status | Tech Stack | Railway Ready |
|---------|--------|------------|---------------|
| `claude/` | ✅ Complete | Static HTML/CSS/JS | Yes |
| `gemini/` | ✅ Complete | Astro + Tailwind | Yes |
| `chatgpt/` | ❌ **Broken** | React + Vite | No (source files missing) |

> **Note:** The ChatGPT version lost its `src/` folder during migration from Google Drive. Only config files remain. This version cannot be deployed or recovered.

## Railway Deployment

Each working site can be deployed as a separate Railway service.

### Option 1: Deploy via Railway Dashboard

1. Create a new project in Railway
2. Add a new service from your Git repo
3. **Set Root Directory** to the specific site folder:
   - `claude` for the Claude version
   - `gemini` for the Gemini version
4. Railway will auto-detect the build settings via `nixpacks.toml`

### Option 2: Railway CLI

```bash
# Deploy Claude version
cd claude
railway up

# Deploy Gemini version  
cd gemini
railway up
```

## Local Development

### Claude Version (Static HTML)
```bash
cd claude
npm install
npm run dev
# Opens at http://localhost:3000
```

### Gemini Version (Astro)
```bash
cd gemini
npm install
npm run dev
# Opens at http://localhost:4321
```

## Environment Variables

Both sites require:
- `PORT` - Automatically set by Railway
- (Optional) Replace `G-XXXXXXXXXX` with real Google Analytics ID
- (Optional) Replace Formspree placeholder IDs with real form endpoints

## Placeholder Items (To Complete Before Launch)

- [ ] Google Analytics measurement ID (`G-XXXXXXXXXX` → actual ID)
- [ ] Formspree form ID (for contact forms)
- [ ] Replace image placeholders with real club photos
- [ ] Verify PCYC street address when confirmed
- [ ] Update parking details when confirmed
- [ ] Add Google Maps embed with correct coordinates
- [ ] Committee member names/photos (if desired)
- [ ] Ratings Central direct link URL

## Brief Compliance Summary

Both Claude and Gemini versions meet the core requirements:

| Requirement | Claude | Gemini |
|------------|--------|--------|
| 10-second test (mobile-first) | ✅ | ✅ |
| Timetable on homepage | ✅ | ✅ |
| Entry instructions | ✅ | ✅ |
| Pricing visible | ✅ | ✅ |
| "First session free" wording | ✅ | ✅ |
| Fear reduction / What to Expect | ✅ | ✅ |
| Since 1996 + Affiliations | ✅ | ✅ |
| Sunday TBA with email | ✅ | ✅ |
| Contact form | ✅ | ✅ |
| Facebook link | ✅ | ✅ |
| Competitions page | ✅ | ✅ |
| SEO basics (meta, structure) | ✅ | ✅ |
| Tracking readiness | ✅ | ✅ |
