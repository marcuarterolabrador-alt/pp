# Assets, Accounts, & Resources Checklist
## Connemara Oyster Restoration Portal

Use this checklist to track all the graphical assets, API accounts, and external resources required to build the portal with a premium visual standard.

---

## 1. Accounts & API Services

- [ ] **GitHub Account:** Required to host the code repository and set up free hosting via **GitHub Pages** (under repository Settings > Pages).
- [ ] **Mapbox Account (Optional but Recommended):** 
  - Required to get a **Mapbox Access Token** if you want 3D terrain heights and premium custom dark-ocean map designs.
  - Link: [mapbox.com](https://www.mapbox.com/) (Free tier allows up to 50,000 map loads/month).
- [ ] **Google Fonts API:** No account needed, but check that your index.html/CSS links to modern fonts like `Inter` and `Outfit`:
  - Link: [fonts.google.com](https://fonts.google.com/)

---

## 2. Graphic Assets & Figures (By Module)

### Module 1: Biology & Introduction
- [ ] **Hero Background:** A high-resolution, atmospheric photography or graphic of the Connemara coastline or an underwater oyster bed. (Use Unsplash placeholder first).
- [ ] **MFRC & ATU Logos:** Official branding logos for the Marine and Freshwater Research Centre and Atlantic Technological University.
- [ ] **Ostrea edulis Anatomy Diagram (Interactive SVG):** 
  - Needs to be an SVG vector file containing defined paths or IDs for:
    - *Gills (Ctenidia)*
    - *Adductor Muscle*
    - *Mantle*
    - *Shell (Valves)*
  - These IDs allow the React code to highlight individual organs when hovered.
- [ ] **Ecosystem Spotlight Graphic:** A background graphic showing a healthy oyster reef matrix where circular glowing hot spots are placed overlaying it.

### Module 2: GIS Map
- [ ] **Custom Site Pin Icon:** An SVG icon for the MFRC Headquarters (e.g., a laboratory/building icon).
- [ ] **Oyster Shell Map Pin Icon:** A custom SVG pin shaped like an oyster shell to mark the 10 restoration points.

### Module 3: Survey Methodology
- [ ] **Multibeam Bathymetry Figure:** A color-coded 3D seafloor map showing depth contours.
- [ ] **ROV Transect Asset:** A still frame or video clip representing Remotely Operated Vehicle camera footage of the seabed.
- [ ] **Drop Camera Asset:** A high-definition close-up photo of the seabed shell/mud layer.
- [ ] **Galway & Aran Fishermen's Co-op Logo:** Branding graphic for the local fishery co-management partner.

### Module 4: Cultch & Substrates
- [ ] **Scallop Shell Photo:** Close-up of flat *Pecten maximus* shell showing attached juvenile oyster spat.
- [ ] **Chinese Hats Photo:** Photo of lime-coated nesting plastic collector cones.
- [ ] **Roof Tiles Photo:** Image of traditional curved clay tiles used as spat collectors.
- [ ] **Limestone & Biomodules Placeholders:** SVG icons representing raw stone and concrete/organic lollipop prototypes.

### Module 5: Zooplankton & Microscope Game
- [ ] **Sensing Boat Illustration:** Simple vector diagram of a boat towing a zooplankton net, showing the flowmeter, net mesh, and tow distance.
- [ ] **Microscope Viewport Frame:** A circular dark lens frame resembling a microscope viewer overlay.
- [ ] **Target Larvae SVG:** Detailed vector silhouette of an *Ostrea edulis* veliger (larva) for the user to click.
- [ ] **Distractor Zooplankton SVGs:** 3–4 distinct vector graphics representing non-target species:
  - *Copepod*
  - *Crab Zoea*
  - *Fish Larva*
  - *Jellyfish larva*

### Module 6: Benthic Biodiversity
- [ ] **Sediment Grab Sample Graphics:** 
  - A muddy background sample (Control).
  - A complex shell/benthic background sample (Restored).
- [ ] **Organism Sorting SVG Icons:** Clean draggable icons representing macrofauna:
  - *Amphipods* (small shrimp-like scuds)
  - *Decapod Crabs* (shore crabs)
  - *Polychaete Worms* (segmented marine worms)

---

## 3. Project Scientific & Reference Resources

These URLs are referenced throughout the portal and should be linked on the site:
- **BRICONS Project:** [mfrc-atu.ie/projects/conservation/bricons...](https://mfrc-atu.ie/projects/conservation/bricons-building-resilient-irish-coasts-through-oyster-restoration-a-nature-based-solution-for-enhancing-marine-biodiversity-and-ecosystems/)
- **OISRE Conamara Project:** [mfrc-atu.ie/projects/conservation/oisre-conamara/](https://mfrc-atu.ie/projects/conservation/oisre-conamara/)
- **Native Oyster Restoration Alliance (NORA):** [nativeoysterrecovery.org](https://www.nativeoysterrecovery.org/)
- **OSPAR Native Oyster Assessment:** [oap.ospar.org/en/versions/1734-en-1-0-2-european-flat-oyster/](https://oap.ospar.org/en/versions/1734-en-1-0-2-european-flat-oyster/)
- **Life Cycle Reference (Fisheries Ireland):** [fisheriesireland.ie/.../O._edulis_Life_Cycle_0.pdf](https://www.fisheriesireland.ie/sites/default/files/2023-06/O._edulis_Life_Cycle_0.pdf)
