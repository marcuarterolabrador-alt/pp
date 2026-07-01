import { motion } from 'framer-motion'
import { timelineEras } from '../data/timeline'

export default function DeclineTimeline() {
  return (
    <div style={{ position: 'relative', paddingLeft: 24 }}>
      <div
        style={{
          position: 'absolute',
          left: 5,
          top: 0,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(180deg, var(--cyan), var(--coral))',
        }}
      />
      {timelineEras.map((era, i) => (
        <motion.div
          key={era.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          style={{ position: 'relative', marginBottom: '2rem' }}
        >
          <span
            style={{
              position: 'absolute',
              left: -24,
              top: 6,
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'var(--teal)',
              boxShadow: '0 0 12px var(--teal)',
            }}
          />
          <div className="glass glass-panel">
            <span className="pill">{era.era}</span>
            <h3 style={{ marginTop: 8 }}>{era.title}</h3>
            <p style={{ color: 'var(--text-dim)', margin: 0 }}>{era.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
