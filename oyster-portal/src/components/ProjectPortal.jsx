import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'OISRE Conamara',
    url: 'https://mfrc-atu.ie/projects/conservation/oisre-conamara/',
    text: 'MFRC-led oyster restoration initiative focused on the Connemara region, that maps native oyster beds and uses experimental restoration to study biodiversity trends, food webs, and recolonization patterns.',
  },
  {
    name: 'BRICONS - Building Resilient Irish Coasts through Oyster Restoration',
    url: 'https://mfrc-atu.ie/projects/conservation/bricons-building-resilient-irish-coasts-through-oyster-restoration-a-nature-based-solution-for-enhancing-marine-biodiversity-and-ecosystems/',
    text: 'An interdisciplinary project that monitors native oyster beds in Connemara to develop ecological success indicators and deploy alternative substrates for reef restoration across Dublin Bay, Belfast Lough, and Connemara.',
  },
  {
    name: 'NORA - Native Oyster Restoration Alliance',
    url: 'https://noraeurope.eu/',
    text: (
      <>
        An international alliance and knowledge-sharing hub dedicated to overcoming barriers in the conservation and ecological restoration of the native European oyster (<em>Ostrea edulis</em>) across its current and historical ranges.
      </>
    ),
  }
]

export default function ProjectPortal() {
  return (
    <div className="grid-auto">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="glass glass-panel"
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 style={{ fontSize: '1.05rem' }}>{p.name}</h3>
            <ExternalLink size={16} color="var(--cyan)" />
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', margin: 0 }}>{p.text}</p>
        </a>
      ))}
    </div>
  )
}
