import { useState } from 'react'
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

function SectionHeader({ kicker, title }) {
  return (
    <div className="section-intro">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  const [openSections, setOpenSections] = useState({
    intro: false,
    map: false,
    methodology: false,
    substrates: false,
    'larvae-sampling': false,
    biodiversity: false,
  })

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleNavigate = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <>
      <Nav onNavigate={handleNavigate} />
      <Hero />

      <FoldableSection
        id="intro"
        kicker="Module 1"
        title="Species Biology & Ecosystem Function"
        isOpen={openSections.intro}
        onToggle={() => toggleSection('intro')}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <AnatomicalViewer />
          <EcosystemEngineer />
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Timeline of Decline &amp; Recovery</h3>
            <DeclineTimeline />
          </div>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Active Restoration Projects</h3>
            <ProjectPortal />
          </div>
        </div>
      </FoldableSection>

      <FoldableSection
        id="map"
        kicker="Module 2"
        title="Study Location"
        isOpen={openSections.map}
        onToggle={() => toggleSection('map')}
      >
        <MapSection />
      </FoldableSection>

      <FoldableSection
        id="methodology"
        kicker="Module 3"
        title="Environmental Characterisation"
        isOpen={openSections.methodology}
        onToggle={() => toggleSection('methodology')}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <MethodologyPipeline />
          <TEKCard />
        </div>
      </FoldableSection>

      <FoldableSection
        id="substrates"
        kicker="Module 4"
        title="Cultch & Settlement Substrates"
        isOpen={openSections.substrates}
        onToggle={() => toggleSection('substrates')}
      >
        <SubstrateGrid />
      </FoldableSection>

      <FoldableSection
        id="larvae-sampling"
        kicker="Module 5"
        title="Larvae Sampling & Observation"
        isOpen={openSections['larvae-sampling']}
        onToggle={() => toggleSection('larvae-sampling')}
      >
        <LarvaeObservation />
      </FoldableSection>

      <FoldableSection
        id="biodiversity"
        kicker="Module 6"
        title="Macroinvertebrates & Ecosystem Services"
        isOpen={openSections.biodiversity}
        onToggle={() => toggleSection('biodiversity')}
      >
        <EcosystemServices />
      </FoldableSection>

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

