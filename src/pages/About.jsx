import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Timeline from "../Timeline"

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
          <textarea name="message" placeholder="Your message" required rows={4}
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

function About() {
  const [activeSection, setActiveSection] = useState('get-to-know-me')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      const sections = ['get-to-know-me', 'how-this-shows-up', 'timeline', 'becoming-freelancer', 'working-together']
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >

      {/* Sticky Navigation Bar - Hidden on mobile */}
      <div className={`hidden md:block sticky bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`} style={{ top: '97px' }}>
        <nav className="max-w-5xl mx-auto px-6">
          <div className={`flex gap-10 overflow-x-auto transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}>
            <button
              onClick={() => scrollToSection('get-to-know-me')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'get-to-know-me'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              About Me
            </button>
            
            <button
              onClick={() => scrollToSection('how-this-shows-up')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'how-this-shows-up'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              My Work
            </button>
            
            <button
              onClick={() => scrollToSection('timeline')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'timeline'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Background
            </button>
            
            <button
              onClick={() => scrollToSection('becoming-freelancer')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'becoming-freelancer'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              My Journey
            </button>
            
            <button
              onClick={() => scrollToSection('working-together')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'working-together'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Working Together
            </button>
          </div>
        </nav>
      </div>

      {/* Get to Know Me - Piano Story */}
      <section id="get-to-know-me" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Get to Know Me
            </p>
          </div>
          
          <div className="md:col-span-9 pr-4 space-y-6">
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              I was three years old when I first sat down at my grandma's piano. She guided my fingers across 
              the keys, and from that moment on, music became a constant in my life. Over the years, I taught 
              myself how to play. Without lessons, just through repetition, curiosity, and a lot of patience.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              What started as play slowly turned into discipline. I spent hours practicing, returning to the same 
              movements until they felt natural. Today, my focus is less on learning new songs and more on technique, 
              flow, and understanding how small adjustments change everything.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
            That mindset has stayed with me.
            </p>
          </div>
        </div>
      </section>

      {/* Piano Image */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <img 
          src="/piano.png" 
          alt="Piano" 
          className="w-full h-[50vh] object-cover rounded-sm"
        />
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* How This Shows Up in My Work */}
      <section id="how-this-shows-up" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              How This Shows Up in My Work
            </p>
          </div>
          
          <div className="md:col-span-9 pr-4 space-y-6">
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
            I am naturally drawn to the space between creativity and structure. I like thinking beyond the obvious, breaking down complexity, aligning people, and making sure ideas do not just sound good, but actually land.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
            My work often sits between concept and execution. I support customer facing initiatives, shape communication, and help projects move from idea to reality.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Timeline */}
      <div id="timeline" className="scroll-mt-24">
        <Timeline />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

{/* Becoming a Freelancer */}
<section id="becoming-freelancer" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
  <div className="grid md:grid-cols-12 gap-12">
    <div className="md:col-span-3">
      <p className="text-xs uppercase tracking-widest text-gray-400">
        Becoming a Freelancer
      </p>
    </div>
    
    <div className="md:col-span-9 pr-4 space-y-6">
      <p className="text-sm text-gray-700 leading-relaxed text-justify">
      My move into freelancing grew naturally out of ongoing project work with Montblanc, where I continue to support the development of Digital Paper.
      Over time, this way of working proved to be the most effective for me. Focused, hands on, and flexible enough to keep evolving.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed text-justify">
      What I value most is the ability to work across different teams and projects. It allows me to bring in an external perspective and apply what I learn in one context to another.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed text-justify"> 
      I focus on bringing ideas to life, coordinating across teams, and making sure customer facing work is not only delivered, but truly comes together.
      </p>
    </div>
  </div>
</section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

     {/* Working Together */}
<section id="working-together" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
  <div className="grid md:grid-cols-12 gap-12">
    <div className="md:col-span-3">
      <p className="text-xs uppercase tracking-widest text-gray-400">
        Working Together
      </p>
    </div>
    <div className="md:col-span-9 pr-4 space-y-6">
      <p className="text-sm text-gray-700 leading-relaxed text-justify">
        I enjoy working with people who value clarity, trust, and thoughtful collaboration.
        If that sounds like you, feel free to reach out.
      </p>
      <ContactForm />
    </div>
  </div>
</section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Image */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <img 
          src="/headerabout.png" 
          alt="Piano" 
          className="w-full h-[50vh] object-cover rounded-sm"
        />
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
  <div className="flex flex-col md:flex-row justify-between gap-8">
    <div className="text-xs text-gray-500">© 2026 Kyra Hermann</div>
    <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 text-xs">
      <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
      <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">Impressum</a>
      <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">Datenschutz</a>
    </div>
  </div>
</footer>

    </motion.div>
  )
}

export default About