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
    name: '',
    description:
      "This image displays the fertilized larvae being brooded within the female's mantle cavity. They retain the eggs internally until fertilization and larval development are complete, right before the spawning or swarming release.",
    size: '',
    age: '',
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
    name: '',
    description: '15 May, Bertraghboy',
    size: '',
    age: '',
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
    name: '',
    description: '15 May, Bertraghboy',
    size: '',
    age: '',
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
    name: '',
    description: '24 May, Kilkieran',
    size: '',
    age: '',
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
    name: '',
    description: '25 May, Bertraghboy',
    size: '',
    age: '',
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
    name: '',
    description: '10 June, Bertraghboy',
    size: '',
    age: '',
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
    name: '',
    description: '10 June, Bertraghboy',
    size: '',
    age: '',
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
    name: '',
    description: '11 June, Kilkieran',
    size: '',
    age: '',
    image: larvae7,
    style: {
      position: 'absolute',
      width: '323.0px',
      height: '430.6px',
      left: '-30.0px',
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
          <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
            To monitor wild native oyster populations, scientists conduct plankton sampling during the summer spawning seasons. A specialized zooplankton net with a 50 µm mesh is towed.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass" style={{ padding: '1.25rem', borderLeft: '4px solid var(--cyan)' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.5rem' }}>
              <Compass size={18} color="var(--cyan)" />
              <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Flowmeter</h4>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
              A mechanical flowmeter mounted in the mouth of the net calculates the volume of filtered water, standardizing the larval density counts (larvae/m³) across the different samplings.
            </p>
          </div>

          <div className="glass" style={{ padding: '1.25rem', borderLeft: '4px solid var(--teal)' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.5rem' }}>
              <Shield size={18} color="var(--teal)" />
              <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Mesh Selectivity</h4>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
              This specific mesh size allows seawater and fine mud particles to escape while capturing bivalve larvae and other zooplankton.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2: Microscope Eyepiece Carousel */}
      <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 620 }}>
          <span className="pill">Microscope Observation</span>
          <h3 style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>Larval Development Stages</h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: '0 0 0.75rem 0', lineHeight: '1.6' }}>
            After the sampling, the number of bivalve larvae in 1ml of each sample was counted using a Sedgewick Rafter Counting Chamber under a microscope, and their sizes were also measured to study the size distribution across the season in each bay and identify the best moment to deploy cultch.
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0, fontStyle: 'italic', lineHeight: '1.6' }}>
            Use the carousel controls to view microscope photographs of the bivalve larvaes taken after the different larvae samplings at the start of the season.
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
                  alt={currentStage.name || 'Larval Stage'}
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
            {currentStage.name && (
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--teal)', fontSize: '1.1rem' }}>
                {currentStage.name}
              </h4>
            )}
            <p style={{
              fontSize: (currentStage.size && currentStage.age) || stageIndex === 0 ? '0.85rem' : '1.05rem',
              color: (currentStage.size && currentStage.age) || stageIndex === 0 ? '#94a3b8' : '#f8fafc',
              fontWeight: (currentStage.size && currentStage.age) || stageIndex === 0 ? 'normal' : '600',
              margin: (currentStage.size && currentStage.age) ? '0 0 1rem 0' : '0',
              lineHeight: '1.5'
            }}>
              {currentStage.description}
            </p>

            {currentStage.size && currentStage.age && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
