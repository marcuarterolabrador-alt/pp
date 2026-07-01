// Positions are percentages within the microscope viewport
export const zooplanktonTargets = [
  { id: 'veliger-1', type: 'veliger', isOyster: true, x: 22, y: 30 },
  { id: 'veliger-2', type: 'veliger', isOyster: true, x: 68, y: 22 },
  { id: 'veliger-3', type: 'veliger', isOyster: true, x: 45, y: 68 },
  { id: 'copepod-1', type: 'copepod', isOyster: false, x: 15, y: 70 },
  { id: 'copepod-2', type: 'copepod', isOyster: false, x: 80, y: 55 },
  { id: 'diatom-1', type: 'diatom', isOyster: false, x: 55, y: 40 },
  { id: 'diatom-2', type: 'diatom', isOyster: false, x: 30, y: 82 },
  { id: 'barnacle-larva', type: 'barnacle', isOyster: false, x: 78, y: 78 },
]

export const totalOysterLarvae = zooplanktonTargets.filter((t) => t.isOyster).length

export const netTowSteps = [
  {
    id: 'mesh',
    title: 'Plankton Net Mesh',
    detail: 'A fine 100 µm mesh net retains veliger-stage larvae (~150-350 µm) while allowing finer particles to pass through.',
  },
  {
    id: 'flowmeter',
    title: 'Flowmeter',
    detail: 'A mechanical flowmeter mounted in the net mouth records rotor revolutions, used to calculate the volume of water filtered during the tow.',
  },
  {
    id: 'tow',
    title: 'Tow Length & Duration',
    detail: 'The boat performs a horizontal or oblique tow of a set length (metres) at low speed, standardising sampling effort across sites.',
  },
]
