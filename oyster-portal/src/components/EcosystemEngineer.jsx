import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ecosystemHotspots } from '../data/ecosystemEngineer'
import reefBg from '../assets/oisre_reef_jff.webp'

export default function EcosystemEngineer() {
  const [openId, setOpenId] = useState('habitat-complexity')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '850px', margin: '0 auto 0.5rem' }}>
        <p style={{ margin: 0, color: 'var(--text)', fontSize: '0.98rem', lineHeight: '1.65', textAlign: 'center' }}>
          <em>Ostrea edulis</em> is a large-scale biogenic reef builder. Often referred to as the temperate functional equivalent of coral reefs (Ritter von Hamm, 1881), these oysters form elevated, three-dimensional structures over large areas. By physically transforming the seafloor from flat sediment into a complex, living landscape, they drive key ecological processes and interact dynamically with the entire surrounding marine environment.
        </p>
        <div style={{
          border: '1px solid var(--panel-border)',
          borderRadius: '12px',
          padding: '0.75rem 1.25rem',
          background: 'var(--panel)',
          backdropFilter: 'blur(8px)',
          textAlign: 'center',
          maxWidth: '100%',
          width: 'fit-content',
          margin: '0 auto 0.5rem',
          boxShadow: 'var(--glow)',
          alignSelf: 'center'
        }}>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#000000', fontWeight: 'normal', fontSize: '0.92rem' }}>
            Click on the emojis in the image below to explore the diverse ecosystem functions provided by this biogenic habitat.
          </p>
        </div>
      </div>

      <div className="grid-2" style={{ alignItems: 'stretch' }}>
        {/* Left side: Lightened, clear image card showing the reef structure with selection bar */}
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
                <motion.button
                  key={spot.id}
                  onClick={() => setOpenId(spot.id)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: `2px solid ${isActive ? 'var(--teal)' : 'rgba(255,255,255,0.35)'}`,
                    background: isActive ? 'var(--teal)' : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: isActive ? '0 0 12px var(--teal)' : 'none',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'border-color 0.25s, background-color 0.25s, box-shadow 0.25s',
                  }}
                  title={spot.title}
                >
                  {spot.emoji}
                </motion.button>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
          {ecosystemHotspots.map((spot, idx) => {
            const isActive = openId === spot.id
            return (
              <div
                key={spot.id}
                onClick={() => setOpenId(spot.id)}
                className="glass"
                style={{
                  cursor: 'pointer',
                  padding: '1rem 1.25rem',
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
                  <h4 style={{ margin: 0, color: isActive ? 'var(--teal)' : 'var(--text-h)', transition: 'color 0.3s', fontSize: '0.95rem' }}>
                    {spot.title}
                  </h4>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.5' }}>
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
    </div>
  )
}
