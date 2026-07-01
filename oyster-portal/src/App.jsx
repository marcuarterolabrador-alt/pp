import ParticleBackground from './components/ParticleBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
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
      <ParticleBackground />
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

      <footer style={{ textAlign: 'center', padding: '3rem 1.5rem', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
        Connemara Oyster Restoration Portal &mdash; Marine and Freshwater Research Centre, ATU Galway
      </footer>
    </>
  )
}

export default App
