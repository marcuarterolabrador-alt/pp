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
    id: 'ref-2',
    title: 'Missing native oyster (Ostrea edulis L.) beds in a European Marine Protected Area: Should there be widespread restorative management?',
    authors: 'Fariñas-Franco, J. M., Pearce, B., Mair, J. M., Harries, D. B., MacPherson, R. C., Porter, J. S., Reimer, P. J., & Sanderson, W. G.',
    source: 'Biological Conservation, 221, 293–311',
    year: '2018',
    type: 'article',
    url: 'https://www.sciencedirect.com/science/article/pii/S0006320717308030',
    citation: (
      <span>
        Fariñas-Franco, J. M., Pearce, B., Mair, J. M., Harries, D. B., MacPherson, R. C., Porter, J. S., Reimer, P. J., & Sanderson, W. G. (2018). Missing native oyster (<em style={{ fontStyle: 'italic' }}>Ostrea edulis</em> L.) beds in a European Marine Protected Area: Should there be widespread restorative management? <em style={{ fontStyle: 'italic' }}>Biological Conservation</em>, <em style={{ fontStyle: 'italic' }}>221</em>, 293–311.
      </span>
    ),
    description: 'A key study assessing the historical presence and loss of native oyster beds within a Marine Protected Area, exploring the feasibility and necessity of proactive restorative management.'
  },
  {
    id: 'ref-3',
    title: 'Early faunal successional patterns in artificial reefs used for restoration of impacted biogenic habitats',
    authors: 'Fariñas-Franco, J. M., & Roberts, D.',
    source: 'Hydrobiologia, 727(1), 75–94',
    year: '2014',
    type: 'article',
    url: 'https://link.springer.com/article/10.1007/s10750-013-1788-y',
    citation: (
      <span>
        Fariñas-Franco, J. M., & Roberts, D. (2014). Early faunal successional patterns in artificial reefs used for restoration of impacted biogenic habitats. <em style={{ fontStyle: 'italic' }}>Hydrobiologia</em>, <em style={{ fontStyle: 'italic' }}>727</em>(1), 75–94.
      </span>
    ),
    description: 'Investigates how marine animal communities establish and develop over time on artificial structures deployed for restoring damaged biogenic habitats.'
  },
  {
    id: 'ref-4',
    title: 'Ostrea edulis (Linnaeus, 1758)',
    authors: 'Food and Agriculture Organization (FAO)',
    source: 'Programa de información sobre especies acuáticas cultivadas, FAO Departamento de Pesca y Acuicultura',
    year: 'n.d.',
    type: 'report',
    url: 'https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/es/es_europeanflatoyster.htm',
    citation: (
      <span>
        Food and Agriculture Organization. (n.d.). <em style={{ fontStyle: 'italic' }}>Ostrea edulis (Linnaeus, 1758)</em>. Programa de información sobre especies acuáticas cultivadas. FAO Departamento de Pesca y Acuicultura.
      </span>
    ),
    description: 'Species datasheet detailing the taxonomy, habitat, biology, historical background, and global cultivation practices of the European flat oyster.'
  },
  {
    id: 'ref-5',
    title: 'Economic Valuation of Ecosystem Services Provided by Oyster Reefs',
    authors: 'Grabowski, J. H., Brumbaugh, R. D., Conrad, R. F., Keeler, A. G., Opaluch, J. J., Peterson, C. H., Piehler, M. F., Powers, S. P., & Smyth, A. R.',
    source: 'BioScience, 62(10), 900–909',
    year: '2012',
    type: 'article',
    url: 'https://www.researchgate.net/publication/250615516_Economic_Valuation_of_Ecosystem_Services_Provided_by_Oyster_Reefs',
    citation: (
      <span>
        Grabowski, J. H., Brumbaugh, R. D., Conrad, R. F., Keeler, A. G., Opaluch, J. J., Peterson, C. H., Piehler, M. F., Powers, S. P., & Smyth, A. R. (2012). Economic valuation of ecosystem services provided by oyster reefs. <em style={{ fontStyle: 'italic' }}>BioScience</em>, <em style={{ fontStyle: 'italic' }}>62</em>(10), 900–909.
      </span>
    ),
    description: 'A landmark study quantifying the economic benefits of non-fishery services provided by oyster reefs, including water filtration and habitat enhancement.'
  },
  {
    id: 'ref-6',
    title: 'Hatchery cultivation of bivalve molluscs: a practical manual',
    authors: 'Helm, M. M., Bourne, N., & Lovatelli, A.',
    source: 'FAO Fisheries Technical Paper No. 471, Food and Agriculture Organization of the United Nations',
    year: '2004',
    type: 'report',
    url: 'http://www.fao.org/3/y5720e/y5720e00.htm',
    citation: (
      <span>
        Helm, M. M., Bourne, N., & Lovatelli, A. (2004). <em style={{ fontStyle: 'italic' }}>Hatchery cultivation of bivalve molluscs: A practical manual</em> (FAO Fisheries Technical Paper No. 471). Food and Agriculture Organization of the United Nations.
      </span>
    ),
    description: 'A comprehensive practical manual outlining hatchery culture techniques, algal food production, spawning, larvae rearing, and spat setting protocols for bivalves.'
  },
  {
    id: 'ref-7',
    title: 'The European oyster, Ostrea edulis L., in Maine and Eastern Canada',
    authors: 'Hidu, H., & Lavoie, R.',
    source: 'In W. Menzel (Ed.), Estuarine and Marine Bivalve Mollusk Culture (pp. 36–46). CRC Press',
    year: '1991',
    type: 'report',
    url: 'https://scholar.google.com/scholar?q=The+European+oyster,+Ostrea+edulis+L.,+in+Maine+and+Eastern+Canada',
    citation: (
      <span>
        Hidu, H., & Lavoie, R. (1991). The European oyster, <em style={{ fontStyle: 'italic' }}>Ostrea edulis</em> L., in Maine and Eastern Canada. In W. Menzel (Ed.), <em style={{ fontStyle: 'italic' }}>Estuarine and marine bivalve mollusk culture</em> (pp. 36–46). CRC Press.
      </span>
    ),
    description: 'Book chapter analyzing the historical introduction, aquaculture trials, and ecological establishment of the European native oyster along the Atlantic coasts of Maine and Canada.'
  },
  {
    id: 'ref-8',
    title: 'The native oyster Ostrea edulis in Ireland: Its Past, Challenges and Future Prospects',
    authors: 'Lynch, S., & Culloty, S.',
    source: 'In J. Roney & M. Beekey (Eds.), Coastal Environment in the West of Ireland: Sea, Land, and Spirit (pp. 219–237). ResearchGate',
    year: '2022',
    type: 'article',
    url: 'https://www.researchgate.net/publication/365838138_The_native_oyster_Ostrea_edulis_in_Ireland_Its_Past_Challenges_and_Future_Prospects',
    citation: (
      <span>
        Lynch, S., & Culloty, S. (2022). The native oyster <em style={{ fontStyle: 'italic' }}>Ostrea edulis</em> in Ireland: Its past, challenges and future prospects. In J. Roney & M. Beekey (Eds.), <em style={{ fontStyle: 'italic' }}>Coastal environment in the west of Ireland: Sea, land, and spirit</em> (pp. 219–237). University College Cork / ResearchGate.
      </span>
    ),
    description: 'A review of the historical exploitation of Ostrea edulis in Ireland, its subsequent collapse due to fishing and disease, and modern prospects for its restoration.'
  },
  {
    id: 'ref-9',
    title: 'Marine and Freshwater Research Centre',
    authors: 'Marine and Freshwater Research Centre (MFRC)',
    source: 'Atlantic Technological University (ATU)',
    year: 'n.d.',
    type: 'website',
    url: 'https://mfrc-atu.ie/',
    citation: (
      <span>
        Marine and Freshwater Research Centre. (n.d.). <em style={{ fontStyle: 'italic' }}>Marine and Freshwater Research Centre</em>. Atlantic Technological University.
      </span>
    ),
    description: 'Official portal of the Marine and Freshwater Research Centre at ATU, providing information on fisheries management, aquaculture, and aquatic biodiversity research.'
  },
  {
    id: 'ref-10',
    title: 'Ireland: OISRE-Conamara – Oyster Information and Scientific Restoration of Ecosystems of Conamara',
    authors: 'Native Oyster Restoration Alliance (NORA)',
    source: 'noraeurope.eu',
    year: 'n.d.',
    type: 'website',
    url: 'https://noraeurope.eu/ireland-oisre-conamara-oyster-information-and-scientific-restoration-of-ecosystems-of-conamara/',
    citation: (
      <span>
        Native Oyster Restoration Alliance. (n.d.). <em style={{ fontStyle: 'italic' }}>Ireland: OISRE-Conamara – Oyster Information and Scientific Restoration of Ecosystems of Conamara</em>.
      </span>
    ),
    description: 'Overview of the OISRE-Conamara project, detailing the mapping and ecological restoration efforts for remnant native oyster beds in Kilkieran and Bertraghbouy Bays.'
  },
  {
    id: 'ref-11',
    title: 'History and Ecology of the Oyster',
    authors: 'Trinity Centre for Environmental Humanities (TCEH)',
    source: 'Food Smart Dublin, Trinity College Dublin',
    year: 'n.d.',
    type: 'website',
    url: 'https://www.tcd.ie/tceh/projects/foodsmartdublin/recipes/Sept_Oyster/HistoryEcology_oyster.php',
    citation: (
      <span>
        Trinity Centre for Environmental Humanities. (n.d.). <em style={{ fontStyle: 'italic' }}>History and ecology of the oyster</em>. Food Smart Dublin, Trinity College Dublin.
      </span>
    ),
    description: 'Explores the historical and ecological role of native oysters (Ostrea edulis) in Dublin Bay, combining archaeological findings and archival culinary history.'
  },
  {
    id: 'ref-12',
    title: 'European native oyster reef ecosystems are universally collapsed',
    authors: 'Zu Ermgassen, P. S. E., McCormick, H., Debney, A., Fariñas‐Franco, J. M., Gamble, C., Gillies, C., Hancock, B., Laugen, A. T., Pouvreau, S., Preston, J., Sanderson, W. G., Strand, Å., & Thurstan, R. H.',
    source: 'Conservation Letters, 18(1), e13068',
    year: '2025',
    type: 'article',
    url: 'https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/conl.13068',
    citation: (
      <span>
        Zu Ermgassen, P. S. E., McCormick, H., Debney, A., Fariñas‐Franco, J. M., Gamble, C., Gillies, C., Hancock, B., Laugen, A. T., Pouvreau, S., Preston, J., Sanderson, W. G., Strand, Å., & Thurstan, R. H. (2025). European native oyster reef ecosystems are universally collapsed. <em style={{ fontStyle: 'italic' }}>Conservation Letters</em>, <em style={{ fontStyle: 'italic' }}>18</em>(1), e13068.
      </span>
    ),
    description: 'Assesses the conservation status of Ostrea edulis reef ecosystems across Europe using the IUCN Red List of Ecosystems Framework, concluding that they are widely collapsed.'
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
        ref.source.toLowerCase().includes(searchTerm.toLowerCase())

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
                  <div
                    style={{
                      color: 'var(--text-h)',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      paddingLeft: '1.75rem',
                      textIndent: '-1.75rem'
                    }}
                  >
                    {ref.citation}
                  </div>
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
