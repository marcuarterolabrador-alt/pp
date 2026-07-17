import { Sparkles, Fish, Shrimp } from 'lucide-react'

import sedimentReef from '../assets/sediment_macrofauna_reef.png'
import sedimentMud from '../assets/sediment_macrofauna_mud.png'

export default function EcosystemServices() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>
        To assess the ecological importance of oyster reefs as habitats in both bays, biodiversity surveys were conducted across oyster beds environments and compared against close mud flats as controls.
      </p>

      {/* Introduction text */}
      <div className="glass glass-panel" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <Shrimp size={24} color="var(--teal)" />
          <h3 style={{ margin: 0 }}>Macroinvertebrate Diversity</h3>
        </div>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Sediment samples were collected from oyster beds and control muddy beds in both bays. Macroinvertebrates within the samples are currently being sorted and identified, utilizing Rose Bengal staining to ensure no specimens are overlooked.
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
          This following illustrations show the primary differences found when sorting macroinvertebrates from the control samples versus the oyster beds
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
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Primary results show that the control samples are usually dominated by small polychaetes, with high domination of few species.
            </p>
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
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              On the other hand, under the oyster reef, the sediment is usually richer in species, with abundance of amphipods, small decapods, chitons, and britle stars and other bivalves apart from the polychaetes.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Studies */}
      <div className="grid-2">
        {/* Future Fish Diversity Study */}
        <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
              <Fish size={22} color="var(--teal)" />
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-h)' }}>Fish Diversity Monitoring</h4>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              In the future, research will also study the fish diversity present in the remaining oyster reefs. This will be carried out using underwater visual census transects and Baited Remote Underwater Video stations (BRUVs) to document how these reef habitats support fish communities.
            </p>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <span className="pill coral">Future Research</span>
          </div>
        </div>

        {/* Epifauna Biodiversity Study */}
        <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
              <Sparkles size={22} color="var(--teal)" />
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-h)' }}>Epifauna Diversity</h4>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              The epifauna biodiversity present directly on some of the sampled oysters has also been studied. This research quantifies the community of organisms living on the oyster shells, highlighting their role in enhancing overall biodiversity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
