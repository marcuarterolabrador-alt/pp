# Specification & Design Blueprint: Interactive Ostrea edulis Restoration Platform

This document restructures the project proposal for the **Interactive Web Application for *Ostrea edulis* Restoration Processes in Connemara** into a formal Software Requirements Specification (SRS) and technical design document. It is optimized for programmatic implementation and contains all information from [idees.md](file:///c:/Users/Usuario/Documents/antigravity_curs/idees.md) mapped to structured components, data schemas, and UI design patterns.

---

## 1. Project Metadata & Objectives

*   **Project Title:** *To Be Defined (e.g., Connemara Oyster Restoration Portal)*
*   **Target Audience:** Postgraduate Students (M.Sc./Ph.D.), Marine Ecologists, Environmental Stakeholders.
*   **Primary Objective:** Create a high-fidelity, interactive educational web application that showcases the multidisciplinary scientific methodologies, ecological benefits, and localized research efforts in restoring the European flat oyster (*Ostrea edulis*) within the Connemara region (specifically Kilkieran and Bertrabhouy bays).

---

## 2. Core Terminology Glossary

### 2.1. Marine Biology & Ecological Terms
*   ***Ostrea edulis***: The European native oyster, a native biogenic reef-building bivalve mollusc.
*   ***Bonamia ostreae***: A lethal haplosporidian protozoan parasite affecting *Ostrea edulis*, causing microcell disease.
*   ***Benthic-Pelagic Coupling***: The ecological processes linking the water column (pelagic zone) with the seafloor (benthic zone), particularly through oyster filtration (nutrient cycling and biodeposition).
*   ***Biogenic Matrix / Habitat***: A physical structure created by living organisms (oysters) that increases habitat complexity.
*   ***Spat***: Juvenile oysters that have successfully transitioned from free-swimming larvae and attached to a substrate.
*   ***Cultch***: Shells, gravel, or other structural materials placed on the seafloor to provide a settlement substrate for larval oysters.
*   ***Gregarious Settlement***: The behavior where larval oysters preferentially settle on or near existing adult oysters or calcium-rich substrates, stimulated by chemical cues.
*   ***Gametogenesis Degree-Day Threshold***: The cumulative thermal energy (calculated in degree-days above a baseline temperature) required for oysters to mature their gonads and initiate spawning.
*   ***Veliger Stage***: The free-swimming planktonic larval stage of a bivalve mollusc.
*   ***Traditional Ecological Knowledge (TEK)***: Qualitative historical and environmental data gathered from local coastal communities and fishermen.
*   ***Shannon-Wiener Biodiversity Index ($H'$)***: A mathematical measure of species diversity in a community:
    $$H' = -\sum (p_i \ln p_i)$$
*   ***Pielou's Evenness Index ($J'$)***: A measure of how close in numbers each species in an ecosystem is:
    $$J' = \frac{H'}{H'_{max}}$$

### 2.2. Frontend & Technical Terms
*   **Interactive Hotspots**: Clickable/hoverable UI vectors mapped to coordinates on an image or diagram to display contextual data overlays.
*   **Vector Clustering**: In GIS mapping, grouping multiple close-proximity markers into a single aggregate node that expands upon zooming.
*   **CSS 3D Transforms**: CSS properties (`rotateY`, `transform-style: preserve-3d`) used to animate two-sided UI components (e.g., card flips).
*   **Dashboard Slider**: Interactive UI range input (`<input type="range">`) allowing real-time adjustment of independent variables on a chart.
*   **Digital Quadrat Overlay**: A grid overlay rendering quantitative micro-metrics (density, scale) over high-definition images.

---

## 3. Technical Stack Recommendation

*   **Frontend Framework:** Next.js (React) or Vite (React/TypeScript) for component-driven UI.
*   **Styling & Theme:** Vanilla CSS or TailwindCSS with a dark-mode theme utilizing ocean-inspired, premium HSL palettes (deep blues, teals, coral highlights).
*   **Mapping Engine:** Leaflet.js or Mapbox GL JS for geospatial visualizations.
*   **Data Visualization:** D3.js or Chart.js for interactive environmental and recruitment graphs.
*   **Animations:** Framer Motion or pure CSS animations for smooth page transitions, flips, and hover effects.

---

## 4. Module-by-Module Technical Specification

### Module 1: Introduction – Species Biology, Conservation Status & Biogenic Function

#### Component A: Biogenic Reef Hero Banner
*   **UI/UX Specification:**
    *   Full-viewport, immersive background containing high-fidelity photography or custom illustrations of healthy, functioning *Ostrea edulis* reefs.
    *   Subtle parallax scroll effect to create depth.
*   **State Management:** Static graphic layout with smooth fade-in transitions.

#### Component B: 3D Anatomical & Physiological Viewer
*   **UI/UX Specification:**
    *   A side-by-side layout: Left features an interactive 3D model (or interactive SVG) of *Ostrea edulis*; Right displays contextual anatomical/physiological text cards.
    *   **Interactivity:** Hovering over specific anatomical organs (e.g., gills, adductor muscle, mantle) triggers a spotlight effect on the model and dynamically loads corresponding biological descriptions.
*   **Data Schema:**
    ```json
    {
      "organs": [
        {
          "id": "gills",
          "name": "Gills (Ctenidia)",
          "function": "Responsible for respiration and filter-feeding by straining microscopic algae from the water column.",
          "coordinates": { "x": 45, "y": 60 }
        }
      ]
    }
    ```

#### Component C: "Ecosystem Engineer" Interactive Diagram
*   **UI/UX Specification:**
    *   High-resolution diagram of an oyster reef matrix with interactive hot spots.
    *   Hovering over biological interfaces opens dynamic data cards quantifying ecosystem services.
*   **Content & Parameter Requirements:**
    *   *Benthic-Pelagic Coupling Hotspot:* Quantifies water filtration rates, nitrogen extraction, and nutrient cycling (e.g., "A single adult oyster filters up to 190L of water/day").
    *   *Structural Complexity Hotspot:* Renders a visual schematic showing how the 3D shell matrix acts as nursery grounds, foraging habitats, and predator refuge for juvenile fish and mobile macrofauna.

#### Component D: Historical Decline & Conservation Status Timeline
*   **UI/UX Specification:**
    *   A vertical timeline tracing the population dynamics of Irish flat oysters.
    *   Scroll-triggered animations revealing historic timelines.
*   **Timeline Nodes:**
    *   *Pre-Industrial Era:* High abundance of wild oyster beds.
    *   *Overexploitation Era:* Sharp decline due to uncontrolled commercial harvesting.
    *   *Disease Epizootic Era:* Introduction of the *Bonamia ostreae* parasite, decimating remaining wild stocks.
    *   *Modern Recovery Era:* Highlighting the critically endangered wild beds remaining in Connemara (Kilkiran and Bertrabhouy bays).

#### Component E: Project Resource Portal
*   **Content:** Links to major active restoration research projects in the region:
    *   **BRICONS Project:** Building Resilient Irish Coasts through Oyster Restoration.
        *   *Reference URL:* [BRICONS Project Info](https://mfrc-atu.ie/projects/conservation/bricons-building-resilient-irish-coasts-through-oyster-restoration-a-nature-based-solution-for-enhancing-marine-biodiversity-and-ecosystems/)
    *   **OISRE Conamara Project:** Oyster restoration initiative in Connemara.
        *   *Reference URL:* [OISRE Conamara Project Info](https://mfrc-atu.ie/projects/conservation/oisre-conamara/)

---

### Module 2: The Interactive GIS & Fieldwork Mapping Interface

#### UI/UX Specification
*   A fullscreen zoomable mapping module focusing on the Connemara coastline.
*   Responsive split-screen configuration: Map on the left, Dynamic Detail Sidebar/Modal on the right.

#### Layer Hierarchy & Zoom Behavior
*   **Level 1: Institution (MFRC Node)**
    *   *Marker:* Marine and Freshwater Research Centre (MFRC) headquarters.
    *   *Sidebar Content:* Institutional introduction, mission statement, and central laboratory overview.
*   **Level 2: Macro-Bay Level (Kilkiran & Bertrabhouy Bays)**
    *   *Markers:* Regional polygon outlines defining the two primary research bays.
    *   *Sidebar Content:* Comparative physical geography, environmental profiles, and histories of the sampling bays.
*   **Level 3: Micro-Site Level (Deployment Sites)**
    *   *Behavior:* Deep-zooming dynamically breaks bay clusters apart into precise GPS coordinates marking experimental cultch deployments and telemetry loggers.
    *   *Sidebar Content:* Field photography, substrate deployment schedules, water depth, and site-specific experimental setups.

#### Mock Map Data Schema
```json
{
  "mapNodes": [
    {
      "id": "mfrc",
      "type": "institution",
      "coordinates": [53.278, -9.012],
      "title": "Marine and Freshwater Research Centre",
      "description": "Primary research hub coordinating field trials and ecological analyses."
    },
    {
      "id": "kilkiran-bay",
      "type": "bay",
      "coordinates": [53.332, -9.815],
      "title": "Kilkiran Bay",
      "description": "One of the two primary Connemara inlets utilized for environmental telemetry and pilot restoration reefs."
    }
  ]
}
```

---

### Module 3: Restoration Methodology & Benthic Monitoring

#### Component A: Benthic Mapping Pipeline Carousel
*   **UI/UX Specification:**
    *   A slider component allowing users to step through modern marine surveying pipelines.
    *   **Interactive Toggles:** Swaps the primary view area between three distinct remote-sensing modalities:
        1.  *3D Multibeam Bathymetry Map:* Showing seafloor topography and depth contours.
        2.  *ROV (Remotely Operated Vehicle) Transect Video:* Video playback showing benthic surveys.
        3.  *Dropdown Camera Footage:* High-res still/video images of local substrate layers.

#### Component B: Traditional Ecological Knowledge (TEK) Integration Card
*   **UI/UX Specification:**
    *   A stylized infobox detailing the qualitative scientific method of combining historic fishery logs and fisher interviews to map historical *Ostrea edulis* populations.

#### Component C: Microclimate Telemetry Dashboard (Hobo Loggers)
*   **UI/UX Specification:**
    *   A time-series line chart depicting telemetry data from benthic loggers.
    *   **Controls:** Slider/Checkbox inputs allowing users to toggle data lines: **Temperature (°C)**, **Light Intensity (Lux)**, and **Salinity (PSU)**.
*   **Key Scientific Concept Visualization:**
    *   The graph interface highlights the cumulative **Degree-Day Thermal Threshold** required to initiate *Ostrea edulis* gametogenesis and subsequent spawning. When cumulative temperature exposure crosses the threshold, a visual spawning event is flagged on the timeline.

---

### Module 4: Cultch & Settlement Substrates (Sub-Module under Methodology)

#### UI/UX Specification: Substrate Trading Cards
*   A responsive grid of cards representing different recruitment substrates.
*   **Interactivity:** Clicking a card triggers a CSS 3D-flip rotation (Front to Back).

```
            FRONT OF CARD                               BACK OF CARD
+-----------------------------------+       +-----------------------------------+
|         [SUBSTRATE NAME]          |       | Comparative Specs & Performance   |
|                                   |       |                                   |
|   +---------------------------+   |       |  - Settlement Eff.: High/Low      |
|   |                           |   |       |  - Hydrodynamic Stability: Max    |
|   |  Image of Spat on Sub.    |   |  ==>  |  - Logistics: Cost & Weight       |
|   |                           |   |       |                                   |
|   +---------------------------+   |       |  - Pros: [Pros description]       |
|                                   |       |  - Cons: [Cons description]       |
+-----------------------------------+       +-----------------------------------+
```

#### Substrate Data Library

| Substrate (Cultch) | Spat Photo / Front Visual | Technical Specifications (Back of Card) | Status |
| :--- | :--- | :--- | :--- |
| **Scallop Shell** (*Pecten maximus*) | Photo of juvenile spat on flat scallop shell | **Settlement Efficiency:** High<br>**Hydrodynamic Stability:** Low (prone to siltation on muddy beds)<br>**Logistics:** Light, easily bagged | Tested |
| **Chinese Hats** (*Coupelles*) | Photo of lime-coated nesting plastic cones | **Settlement Efficiency:** Very High (textured surface)<br>**Hydrodynamic Stability:** Medium<br>**Logistics:** Requires manual peeling/handling | Tested |
| **Roof Tiles** | Photo of traditional clay tile structures | **Settlement Efficiency:** High<br>**Hydrodynamic Stability:** High (heavy profile resists currents)<br>**Logistics:** Heavy to deploy | Tested |
| **Limestone** | Natural stone texture | *To be determined upon experimental deployment* | Future Trial |
| **Biomodules Lollipop** | Custom concrete/organic mock-up | *To be determined upon experimental deployment* | Future Trial |

#### Physical & Chemical Alterations Section
*   **Content:** Interactive sidebar documenting techniques to accelerate gregarious settlement behavior:
    *   *Bio-Pastes:* Application of biological settlement cues.
    *   *Chemical Inducers:* Calcium carbonate coatings mimicking adult shell compounds.
    *   *Bio-engineered Concrete Matrices:* Specially textured surfaces designed to maximize larval attachment.

---

### Module 5: Pelagic & Benthic Recruitment Dynamics

#### Submodule A: Zooplankton Sampling & Phenology Timeline
*   **UI/UX Specification:**
    *   Animation of the methodology to sample zooplankton from a boat: 
            1. When clicking over the net: show mesh size 
            2. Flowmeter explanation when clicking over the flowmeter
            3. Tow duration in meters when clicking over the boat. 
  

#### Submodule B: Quantitative Recruitment Monitoring (Microscope view)
*   **UI/UX Specification:**
    *   A virtual microscope viewport displaying high-definition photos of larval samples.
    *  The date of the sampling will be displayed in a separate field.
    *   **Interactivity:** Click over the oyster larvae to score points. Display a check if it is correct, and a cross if something clicked is not an oyster larvae. At the end, score obtained and total number of oysters in the picture.

---

### Module 6: Ecosystem Services – Benthic Biodiversity Assessment

#### UI/UX Specification: Split-Screen Comparative Matrix
*   A side-by-side dashboard contrast between a degraded baseline habitat and a restored biogenic reef.
*   Interactive virtual "Petri Dishes" (sediment grab samples) allowing users to click and "sort" biological fauna.

```
       CONTROL ZONE: BARE MUD                     RESTORATION ZONE: OYSTER REEF
+-----------------------------------+       +-----------------------------------+
|         [Virtual Sample]          |       |         [Virtual Sample]          |
|  (Sparse benthic life, mud substrate)     |  (Dense structural shells, complex life)
|                                   |       |                                   |
|   [Click to Sort Macrofauna]      |       |    [Click to Sort Macrofauna]     |
|   - Low Abundance                 |       |    - High Abundance               |
|   - Low Species Richness          |       |    - High Cryptic Invertebrates   |
+-----------------------------------+       +-----------------------------------+
| Metrics:                          |       | Metrics:                          |
| - Dominant Taxa: Opportunistic    |       | - Dominant Taxa: Amphipods,       |
|   Polychaetes (e.g., Capitellids) |       |   decapod crabs, mixed polychaetes|
| - Shannon-Wiener Index (H'): Low  |       | - Shannon-Wiener Index (H'): High |
| - Pielou Evenness Index (J'): Low |       | - Pielou Evenness Index (J'): High|
+-----------------------------------+       +-----------------------------------+
```

#### Underlying Comparison Data Schema
```json
{
  "comparisonZones": {
    "control": {
      "habitatType": "Bare Mud / Non-Reef Sediment",
      "visualAsset": "bare_mud_sample.jpg",
      "taxaComposition": [
        { "group": "Polychaetes (opportunistic)", "abundance": "High" },
        { "group": "Decapods", "abundance": "Absent/Rare" }
      ],
      "diversityIndices": {
        "shannonH": 1.1,
        "evennessJ": 0.3
      }
    },
    "restored": {
      "habitatType": "Ostrea edulis Reef Matrix",
      "visualAsset": "oyster_reef_sample.jpg",
      "taxaComposition": [
        { "group": "Amphipods", "abundance": "Very High" },
        { "group": "Decapod Crabs", "abundance": "High" },
        { "group": "Polychaetes (mixed)", "abundance": "High" }
      ],
      "diversityIndices": {
        "shannonH": 3.4,
        "evennessJ": 0.8
      }
    }
  }
}
```
