import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ecosystemHotspots } from '../data/ecosystemEngineer'

export default function EcosystemEngineer() {
  const [openId, setOpenId] = useState(null)

  return (
    <div
      className="glass"
      style={{
        position: 'relative',
        minHeight: 360,
        overflow: 'hidden',
        backgroundImage:
          "linear-gradient(180deg, rgba(10,25,47,0.6), rgba(10,25,47,0.85)), url('https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {ecosystemHotspots.map((spot) => (
        <button
          key={spot.id}
          onClick={() => setOpenId(openId === spot.id ? null : spot.id)}
          style={{
            position: 'absolute',
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            transform: 'translate(-50%, -50%)',
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '2px solid var(--cyan)',
            background: 'rgba(14,165,233,0.25)',
            boxShadow: '0 0 20px rgba(14,165,233,0.5)',
            color: 'var(--text-h)',
            fontWeight: 700,
          }}
        >
          +
        </button>
      ))}

      <AnimatePresence>
        {ecosystemHotspots
          .filter((s) => s.id === openId)
          .map((spot) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass glass-panel"
              style={{
                position: 'absolute',
                left: `${spot.x > 50 ? spot.x - 34 : spot.x + 4}%`,
                top: `${Math.min(spot.y + 8, 60)}%`,
                maxWidth: 300,
                zIndex: 5,
              }}
            >
              <h3 style={{ color: 'var(--teal)', fontSize: '1.05rem' }}>{spot.title}</h3>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>{spot.description}</p>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  )
}
