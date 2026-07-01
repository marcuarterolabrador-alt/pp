export function ScallopIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72">
      <path
        d="M32 8 L48 30 Q54 44 32 56 Q10 44 16 30 Z"
        fill="#e2e8f0"
        stroke="#0ea5e9"
        strokeWidth="1.5"
      />
      {[-16, -8, 0, 8, 16].map((dx) => (
        <line key={dx} x1="32" y1="12" x2={32 + dx} y2="54" stroke="#64748b" strokeWidth="0.8" />
      ))}
    </svg>
  )
}

export function ChineseHatIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72">
      <polygon points="32,10 52,50 12,50" fill="#94a3b8" stroke="#14b8a6" strokeWidth="1.5" />
      <ellipse cx="32" cy="50" rx="20" ry="5" fill="#64748b" />
      <ellipse cx="32" cy="38" rx="13" ry="3.4" fill="none" stroke="#0ea5e9" strokeWidth="0.8" />
      <ellipse cx="32" cy="26" rx="7" ry="2" fill="none" stroke="#0ea5e9" strokeWidth="0.8" />
    </svg>
  )
}

export function RoofTileIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72">
      {[10, 22, 34, 44].map((y, i) => (
        <rect key={y} x={8 + (i % 2) * 3} y={y} width="48" height="9" rx="2" fill="#b45309" opacity={0.85 - i * 0.1} />
      ))}
    </svg>
  )
}

export function LimestoneIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72">
      <path
        d="M14 44 Q10 30 24 24 Q30 10 44 16 Q56 18 54 34 Q58 46 44 48 Q30 54 14 44 Z"
        fill="#cbd5e1"
        stroke="#7e93ad"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function BiomoduleIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72">
      <circle cx="32" cy="22" r="14" fill="#14b8a6" opacity="0.7" />
      <rect x="29" y="32" width="6" height="22" rx="3" fill="#64748b" />
    </svg>
  )
}

export const substrateIcons = {
  'scallop-shell': ScallopIcon,
  'chinese-hats': ChineseHatIcon,
  'roof-tiles': RoofTileIcon,
  limestone: LimestoneIcon,
  biomodules: BiomoduleIcon,
}
