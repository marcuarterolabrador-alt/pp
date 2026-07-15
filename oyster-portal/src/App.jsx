import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import mfrcLogo from './assets/mfrc_logo.png'
import atuLogo from './assets/ATU-Logo-removebg-preview.png'
import imbrseaLogo from './assets/IMBRSea_logo.png'
import AnatomicalViewer from './components/AnatomicalViewer'
import EcosystemEngineer from './components/EcosystemEngineer'
import DeclineTimeline from './components/DeclineTimeline'
import ProjectPortal from './components/ProjectPortal'
import MapSection from './components/MapSection'
import MethodologyPipeline from './components/MethodologyPipeline'
import TEKCard from './components/TEKCard'
import SubstrateGrid from './components/SubstrateGrid'
import LarvaeObservation from './components/LarvaeObservation'
import EcosystemServices from './components/EcosystemServices'
import FoldableSection from './components/FoldableSection'
import References from './components/References'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeModuleMobile, setActiveModuleMobile] = useState('intro')
  const [menuExpandedMobile, setMenuExpandedMobile] = useState(false)

  const [openSections, setOpenSections] = useState({
    intro: false,
    map: false,
    methodology: false,
    substrates: false,
    'larvae-sampling': false,
    biodiversity: false,
    references: false,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleNavigate = (id) => {
    if (window.innerWidth <= 768) {
      setActiveModuleMobile(id)
      setMenuExpandedMobile(false)
      setTimeout(() => {
        const container = document.getElementById('mobile-module-container')
        if (container) {
          const offset = 90 // Height offset of sticky nav to avoid overlap
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = container.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 150)
    } else {
      setOpenSections((prev) => ({ ...prev, [id]: true }))
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }

  const modules = [
    {
      id: 'intro',
      kicker: 'Module 1',
      title: 'Introduction',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Species Biology</h3>
            <AnatomicalViewer />
          </div>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Ecosystem function</h3>
            <EcosystemEngineer />
          </div>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Timeline of the history of native oysters in Conamara:</h3>
            <DeclineTimeline />
          </div>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Active Restoration Projects</h3>
            <ProjectPortal />
          </div>
        </div>
      )
    },
    {
      id: 'map',
      kicker: 'Module 2',
      title: 'Study Location',
      content: <MapSection />
    },
    {
      id: 'methodology',
      kicker: 'Module 3',
      title: 'Environmental Characterisation',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>
            To accurately locate, map, and assess both active and historical native oyster beds, as well as suitable spots for the oyster reefs, a diverse number of characterization tools are used:
          </p>
          <MethodologyPipeline />
          <TEKCard />
        </div>
      )
    },
    {
      id: 'substrates',
      kicker: 'Module 4',
      title: 'Cultch & Settlement Substrates',
      content: <SubstrateGrid />
    },
    {
      id: 'larvae-sampling',
      kicker: 'Module 5',
      title: 'Larvae Sampling & Observation',
      content: <LarvaeObservation />
    },
    {
      id: 'biodiversity',
      kicker: 'Module 6',
      title: 'Macroinvertebrates & Ecosystem Services',
      content: <EcosystemServices />
    },
    {
      id: 'references',
      kicker: 'Module 7',
      title: 'References & Sources',
      content: <References />
    }
  ]

  const activeModuleObj = modules.find((m) => m.id === activeModuleMobile) || modules[0]

  return (
    <>
      <Nav onNavigate={handleNavigate} />
      <Hero />

      {isMobile ? (
        <div id="mobile-module-container" className="mobile-module-selector-wrapper">
          <div 
            className="mobile-module-banner glass"
            onClick={() => setMenuExpandedMobile(!menuExpandedMobile)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <span className="section-kicker" style={{ margin: 0, fontSize: '0.65rem', letterSpacing: '1px' }}>
                {activeModuleObj.kicker}
              </span>
              <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-h)', fontWeight: '600' }}>
                {activeModuleObj.title}
              </h3>
            </div>
            <div 
              style={{
                transform: menuExpandedMobile ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ChevronDown size={20} color="var(--teal)" />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <AnimatePresence>
              {menuExpandedMobile && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="mobile-module-dropdown glass"
                  style={{ overflow: 'hidden', position: 'absolute', top: 8, left: 0, right: 0, zIndex: 100 }}
                >
                  <div style={{ padding: '0.5rem 0' }}>
                    {modules.map((m) => {
                      const isSelected = m.id === activeModuleMobile
                      return (
                        <button
                          key={m.id}
                          className={`mobile-dropdown-item ${isSelected ? 'active' : ''}`}
                          onClick={() => {
                            setActiveModuleMobile(m.id)
                            setMenuExpandedMobile(false)
                            setTimeout(() => {
                              const container = document.getElementById('mobile-module-container')
                              if (container) {
                                const offset = 90
                                const bodyRect = document.body.getBoundingClientRect().top
                                const elementRect = container.getBoundingClientRect().top
                                const elementPosition = elementRect - bodyRect
                                const offsetPosition = elementPosition - offset

                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: 'smooth'
                                })
                              }
                            }, 150)
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: isSelected ? 'var(--teal)' : 'var(--text-dim)', fontWeight: 700, letterSpacing: '1px' }}>
                              {m.kicker}
                            </span>
                            <span style={{ fontSize: '0.88rem', fontWeight: isSelected ? 600 : 500, color: isSelected ? 'var(--teal)' : 'var(--text-h)' }}>
                              {m.title}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mobile-module-active-content" style={{ marginTop: '1.5rem' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModuleMobile}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                {activeModuleObj.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        modules.map((m) => (
          <FoldableSection
            key={m.id}
            id={m.id}
            kicker={m.kicker}
            title={m.title}
            isOpen={openSections[m.id]}
            onToggle={() => toggleSection(m.id)}
          >
            {m.content}
          </FoldableSection>
        ))
      )}


      <footer style={{ textAlign: 'center', padding: '4rem 1.5rem 3rem', color: 'var(--text-dim)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <img src={mfrcLogo} alt="MFRC Logo" style={{ height: '76px', width: 'auto', opacity: 0.8 }} />
          <img src={atuLogo} alt="ATU Logo" style={{ height: '76px', width: 'auto', opacity: 0.8 }} />
          <img src={imbrseaLogo} alt="IMBRSea Logo" style={{ height: '76px', width: 'auto', opacity: 0.8 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span>Connemara Oyster Restoration Portal &mdash; Marine and Freshwater Research Centre, ATU Galway</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            &copy; 2026 Developed by Mar Cuartero Labrador (Research Intern at MFRC)
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
