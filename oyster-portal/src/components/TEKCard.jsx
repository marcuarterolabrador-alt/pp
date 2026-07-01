import { Users } from 'lucide-react'

export default function TEKCard() {
  return (
    <div className="glass glass-panel">
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.75rem' }}>
        <Users size={22} color="var(--teal)" />
        <h3 style={{ margin: 0 }}>Traditional Ecological Knowledge (TEK)</h3>
      </div>
      <p style={{ color: 'var(--text-dim)' }}>
        Native oyster restoration is carried out in close collaboration with fishermen from the{' '}
        <strong style={{ color: 'var(--text)' }}>Galway &amp; Aran Fishermen&apos;s Co-operative</strong>. The
        research group hires local fishermen and their vessels for fieldwork, directly integrating historical
        knowledge and experience into the research and fostering community engagement, sensitisation, and
        co-management &mdash; aligning directly with the MFRC&apos;s pillars of sustainability and industry
        collaboration.
      </p>
    </div>
  )
}
