export const comparisonZones = {
  control: {
    habitatType: 'Bare Mud / Non-Reef Sediment',
    taxaComposition: [
      { group: 'Polychaetes (opportunistic)', abundance: 'High', count: 2 },
      { group: 'Amphipods', abundance: 'Rare', count: 0 },
      { group: 'Decapods', abundance: 'Absent/Rare', count: 0 },
    ],
    diversityIndices: { shannonH: 1.1, evennessJ: 0.3 },
  },
  restored: {
    habitatType: 'Ostrea edulis Reef Matrix',
    taxaComposition: [
      { group: 'Amphipods', abundance: 'Very High', count: 3 },
      { group: 'Decapod Crabs', abundance: 'High', count: 2 },
      { group: 'Polychaetes (mixed)', abundance: 'High', count: 2 },
    ],
    diversityIndices: { shannonH: 3.4, evennessJ: 0.8 },
  },
}

// Fauna items for the sorting game; correctZone indicates where each organism belongs
export const faunaPool = [
  { id: 'amphipod-1', group: 'Amphipods', correctZone: 'restored' },
  { id: 'amphipod-2', group: 'Amphipods', correctZone: 'restored' },
  { id: 'decapod-1', group: 'Decapods', correctZone: 'restored' },
  { id: 'decapod-2', group: 'Decapods', correctZone: 'restored' },
  { id: 'polychaete-1', group: 'Polychaetes', correctZone: 'restored' },
  { id: 'polychaete-2', group: 'Polychaetes', correctZone: 'control' },
  { id: 'polychaete-3', group: 'Polychaetes', correctZone: 'control' },
]
