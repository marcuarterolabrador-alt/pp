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
import TelemetryChart from './components/TelemetryChart'
import SubstrateGrid from './components/SubstrateGrid'
import ZooplanktonModule from './components/ZooplanktonModule'
import MicroscopeGame from './components/MicroscopeGame'
import BiodiversityMatrix from './components/BiodiversityMatrix'

function SectionHeader({ kicker, title }) {
  return (
    <div className="section-intro">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />

      <section id="intro">
        <SectionHeader kicker="Module 1" title="Species Biology &amp; Ecosystem Function" />
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
      </section>

      <section id="map">
        <SectionHeader kicker="Module 2" title="GIS &amp; Fieldwork Map" />
        <MapSection />
      </section>

      <section id="methodology">
        <SectionHeader kicker="Module 3" title="Methodology &amp; Telemetry" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <MethodologyPipeline />
          <TEKCard />
          <TelemetryChart />
        </div>
      </section>

      <section id="substrates">
        <SectionHeader kicker="Module 4" title="Cultch &amp; Settlement Substrates" />
        <SubstrateGrid />
      </section>

      <section id="zooplankton">
        <SectionHeader kicker="Module 5" title="Zooplankton Sampling &amp; Microscope Game" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <ZooplanktonModule />
          <MicroscopeGame />
        </div>
      </section>

      <section id="biodiversity">
        <SectionHeader kicker="Module 6" title="Benthic Biodiversity Assessment" />
        <BiodiversityMatrix />
      </section>

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
