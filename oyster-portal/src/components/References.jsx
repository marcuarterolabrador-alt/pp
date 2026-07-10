import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Globe, FileText, ExternalLink, Search, Bookmark } from 'lucide-react'

/*
  Add your references to the referencesData array below.
  Each reference should follow this structure:
  {
    id: 'ref-1',
    title: 'Scientific Article or Webpage Title',
    authors: 'Authors, research group, or organization',
    source: 'Journal Name, Publisher, or Platform Name',
    year: '2026',
    type: 'article', // options: 'article' (Journal Article), 'website' (Web Page), 'report' (Technical Report)
    url: 'https://example.com',
    description: 'A brief description or annotation of the source and its relevance.'
  }
*/
const referencesData = [
  {
    id: 'ref-1',
    title: 'Native Oyster Restoration in Connemara: A Multi-Decadal Assessment',
    authors: 'Dr. Jane Smith, MFRC Research Group',
    source: 'Journal of Marine Environmental Science',
    year: '2025',
    type: 'article', // options: 'article' (Journal Article), 'website' (Web Page), 'report' (Technical Report)
    url: 'https://example.com/native-oyster-restoration-connemara',
    description: 'A comprehensive study tracking the historical decline and modern restoration efforts of Ostrea edulis in Bertraghbouy and Kilkieran Bays.'
  },
  {
    id: 'ref-2',
    title: 'Connemara Oyster Habitat Mapping Study & GIS Dataset',
    authors: 'Marine Institute Ireland & ATU Galway',
    source: 'Technical Report & GIS Portal',
    year: '2026',
    type: 'report',
    url: 'https://example.com/connemara-oyster-habitat-gis',
    description: 'Detailed seafloor survey and substrate characterisation dataset detailing suitable spat settlement areas across Galway and Connemara coastal regions.'
  },
  {
    id: 'ref-3',
    title: 'NORA European Oyster Restoration Network Guidelines',
    authors: 'Native Oyster Restoration Alliance (NORA)',
    source: 'nora-europe.eu',
    year: '2024',
    type: 'website',
    url: 'https://nora-europe.eu',
    description: 'Official best practices, environmental guidelines, and restoration protocols for native oyster reefs across European estuaries and coastal bays.'
  }
]

export default function References() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const filteredReferences = useMemo(() => {
    return referencesData.filter(ref => {
      const matchesSearch = 
        ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesType = selectedType === 'all' || ref.type === selectedType

      return matchesSearch && matchesType
    })
  }, [searchTerm, selectedType])

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':
        return <BookOpen size={16} />
      case 'website':
        return <Globe size={16} />
      case 'report':
        return <FileText size={16} />
      default:
        return <Bookmark size={16} />
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'article':
        return 'Journal Article'
      case 'website':
        return 'Web Page'
      case 'report':
        return 'Technical Report'
      default:
        return 'Reference'
    }
  }

  if (referencesData.length === 0) {
    return (
      <div 
        className="glass glass-panel" 
        style={{ 
          textAlign: 'center', 
          padding: '3rem 2rem', 
          color: 'var(--text-dim)',
          border: '1px dashed var(--panel-border)',
          borderRadius: '16px'
        }}
      >
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--text-h)' }}>
          No references added yet.
        </p>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          To add your scientific publications and web links, populate the <code>referencesData</code> array in{' '}
          <a 
            href="file:///c:/Users/Usuario/Documents/antigravity_curs/oyster-portal/src/components/References.jsx" 
            style={{ color: 'var(--cyan)', fontWeight: 600, textDecoration: 'underline' }}
          >
            References.jsx
          </a>.
        </p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Controls: Search and Tabs */}
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Search Bar */}
        <div 
          className="glass" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0.5rem 1rem', 
            borderRadius: '999px',
            flex: '1 1 300px',
            maxWidth: '450px',
            gap: '0.5rem',
            border: '1px solid var(--panel-border)'
          }}
        >
          <Search size={18} color="var(--text-dim)" />
          <input 
            type="text"
            placeholder="Search references by title, author, or source..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontSize: '0.9rem',
              width: '100%',
            }}
          />
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['all', 'article', 'website', 'report'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                border: '1px solid var(--panel-border)',
                background: selectedType === type ? 'var(--teal)' : 'var(--panel)',
                color: selectedType === type ? '#ffffff' : 'var(--text-dim)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              className="reference-filter-btn"
            >
              {type === 'all' ? 'All Sources' : getTypeLabel(type) + 's'}
            </button>
          ))}
        </div>
      </div>

      {/* References List Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <AnimatePresence mode="popLayout">
          {filteredReferences.length > 0 ? (
            filteredReferences.map((ref, idx) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="glass glass-panel reference-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                {/* Reference Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className={`pill ${ref.type === 'website' ? 'coral' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {getTypeIcon(ref.type)}
                      {getTypeLabel(ref.type)}
                    </span>
                    <span className="pill" style={{ background: 'rgba(13, 148, 136, 0.1)', color: 'var(--teal)', borderColor: 'rgba(13, 148, 136, 0.3)' }}>
                      {ref.year}
                    </span>
                  </div>

                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      color: 'var(--cyan)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    View Source <ExternalLink size={14} />
                  </a>
                </div>

                {/* Reference Body */}
                <div>
                  <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.15rem', color: 'var(--text-h)', lineHeight: 1.4 }}>
                    {ref.title}
                  </h3>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-dim)', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                    {ref.authors} &bull; <em style={{ fontStyle: 'italic' }}>{ref.source}</em>
                  </span>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                    {ref.description}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '3rem',
                color: 'var(--text-dim)'
              }}
              className="glass glass-panel"
            >
              <p style={{ margin: 0 }}>No references found matching your filters.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}
