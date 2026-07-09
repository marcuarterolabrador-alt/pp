import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FoldableSection({ id, kicker, title, isOpen, onToggle, children }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // On desktop, content is always open/visible. On mobile, it follows the isOpen prop.
  const showContent = !isMobile || isOpen

  return (
    <section
      id={id}
      className={`foldable-section ${isMobile ? 'mobile-mode' : ''} ${isOpen ? 'is-open' : 'is-closed'}`}
    >
      <div
        className="section-header-banner"
        onClick={() => {
          if (isMobile && onToggle) {
            onToggle()
          }
        }}
        style={{ cursor: isMobile ? 'pointer' : 'default' }}
      >
        <div className="section-intro">
          <span className="section-kicker">{kicker}</span>
          <h2>{title}</h2>
        </div>
        {isMobile && (
          <div className="toggle-icon-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <ChevronDown size={20} color="var(--teal)" />
            </motion.div>
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {showContent && (
          <motion.div
            initial={isMobile ? { height: 0, opacity: 0 } : false}
            animate={isMobile ? { height: 'auto', opacity: 1 } : false}
            exit={isMobile ? { height: 0, opacity: 0 } : false}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={isMobile ? { overflow: 'hidden' } : {}}
          >
            <div className="section-content-wrapper">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
