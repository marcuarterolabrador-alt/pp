import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, RotateCcw } from 'lucide-react'
import { zooplanktonTargets, totalOysterLarvae } from '../data/zooplankton'
import { planktonIcons } from './PlanktonIcons'

const sampleDate = '2026-06-14'

export default function MicroscopeGame() {
  const [found, setFound] = useState({}) // id -> 'correct' | 'wrong'

  const score = Object.values(found).filter((v) => v === 'correct').length

  const handleClick = (target) => {
    if (found[target.id]) return
    setFound((f) => ({ ...f, [target.id]: target.isOyster ? 'correct' : 'wrong' }))
  }

  const reset = () => setFound({})

  return (
    <div className="glass glass-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: '1rem' }}>
        <div>
          <span className="pill">Sample Date: {sampleDate}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="pill" style={{ background: 'rgba(20,184,166,0.15)', color: 'var(--teal)' }}>
            Oysters Spotted: {score} / {totalOysterLarvae}
          </span>
          <button onClick={reset} className="pill" style={{ border: 'none' }}>
            <RotateCcw size={13} /> Reset
          </button>
        </div>
      </div>

      <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        Click on every flat oyster larva (veliger) in the sample. Other zooplankton will mark a miss.
      </p>

      <div
        style={{
          position: 'relative',
          minHeight: 360,
          borderRadius: 12,
          border: '2px solid rgba(14,165,233,0.3)',
          background:
            'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.12), rgba(10,25,47,0.9) 70%)',
          overflow: 'hidden',
        }}
      >
        {zooplanktonTargets.map((t) => {
          const Icon = planktonIcons[t.type]
          const state = found[t.id]
          return (
            <button
              key={t.id}
              onClick={() => handleClick(t)}
              style={{
                position: 'absolute',
                left: `${t.x}%`,
                top: `${t.y}%`,
                transform: 'translate(-50%, -50%)',
                background: 'transparent',
                border: 'none',
                opacity: state ? 0.5 : 1,
              }}
            >
              <Icon />
              <AnimatePresence>
                {state && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    style={{ position: 'absolute', top: -6, right: -6 }}
                  >
                    {state === 'correct' ? (
                      <Check size={18} color="var(--teal)" style={{ background: '#0f172a', borderRadius: '50%' }} />
                    ) : (
                      <X size={18} color="var(--coral)" style={{ background: '#0f172a', borderRadius: '50%' }} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </div>
    </div>
  )
}
