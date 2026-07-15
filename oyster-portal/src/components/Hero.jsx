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
    text: "Gathering comprehensive data on native oyster biology, ecology, and life cycles to establish a strong scientific foundation. Alongside this, conducting baseline mapping of both current and historical oyster beds across Connemara to determine their locations, extent, and status.",
  },
  {
    icon: Leaf,
    title: "Oyster Reefs as a Habitat",
    text: "Quantifying the biodiversity supported by native oyster beds to demonstrate the ecological value of these habitats. This involves assessing how these biogenic habitats function as nurseries, shelters, and foraging grounds for a wide range of marine species.",
  },
  {
    icon: TrendingUp,
    title: "Restoration Measures",
    text: "Designing and implementing targeted restoration measures, including the deployment of appropriate cultch materials, to enhance native oyster populations and promote the development of self-sustaining reefs. Evaluating systematically the efficiency and success of these strategies.",
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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 780 }}
      >
        <div className="hero-logos">
          <img src={mfrcLogo} alt="MFRC Logo" style={{ height: '64px', width: 'auto' }} />
          <img src={atuLogo} alt="ATU Logo" style={{ height: '64px', width: 'auto' }} />
          <img src={imbrseaLogo} alt="IMBRSea Logo" style={{ height: '64px', width: 'auto' }} />
        </div>
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

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          marginTop: '3rem',
          fontSize: '1.05rem',
          color: '#cbd5e1',
          maxWidth: 780,
          lineHeight: '1.6',
          textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        The native oyster restoration projects run by the Biogenic Habitats Research Group within the Marine and Freshwater Research Centre (MFRC) are structured around three main objectives:
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="grid-auto"
        style={{ marginTop: '1.5rem' }}
      >
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass glass-panel">
            <Icon size={26} color="var(--teal)" style={{ marginBottom: 10 }} />
            <h3>{title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
