import { useState, useEffect } from 'react'
import { substrates, enhancementCues } from '../data/substrates'
import { substrateIcons } from './SubstrateIcons'
import { Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, XCircle } from 'lucide-react'
import spatImg from '../assets/spat_native_oyster_tiles.jpeg'
import scallopsImg from '../assets/scallops.jpeg'
import spatScallopImg from '../assets/spat_scallop.jpeg'
import coupellesImg from '../assets/coupelles.png'
import pasteSubstratesImg from '../assets/paste_substrates.jpeg'
import paste2Img from '../assets/paste2.jpeg'

const spatDetails = {
  native: {
    title: 'Native Oyster Spat (Ostrea edulis)',
    scientific: 'Ostrea edulis',
    abundance: 'Target Species',
    description:
      'The primary target of restoration efforts. These juvenile oysters settle on the clean calcified surfaces of the cultch. Over 1, 2, or more years, they build their permanent shells, forming the base of the biogenic reef matrix.',
  },
  saddle: {
    title: 'Saddle Oyster Spat (Anomia ephippium)',
    scientific: 'Anomia ephippium',
    abundance: 'Competitor Species',
    description:
      'A common bivalve competitor that also settles on cultch. Unlike the native oyster, saddle oysters have very thin, translucent, pearly shells and do not form three-dimensional reefs. Monitoring their abundance helps evaluate space competition on the cultch.',
  },
}

export default function SubstrateGrid() {
  const [flipped, setFlipped] = useState({})
  const [selectedSpat, setSelectedSpat] = useState('native')
  const [answers, setAnswers] = useState({ native: '', saddle: '' })
  const [expandedSubstrate, setExpandedSubstrate] = useState(null)
  const [scallopTab, setScallopTab] = useState('substrate')

  useEffect(() => {
    if (expandedSubstrate) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [expandedSubstrate])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setExpandedSubstrate(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleInputChange = (val) => {
    setAnswers((prev) => ({ ...prev, [selectedSpat]: val.trim() }))
  }

  const currentVal = answers[selectedSpat]
  const isCorrect = selectedSpat === 'native' ? currentVal === '1' : currentVal === '9'

  const toggle = (id) => setFlipped((f) => ({ ...f, [id]: !f[id] }))

  return (
    <div>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text)', fontSize: '1rem', lineHeight: '1.6' }}>
        Different types of substrate have been and will be deployed in the study bays to promote oyster settlement. Flip each card for more information: 
      </p>

      <div className="grid-auto">
        {substrates.map((s) => {
          const Icon = substrateIcons[s.id]
          const isFlipped = !!flipped[s.id]
          return (
            <div
              key={s.id}
              className={`flip-card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => toggle(s.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front glass" style={{ position: 'relative' }}>
                  <span
                    className={`pill ${s.status === 'Future Trial' ? 'coral' : ''}`}
                    style={{ alignSelf: 'flex-start' }}
                  >
                    {s.status}
                  </span>
                  
                  {/* Maximize Button Front */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedSubstrate(s);
                    }}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      border: '1px solid var(--panel-border)',
                      background: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--text-dim)',
                      transition: 'all 0.2s ease',
                      zIndex: 10,
                      padding: 0
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.color = 'var(--cyan)';
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.45)';
                      e.currentTarget.style.color = 'var(--text-dim)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title="Expand view"
                  >
                    <Maximize2 size={13} />
                  </button>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    {s.id === 'scallop-shell' ? (
                      <div style={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                         <img src={scallopsImg} alt="Scallop Shells" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                    ) : s.id === 'chinese-hats' ? (
                      <div style={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                         <img src={coupellesImg} alt="Coupelles" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                    ) : (
                      <Icon />
                    )}
                  </div>
                  <h3 style={{ textAlign: 'center', marginTop: (s.id === 'scallop-shell' || s.id === 'chinese-hats') ? '12px' : '0' }}>{s.name}</h3>
                  {s.latin && s.id !== 'scallop-shell' && (
                    <p style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                      {s.latin}
                    </p>
                  )}
                </div>
                
                <div className="flip-card-back glass" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', position: 'relative' }}>
                  {/* Maximize Button Back */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedSubstrate(s);
                    }}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      border: '1px solid var(--panel-border)',
                      background: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--text-dim)',
                      transition: 'all 0.2s ease',
                      zIndex: 10,
                      padding: 0
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.color = 'var(--cyan)';
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.45)';
                      e.currentTarget.style.color = 'var(--text-dim)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title="Expand view"
                  >
                    <Maximize2 size={13} />
                  </button>

                  {s.id === 'scallop-shell' ? (
                    <>
                      <div style={{ width: '100%', height: '110px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--panel-border)', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                        <img src={spatScallopImg} alt="Spat on scallop shell" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                      <p style={{ fontSize: '0.76rem', color: 'var(--text-dim)', margin: 0, lineHeight: '1.4' }}>
                        Scallop shells, a by-product of scallop fisheries, can be easily deployed and serves as substrate for the native oyster to settle.
                      </p>
                      
                      {/* Learn More Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedSubstrate(s);
                        }}
                        style={{
                          marginTop: 'auto',
                          background: 'none',
                          border: 'none',
                          color: 'var(--cyan)',
                          fontSize: '0.76rem',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                          cursor: 'pointer',
                          padding: '4px 0 0 0',
                          alignSelf: 'center'
                        }}
                      >
                        Learn More <Maximize2 size={11} />
                      </button>
                    </>
                  ) : (
                    <>
                      <dl style={{ margin: 0, fontSize: '0.82rem' }}>
                        <Row label="Settlement" value={s.settlement} />
                        <Row label="Stability" value={s.stability} />
                        <Row label="Logistics" value={s.logistics} />
                      </dl>
                      <p style={{ fontSize: '0.78rem', color: 'var(--teal)', marginTop: 10, marginBottom: 2 }}>Pros</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>{s.pros}</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--coral)', marginTop: 10, marginBottom: 2 }}>Cons</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>{s.cons}</p>
                      
                      {/* Learn More Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedSubstrate(s);
                        }}
                        style={{
                          marginTop: 'auto',
                          background: 'none',
                          border: 'none',
                          color: 'var(--cyan)',
                          fontSize: '0.76rem',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                          cursor: 'pointer',
                          padding: '4px 0 0 0',
                          alignSelf: 'center'
                        }}
                      >
                        Learn More <Maximize2 size={11} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="glass glass-panel" style={{ marginTop: '1.5rem', padding: '1rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Settlement Enhancement Cues</h3>
        <div className="grid-2" style={{ gridTemplateColumns: '1.6fr 1fr', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: 'var(--text)', fontSize: '0.82rem', lineHeight: '1.4', margin: 0 }}>
              The cultch is coated with different substances to enhance its effectiveness. Currently, the following two options are being tested:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ paddingLeft: '0.75rem', borderLeft: '2px solid var(--teal)' }}>
                <h4 style={{ margin: '0 0 0.05rem 0', fontSize: '0.85rem', color: 'var(--teal)', fontWeight: '700' }}>Bio-Pastes</h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.78rem', margin: 0, lineHeight: '1.35' }}>
                  Application of biological settlement cues to accelerate gregarious settlement behaviour.
                </p>
              </div>
              <div style={{ paddingLeft: '0.75rem', borderLeft: '2px solid var(--cyan)' }}>
                <h4 style={{ margin: '0 0 0.05rem 0', fontSize: '0.85rem', color: 'var(--cyan)', fontWeight: '700' }}>Concrete Matrices</h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.78rem', margin: 0, lineHeight: '1.35' }}>
                  Specially textured surfaces designed to maximise larval attachment rates.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '120px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--panel-border)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            }}
            >
              <img
                src={pasteSubstratesImg}
                alt="Bio-pastes and concrete matrices substrates under testing"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              width: '100%',
              maxWidth: '120px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--panel-border)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            }}
            >
              <img
                src={paste2Img}
                alt="Bio-pastes and concrete matrices substrates close up"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spat Evaluation & Monitoring Section */}
      <div className="glass glass-panel" style={{ marginTop: '2.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>
          <span className="pill">Cultch Effectiveness Monitoring</span>
          <h3 style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>Oyster Spat Recruitment Evaluation</h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
            To measure how well different substrates perform, scientists conduct long-term monitoring. The settled oyster spat (larvae that have successfully attached and metamorphosed) are counted on the cultch after 1, 2, or more years of field deployment.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Spat details description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass" style={{ padding: '1.5rem', borderLeft: `4px solid ${selectedSpat === 'native' ? 'var(--teal)' : 'var(--cyan)'}` }}>
              <span className="pill" style={{ background: selectedSpat === 'native' ? 'rgba(20,184,166,0.15)' : 'rgba(14,165,233,0.15)', color: selectedSpat === 'native' ? 'var(--teal)' : 'var(--cyan)' }}>
                {spatDetails[selectedSpat].abundance}
              </span>
              <h4 style={{ margin: '0.5rem 0 0.25rem 0', fontSize: '1.2rem', color: 'var(--text-h)' }}>
                {spatDetails[selectedSpat].title}
              </h4>
              <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0 0 1rem 0' }}>
                {spatDetails[selectedSpat].scientific}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
                {spatDetails[selectedSpat].description}
              </p>
            </div>

            {/* Counting Challenge Box */}
            <div className="glass" style={{ padding: '1.25rem', background: 'rgba(15, 23, 42, 0.15)', border: '1px solid rgba(148, 163, 184, 0.12)', borderRadius: '10px' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-h)' }}>
                How many can you count in this picture?
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="Enter number..."
                  value={currentVal}
                  onChange={(e) => handleInputChange(e.target.value)}
                  style={{
                    width: '120px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--panel-border)',
                    background: 'var(--panel)',
                    color: 'var(--text)',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
                {currentVal !== '' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}>
                    {isCorrect ? (
                      <span style={{ color: 'var(--teal)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: 4 }}>
                        ✓ Correct
                      </span>
                    ) : (
                      <span style={{ color: 'var(--coral)', fontWeight: '600' }}>
                        ✗ Incorrect
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0.5rem 0 0 0', fontStyle: 'italic' }}>
              * Click on the labels overlaying the image to inspect and identify each species on the collector tiles.
            </p>
          </div>

          {/* Interactive photo with hotspots */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              display: 'flex',
            }}
          >
            <img
              src={spatImg}
              alt="Oyster spat on collector tiles"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '0.5rem',
                left: '0.75rem',
                color: '#ffffff',
                fontSize: '0.7rem',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
                zIndex: 10,
              }}
            >
              Image taken by Tiffany Montfort
            </span>

            {/* Hotspot 1: Ostrea edulis spat */}
            <button
              onClick={() => setSelectedSpat('native')}
              style={{
                position: 'absolute',
                left: '45%',
                top: '45%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: selectedSpat === 'native' ? 'var(--teal)' : 'rgba(15, 23, 42, 0.75)',
                border: `2px solid ${selectedSpat === 'native' ? '#ffffff' : 'var(--teal)'}`,
                boxShadow: selectedSpat === 'native' ? '0 0 12px var(--teal)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s',
                zIndex: 10,
                padding: 0,
              }}
              title="Native Oyster Spat"
            />

            {/* Hotspot 2: Saddle oyster spat */}
            <button
              onClick={() => setSelectedSpat('saddle')}
              style={{
                position: 'absolute',
                left: '69%',
                top: '58%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: selectedSpat === 'saddle' ? 'var(--cyan)' : 'rgba(15, 23, 42, 0.75)',
                border: `2px solid ${selectedSpat === 'saddle' ? '#ffffff' : 'var(--cyan)'}`,
                boxShadow: selectedSpat === 'saddle' ? '0 0 12px var(--cyan)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s',
                zIndex: 10,
                padding: 0,
              }}
              title="Saddle Oyster Spat"
            />
          </div>
        </div>
      </div>

      {/* Expanded Substrate Modal Overlay */}
      {expandedSubstrate && (() => {
        const s = expandedSubstrate;
        const Icon = substrateIcons[s.id];
        const currentIndex = substrates.findIndex((sub) => sub.id === s.id);
        
        const handlePrev = (e) => {
          e.stopPropagation();
          const prevIndex = (currentIndex - 1 + substrates.length) % substrates.length;
          setExpandedSubstrate(substrates[prevIndex]);
          setScallopTab('substrate');
        };
        
        const handleNext = (e) => {
          e.stopPropagation();
          const nextIndex = (currentIndex + 1) % substrates.length;
          setExpandedSubstrate(substrates[nextIndex]);
          setScallopTab('substrate');
        };

        const getSettlementPercent = (val) => {
          if (val === 'Very High') return 100;
          if (val === 'High') return 75;
          if (val === 'Medium') return 50;
          if (val === 'Low') return 25;
          return 0;
        };

        const getStabilityPercent = (val) => {
          if (val === 'High') return 80;
          if (val === 'Medium') return 50;
          if (val === 'Low') return 20;
          return 0;
        };

        const settlementPercent = getSettlementPercent(s.settlement);
        const stabilityPercent = getStabilityPercent(s.stability);

        return (
          <div 
            className="modal-backdrop"
            onClick={() => setExpandedSubstrate(null)}
          >
            {/* Desktop Side Navigation Chevrons */}
            <button 
              className="modal-nav-btn prev"
              onClick={handlePrev}
              title="Previous substrate"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              className="modal-nav-btn next"
              onClick={handleNext}
              title="Next substrate"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Box */}
            <div 
              className="modal-container glass glass-panel"
              onClick={(e) => e.stopPropagation()}
              style={{ padding: '2rem' }}
            >
              {/* Close Button */}
              <button 
                className="modal-close-btn"
                onClick={() => setExpandedSubstrate(null)}
                title="Close overlay"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div style={{ paddingRight: '2.5rem' }}>
                <span className={`pill ${s.status === 'Future Trial' ? 'coral' : ''}`} style={{ marginBottom: '0.5rem' }}>
                  {s.status}
                </span>
                <h2 style={{ margin: '0.25rem 0 0.15rem 0', fontSize: '1.75rem' }}>{s.name}</h2>
                {s.latin && (
                  <p style={{ fontStyle: 'italic', color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>
                    {s.latin}
                  </p>
                )}
              </div>

              {/* Grid Content */}
              <div className="modal-grid">
                {/* Left Column: Visual representation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {s.id === 'scallop-shell' ? (
                    <>
                      <div className="image-tabs-container">
                        <button 
                          className={`image-tab-btn ${scallopTab === 'substrate' ? 'active' : ''}`}
                          onClick={() => setScallopTab('substrate')}
                        >
                          Substrate
                        </button>
                        <button 
                          className={`image-tab-btn ${scallopTab === 'recruitment' ? 'active' : ''}`}
                          onClick={() => setScallopTab('recruitment')}
                        >
                          Spat Recruitment
                        </button>
                      </div>
                      
                      <div style={{ 
                        width: '100%', 
                        height: '240px', 
                        borderRadius: '12px', 
                        overflow: 'hidden', 
                        border: '1px solid var(--panel-border)', 
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)' 
                      }}>
                        <img 
                          src={scallopTab === 'substrate' ? scallopsImg : spatScallopImg} 
                          alt={scallopTab === 'substrate' ? "Scallop Shells" : "Spat on scallop shell"} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'italic', margin: '0.25rem 0 0 0', textAlign: 'center' }}>
                        {scallopTab === 'substrate' 
                          ? "Scallop shells (Pecten maximus) are an abundant, organic by-product of regional fisheries."
                          : "Native oyster spat (Ostrea edulis) successfully recruited and growing on a collector scallop shell."
                        }
                      </p>
                    </>
                  ) : s.id === 'chinese-hats' ? (
                    <>
                      <div style={{ 
                        width: '100%', 
                        height: '240px', 
                        borderRadius: '12px', 
                        overflow: 'hidden', 
                        border: '1px solid var(--panel-border)', 
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        marginTop: '2.5rem'
                      }}>
                        <img src={coupellesImg} alt="Coupelles" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'italic', margin: '0.25rem 0 0 0', textAlign: 'center' }}>
                        Textured, lime-coated coupelles nesting cones, designed to maximize larval attachment surface area.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="technical-dish" style={{ marginTop: '2.5rem' }}>
                        <div className="large-svg-container">
                          <Icon />
                        </div>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'italic', margin: '0.25rem 0 0 0', textAlign: 'center' }}>
                        Technical diagram of the {s.name} restoration substrate.
                      </p>
                    </>
                  )}
                </div>

                {/* Right Column: Specifications & Pros/Cons */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--panel-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                      Performance Profile
                    </h3>

                    {/* Settlement Rating */}
                    <div className="metric-row">
                      <div className="metric-header">
                        <span>Settlement Efficiency</span>
                        <span style={{ color: s.settlement === 'Pending' ? 'var(--text-dim)' : 'var(--teal)' }}>
                          {s.settlement}
                        </span>
                      </div>
                      <div className="metric-bar-bg">
                        <div 
                          className={`metric-bar-fill ${s.settlement === 'Pending' ? 'pending' : (settlementPercent >= 75 ? 'teal' : 'cyan')}`}
                          style={{ width: `${s.settlement === 'Pending' ? 100 : settlementPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Stability Rating */}
                    <div className="metric-row">
                      <div className="metric-header">
                        <span>Hydrodynamic Stability</span>
                        <span style={{ color: s.stability === 'Pending' ? 'var(--text-dim)' : 'var(--cyan)' }}>
                          {s.stability}
                        </span>
                      </div>
                      <div className="metric-bar-bg">
                        <div 
                          className={`metric-bar-fill ${s.stability === 'Pending' ? 'pending' : (stabilityPercent >= 80 ? 'teal' : (stabilityPercent >= 50 ? 'cyan' : 'coral'))}`}
                          style={{ width: `${s.stability === 'Pending' ? 100 : stabilityPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Logistics Detail */}
                    <div style={{ marginTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-h)', display: 'block', marginBottom: '0.25rem' }}>
                        Logistical Profile
                      </span>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', margin: 0, background: 'rgba(255, 255, 255, 0.3)', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(148, 163, 184, 0.08)' }}>
                        {s.logistics}
                      </p>
                    </div>
                  </div>

                  {/* Pros & Cons Callouts */}
                  <div className="pros-cons-grid">
                    <div className="callout-box pro">
                      <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'flex-start', color: 'var(--teal)', fontWeight: '600', marginBottom: '0.25rem' }}>
                        <CheckCircle2 size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>Key Advantages</span>
                      </div>
                      <div style={{ color: 'var(--text)', fontSize: '0.78rem' }}>
                        {s.pros}
                      </div>
                    </div>

                    <div className="callout-box con">
                      <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'flex-start', color: 'var(--coral)', fontWeight: '600', marginBottom: '0.25rem' }}>
                        <XCircle size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>Challenges & Limitations</span>
                      </div>
                      <div style={{ color: 'var(--text)', fontSize: '0.78rem' }}>
                        {s.cons}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Carousel Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--panel-border)'
              }}>
                <button 
                  onClick={handlePrev} 
                  className="modal-footer-nav-btn"
                  title="Previous substrate"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: '600', letterSpacing: '0.5px' }}>
                  {currentIndex + 1} / {substrates.length}
                </span>
                
                <button 
                  onClick={handleNext} 
                  className="modal-footer-nav-btn"
                  title="Next substrate"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--panel-border)' }}>
      <dt style={{ color: 'var(--text-dim)' }}>{label}</dt>
      <dd style={{ margin: 0 }}>{value}</dd>
    </div>
  )
}
