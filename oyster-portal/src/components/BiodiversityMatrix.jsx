import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { comparisonZones, faunaPool } from '../data/biodiversity'

function shannonWiener(counts) {
  const total = counts.reduce((a, b) => a + b, 0)
  if (total === 0) return { h: 0, j: 0 }
  const proportions = counts.filter((c) => c > 0).map((c) => c / total)
  const h = -proportions.reduce((sum, p) => sum + p * Math.log(p), 0)
  const s = proportions.length
  const j = s > 1 ? h / Math.log(s) : 0
  return { h: Number(h.toFixed(2)), j: Number(j.toFixed(2)) }
}

const zoneMeta = {
  control: { label: 'Control — Bare Mud', color: '#7e93ad' },
  restored: { label: 'Restored — Oyster Reef', color: 'var(--teal)' },
}

export default function BiodiversityMatrix() {
  const [pool, setPool] = useState(faunaPool.map((f) => f.id))
  const [zones, setZones] = useState({ control: [], restored: [] })
  const [selectedId, setSelectedId] = useState(null)
  const [flash, setFlash] = useState(null) // { zone, ok }

  const faunaById = useMemo(() => Object.fromEntries(faunaPool.map((f) => [f.id, f])), [])

  const indices = useMemo(() => {
    const result = {}
    for (const zoneId of ['control', 'restored']) {
      const groups = {}
      for (const id of zones[zoneId]) {
        const group = faunaById[id].group
        groups[group] = (groups[group] || 0) + 1
      }
      result[zoneId] = shannonWiener(Object.values(groups))
    }
    return result
  }, [zones, faunaById])

  const selectItem = (id) => setSelectedId(id === selectedId ? null : id)

  const attemptSort = (zoneId) => {
    if (!selectedId) return
    const item = faunaById[selectedId]
    if (item.correctZone === zoneId) {
      setZones((z) => ({ ...z, [zoneId]: [...z[zoneId], selectedId] }))
      setPool((p) => p.filter((id) => id !== selectedId))
      setFlash({ zone: zoneId, ok: true })
    } else {
      setFlash({ zone: zoneId, ok: false })
    }
    setSelectedId(null)
    setTimeout(() => setFlash(null), 600)
  }

  const reset = () => {
    setPool(faunaPool.map((f) => f.id))
    setZones({ control: [], restored: [] })
    setSelectedId(null)
  }

  return (
    <div>
      <div className="glass glass-panel" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: '0.88rem' }}>
            Select a specimen below, then click the sample it belongs to. Correct sorts update the
            Shannon-Wiener (H&apos;) and Pielou Evenness (J&apos;) indices live.
          </p>
          <button onClick={reset} className="pill" style={{ border: 'none' }}>
            <RotateCcw size={13} /> Reset
          </button>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: '1rem' }}>
          {pool.length === 0 && <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>All specimens sorted.</span>}
          {pool.map((id) => {
            const item = faunaById[id]
            return (
              <button
                key={id}
                onClick={() => selectItem(id)}
                className="pill"
                style={{
                  border: `1px solid ${selectedId === id ? 'var(--cyan)' : 'rgba(148,163,184,0.3)'}`,
                  background: selectedId === id ? 'rgba(14,165,233,0.25)' : 'rgba(148,163,184,0.08)',
                }}
              >
                {item.group}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid-2">
        {['control', 'restored'].map((zoneId) => {
          const zone = comparisonZones[zoneId]
          const meta = zoneMeta[zoneId]
          const live = indices[zoneId]
          const isFlashing = flash?.zone === zoneId
          return (
            <motion.div
              key={zoneId}
              onClick={() => attemptSort(zoneId)}
              animate={
                isFlashing
                  ? { boxShadow: flash.ok ? '0 0 0 3px var(--teal)' : '0 0 0 3px var(--coral)' }
                  : { boxShadow: 'none' }
              }
              className="glass glass-panel"
              style={{ cursor: selectedId ? 'pointer' : 'default' }}
            >
              <h3 style={{ color: meta.color }}>{meta.label}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{zone.habitatType}</p>

              <div style={{ display: 'flex', gap: 20, margin: '1rem 0' }}>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', margin: 0 }}>Shannon-Wiener H&apos;</p>
                  <p style={{ fontSize: '1.6rem', margin: 0, color: 'var(--text-h)' }}>{live.h}</p>
                  <p style={{ fontSize: '0.68rem', color: 'var(--text-dim)', margin: 0 }}>Reference: {zone.diversityIndices.shannonH}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', margin: 0 }}>Pielou J&apos;</p>
                  <p style={{ fontSize: '1.6rem', margin: 0, color: 'var(--text-h)' }}>{live.j}</p>
                  <p style={{ fontSize: '0.68rem', color: 'var(--text-dim)', margin: 0 }}>Reference: {zone.diversityIndices.evennessJ}</p>
                </div>
              </div>

              <div style={{ minHeight: 60, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <AnimatePresence>
                  {zones[zoneId].map((id) => (
                    <motion.span
                      key={id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="pill"
                    >
                      {faunaById[id].group}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
