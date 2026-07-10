import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Compass, Shield } from 'lucide-react'

// Import microscope photography of larvae
import larvae0 from '../assets/larvae0.jpeg'
import larvae1 from '../assets/larvae1.jpeg'
import larvae2 from '../assets/larvae2.jpeg'
import larvae3 from '../assets/larvae3.jpeg'
import larvae4 from '../assets/larvae4.jpeg'
import larvae5 from '../assets/larvae5.jpeg'
import larvae6 from '../assets/larvae6.jpeg'
import larvae7 from '../assets/larvae7.jpeg'

const larvalStages = [
  {
    id: 'stage0',
    name: 'Early Veliger (Day 2 – 3)',
    description:
      'The newly formed straight-hinge D-stage shell. The larva begins active swimming and filter-feeding on phytoplankton in the water column.',
    size: '110 – 120 µm',
    age: '2 – 3 days post-spawning',
    image: larvae0,
    style: {
      position: 'absolute',
      width: '330.5px',
      height: '440.6px',
      left: '-13.1px',
      top: '-23.9px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
  {
    id: 'stage1',
    name: 'Mid Veliger (Day 4 – 5)',
    description:
      'The shell grows rapidly, and the internal organs—including the digestive tract and ciliated velum—start to become more distinct.',
    size: '125 – 145 µm',
    age: '4 – 5 days post-spawning',
    image: larvae1,
    style: {
      position: 'absolute',
      width: '253.5px',
      height: '338.0px',
      left: '-20.0px',
      top: '-60.0px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
  {
    id: 'stage2',
    name: 'Early Umbonate (Day 6 – 8)',
    description:
      'The shell transitions from the straight D-hinge to an asymmetric shape as the umbo (hinge bulge) begins to form.',
    size: '150 – 175 µm',
    age: '6 – 8 days post-spawning',
    image: larvae2,
    style: {
      position: 'absolute',
      width: '288.3px',
      height: '384.5px',
      left: '-12.3px',
      top: '-113.2px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
  {
    id: 'stage3',
    name: 'Mid Umbonate (Day 9 – 11)',
    description:
      'The shell thickness and opacity increase. The larva exhibits high metabolic activity as it calcifies its growing protective shell.',
    size: '180 – 210 µm',
    age: '9 – 11 days post-spawning',
    image: larvae3,
    style: {
      position: 'absolute',
      width: '291.3px',
      height: '388.4px',
      left: '1.1px',
      top: '-96.0px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
  {
    id: 'stage4',
    name: 'Late Umbonate (Day 12 – 13)',
    description:
      'The shell is almost fully rounded. The larva\'s internal organs are highly developed, preparing for the transition to the crawler phase.',
    size: '220 – 245 µm',
    age: '12 – 13 days post-spawning',
    image: larvae4,
    style: {
      position: 'absolute',
      width: '288.7px',
      height: '385.0px',
      left: '-0.5px',
      top: '-94.8px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
  {
    id: 'stage5',
    name: 'Early Pediveliger (Day 14 – 16)',
    description:
      'Sensory eyespots and the early development of a muscular, ciliated foot become visible under the microscope.',
    size: '250 – 275 µm',
    age: '14 – 16 days post-spawning',
    image: larvae5,
    style: {
      position: 'absolute',
      width: '396.4px',
      height: '528.5px',
      left: '-33.6px',
      top: '-168.5px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
  {
    id: 'stage6',
    name: 'Late Pediveliger (Day 17 – 19)',
    description:
      'The larva alternates between swimming and using its muscular foot to crawl and search for hard, calcium-rich settlement substrates.',
    size: '280 – 300 µm',
    age: '17 – 19 days post-spawning',
    image: larvae6,
    style: {
      position: 'absolute',
      width: '307.5px',
      height: '410.0px',
      left: '-8.0px',
      top: '-64.7px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
  {
    id: 'stage7',
    name: 'Pre-Settlement / Spat Transition (Day 20+)',
    description:
      'The final larval stage. Once a suitable substrate is selected, the larva cements itself permanently and begins its transformation into a juvenile spat.',
    size: '300+ µm',
    age: '20+ days post-spawning',
    image: larvae7,
    style: {
      position: 'absolute',
      width: '323.0px',
      height: '430.6px',
      left: '-67.1px',
      top: '-93.9px',
      maxWidth: 'none',
      maxHeight: 'none',
    }
  },
]

export default function LarvaeObservation() {
  const [stageIndex, setStageIndex] = useState(0)
  const currentStage = larvalStages[stageIndex]

  const nextStage = () => {
    setStageIndex((prev) => (prev + 1) % larvalStages.length)
  }

  const prevStage = () => {
    setStageIndex((prev) => (prev - 1 + larvalStages.length) % larvalStages.length)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Step 1: Net Tow Explanation */}
      <div className="grid-2 glass glass-panel" style={{ alignItems: 'center' }}>
        <div>
          <span className="pill">Larvae Sampling Protocol</span>
          <h3 style={{ marginTop: '0.75rem', color: 'var(--teal)' }}>Zooplankton Mesh Net Towing</h3>
          <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            To monitor wild native oyster populations, scientists conduct plankton sampling during the summer spawning seasons. A specialized **zooplankton net with a fine 100 µm mesh** is towed horizontally or obliquely at low speeds behind a research vessel.
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
            This specific mesh size allows seawater and fine mud particles to escape while capturing delicate bivalve larvae. A mechanical flowmeter mounted in the mouth of the net calculates the exact volume of filtered water, standardizing the larval density counts (larvae/m³) across the bays of Kilkieran and Bertraghboy.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass" style={{ padding: '1.25rem', borderLeft: '4px solid var(--cyan)' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.5rem' }}>
              <Compass size={18} color="var(--cyan)" />
              <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Flowmeter Calibration</h4>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', margin: 0 }}>
              Enables quantitative assessments of larval abundance by calculating water volume passing through the net.
            </p>
          </div>

          <div className="glass" style={{ padding: '1.25rem', borderLeft: '4px solid var(--teal)' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.5rem' }}>
              <Shield size={18} color="var(--teal)" />
              <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Mesh Selectivity</h4>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', margin: 0 }}>
              The 100 µm weave keeps veliger and pediveliger larvae safe in the cod-end bottle without clogging the net.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2: Microscope Eyepiece Carousel */}
      <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 620 }}>
          <span className="pill">Microscope Observation</span>
          <h3 style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>Larval Development Stages</h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>
            Use the carousel controls to view microscope photographs of the oysters in their planktonic development phases.
          </p>
        </div>

        {/* The Microscope Assembly */}
        <div
          className="microscope-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
            padding: '2.5rem 2rem 2rem',
            borderRadius: '24px',
            border: '2px solid rgba(14, 165, 233, 0.25)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            width: '100%',
            maxWidth: '560px',
          }}
        >
          {/* Eyepiece / Lens Viewer */}
          <div
            className="microscope-lens-container"
            style={{
              position: 'relative',
              borderRadius: '50%',
              border: '12px solid #334155',
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.95), 0 10px 25px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              background: '#090d16',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Slide Viewport */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStage.id}
                  src={currentStage.image}
                  alt={currentStage.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={currentStage.style}
                />
              </AnimatePresence>

              {/* Lens Reticle / Graticule Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  border: '1px dashed rgba(148, 163, 184, 0.25)',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'rgba(148, 163, 184, 0.18)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'rgba(148, 163, 184, 0.18)',
                  pointerEvents: 'none',
                }}
              />
              {/* Concentric Measurement Circles */}
              <div
                style={{
                  position: 'absolute',
                  top: '25%',
                  left: '25%',
                  width: '50%',
                  height: '50%',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12.5%',
                  left: '12.5%',
                  width: '75%',
                  height: '75%',
                  border: '1px dashed rgba(148, 163, 184, 0.08)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Controls Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1.75rem', marginBottom: '1.25rem' }}>
            <button
              onClick={prevStage}
              className="pill"
              style={{
                border: 'none',
                background: 'rgba(148, 163, 184, 0.15)',
                color: '#ffffff',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {larvalStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setStageIndex(idx)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    padding: 0,
                    background: idx === stageIndex ? 'var(--teal)' : 'rgba(148, 163, 184, 0.3)',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextStage}
              className="pill"
              style={{
                border: 'none',
                background: 'rgba(148, 163, 184, 0.15)',
                color: '#ffffff',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Stage Details Panel */}
          <div
            style={{
              width: '100%',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.12)',
              borderRadius: '16px',
              padding: '1.25rem',
              textAlign: 'center',
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--teal)', fontSize: '1.1rem' }}>
              {currentStage.name}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0 0 1rem 0', lineHeight: '1.5' }}>
              {currentStage.description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid rgba(148,163,184,0.1)', paddingTop: '0.75rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Approx. Size
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-h)', fontWeight: '600' }}>
                  {currentStage.size}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Larval Age
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-h)', fontWeight: '600' }}>
                  {currentStage.age}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
