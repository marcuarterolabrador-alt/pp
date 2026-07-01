import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Waves as WavesIcon, Video, Camera } from 'lucide-react'

const steps = [
  {
    id: 'bathymetry',
    icon: WavesIcon,
    title: '3D Multibeam Bathymetry',
    text: 'High-resolution multibeam sonar surveys map seafloor topography and depth contours across the bay, identifying suitable firm-bottom habitat for oyster settlement.',
  },
  {
    id: 'rov',
    icon: Video,
    title: 'ROV Transect',
    text: 'A remotely operated vehicle runs benthic video transects, ground-truthing acoustic survey data and documenting existing biogenic structure.',
  },
  {
    id: 'drop-camera',
    icon: Camera,
    title: 'Drop Camera',
    text: 'High-resolution stills and video from a drop camera capture substrate composition and cultch condition at fixed restoration points.',
  },
]

export default function MethodologyPipeline() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <div className="glass glass-panel">
      <div style={{ display: 'flex', gap: 10, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className="pill"
              style={{
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: active === i ? 'rgba(20,184,166,0.2)' : 'rgba(148,163,184,0.1)',
                color: active === i ? 'var(--teal)' : 'var(--text-dim)',
              }}
            >
              <Icon size={14} />
              {i + 1}. {s.title}
            </button>
          )
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(14,165,233,0.12)',
              border: '1px solid var(--panel-border)',
              flexShrink: 0,
            }}
          >
            <step.icon size={38} color="var(--cyan)" />
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3>{step.title}</h3>
            <p style={{ color: 'var(--text-dim)', margin: 0 }}>{step.text}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
