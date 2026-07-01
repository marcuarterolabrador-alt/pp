import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Enabling Sustainability',
    text: 'Collecting and interpreting ecological data to ensure the long-term, sustainable management of commercial fisheries and marine ecosystems.',
  },
  {
    icon: Leaf,
    title: 'Conserving Biodiversity',
    text: 'Assessing how aquatic species and habitats respond to accelerating human impacts and climate-induced environmental stressors.',
  },
  {
    icon: ShieldCheck,
    title: 'Improving Productivity',
    text: 'Working alongside the seafood sector to identify and implement innovative technologies that optimise production while safeguarding ecological integrity.',
  },
]

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
            "linear-gradient(180deg, rgba(10,25,47,0.55) 0%, rgba(10,25,47,0.92) 100%), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80')",
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
        <span className="pill">Marine &amp; Freshwater Research Centre &middot; ATU Galway</span>
        <h1 style={{ marginTop: '1rem' }}>Connemara Oyster Restoration Portal</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-dim)', maxWidth: 620 }}>
          Restoring the European native oyster (<em>Ostrea edulis</em>) — a critically declining
          biogenic reef-builder — across the wild beds of Kilkieran and Bertraghboy Bays,
          Connemara, Ireland.
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
    </section>
  )
}
