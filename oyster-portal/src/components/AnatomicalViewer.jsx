import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { organs } from '../data/organs'

export default function AnatomicalViewer() {
  const [activeId, setActiveId] = useState(organs[0].id)
  const active = organs.find((o) => o.id === activeId)

  return (
    <div className="grid-2 glass glass-panel" style={{ alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <svg viewBox="0 0 100 100" style={{ width: '100%', maxWidth: 360, margin: '0 auto', display: 'block' }}>
          <defs>
            <radialGradient id="shellGrad" cx="45%" cy="35%" r="75%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="55%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </radialGradient>
          </defs>
          <path
            d="M50 8 C72 10, 90 30, 88 55 C86 78, 68 92, 50 92 C32 92, 14 78, 12 55 C10 30, 28 10, 50 8 Z"
            fill="url(#shellGrad)"
            stroke="#0ea5e9"
            strokeWidth="0.6"
            opacity="0.9"
          />
          {[18, 30, 42, 54, 66].map((r) => (
            <path
              key={r}
              d={`M50 ${8 + (r - 8) * 0} C ${50 + r * 0.44} ${8 + r * 0.15}, ${50 + r * 0.5} ${8 + r * 0.75}, 50 ${8 + r}`}
              fill="none"
              stroke="#64748b"
              strokeWidth="0.3"
              opacity="0.5"
            />
          ))}
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
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
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
