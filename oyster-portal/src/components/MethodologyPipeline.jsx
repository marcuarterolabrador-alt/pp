import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Waves as WavesIcon, Video, Camera } from 'lucide-react'
import ddcImage from '../assets/T17.png'
import rovVideo from '../assets/rov_mp4.mp4'

const steps = [
  {
    id: 'drop-camera',
    icon: Camera,
    title: 'Drop-Down Camera',
    text: 'Visual data is captured using a drop-down frame equipped with a GoPro camera, deployed to the seabed at regular 25-meter intervals. These video-derived frames are analyzed to characterize the substrate composition, detect the presence of native oyster shells, dead or alive.',
    image: ddcImage,
  },
  {
    id: 'rov',
    icon: Video,
    title: 'ROV Transect',
    text: 'A Remotely Operated Vehicle (ROV) conducts live video transects to document substrate types and record the presence of live oysters and shell debris. It also serves to visually verify and map the exact locations where cultch was deployed.',
    video: rovVideo,
  },
  {
    id: 'bathymetry',
    icon: WavesIcon,
    title: '3D Multibeam Bathymetry',
    text: 'High-resolution multibeam sonar surveys map seafloor topography and depth contours across the bay. This high-resolution data helps identify suitable firm-bottom habitats for oyster settlement and maps adjacent biotopes, such as seaweed beds.',
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
          className={step.image || step.video ? 'grid-2-custom' : ''}
          style={
            step.image || step.video
              ? { display: 'grid', gap: '1.5rem', alignItems: 'center', marginTop: '1rem' }
              : { display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '1rem' }
          }
        >
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
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
          </div>
          {step.image && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={step.image}
                alt={step.title}
                style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain', borderRadius: '12px' }}
              />
            </div>
          )}
          {step.video && (
            <div
              style={{
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--panel-border)',
                boxShadow: 'var(--glow)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--panel)',
                padding: '0.5rem',
                width: '100%',
                maxWidth: '180px',
                aspectRatio: '1 / 1',
                margin: '0 auto',
              }}
            >
              <video
                src={step.video}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
