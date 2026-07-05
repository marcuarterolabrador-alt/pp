import { useState } from 'react'
import { substrates, enhancementCues } from '../data/substrates'
import { substrateIcons } from './SubstrateIcons'
import spatImg from '../assets/spat_native_oyster_tiles.jpeg'

const spatDetails = {
  native: {
    title: 'Native Oyster Spat (Ostrea edulis)',
    scientific: 'Ostrea edulis',
    abundance: 'Target Species',
    description:
      'The primary target of restoration efforts. These juvenile oysters settle on the clean calcified surfaces of the cultch. Over 1, 2, or more years, they build their permanent shells, forming the base of the biogenic reef matrix.',
  },
  saddle: {
    title: 'Saddle Oyster Spat (Anomia ephippium)',
    scientific: 'Anomia ephippium',
    abundance: 'Competitor Species',
    description:
      'A common bivalve competitor that also settles on cultch. Unlike the native oyster, saddle oysters have very thin, translucent, pearly shells and do not form three-dimensional reefs. Monitoring their abundance helps evaluate space competition on the cultch.',
  },
}

export default function SubstrateGrid() {
  const [flipped, setFlipped] = useState({})
  const [selectedSpat, setSelectedSpat] = useState('native')

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

      {/* Spat Evaluation & Monitoring Section */}
      <div className="glass glass-panel" style={{ marginTop: '2.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>
          <span className="pill">Cultch Effectiveness Monitoring</span>
          <h3 style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>Oyster Spat Recruitment Evaluation</h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
            To measure how well different substrates perform, scientists conduct long-term monitoring. The settled oyster spat (larvae that have successfully attached and metamorphosed) are counted on the cultch after 1, 2, or more years of field deployment.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Spat details description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass" style={{ padding: '1.5rem', borderLeft: `4px solid ${selectedSpat === 'native' ? 'var(--teal)' : 'var(--cyan)'}` }}>
              <span className="pill" style={{ background: selectedSpat === 'native' ? 'rgba(20,184,166,0.15)' : 'rgba(14,165,233,0.15)', color: selectedSpat === 'native' ? 'var(--teal)' : 'var(--cyan)' }}>
                {spatDetails[selectedSpat].abundance}
              </span>
              <h4 style={{ margin: '0.5rem 0 0.25rem 0', fontSize: '1.2rem', color: 'var(--text-h)' }}>
                {spatDetails[selectedSpat].title}
              </h4>
              <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0 0 1rem 0' }}>
                {spatDetails[selectedSpat].scientific}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
                {spatDetails[selectedSpat].description}
              </p>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0, fontStyle: 'italic' }}>
              * Click on the labels overlaying the image to inspect and identify each species on the collector tiles.
            </p>
          </div>

          {/* Interactive photo with hotspots */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              display: 'flex',
            }}
          >
            <img
              src={spatImg}
              alt="Oyster spat on collector tiles"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            />

            {/* Hotspot 1: Ostrea edulis spat */}
            <button
              onClick={() => setSelectedSpat('native')}
              style={{
                position: 'absolute',
                left: '35%',
                top: '45%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: selectedSpat === 'native' ? 'var(--teal)' : 'rgba(15, 23, 42, 0.75)',
                border: `2px solid ${selectedSpat === 'native' ? '#ffffff' : 'var(--teal)'}`,
                boxShadow: selectedSpat === 'native' ? '0 0 12px var(--teal)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s',
                zIndex: 10,
                padding: 0,
              }}
              title="Native Oyster Spat"
            />

            {/* Hotspot 2: Saddle oyster spat */}
            <button
              onClick={() => setSelectedSpat('saddle')}
              style={{
                position: 'absolute',
                left: '65%',
                top: '55%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: selectedSpat === 'saddle' ? 'var(--cyan)' : 'rgba(15, 23, 42, 0.75)',
                border: `2px solid ${selectedSpat === 'saddle' ? '#ffffff' : 'var(--cyan)'}`,
                boxShadow: selectedSpat === 'saddle' ? '0 0 12px var(--cyan)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s',
                zIndex: 10,
                padding: 0,
              }}
              title="Saddle Oyster Spat"
            />
          </div>
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
