# Roadmap: Connemara Oyster Restoration Portal

This is the plan for turning the current working prototype (`oyster-portal/`) into a
polished, shareable, permanently-hosted site. Each phase explains **why** it matters,
not just what to do — use it to decide what to tackle next and in what order.

The detailed, checkable task list lives in [`todo_checklist.md`](todo_checklist.md).
The specific photos/graphics to gather live in [`image_assets_needed.md`](image_assets_needed.md).

---

## Where we are now

All 6 modules from the original spec are built and verified in a real browser:
species biology, the GIS field map, methodology & telemetry, cultch substrates,
zooplankton sampling, and biodiversity assessment. The app builds cleanly with
`npm run build` and `create_shortcut.bat` installs dependencies and serves it locally.

What's still placeholder or simulated, by design, so the site could be demoed
immediately without waiting on real data or photography:
- Three background images are generic Unsplash stock photos (diver, reef fish, coral) —
  not Connemara-specific.
- The bay boundaries on the map are illustrative polygons drawn around the restoration
  point coordinates, not real GIS shapefiles.
- The telemetry chart (temperature/salinity/light) is procedurally generated, not a real
  Hobo logger export.
- There are no MFRC / ATU / fishermen's co-op logos anywhere in the UI yet.

None of this is broken — it's the difference between "functionally complete" and
"authentically Connemara." The phases below close that gap.

---

## Phase 1 — Real imagery (highest visual impact, lowest effort)

**Why first:** swapping generic stock photos for real project photography is the single
biggest jump in perceived quality, and it doesn't require any new code logic — just
dropping files in and pointing existing components at them.

- Gather the images listed in `image_assets_needed.md`.
- Wire them into `Hero.jsx`, `EcosystemEngineer.jsx`, `ZooplanktonModule.jsx`, and
  `SubstrateGrid.jsx` in place of the Unsplash URLs / inline SVG placeholders.
- Add a proper `favicon.ico` (also fixes the shortcut icon in `create_shortcut.bat`,
  which currently falls back to the generic Windows icon because only an `.svg`
  favicon exists).

## Phase 2 — Real geodata

**Why:** the bay polygons are currently guessed shapes drawn around the 10 known
points. If MFRC can share actual bay/reef boundary shapefiles or GeoJSON, the map
becomes a genuine GIS reference instead of an illustration.

- Request/export bay boundary geometry as GeoJSON.
- Replace the hand-drawn `polygon` arrays in `src/data/mapData.js` with the real
  coordinates.
- Consider adding a scale bar and a "data source" attribution note in the sidebar.

## Phase 3 — Real telemetry (optional, only if data exists)

**Why:** the degree-day/spawning-threshold chart is a strong scientific storytelling
feature. If MFRC has an actual Hobo logger CSV export from a deployment season, the
chart becomes real evidence rather than a simulation.

- Export logger data to CSV (date, temperature, salinity, light).
- Replace the generator in `src/data/telemetry.js` with a CSV parse (or a small JSON
  file committed alongside the code).
- Keep the simulated version as a fallback/demo mode if real data isn't always available.

## Phase 4 — Deployment

**Why:** the whole point of building this as a static Vite app was free GitHub Pages
hosting. Right now it only runs locally.

- Decide hosting shape: publish `oyster-portal/dist` to a `gh-pages` branch, or add a
  GitHub Actions workflow that builds and deploys on every push to `main`.
- Confirm `vite.config.js`'s `base: './'` still works for the chosen URL structure
  (works for both a project page and a custom domain).
- Add the live URL to the repo's README/description.

## Phase 5 — Performance & polish

**Why:** `npm run build` currently warns that the JS bundle is ~872 KB (mostly
`react-leaflet`/`leaflet` + `recharts` + `framer-motion` pulled into one chunk). Not
urgent, but worth doing before wide sharing.

- Code-split heavy sections with `React.lazy()` (the map and chart are good
  candidates — they're below the fold).
- Run a Lighthouse pass (performance, accessibility, SEO) and fix what it flags.
- Add proper `<meta>` tags (title, description, Open Graph image) so shared links look
  good on social/Slack previews.

## Phase 6 — Content review

**Why:** this is a science communication tool. Accuracy matters more than polish.

- Have someone from MFRC (or with domain knowledge) sanity-check the biology,
  conservation-status, and methodology text against current sources.
- Double check the illustrative numbers (degree-day threshold, diversity indices) are
  labeled clearly as reference/simulated where they aren't measured data, so nobody
  mistakes a demo value for a published result.

---

## Suggested order

1. Phase 1 (imagery) — do this next, it's the most visible win.
2. Phase 4 (deployment) — get a shareable link out early, even before every phase is done.
3. Phases 2 & 3 (real geodata/telemetry) — depends on what MFRC can actually provide.
4. Phase 5 (performance/polish) — before wide sharing.
5. Phase 6 (content review) — ongoing, whenever a domain expert is available.
