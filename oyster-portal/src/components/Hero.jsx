import { motion } from 'framer-motion'
import { Leaf, Shell, TrendingUp } from 'lucide-react'
import heroBg from '../assets/portal_aquarela.png'
import mfrcLogo from '../assets/mfrc_logo.png'
import atuLogo from '../assets/ATU-Logo-removebg-preview.png'
import imbrseaLogo from '../assets/IMBRSea_logo.png'

const pillars = [
  {
    icon: Shell,
    title: "Species Knowledge",
    text: "Generating and integrating knowledge on the native oyster (Ostrea edulis) to better adapt restoration methodologies.",
  },
  {
    icon: Shell,
    title: "Restoration Measures",
    text: "Designing and implementing ecological restoration actions to recover degraded habitats and improve ecosystem functionality.",
  },
  {
    icon: Shell,
    title: "Restoration Success Assessment",
    text: "Monitoring and analysing the outcomes of restoration actions to evaluate their effectiveness.",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '92svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 1.5rem 4rem',
        position: 'relative',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            `linear-gradient(180deg, rgba(15, 32, 39, 0.4) 0%, rgba(32, 58, 67, 0.75) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          padding: '6px 12px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
        className="nav-desktop"
      >
        <img src={mfrcLogo} alt="MFRC Logo" style={{ height: '64px', width: 'auto' }} />
        <img src={atuLogo} alt="ATU Logo" style={{ height: '64px', width: 'auto' }} />
        <img src={imbrseaLogo} alt="IMBRSea Logo" style={{ height: '64px', width: 'auto' }} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 780 }}
      >
        <span
          className="pill"
          style={{
            color: '#f0f9ff',
            background: 'rgba(240, 249, 255, 0.18)',
            borderColor: 'rgba(240, 249, 255, 0.35)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Marine &amp; Freshwater Research Centre &middot; ATU Galway
        </span>
        <h1 style={{ marginTop: '1rem', color: '#ffffff', textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)' }}>Connemara Oyster Restoration Portal </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: 620, textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)', margin: 0 }}>
          A science communication platform for the restoration of native oyster (<em>Ostrea edulis</em>) populations across Kilkieran and Bertraghboy Bays, Connemara, Ireland.
        </p>
        <p style={{ fontSize: '0.92rem', color: '#cbd5e1', maxWidth: 620, marginTop: '0.75rem', textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)', opacity: 0.9, lineHeight: '1.5', margin: '0.75rem 0 0' }}>
          Developed as a Master's degree project following an internship with the Biogenic Habitat group (MFRC), led by Dr. José M. Fariñas-Franco.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="grid-auto"
        style={{ marginTop: '3rem' }}
      >
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass glass-panel">
            <Icon size={26} color="var(--teal)" style={{ marginBottom: 10 }} />
            <h3>{title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{text}</p>
          </div>
        ))}
      </motion.div>
      <span
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '1.5rem',
          color: 'rgba(255, 255, 255, 0.75)',
          fontSize: '0.75rem',
          textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
          zIndex: 10,
        }}
      >
        Picture generated with AI (Gemini)
      </span>
    </section>
  )
}
