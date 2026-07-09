import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { organs } from '../data/organs'
import anatomyImg from '../assets/anatomy1-removebg-preview.png'
import introImg from '../assets/ostrea_intro.jpeg'

export default function AnatomicalViewer() {
  const [activeId, setActiveId] = useState(organs[0].id)
  const active = organs.find((o) => o.id === activeId)

  return (
    <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: 'var(--teal)', marginBottom: '0.5rem' }}>Ostrea edulis</h3>
          <p style={{ margin: 0, color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <em>Ostrea edulis</em>, commonly known as the European flat oyster or native oyster, is a marine bivalve mollusc native to Europe. Highly prized as a delicacy, this species is a key ecosystem engineer, forming complex biogenic reefs that stabilize seabeds, filter coastal waters, and provide critical shelter and nursery habitats for a diverse array of marine species.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0, margin: '0 auto' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <img src={introImg} alt="Ostrea edulis native oyster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--text-dim)', textAlign: 'center', maxWidth: '190px', lineHeight: '1.2' }}>
            Photo by Christine Morrow via iNaturalist / CC BY-NC 4.0
          </span>
        </div>
      </div>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <figure style={{ margin: 0 }}>
            <svg viewBox="0 200 433 377" style={{ width: '100%', maxWidth: 580, margin: '0 auto', display: 'block' }}>
              <image
                href={anatomyImg}
                x="0"
                y="0"
                width="433"
                height="577"
              />
              {organs.map((organ) => (
                <g key={organ.id} transform={`translate(${(organ.coordinates.x * 433) / 100}, ${(organ.coordinates.y * 577) / 100})`}>
                  <circle
                    r={activeId === organ.id ? 8 : 5.5}
                    fill={activeId === organ.id ? 'rgba(20,184,166,0.9)' : 'rgba(14,165,233,0.7)'}
                    stroke="#f0f9ff"
                    strokeWidth="1.2"
                    style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                    onMouseEnter={() => setActiveId(organ.id)}
                    onClick={() => setActiveId(organ.id)}
                  />
                  {activeId === organ.id && (
                    <circle r="14" fill="none" stroke="#14b8a6" strokeWidth="0.8" opacity="0.6">
                      <animate attributeName="r" values="8;16;8" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              ))}
            </svg>
            <figcaption style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.75rem', lineHeight: '1.4' }}>
              Image from Dr. José M. Fariñas-Franco
            </figcaption>
          </figure>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem', marginBottom: 0 }}>
            Hover or click the hotspots to explore <em>Ostrea edulis</em> anatomy.
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '1rem' }}>
            {organs.map((organ) => (
              <button
                key={organ.id}
                onClick={() => setActiveId(organ.id)}
                className="pill"
                style={{
                  border: 'none',
                  background: activeId === organ.id ? 'rgba(20,184,166,0.2)' : 'rgba(148,163,184,0.1)',
                  color: activeId === organ.id ? 'var(--teal)' : 'var(--text-dim)',
                }}
              >
                {organ.name}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 style={{ color: 'var(--teal)' }}>{active.name}</h3>
              <p style={{ color: 'var(--text)' }}>{active.function}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
