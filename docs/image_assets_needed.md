# Image Assets Needed: Connemara Oyster Restoration Portal

This is the shopping list for real photography/graphics to replace the current
placeholders in `oyster-portal/`. It exists so you can gather everything into one
folder before handing it back for wiring into the code (Phase 1 of `roadmap.md`).

**Why this matters:** the app currently uses generic Unsplash stock photos and
inline SVG icons so it could be built and demoed without waiting on real assets.
None of those are Connemara-specific or MFRC-branded — swapping them for the real
thing is the fastest way to make the site feel authentic instead of a generic template.

**Licensing note:** unlike the current Unsplash placeholders (free stock, no rights
questions), these should be images you or MFRC actually have rights to use — project
photography, fieldwork photos, or diagrams you commission/draw. Don't substitute more
random internet stock photos here; that defeats the purpose.

---

## Suggested folder structure

Create this folder and hand it back (or drop files directly into the matching path
under `oyster-portal/src/assets/images/`):

```
oyster-portal-images/
├── hero/
│   └── hero-background.jpg
├── ecosystem/
│   └── reef-matrix.jpg
├── methodology/
│   ├── zooplankton-net-tow.jpg
│   ├── bathymetry-map.jpg
│   ├── rov-transect.jpg
│   └── drop-camera.jpg
├── substrates/
│   ├── scallop-shell-spat.jpg
│   ├── chinese-hats.jpg
│   └── roof-tiles.jpg
├── biodiversity/
│   ├── control-bare-mud.jpg
│   └── restored-oyster-reef.jpg
├── logos/
│   ├── mfrc-logo.png
│   ├── atu-logo.png
│   └── galway-aran-cooperative-logo.png
└── favicon/
    └── favicon.ico
```

Filenames above are suggestions — using them exactly means whoever wires these in
later doesn't have to guess which file goes where.

---

## 1. Replacing existing stock-photo placeholders

These three already have a spot in the code — they're currently generic Unsplash
photos and just need swapping.

- **`hero/hero-background.jpg`** — Hero Background
  - Where: `Hero.jsx`, full-viewport background behind the title.
  - Description: an atmospheric, wide photo of the Connemara coastline, Kilkieran or
    Bertraghboy Bay, or a diver/fieldworker at a restoration site. Landscape,
    high-resolution (at least 1600px wide), works darkened (a dark gradient overlay is
    already applied on top of it).
  - Why: first thing every visitor sees — currently a stock underwater diver photo
    with no connection to the actual project.

- **`ecosystem/reef-matrix.jpg`** — Ecosystem Engineer Background
  - Where: `EcosystemEngineer.jsx`, background behind the two clickable hotspots
    (Benthic-Pelagic Coupling / Structural Matrix).
  - Description: a real photo of an oyster reef/shell matrix (or a healthy bed) — even
    an aerial or underwater shot works. Landscape, at least 1200px wide.
  - Why: currently a stock reef-fish photo that doesn't show an oyster reef at all.

- **`methodology/zooplankton-net-tow.jpg`** — Net Tow Background
  - Where: `ZooplanktonModule.jsx`, background behind the mesh/flowmeter/tow hotspots.
  - Description: a real fieldwork photo of the plankton net, flowmeter, or boat during
    a tow. Landscape, at least 900px wide.
  - Why: currently an unrelated coral-toned stock photo.

## 2. New additions (nothing currently in the UI)

These aren't wired into any component yet — adding them means extending
`SubstrateGrid.jsx` / `TEKCard.jsx` / the footer to actually display them.

- **`logos/mfrc-logo.png`**, **`logos/atu-logo.png`**,
  **`logos/galway-aran-cooperative-logo.png`** — Institutional Logos
  - Where they'd go: footer credits, and/or next to the TEK card
    (`TEKCard.jsx`) which already mentions the Galway & Aran Fishermen's Co-operative
    by name but shows no logo.
  - Description: official transparent-background (PNG or SVG) logos.
  - Why: gives the project institutional credibility and proper attribution.

- **`substrates/scallop-shell-spat.jpg`**, **`substrates/chinese-hats.jpg`**,
  **`substrates/roof-tiles.jpg`** — Substrate Photos
  - Where: `SubstrateGrid.jsx`, front face of each flip card (currently a stylized
    inline SVG icon per substrate).
  - Description: close-up photos showing juvenile oyster spat settled on each
    substrate type, ideally the same framing/lighting across all three for visual
    consistency. Square or 4:3, at least 600px wide.
  - Why: real settlement photos are more convincing evidence than a drawn icon, and
    were explicitly called for in the original spec.

- **`biodiversity/control-bare-mud.jpg`**, **`biodiversity/restored-oyster-reef.jpg`**
  — Sediment Sample Photos
  - Where: `BiodiversityMatrix.jsx`, as a background image behind each of the two
    comparison zone cards (Control / Restored) — currently plain dark panels.
  - Description: an underwater or benthic-grab photo of bare mud sediment, and a
    matching photo of an oyster-reef sediment sample. Square or landscape, at least
    800px wide.
  - Why: makes the "bare mud vs. reef" contrast visually obvious instead of relying on
    text and numbers alone.

- **`methodology/bathymetry-map.jpg`**, **`methodology/rov-transect.jpg`**,
  **`methodology/drop-camera.jpg`** — Survey Method Illustrations
  - Where: `MethodologyPipeline.jsx`, currently each step (3D Multibeam Bathymetry /
    ROV Transect / Drop Camera) shows only an icon, no image.
  - Description: an example multibeam bathymetry color map, an ROV video still, and a
    drop-camera seabed still, one per step. Landscape, at least 900px wide.
  - Why: turns three abstract method-name cards into concrete, recognizable survey
    outputs.

- **`favicon/favicon.ico`** — Browser Tab / Shortcut Icon
  - Where: `oyster-portal/public/` (replaces `favicon.svg`), referenced from
    `index.html`.
  - Description: a small square icon (32×32 or 48×48, `.ico` format so Windows can use
    it as a shortcut icon too) — an oyster shell silhouette or wave mark works well.
  - Why: currently the default Vite icon; also `create_shortcut.bat` looks for a
    `.ico` file specifically and falls back to a generic icon without one.

---

## Optional (nice-to-have, no dedicated code slot yet)

- Custom map pin icons (currently plain colored teardrop shapes drawn in CSS via
  `MapSection.jsx`'s `pinIcon()` helper) — a branded oyster-shell-shaped pin SVG would
  be a nice upgrade but isn't required.
- Higher-fidelity zooplankton/veliger microscope photography to replace the current
  inline SVG icons in `PlanktonIcons.jsx` — only worth doing if real microscope
  photos of a sample are available, since the current icons are clear and functional.

---

## After you've gathered these

Hand the folder back (or tell me where you've placed the files) and I'll wire each
one into its component, replacing the corresponding Unsplash URL or SVG icon with the
real image — that's a quick, mechanical change once the files exist.
