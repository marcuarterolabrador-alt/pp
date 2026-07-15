import { Users } from 'lucide-react'

export default function TEKCard() {
  return (
    <div className="glass glass-panel">
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.75rem' }}>
        <Users size={22} color="var(--teal)" />
        <h3 style={{ margin: 0 }}>Traditional Fisheries Knowledge
        </h3>
      </div>
      <p style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>
        Native oyster restoration is carried out in close collaboration with fishermen from the{' '}
        <strong style={{ color: 'var(--text)' }}>Galway &amp; Aran Fishermen&apos;s Co-operative</strong>. The
        research group hires local fishermen and their vessels for fieldwork, directly integrating historical
        knowledge and experience into the research and fostering community engagement, sensitisation, and
        co-management.
      </p>
      <p style={{ color: 'var(--text-dim)', margin: 0 }}>
        Alongside this field-based collaboration, a comprehensive meta-analysis of{' '}
        <strong style={{ color: 'var(--text)' }}>historical Irish fisheries reports</strong> to reconstruct past
        baselines is being conducted. This archival research aims to pinpoint the exact locations of ancient oyster
        beds, as well as document historical fishing efforts and early restoration or cultivation attempts.
      </p>
    </div >
  )
}
