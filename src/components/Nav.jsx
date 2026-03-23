import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Nav() {
  const location = useLocation()
  const { scrollY } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const textOpacity = useTransform(scrollY, [50, 150], [1, 0])
  const logoOpacity = useTransform(scrollY, [50, 150], [0, 1])

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/notes', label: 'Notes' },
  ]

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">

          {/* Left side */}
          <Link to="/" onClick={handleNavClick} className="relative h-12 flex items-center" style={{ minWidth: '200px' }}>
  <motion.p
    className="text-xs uppercase tracking-widest text-gray-400 font-medium absolute left-0 whitespace-nowrap"
    style={{ opacity: textOpacity }}
  >
    Happy you're here
  </motion.p>
  
  <motion.img
    src="/logo.png"
    alt="Kyra Hermann"
    className="h-16 w-auto absolute left-0"
    style={{ opacity: logoOpacity }}
  />
</Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-gray-900 border-b border-gray-900 pb-0.5'
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 mt-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`text-sm uppercase tracking-widest transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav