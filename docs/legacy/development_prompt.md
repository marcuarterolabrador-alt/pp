# Tailored Development Prompt (React + Vite)
## Connemara Oyster Restoration Portal

Copy and paste the prompt below into any code-generation agent (such as Claude, Cursor, v0, or Lovable) to build the interactive web application.

---

```markdown
You are an expert React developer and UI/UX designer. I want you to build a premium, single-page interactive web application for the "Connemara Oyster Restoration Portal" to highlight native oyster (Ostrea edulis) restoration efforts in Connemara, Ireland. 

The website must be built using React with Vite. It should compile entirely to static assets so it can be hosted for free on GitHub Pages.

---

### IMPORTANT: Reference Files in Workspace
Before coding, read the following files in the project workspace to extract scientific context, structural blueprints, and exact coordinate data:
1. `project_specification.md` (Contains component specs, state schemas, and user flows)
2. `map_info.md` (Contains exact GPS coordinates, altitudes, and bay locations of the 10 restoration points)
3. `intro_info.md` (Contains the detailed species biology, lifecycle, and conservation statuses)

Do not use placeholders for data; extract the real data directly from these files.

---

### Tech Stack & Dependencies
- **Core:** React (Vite)
- **Styling:** Vanilla CSS or Tailwind CSS. Use an ocean-inspired premium dark theme (deep slate-blues `#0a192f` / `#0f172a`, vibrant teals `#0ea5e9` / `#14b8a6`, and soft coral/orange highlights `#f43f5e` for states/warnings).
- **Libraries to use:**
  - `react-leaflet` & `leaflet` (for interactive map visualizations)
  - `recharts` (for smooth, responsive telemetry line charts)
  - `lucide-react` (for modern outline icons)

---

### UI/UX & "Wow" Factor Requirements
The site must feel like an immersive, high-end digital exhibition:
- **Animations:** Install `framer-motion` for fluid entrance animations, page transitions, and game element drag-and-drops.
- **Map:** Use a dark-mode vector tile style with subtle ocean color accents.
- **Special Effects:** Add a subtle background particle canvas simulating glowing marine snow/bubbles.
- **Components:** Design cards and panels with glassmorphism (translucent dark overlays, blur filters, thin borders, and soft neon cyan drop shadows).
- **Charts:** Use Area Charts with glowing neon gradient fills that respond dynamically to cursor hovers.

---

### Image & Media Placeholders Handling
- **Pre-consider Images:** Do not leave image `src` tags empty, broken, or pointing to missing local files.
- **Dummy Images:** Wherever images or media are required, use clean inline SVGs (for diagrammatic components) or high-quality dynamic Unsplash placeholders with specific query terms. For example:
  - Hero background: `https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80` (underwater/diver)
  - Oyster/Reef photos: Unsplash keywords `oyster-reef`, `shellfish`, `underwater-life`.
  - Substrate card photos: Use close-up textures or simple custom SVG icons indicating Scallop, Chinese Hat, etc.
  - Microscope game: Use distinct inline SVGs or clean icons for the plankton targets to ensure they are visually distinct and interactive.

---

### Core Architecture & Modules
Build a single-page app layout with a modern sticky navigation header and smooth-scrolling sections for the following modules:

#### Module 1: Introduction & Species Biology (based on intro_info.md)
- **Hero Banner:** Immersive background introducing Ostrea edulis and the Marine and Freshwater Research Centre (MFRC) at ATU Galway. Detail the three core pillars: Enabling sustainability, Conserving biodiversity, and Improving productivity.
- **Interactive Anatomical Viewer:** An interactive SVG representation of an oyster shell. Hovering over or clicking organs (Gills, Adductor Muscle, Mantle, Shell) highlights them and updates a side-panel description card explaining their function.
- **Ecosystem Engineer Spotlight:** Circular hotspots on an oyster reef background graphic detailing:
  - *Benthic-Pelagic Coupling:* Highlights that one adult oyster filters up to 190L of water per day.
  - *Structural Matrix:* Explains how shell reefs act as nursery grounds and predator refuges.
- **Timeline of Decline:** A vertical scroll-animated timeline covering:
  - *Pre-Industrial:* Wild abundance.
  - *Overexploitation:* Rapid decline from dredging.
  - *Disease Epizootic:* Decimation by Bonamia ostreae parasite.
  - *Modern Recovery:* Restoration programs.

#### Module 2: GIS & Fieldwork Map (based on map_info.md)
- **Layout:** Responsive split-screen with a map on the left (`react-leaflet`) and an information sidebar on the right.
- **Features:** 
  - Marker for the MFRC Headquarters at coordinates `[53.278, -9.012]`.
  - Colored polygon overlays showing boundaries for **Kilkieran Bay** and **Bertraghboy Bay**.
  - Precise GPS markers for the 10 Restoration Points (read coordinates, elevation, and bay location directly from `map_info.md`).
- **Interactivity:** Clicking a marker updates the sidebar with the point's Area Name, Bay, Altitude, and Coordinates.

#### Module 3: Methodology & Telemetry
- **Survey Pipeline:** Interactive step-through cards for benthic mapping: (1) 3D Multibeam Bathymetry, (2) ROV Transect, (3) Drop Camera.
- **TEK Card:** Highlight cooperation with local fishermen from the Galway & Aran Fishermen's Co-operative.
- **Telemetry Chart:** A React line chart (`recharts`) showing simulated logger data.
  - Checkboxes to toggle lines: Temperature (°C), Salinity (PSU), and Light (Lux).
  - Include a cumulative "Degree-Day" calculator. Show a visual flag or badge on the chart indicating a "Spawning Event Triggered" once the thermal sum crosses the maturity threshold.

#### Module 4: Cultch & Substrates (based on project_specification.md)
- **Interactive Grid:** CSS 3D-flipping cards for substrates:
  - *Scallop Shell:* Settlement: High | Stability: Low | Logistics: Light. (Tested)
  - *Chinese Hats:* Settlement: Very High | Stability: Medium | Logistics: High effort. (Tested)
  - *Roof Tiles:* Settlement: High | Stability: High | Logistics: Heavy. (Tested)
  - *Limestone / Biomodules:* Specs pending future trials.
- **Enhancement Panel:** Details chemical cues (bio-pastes, calcium carbonate) used to attract larvae.

#### Module 5: Zooplankton & Microscope Game
- **Sampling Animation:** Interactive graphic showing zooplankton net tow: mesh sizes, flowmeter volume calculation, and tow length.
- **Microscope Identification Game:**
  - A visual panel displaying various zooplankton. The user must click on the flat oyster larvae (veligers).
  - Clicking correct larvae shows a green checkmark; clicking other organisms shows a red cross.
  - Dynamically track and display the score: "Oysters Spotted: X / Y".

#### Module 6: Benthic Biodiversity Assessment (based on project_specification.md)
- **Split-Screen Ecosystem Matrix:**
  - *Control (Bare Mud):* Displays low biodiversity indexes (Shannon-Wiener H': ~1.1, Pielou J': ~0.3).
  - *Restored (Oyster Reef):* Displays high biodiversity indexes (H': ~3.4, J': ~0.8).
- **Fauna Sorting Game:** Drag-and-drop or click-to-sort mini-game where users sort organisms (Amphipods, Decapods, Polychaetes) into their correct zones to watch the index values dynamically update.

---

Please provide the modular code structure, beginning with the main React entry point (`App.jsx`), global styling (`index.css`), and the map component (`MapSection.jsx`). Focus on responsive glassmorphism styles and smooth interactive state changes.
```
