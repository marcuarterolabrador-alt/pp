import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo_project-removebg-preview.png'

const links = [
  { id: 'intro', label: 'Introduction' },
  { id: 'map', label: 'Study Location' },
  { id: 'methodology', label: 'Environmental Characterisation' },
  { id: 'substrates', label: 'Cultch' },
  { id: 'larvae-sampling', label: 'Larvae Sampling' },
  { id: 'biodiversity', label: 'Biodiversity' },
  { id: 'references', label: 'References' },
]

export default function Nav({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    if (onNavigate) {
      onNavigate(id)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="glass"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        margin: scrolled ? '0' : '0',
        borderRadius: 0,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        background: open ? 'rgba(10, 25, 47, 1)' : (scrolled ? 'rgba(10, 25, 47, 0.85)' : 'rgba(10, 25, 47, 0.4)'),
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0.9rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div className="nav-logo-container" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#ffffff', fontWeight: 700 }}>
          <img src={logo} alt="Connemara Oyster Restoration Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          Connemara Oyster Restoration
        </div>
        <nav className="nav-desktop">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cbd5e1',
                padding: '8px 12px',
                borderRadius: 8,
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
              className="nav-link"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          style={{ background: 'transparent', border: 'none', color: '#ffffff' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1.5rem 1rem' }} className="nav-mobile">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cbd5e1',
                padding: '10px 0',
                textAlign: 'left',
                fontSize: '0.95rem',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
