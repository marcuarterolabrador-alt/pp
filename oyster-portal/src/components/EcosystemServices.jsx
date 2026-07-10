import { Shield, Sparkles } from 'lucide-react'

import sedimentReef from '../assets/sediment_macrofauna_reef.png'
import sedimentMud from '../assets/sediment_macrofauna_mud.png'

export default function EcosystemServices() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Introduction text */}
      <div className="glass glass-panel" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <span className="pill">Ecosystem Engineering</span>
        <h3 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>Benthic Species Diversity &amp; Habitat Complexity</h3>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
          Native oyster reefs (*Ostrea edulis*) act as critical biogenic structures. By stabilizing sediments and creating a three-dimensional hard shell matrix, they provide shelter, feeding grounds, and nursery habitats for a wide range of marine organisms. Benthic core samples taken beneath these reefs show a massive increase in biodiversity compared to adjacent bare mud environments.
        </p>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="grid-2">
        {/* Control Sample (Bare Mud) */}
        <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <span className="pill coral">Control Sample</span>
            <h4 style={{ margin: '0.5rem 0 0.25rem 0', fontSize: '1.2rem', color: 'var(--text-h)' }}>Bare Mud Sediment</h4>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Habitat: Unstructured Soft Bottom</span>
          </div>

          <div
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid rgba(148, 163, 184, 0.25)',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={sedimentMud}
              alt="Bare Mud Sediment"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          <div style={{ width: '100%', textAlign: 'left' }}>
            <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-h)', fontSize: '0.95rem' }}>Sample Characterisation:</h5>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-dim)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>**Low Species Richness**: Dominated by a small number of opportunistic, pollution-tolerant species.</li>
              <li>**Silt &amp; Fine Mud**: Sediment lacks structural stability or hard shell surfaces.</li>
              <li>**Limited Shelter**: High exposure to predation for juvenile fishes and mobile invertebrates.</li>
            </ul>
          </div>
        </div>

        {/* Reef Sample (Oyster Reef Matrix) */}
        <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <span className="pill">Reef Sample</span>
            <h4 style={{ margin: '0.5rem 0 0.25rem 0', fontSize: '1.2rem', color: 'var(--teal)' }}>Oyster Reef Matrix</h4>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Habitat: Biogenic Carbonate Reef</span>
          </div>

          <div
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid rgba(20, 184, 166, 0.35)',
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(20,184,166,0.12)',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={sedimentReef}
              alt="Oyster Reef Matrix"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          <div style={{ width: '100%', textAlign: 'left' }}>
            <h5 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-h)', fontSize: '0.95rem' }}>Sample Characterisation:</h5>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-dim)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>**High Species Diversity**: Dense populations of amphipods, small decapods (crabs), polychaetes, and gastropods.</li>
              <li>**Complex Shell Matrix**: Dead shells (cultch) create hundreds of small micro-crevices and protective niches.</li>
              <li>**Active Recruitment**: High concentration of settling spat (juvenile oysters) and epifaunal recruits.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
