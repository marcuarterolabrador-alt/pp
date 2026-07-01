import { useState } from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts'
import { Thermometer, Droplets, Sun, Zap } from 'lucide-react'
import { telemetrySeries, spawningTriggeredAt, DEGREE_DAY_THRESHOLD } from '../data/telemetry'

const metrics = [
  { id: 'temperature', label: 'Temperature (°C)', color: '#f43f5e', icon: Thermometer, yAxisId: 'temp' },
  { id: 'salinity', label: 'Salinity (PSU)', color: '#0ea5e9', icon: Droplets, yAxisId: 'sal' },
  { id: 'light', label: 'Light (Lux)', color: '#facc15', icon: Sun, yAxisId: 'light' },
]

export default function TelemetryChart() {
  const [enabled, setEnabled] = useState({ temperature: true, salinity: true, light: false })
  const latest = telemetrySeries[telemetrySeries.length - 1]

  const toggle = (id) => setEnabled((e) => ({ ...e, [id]: !e[id] }))

  return (
    <div className="glass glass-panel">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: '1rem', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {metrics.map((m) => {
            const Icon = m.icon
            return (
              <label
                key={m.id}
                className="pill"
                style={{
                  cursor: 'pointer',
                  border: `1px solid ${enabled[m.id] ? m.color : 'rgba(148,163,184,0.25)'}`,
                  background: enabled[m.id] ? `${m.color}22` : 'rgba(148,163,184,0.08)',
                  color: enabled[m.id] ? m.color : 'var(--text-dim)',
                }}
              >
                <input
                  type="checkbox"
                  checked={enabled[m.id]}
                  onChange={() => toggle(m.id)}
                  style={{ display: 'none' }}
                />
                <Icon size={13} />
                {m.label}
              </label>
            )
          })}
        </div>
        <div
          className="pill"
          style={{ background: 'rgba(20,184,166,0.15)', color: 'var(--teal)', border: '1px solid rgba(20,184,166,0.4)' }}
        >
          <Zap size={13} /> {latest.degreeDays}° cumulative degree-days
        </div>
      </div>

      {spawningTriggeredAt !== null ? (
        <div
          className="pill coral"
          style={{ marginBottom: '1rem', display: 'inline-flex' }}
        >
          Spawning Event Triggered — Day {spawningTriggeredAt} (threshold {DEGREE_DAY_THRESHOLD}° exceeded)
        </div>
      ) : (
        <div className="pill" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
          Degree-day threshold ({DEGREE_DAY_THRESHOLD}°) not yet reached
        </div>
      )}

      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={telemetrySeries} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            {metrics.map((m) => (
              <linearGradient key={m.id} id={`grad-${m.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={m.color} stopOpacity={0.55} />
                <stop offset="95%" stopColor={m.color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.12)" />
          <XAxis dataKey="day" stroke="#7e93ad" tick={{ fontSize: 11 }} />
          <YAxis yAxisId="temp" hide domain={[0, 25]} />
          <YAxis yAxisId="sal" hide domain={[28, 38]} />
          <YAxis yAxisId="light" hide domain={[0, 16000]} />
          <Tooltip
            contentStyle={{
              background: 'rgba(15,23,42,0.92)',
              border: '1px solid rgba(14,165,233,0.35)',
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          {spawningTriggeredAt !== null && (
            <ReferenceLine
              yAxisId="temp"
              x={spawningTriggeredAt}
              stroke="var(--coral)"
              strokeDasharray="4 4"
              label={{ value: 'Spawning', fill: 'var(--coral)', fontSize: 11, position: 'top' }}
            />
          )}
          {metrics.map(
            (m) =>
              enabled[m.id] && (
                <Area
                  key={m.id}
                  yAxisId={m.yAxisId}
                  type="monotone"
                  dataKey={m.id}
                  name={m.label}
                  stroke={m.color}
                  strokeWidth={2}
                  fill={`url(#grad-${m.id})`}
                  dot={false}
                  activeDot={{ r: 4 }}
                  isAnimationActive={true}
                />
              )
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
