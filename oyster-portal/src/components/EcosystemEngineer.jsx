import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ecosystemHotspots } from '../data/ecosystemEngineer'
import reefBg from '../assets/oisre_reef_jff.webp'

export default function EcosystemEngineer() {
  const [openId, setOpenId] = useState('niche-diversification')

  return (
    <div className="grid-2" style={{ alignItems: 'stretch' }}>
      {/* Left side: Lightened, clear image card showing the reef structure */}
      <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 380, display: 'flex' }}>
        <img
          src={reefBg}
          alt="Oyster Reef Structural Matrix"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Very soft overlay at the bottom only for copyright readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, rgba(15, 23, 42, 0.45) 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Emojis Hotspot Selection Bar at the top-right of the image */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '0.75rem',
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            padding: '8px 12px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            zIndex: 20,
          }}
        >
          {ecosystemHotspots.map((spot) => {
            const isActive = openId === spot.id
            return (
              <button
                key={spot.id}
                onClick={() => setOpenId(spot.id)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  border: `2px solid ${isActive ? 'var(--teal)' : 'rgba(255,255,255,0.3)'}`,
                  background: isActive ? 'var(--teal)' : 'rgba(255, 255, 255, 0.15)',
                  boxShadow: isActive ? '0 0 12px var(--teal)' : 'none',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.25s',
                }}
                title={spot.title}
              >
                {spot.emoji}
              </button>
            )
          })}
        </div>
        <span
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '1rem',
            color: '#ffffff',
            fontSize: '0.7rem',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
            zIndex: 10,
          }}
        >
          Image taken by Dr. José M. Fariñas-Franco in Bertraghboy Bay.
        </span>
      </div>

      {/* Right side: Clean interactive explanation accordion cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
        {ecosystemHotspots.map((spot, idx) => {
          const isActive = openId === spot.id
          return (
            <div
              key={spot.id}
              onClick={() => setOpenId(spot.id)}
              className="glass"
              style={{
                cursor: 'pointer',
                padding: '1.5rem',
                borderColor: isActive ? 'var(--teal)' : 'var(--panel-border)',
                background: isActive ? 'rgba(20,184,166,0.06)' : 'var(--panel)',
                transition: 'all 0.3s',
                borderLeft: isActive ? '5px solid var(--teal)' : '1px solid var(--panel-border)',
                borderRadius: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    background: 'rgba(148, 163, 184, 0.12)',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}
                >
                  {spot.emoji}
                </span>
                <h4 style={{ margin: 0, color: isActive ? 'var(--teal)' : 'var(--text-h)', transition: 'color 0.3s' }}>
                  {spot.title}
                </h4>
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.6' }}>
                      {spot.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
