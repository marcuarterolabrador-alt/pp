export function VeligerIcon() {
  // D-shaped bivalve veliger larva
  return (
    <svg viewBox="0 0 40 40" width="40" height="40">
      <path d="M20 6 A14 14 0 0 1 34 20 L20 20 Z" fill="#f0f9ff" opacity="0.9" />
      <path d="M20 6 A14 14 0 0 0 6 20 L20 20 Z" fill="#cbd5e1" opacity="0.9" />
      <circle cx="20" cy="24" r="5" fill="#0ea5e9" opacity="0.8" />
    </svg>
  )
}

export function CopepodIcon() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40">
      <ellipse cx="20" cy="18" rx="6" ry="10" fill="#facc15" />
      <line x1="20" y1="8" x2="8" y2="4" stroke="#facc15" strokeWidth="1.5" />
      <line x1="20" y1="8" x2="32" y2="4" stroke="#facc15" strokeWidth="1.5" />
      <line x1="20" y1="28" x2="14" y2="36" stroke="#facc15" strokeWidth="1.5" />
      <line x1="20" y1="28" x2="26" y2="36" stroke="#facc15" strokeWidth="1.5" />
    </svg>
  )
}

export function DiatomIcon() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40">
      <circle cx="20" cy="20" r="12" fill="none" stroke="#14b8a6" strokeWidth="2" />
      <circle cx="20" cy="20" r="6" fill="#14b8a6" opacity="0.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1="20"
          y1="20"
          x2={20 + 16 * Math.cos((deg * Math.PI) / 180)}
          y2={20 + 16 * Math.sin((deg * Math.PI) / 180)}
          stroke="#14b8a6"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

export function BarnacleIcon() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40">
      <polygon points="20,6 30,30 10,30" fill="#f43f5e" opacity="0.85" />
      <circle cx="20" cy="14" r="3" fill="#f0f9ff" />
    </svg>
  )
}

export const planktonIcons = {
  veliger: VeligerIcon,
  copepod: CopepodIcon,
  diatom: DiatomIcon,
  barnacle: BarnacleIcon,
}
