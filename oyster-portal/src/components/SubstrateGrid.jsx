import { useState } from 'react'
import { substrates, enhancementCues } from '../data/substrates'
import { substrateIcons } from './SubstrateIcons'

export default function SubstrateGrid() {
  const [flipped, setFlipped] = useState({})

  const toggle = (id) => setFlipped((f) => ({ ...f, [id]: !f[id] }))

  return (
    <div>
      <div className="grid-auto">
        {substrates.map((s) => {
          const Icon = substrateIcons[s.id]
          const isFlipped = !!flipped[s.id]
          return (
            <div
              key={s.id}
              className={`flip-card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => toggle(s.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front glass">
                  <span
                    className={`pill ${s.status === 'Future Trial' ? 'coral' : ''}`}
                    style={{ alignSelf: 'flex-start' }}
                  >
                    {s.status}
                  </span>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon />
                  </div>
                  <h3 style={{ textAlign: 'center' }}>{s.name}</h3>
                  {s.latin && (
                    <p style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                      {s.latin}
                    </p>
                  )}
                </div>
                <div className="flip-card-back glass">
                  <dl style={{ margin: 0, fontSize: '0.82rem' }}>
                    <Row label="Settlement" value={s.settlement} />
                    <Row label="Stability" value={s.stability} />
                    <Row label="Logistics" value={s.logistics} />
                  </dl>
                  <p style={{ fontSize: '0.78rem', color: 'var(--teal)', marginTop: 10, marginBottom: 2 }}>Pros</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>{s.pros}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--coral)', marginTop: 10, marginBottom: 2 }}>Cons</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>{s.cons}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="glass glass-panel" style={{ marginTop: '2rem' }}>
        <h3>Settlement Enhancement Cues</h3>
        <div className="grid-auto">
          {enhancementCues.map((c) => (
            <div key={c.id}>
              <h3 style={{ fontSize: '1rem', color: 'var(--teal)' }}>{c.name}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', margin: 0 }}>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--panel-border)' }}>
      <dt style={{ color: 'var(--text-dim)' }}>{label}</dt>
      <dd style={{ margin: 0 }}>{value}</dd>
    </div>
  )
}
