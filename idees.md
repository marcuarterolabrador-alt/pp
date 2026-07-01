# Project Proposal: Interactive Web Application for *Ostrea edulis* Restoration Processes in Connemara

**Project Title:** to define

**Target Audience:** Postgraduate Students (M.Sc./Ph.D.), Marine Ecologists, and Environmental Stakeholders.


---

## Module 1: Introduction – Species Biology, Conservation Status & Biogenic Function

### Overview
This opening section serves as the theoretical foundation, establishing the ecological significance of the European flat oyster (*Ostrea edulis*) and the urgency of its conservation in Ireland, with a dedicated focus on the Connemara region: Kilkiran and Bertrabhouy bays.

### Interactive Elements & Content Layout
* **The Biogenic Habitat Banner:** An immersive background featuring photos or a drawing of healthy oyster reefs. 

* **3d image of an oyster edulis next to biological explanation. Hovering over the drawing should reveal detailed information about the species' anatomy and physiology.**


* **The "Ecosystem Engineer" Breakdown:** Interactive ecological callouts. When a user hovers over parts of the reef diagram, data cards dynamically display its function:
    * *Benthic-Pelagic Coupling:* Quantifying nutrient cycling capabilities.
    * *Structural Complexity:* Visualizing how the three-dimensional biogenic matrix provides nursery grounds, shelter, and foraging habitat for mobile macrofauna and juvenile fish.
    

* **Connemara & Ireland Conservation Status Timeline:** A vertical interactive timeline mapping the historical decline of *Ostrea edulis* due to overexploitation and the introduction of the *Bonamia ostreae* parasite, contrasting historic distribution with the remnant, critically endangered wild beds in Connemara.

* **Introduction to BRICONS and OISRE Connemara projects** Find more information in: https://mfrc-atu.ie/projects/conservation/bricons-building-resilient-irish-coasts-through-oyster-restoration-a-nature-based-solution-for-enhancing-marine-biodiversity-and-ecosystems/

https://mfrc-atu.ie/projects/conservation/oisre-conamara/

---

## 🗺️ Module 2: The Interactive GIS & Fieldwork Mapping Interface

### Overview
An scalable map that allows users to seamlessly zoom in and out to explore the geographical boundaries of the applied research in the connnemara region.

### Map Layers & Node Functionality
Upon clicking any designated marker (node), a side-panel or modal overlay animates into view, showcasing field photographs and localized descriptions:

1. **The Marine and Freshwater Research Centre (MFRC) Node:**
   * *Content:* Introduction to the institution.
2. **The Macro-Bay Level (The Two Sampling Bays: Killkiran and Berthrabouy):**
   * *Content:* Regional overview of the two specific Connemara bays utilized for environmental sampling and restoration trials.
3. **The Micro-Site Level (Deep-Zoom Sub-locations):**
   * *Zoom-dependent Interactivity:* As the user zooms closer into the two bays, high-resolution clusters break apart into specific monitoring and deployment coordinates.
--


## ⚓ Module 3: Restoration Methodology 

### Overview
This module demonstrates the multidisciplinary approach used to assess restoration success and compare sites and methodologies.

### Step-by-Step Interactive Breakdown
* **Benthic Mapping Tools (Dropdown Cameras, ROV, & Multibeam):**
  * An interactive carousel showcasing the mapping pipeline. Users can switch views between a 3D Multibeam bathymetry map, Remote Operated Vehicle (ROV) transects, and raw Dropdown Camera footage.
* **Traditional Ecological Knowledge (TEK) Integration:**
  * A dedicated infobox highlighting the synthesis of historical records combined with interviews and data gathered directly from local fishermen to map historical oyster bed footprints.
* **Microclimate Monitoring (Hobo Loggers):**
  * An interactive environmental dashboard graph. Users can toggle sliders representing **Temperature**, **Light**, and **Salinity**. 
  * *Master’s Level Scientific Focus:* Emphasize the critical role of Hobo Loggers in monitoring seasonal thermal accumulation. The graph will highlight the exact degree-day threshold required to trigger gametogenesis and subsequent pelagic **spawning** events.

---

### Cultch types

#### Overview
Gamified presentation of the alternative settlement substrates tested during the placement, designed as sleek, interactive "Trading Cards" (resembling modern UI card-flips).

* - Scallop shell
* - Coupelles
* - Tiles

To apply next: 
* - Limestone
* - Biomodules lollipop

Somehow show: 
* **Chemical Alterations & Bio-Coatings:** Detail the application of specialist bio-pastes, biological cues, or specialized marine concrete matrices designed to mimic natural calcium carbonate matrices, accelerating larval settlement (*gregarious settlement* behavior).



Front of Card:                       Back of Card (On Click/Flip):
+-------------------------------+    +-------------------------------+
|       [SCALLOP SHELL]         |    | Pros: X     |
|                               |    | Cons: X  |
|   (Image of Spat on Shell)    | => |                               |
|                               |    | 
+-------------------------------+    +-------------------------------+


#### Mechanics & Information Architecture
Users click on a card to execute a CSS 3D-flip animation, revealing technical specifications:
* **Substrate Types:** Scallop Shells (*Pecten maximus*), Lime-coated Chinese Hats (*Coupelles*), and Traditional Roof Tiles.
* **Comparative Trade-offs:** Larval settlement efficiency, hydrodynamic stability on muddy benthos, and logistics of deployment.



---

### Pelagic & Benthic Recruitment Dynamics

#### Overview
A dual-submodule dedicated to tracking the transition of *Ostrea edulis* from free-swimming zooplankton to settled juveniles (spat).

#### Submodule A: Zooplankton Sampling & Phenology
* **The Interface:** A timeline slider spanning the summer spawning season.
* **The Content:** Documentation of the weekly plankton towing methodologies. Graphs depict larval density peaks correlated with the temperature spikes logged in Module 3, tracking larval cohorts as they progress through their veliger stages.

### Submodule B: Quantitative Recruitment Monitoring
* **The Interface:** An interactive microscope view / digital counting quadrat.
* **The Content:** High-definition photography of scallop shells, coupelles, and tiles post-settlement. Users can hover over individual settled spats to reveal macro-measurements, growth rates, and spatial distribution patterns across the varying geometries of the tested substrates.

---

## 🦀 Module 6: Ecosystem Services – Benthic Macrofauna Biodiversity Assessment

### Overview
The final scientific validation module, demonstrating how successful oyster restoration shifts ecosystem structure.

### Split-Screen Comparative Matrix
A side-by-side interactive dashboard mapping out the macrofaunal community structures derived from core/grab sediment samples.

| Parameter | Control Zone (Bare Mud / Non-Reef Sediment) | Restoration Zone (*Ostrea edulis* Reef Matrix) |
| :--- | :--- | :--- |
| **Interactive View** | A barren-looking virtual sediment petri dish. | A highly complex, biodiverse virtual sediment sample. |
| **User Interaction** | Click to "sort" fauna $\rightarrow$ Reveals low abundance, low richness. | Click to "sort" fauna $\rightarrow$ Reveals high abundance, cryptic invertebrates. |
| **Ecological Metrics** | Dominated by opportunistic polychaetes. Low Shannon-Wiener Index ($H'$). | High abundance of amphipods, decapod crabs, and polychaetes. High Evenness ($J'$). |

---