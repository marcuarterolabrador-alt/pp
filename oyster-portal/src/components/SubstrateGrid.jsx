import { useState } from 'react'
import { substrates, enhancementCues } from '../data/substrates'
import { substrateIcons } from './SubstrateIcons'
import spatImg from '../assets/spat_native_oyster_tiles.jpeg'
import scallopsImg from '../assets/scallops.jpeg'
import spatScallopImg from '../assets/spat_scallop.jpeg'
import coupellesImg from '../assets/coupelles.png'

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
  const [answers, setAnswers] = useState({ native: '', saddle: '' })

  const handleInputChange = (val) => {
    setAnswers((prev) => ({ ...prev, [selectedSpat]: val.trim() }))
  }

  const currentVal = answers[selectedSpat]
  const isCorrect = selectedSpat === 'native' ? currentVal === '1' : currentVal === '9'

  const toggle = (id) => setFlipped((f) => ({ ...f, [id]: !f[id] }))

  return (
    <div>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text)', fontSize: '1rem', lineHeight: '1.6' }}>
        Different types of substrate have been and will be deployed in the study bays to promote oyster settlement. Flip each card for more information: 
      </p>

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
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    {s.id === 'scallop-shell' ? (
                      <div style={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                         <img src={scallopsImg} alt="Scallop Shells" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                    ) : s.id === 'chinese-hats' ? (
                      <div style={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                         <img src={coupellesImg} alt="Coupelles" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                    ) : (
                      <Icon />
                    )}
                  </div>
                  <h3 style={{ textAlign: 'center', marginTop: (s.id === 'scallop-shell' || s.id === 'chinese-hats') ? '12px' : '0' }}>{s.name}</h3>
                  {s.latin && s.id !== 'scallop-shell' && (
                    <p style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                      {s.latin}
                    </p>
                  )}
                </div>
                <div className="flip-card-back glass" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}>
                  {s.id === 'scallop-shell' ? (
                    <>
                      <div style={{ width: '100%', height: '110px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--panel-border)', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                        <img src={spatScallopImg} alt="Spat on scallop shell" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                      <p style={{ fontSize: '0.76rem', color: 'var(--text-dim)', margin: 0, lineHeight: '1.4' }}>
                        Scallop shells, a by-product of scallop fisheries, can be easily deployed and serves as substrate for the native oyster to settle.
                      </p>
                    </>
                  ) : (
                    <>
                      <dl style={{ margin: 0, fontSize: '0.82rem' }}>
                        <Row label="Settlement" value={s.settlement} />
                        <Row label="Stability" value={s.stability} />
                        <Row label="Logistics" value={s.logistics} />
                      </dl>
                      <p style={{ fontSize: '0.78rem', color: 'var(--teal)', marginTop: 10, marginBottom: 2 }}>Pros</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>{s.pros}</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--coral)', marginTop: 10, marginBottom: 2 }}>Cons</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>{s.cons}</p>
                    </>
                  )}
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

            {/* Counting Challenge Box */}
            <div className="glass" style={{ padding: '1.25rem', background: 'rgba(15, 23, 42, 0.15)', border: '1px solid rgba(148, 163, 184, 0.12)', borderRadius: '10px' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-h)' }}>
                How many can you count in this picture?
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="Enter number..."
                  value={currentVal}
                  onChange={(e) => handleInputChange(e.target.value)}
                  style={{
                    width: '120px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--panel-border)',
                    background: 'var(--panel)',
                    color: 'var(--text)',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
                {currentVal !== '' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}>
                    {isCorrect ? (
                      <span style={{ color: 'var(--teal)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: 4 }}>
                        ✓ Correct
                      </span>
                    ) : (
                      <span style={{ color: 'var(--coral)', fontWeight: '600' }}>
                        ✗ Incorrect
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0.5rem 0 0 0', fontStyle: 'italic' }}>
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
            <span
              style={{
                position: 'absolute',
                bottom: '0.5rem',
                left: '0.75rem',
                color: '#ffffff',
                fontSize: '0.7rem',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                zIndex: 10,
              }}
            >
              Image taken by Tiffany Montfort
            </span>

            {/* Hotspot 1: Ostrea edulis spat */}
            <button
              onClick={() => setSelectedSpat('native')}
              style={{
                position: 'absolute',
                left: '45%',
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
                left: '69%',
                top: '58%',
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
