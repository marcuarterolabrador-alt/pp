import { Shield, Sparkles } from 'lucide-react'

// Import placeholders that the user will replace with their own photos
import petriHigh from '../assets/petri_high.png'
import petriLow from '../assets/petri_low.png'

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

          {/* Petri Dish Frame */}
          <div
            className="petri-dish-frame"
            style={{
              position: 'relative',
              borderRadius: '50%',
              border: '6px solid rgba(148, 163, 184, 0.3)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              background: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={petriLow}
              alt="Petri dish showing low biodiversity"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9,
              }}
            />
            {/* Glossy Reflection overlay */}
            <div
              style={{
                position: 'absolute',
                top: '-30%',
                left: '-30%',
                width: '160%',
                height: '160%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)',
                pointerEvents: 'none',
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

          {/* Petri Dish Frame */}
          <div
            className="petri-dish-frame"
            style={{
              position: 'relative',
              borderRadius: '50%',
              border: '6px solid var(--teal)',
              boxShadow: 'inset 0 0 20px rgba(20,184,166,0.15), 0 8px 24px rgba(20,184,166,0.12)',
              overflow: 'hidden',
              background: '#f0fdfa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={petriHigh}
              alt="Petri dish showing high biodiversity"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.95,
              }}
            />
            {/* Glossy Reflection overlay */}
            <div
              style={{
                position: 'absolute',
                top: '-30%',
                left: '-30%',
                width: '160%',
                height: '160%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)',
                pointerEvents: 'none',
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
