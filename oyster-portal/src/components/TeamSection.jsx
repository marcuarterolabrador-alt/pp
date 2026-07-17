import { Users } from 'lucide-react'
import teamImg from '../assets/team.jpeg'

const coreMembers = [
  {
    name: 'Dr José Maria Fariñas-Franco',
    role: 'Main Supervisor',
    initials: 'JF',
    color: 'var(--teal)',
  },
  {
    name: 'Dr Tiffany Montfort',
    role: 'PostDoc',
    initials: 'TM',
    color: 'var(--cyan)',
  },
  {
    name: 'Mateja Švonja',
    role: 'PhD Researcher',
    initials: 'MŠ',
    color: 'var(--teal)',
  },
  {
    name: 'Paul-Rubén Jeandidier',
    role: 'MSc Researcher',
    initials: 'PJ',
    color: 'var(--cyan)',
  },
  {
    name: 'Jack Rigazio',
    role: 'MSc Researcher',
    initials: 'JR',
    color: 'var(--teal)',
  },
  {
    name: 'Alex Pitmann',
    role: 'Postgraduate Technician',
    initials: 'AP',
    color: 'var(--cyan)',
  },
]

const interns = [
  {
    name: 'Killian Breton',
    role: 'IMBRSea Student (Professional Practice)',
    initials: 'KB',
  },
  {
    name: 'Mar Cuartero',
    role: 'IMBRSea Student (Professional Practice)',
    initials: 'MC',
  },
]

export default function TeamSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Intro text */}
      <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
        The MFRC Biogenic Habitats group focuses primarily on shellfish reefs and seaweed beds, and is composed of:
      </p>

      {/* Grid container with names and picture */}
      <div className="grid-2-custom" style={{ alignItems: 'stretch' }}>
        {/* Core Team Grid */}
        <div className="grid-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {coreMembers.map((member) => (
            <div
              key={member.name}
              className="glass glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              {/* Initials Avatar */}
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${member.color}22, ${member.color}44)`,
                  border: `1.5px solid ${member.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'var(--text-h)',
                  flexShrink: 0,
                }}
              >
                {member.initials}
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-h)', fontWeight: '600' }}>
                  {member.name}
                </h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Photo Card */}
        <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={teamImg}
              alt="MFRC Biogenic Habitats Group"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '350px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                objectFit: 'cover',
              }}
            />
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textAlign: 'center', display: 'block', fontStyle: 'italic' }}>
            MFRC Biogenic Habitats Group
          </span>
        </div>
      </div>

      {/* Interns Section */}
      <div className="glass glass-panel" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
          <Users size={20} color="var(--teal)" />
          <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-h)' }}>Collaborating Intern Students</h4>
        </div>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Students who collaborate, such as those from the IMBRSea programme who completed their Professional Practice within the group:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {interns.map((intern) => (
            <div
              key={intern.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(255, 255, 255, 0.3)',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(14, 165, 233, 0.1)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(13, 148, 136, 0.1)',
                  border: '1.5px solid var(--teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  color: 'var(--text-h)',
                  flexShrink: 0,
                }}
              >
                {intern.initials}
              </div>
              <div>
                <strong style={{ fontSize: '0.9rem', color: 'var(--text-h)' }}>{intern.name}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginLeft: '0.5rem' }}>
                  — {intern.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
