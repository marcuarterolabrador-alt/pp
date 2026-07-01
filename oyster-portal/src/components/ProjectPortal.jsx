import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'NORA — Native Oyster Restoration Alliance',
    url: 'https://www.nativeoysterrecovery.org/join-nora',
    text: 'A pan-European network coordinating native oyster restoration efforts and knowledge sharing.',
  },
  {
    name: 'OISRE Conamara',
    url: 'https://mfrc-atu.ie/projects/conservation/oisre-conamara/',
    text: 'MFRC-led oyster restoration initiative focused on the Connemara region.',
  },
  {
    name: 'BRICONS',
    url: 'https://mfrc-atu.ie/projects/conservation/bricons-building-resilient-irish-coasts-through-oyster-restoration-a-nature-based-solution-for-enhancing-marine-biodiversity-and-ecosystems/',
    text: 'Building Resilient Irish Coasts through Oyster Restoration — a nature-based solution for marine biodiversity and ecosystems.',
  },
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
