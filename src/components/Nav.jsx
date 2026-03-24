import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    const res = await fetch('https://formspree.io/f/xjgazoab', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })
    if (res.ok) {
      setStatus('success')
      e.target.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="space-y-4">
      {status === 'success' ? (
        <p className="text-sm text-gray-700">Thanks — I'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your name" required
            className="w-full text-sm text-gray-700 border-b border-gray-200 py-2 outline-none focus:border-gray-900 transition-colors bg-transparent placeholder-gray-400" />
          <input type="email" name="email" placeholder="Your email" required
            className="w-full text-sm text-gray-700 border-b border-gray-200 py-2 outline-none focus:border-gray-900 transition-colors bg-transparent placeholder-gray-400" />
          <textarea name="message" placeholder="Your message" required rows={3}
            className="w-full text-sm text-gray-700 border-b border-gray-200 py-2 outline-none focus:border-gray-900 transition-colors bg-transparent placeholder-gray-400 resize-none" />
          {status === 'error' && <p className="text-xs text-red-500">Something went wrong — please try again.</p>}
          <button type="submit" disabled={status === 'sending'}
            className="text-sm text-gray-900 border-b border-gray-900 hover:text-gray-500 hover:border-gray-500 transition-colors pb-1 disabled:opacity-50">
            {status === 'sending' ? 'Sending...' : 'Send message →'}
          </button>
        </form>
      )}
    </div>
  )
}

function EnvelopeIcon({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      {/* Body */}
      <rect x="0.5" y="4.5" width="17" height="13" rx="0.5" stroke="currentColor" strokeWidth="1"/>
      {/* Flap: closed = sitting on top of body, open = flipped up above body */}
      <motion.path
        stroke="currentColor"
        strokeWidth="1"
        fill="white"
        animate={{
          d: open
            ? "M0.5 4.5L9 -1.5L17.5 4.5"
            : "M0.5 4.5L9 11L17.5 4.5"
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </svg>
  )
}

function Nav() {
  const location = useLocation()
  const { scrollY } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

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
    setContactOpen(false)
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

          {/* Desktop links + envelope */}
          <div className="hidden md:flex items-center gap-8">
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
            <button
              onClick={() => setContactOpen(o => !o)}
              className={`transition-colors duration-200 ${contactOpen ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'}`}
              aria-label="Get in touch"
            >
              <EnvelopeIcon open={contactOpen} />
            </button>
          </div>

          {/* Mobile: envelope + burger */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setContactOpen(o => !o)}
              className={`transition-colors duration-200 ${contactOpen ? 'text-gray-900' : 'text-gray-400'}`}
              aria-label="Get in touch"
            >
              <EnvelopeIcon open={contactOpen} />
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Contact overlay */}
      <AnimatePresence>
        {contactOpen && (
          <>
            {/* Full page backdrop — covers sub-nav and everything below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30"
  style={{ zIndex: 45 }}
  onClick={() => setContactOpen(false)}

            />

            {/* Panel — sits right below the main nav */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="fixed top-[97px] left-0 right-0 bg-white border-b border-gray-200 shadow-sm"
  style={{ zIndex: 46 }}
  >
              <div className="max-w-5xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-12 gap-12 items-start">

                  {/* Photo + label */}
                  <div className="md:col-span-3 flex flex-col gap-3">
  <p className="text-xs uppercase tracking-widest text-gray-400">Get in touch</p>
  <img
    src="/kyra.jpg"
    alt="Kyra Hermann"
    className="w-14 h-14 md:w-24 md:h-24 rounded-full object-cover md:mt-1"
  />
</div>

                  {/* Form */}
                  <div className="md:col-span-7">
                    <ContactForm />
                  </div>

                  {/* Close */}
                  <div className="md:col-span-2 flex justify-end">
                    <button
                      onClick={() => setContactOpen(false)}
                      className="text-gray-400 hover:text-gray-900 transition-colors text-xl leading-none"
                      style={{ fontWeight: 300 }}
                    >
                      ✕
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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