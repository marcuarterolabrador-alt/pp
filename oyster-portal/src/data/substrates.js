export const substrates = [
  {
    id: 'scallop-shell',
    name: 'Scallop Shells',
    latin: 'Pecten maximus',
    settlement: 'High',
    stability: 'Low',
    logistics: 'Light, easily bagged',
    status: 'Tested',
    pros: 'Excellent biological attraction. The natural calcium carbonate releases chemical cues that highly stimulate wild oyster larvae (spat) to settle, without the need for coating.',
    cons: 'Easily buried in sediment, which prevents spat from settling, and can create an anoxic environment without water flux around settled spat.',
  },
  {
    id: 'chinese-hats',
    name: 'Coupelles',
    latin: null,
    settlement: 'Very High',
    stability: 'Medium',
    logistics: 'High effort (manual peeling/handling)',
    status: 'Tested',
    pros: 'Their design maximizes settlement surface availability while their vertical disposition allow a very high water flow.',
    cons: 'Plastic pollution risk. In rough waters, these plastic collectors can break apart, degrading into marine litter and microplastics.',
  },
  {
    id: 'roof-tiles',
    name: 'Tiles',
    latin: null,
    settlement: 'High',
    stability: 'High',
    logistics: 'Heavy to deploy',
    status: 'Future Trial',
    pros: 'Large tiles or interconnected tile systems are heavy, uniform, and hydrodynamically stable.',
    cons: 'Labor-intensive. Coating, curing, placing, and manually scraping the tiles requires physical labor, which can be costly.',
  },
  {
    id: 'limestone',
    name: 'Limestone',
    latin: null,
    settlement: 'Pending',
    stability: 'Pending',
    logistics: 'Pending',
    status: 'Future Trial',
    pros: 'Promotes "single" oysters. Its structured surface limits overcrowded clumping, preventing oysters from stacking on top of each other, which yields highly uniform shapes ideal for commercial trade.',
    cons: 'Poor reef-building capacity. Because it prevents dense, multi-layered clumping, it is inefficient at forming the complex, three-dimensional vertical reef structures required for ecological restoration.'
  },
  {
    id: 'biomodules',
    name: 'Biomodules',
    settlement: 'Pending',
    stability: 'Pending',
    logistics: 'Pending',
    status: 'Future Trial',
    pros: 'Predator mitigation. Elevating the settling substrate off the seabed on a vertical post prevents benthic predators like starfish from reaching the spat, the wooden stick is after degradated naturally and the reef falls in the seabed..',
    cons: 'Structural instability. Elevated structures with a narrow base are highly vulnerable to being tipped over or damaged by strong currents and wave action.'
  },
]

export const enhancementCues = [
  {
    id: 'bio-pastes',
    name: 'Bio-Pastes',
    description: 'Application of biological settlement cues to accelerate gregarious settlement behaviour.',
  },
  {
    id: 'chemical-inducers',
    name: 'Chemical Inducers',
    description: 'Calcium carbonate coatings mimicking adult shell compounds, triggering larval attachment.',
  },
  {
    id: 'bio-concrete',
    name: 'Bio-engineered Concrete Matrices',
    description: 'Specially textured surfaces designed to maximise larval attachment rates.',
  },
]
