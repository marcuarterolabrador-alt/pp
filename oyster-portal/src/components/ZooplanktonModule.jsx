import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Anchor, Gauge, Ship } from 'lucide-react'
import { netTowSteps } from '../data/zooplankton'

const iconFor = { mesh: Anchor, flowmeter: Gauge, tow: Ship }

export default function ZooplanktonModule() {
  const [openId, setOpenId] = useState('mesh')
  const active = netTowSteps.find((s) => s.id === openId)

  const positions = { mesh: { x: 20, y: 55 }, flowmeter: { x: 50, y: 45 }, tow: { x: 80, y: 25 } }

  return (
    <div className="grid-2" style={{ alignItems: 'center' }}>
      <div
        className="glass"
        style={{
          position: 'relative',
          minHeight: 260,
          backgroundImage:
            "linear-gradient(180deg, rgba(10,25,47,0.5), rgba(10,25,47,0.85)), url('https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=900&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {netTowSteps.map((s) => {
          const Icon = iconFor[s.id]
          const pos = positions[s.id]
          return (
            <button
              key={s.id}
              onClick={() => setOpenId(s.id)}
              style={{
                position: 'absolute',
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: 'translate(-50%, -50%)',
                width: 46,
                height: 46,
                borderRadius: '50%',
                border: `2px solid ${openId === s.id ? 'var(--teal)' : 'var(--cyan)'}`,
                background: openId === s.id ? 'rgba(20,184,166,0.3)' : 'rgba(14,165,233,0.2)',
                boxShadow: `0 0 16px ${openId === s.id ? 'rgba(20,184,166,0.6)' : 'rgba(14,165,233,0.4)'}`,
                color: '#f0f9ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={20} />
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass glass-panel"
        >
          <h3 style={{ color: 'var(--teal)' }}>{active.title}</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>{active.detail}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
