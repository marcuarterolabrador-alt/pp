# To-Do Checklist: Connemara Oyster Restoration Portal

Actionable checklist version of [`roadmap.md`](roadmap.md). Check items off as you go.
Image-gathering tasks are broken out in detail in
[`image_assets_needed.md`](image_assets_needed.md).

---

## Phase 1 — Real imagery

- [ ] Collect/select all images listed in `image_assets_needed.md` into
      `oyster-portal/src/assets/images/` (folder structure suggested in that doc).
- [ ] Replace the Unsplash hero background in `Hero.jsx` with a real Connemara
      coastline / diver / reef photo.
- [ ] Replace the Unsplash background in `EcosystemEngineer.jsx` with a real oyster
      reef matrix photo.
- [ ] Replace the Unsplash background in `ZooplanktonModule.jsx` with a real net-tow /
      fieldwork photo.
- [ ] Add real substrate photos (scallop shell spat, Chinese hats, roof tiles) to
      `SubstrateGrid.jsx`, alongside or instead of the current inline SVG icons.
- [ ] Add MFRC, ATU, and Galway & Aran Fishermen's Co-operative logos somewhere in the
      UI (footer and/or the TEK card in `TEKCard.jsx`).
- [ ] Replace `oyster-portal/public/favicon.svg` with a proper `favicon.ico` (also
      fixes the icon used by `create_shortcut.bat`).
- [ ] Re-run the app locally and confirm every image loads (no broken `<img>`/
      background-image requests) before moving on.

## Phase 2 — Real geodata

- [ ] Ask MFRC for bay/reef boundary shapefiles or GeoJSON, if available.
- [ ] Convert to `[lat, lon]` arrays and replace the `polygon` fields in
      `oyster-portal/src/data/mapData.js`.
- [ ] Update the "illustrative overlay" disclaimer text in `MapSection.jsx` once real
      boundaries are in place.
- [ ] Double check the 10 restoration point coordinates are still current (they were
      taken from `docs/legacy/map_info.md` — confirm no site changes since).

## Phase 3 — Real telemetry (optional)

- [ ] Get a Hobo logger CSV export (temperature, salinity, light over one season) from
      MFRC, if available.
- [ ] Replace the generator function in `oyster-portal/src/data/telemetry.js` with a
      parser for the real data (or a static JSON file committed to `src/data/`).
- [ ] Confirm the degree-day threshold (currently 150, an illustrative placeholder) is
      the scientifically correct value, or get the correct one from MFRC.
- [ ] Keep the simulated generator available as a fallback/demo path.

## Phase 4 — Deployment

- [ ] Decide: `gh-pages` branch vs. GitHub Actions auto-deploy workflow.
- [ ] Set up the chosen deployment method for `oyster-portal/dist`.
- [ ] Verify the deployed site loads correctly at its real URL (check the map, images,
      and fonts all resolve — this is where `base: './'` issues would show up).
- [ ] Add the live link to the repository description/README.

## Phase 5 — Performance & polish

- [ ] Code-split the map (`MapSection.jsx`) and chart (`TelemetryChart.jsx`) with
      `React.lazy()` + `Suspense` to shrink the initial bundle (currently ~872 KB,
      flagged by `npm run build`).
- [ ] Run Lighthouse (Performance/Accessibility/SEO/Best Practices) and fix flagged
      issues.
- [ ] Add `<title>`, meta description, and an Open Graph image to `index.html` for
      link previews.
- [ ] Quick manual pass on mobile widths (the grid/nav already collapse responsively —
      confirm the map and charts are still usable on a small screen).

## Phase 6 — Content review

- [ ] Have a domain expert (MFRC or similar) review the biology/conservation text in
      Module 1 for accuracy.
- [ ] Confirm which numbers are real vs. illustrative (degree-day threshold, diversity
      indices, telemetry) and make sure the UI labels them honestly.
- [ ] Check all external links (NORA, OISRE, BRICONS, OSPAR, Fisheries Ireland) still
      resolve.

---

## Quick reference: what's simulated/placeholder right now

| Item | File | Status |
|---|---|---|
| Hero background | `Hero.jsx` | Unsplash stock photo |
| Ecosystem engineer background | `EcosystemEngineer.jsx` | Unsplash stock photo |
| Zooplankton net-tow background | `ZooplanktonModule.jsx` | Unsplash stock photo |
| Substrate photos | `SubstrateGrid.jsx` | Inline SVG icons, not real photos |
| Bay boundaries | `mapData.js` | Hand-drawn illustrative polygons |
| Telemetry series | `telemetry.js` | Procedurally generated, not measured data |
| Favicon | `public/favicon.svg` | Default Vite SVG, not a project icon |
| Institutional logos | — | Not yet added anywhere in the UI |
