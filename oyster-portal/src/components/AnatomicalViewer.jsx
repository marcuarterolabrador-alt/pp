import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { organs } from '../data/organs'
import anatomyImg from '../assets/ostrea_edulis_organs-removebg-preview.png'

export default function AnatomicalViewer() {
  const [activeId, setActiveId] = useState(organs[0].id)
  const active = organs.find((o) => o.id === activeId)

  return (
    <div className="grid-2 glass glass-panel" style={{ alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <figure style={{ margin: 0 }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', maxWidth: 460, margin: '0 auto', display: 'block' }}>
            <image
              href={anatomyImg}
              x="0"
              y="0"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid meet"
            />
            {organs.map((organ) => (
              <g key={organ.id} transform={`translate(${organ.coordinates.x}, ${organ.coordinates.y})`}>
                <circle
                  r={activeId === organ.id ? 5 : 3.5}
                  fill={activeId === organ.id ? 'rgba(20,184,166,0.9)' : 'rgba(14,165,233,0.7)'}
                  stroke="#f0f9ff"
                  strokeWidth="0.6"
                  style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                  onMouseEnter={() => setActiveId(organ.id)}
                  onClick={() => setActiveId(organ.id)}
                />
                {activeId === organ.id && (
                  <circle r="8" fill="none" stroke="#14b8a6" strokeWidth="0.4" opacity="0.6">
                    <animate attributeName="r" values="5;9;5" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            ))}
          </svg>
          <figcaption style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.75rem', lineHeight: '1.4' }}>
            Image: FAO / P. Goulletquer (2009).
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
  )
}
