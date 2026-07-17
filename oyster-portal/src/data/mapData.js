// Coordinates and bay data extracted directly from map_info.md

export const mfrc = {
  id: 'mfrc',
  name: 'Marine and Freshwater Research Centre (MFRC)',
  position: [53.278, -9.012],
  description:
    'Research institute established in 2009, based at the Atlantic Technological University (ATU) Galway Campus. Whithin this institution, the Biogenic Habitats group, conducts research on restoration of seaweed meadows and shellfish reefs, including the the Native Oyster and the Horse mussel, Modiolus modiolus. To do so, they are working closely with the Galway & Aran Fishermen’s Co-operative.',
}

export const bays = [
  {
    id: 'kilkieran',
    name: 'Kilkieran Bay',
    center: [53.2986, -9.7394],
    dms: "53°17′55″ N, 9°44′22″ W",
    color: '#0ea5e9',
    // Approximate illustrative boundary enclosing the bay's restoration points
    polygon: [
      [53.395, -9.700],
      [53.395, -9.760],
      [53.330, -9.775],
      [53.240, -9.740],
      [53.235, -9.640],
      [53.320, -9.610],
      [53.375, -9.630],
    ],
  },
  {
    id: 'bertraghboy',
    name: 'Bertraghboy Bay',
    center: [53.3883, -9.8528],
    dms: "53°23′18″ N, 9°51′10″ W",
    color: '#14b8a6',
    polygon: [
      [53.430, -9.800],
      [53.430, -9.900],
      [53.405, -9.925],
      [53.360, -9.900],
      [53.360, -9.815],
      [53.390, -9.790],
    ],
  },
]

// Restoration points 1-10, verbatim from map_info.md
export const restorationPoints = [
  { id: 1, name: 'Leckeen', bay: 'kilkieran', lon: -9.659690, lat: 53.370393, altitude: 7.75 },
  { id: 2, name: 'Duilicin', bay: 'kilkieran', lon: -9.661488, lat: 53.345062, altitude: 0.47 },
  { id: 3, name: 'Camus', bay: 'kilkieran', lon: -9.653333, lat: 53.329140, altitude: 0.45 },
  { id: 4, name: 'Casheen', bay: 'kilkieran', lon: -9.722282, lat: 53.256506, altitude: 10.62 },
  { id: 5, name: 'Greeve Island', bay: 'kilkieran', lon: -9.699839, lat: 53.329240, altitude: 30.71 },
  { id: 6, name: 'Oyster Bank', bay: 'bertraghboy', lon: -9.826062, lat: 53.406491, altitude: 6.91 },
  { id: 7, name: 'Rosroe', bay: 'bertraghboy', lon: -9.838672, lat: 53.393531, altitude: 7.43 },
  { id: 8, name: 'Cloone Island', bay: 'bertraghboy', lon: -9.885251, lat: 53.399803, altitude: 0.55 },
  { id: 9, name: 'Upper Cashel', bay: 'bertraghboy', lon: -9.820284, lat: 53.417370, altitude: -1.73 },
  { id: 10, name: 'Glynsk', bay: 'bertraghboy', lon: -9.844647, lat: 53.379095, altitude: -0.05 },
]
