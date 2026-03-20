import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Home() {
  const [activeSection, setActiveSection] = useState('what-i-do')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      const sections = ['what-i-do', 'selected-work', 'approach']
      
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

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 border-b border-gray-200">
        <div className="flex justify-center mb-16">
          <img 
            src="/homelogo.gif" 
            alt="Kyra Hermann" 
            className="h-20 md:h-24"
          />
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            I help teams bring customer-facing ideas to life, from campaigns and go-to-market 
            initiatives to product communication and rollout.
          </p>
        </div>
      </section>

      {/* Sticky Navigation Bar - Hidden on mobile */}
      <div className={`hidden md:block sticky bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`} style={{ top: '97px' }}>
        <nav className="max-w-5xl mx-auto px-6 justify-between items-center">
          <div className={`flex gap-10 overflow-x-auto transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}>
            <button
              onClick={() => scrollToSection('what-i-do')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'what-i-do'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              What I Do
            </button>
            
            <button
              onClick={() => scrollToSection('selected-work')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'selected-work'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Selected Work
            </button>
            
            <button
              onClick={() => scrollToSection('approach')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'approach'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Approach
            </button>
          </div>
        </nav>
      </div>

   {/* What I Do */}
   <section id="what-i-do" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              What I Do
            </p>
          </div>

          <div className="md:col-span-9 space-y-8">
            <div className="flex gap-4 items-start group transition-all duration-300 hover:translate-y-[-2px] p-4 rounded-sm">
              <div className="w-1 h-16 bg-[#E8EDE7] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Project & Operational Management
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  I help teams turn ideas into executed projects by keeping everyone aligned and things moving. That means coordinating stakeholders, managing timelines, and making sure nothing falls through the cracks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group transition-all duration-300 hover:translate-y-[-2px] p-4 rounded-sm">
              <div className="w-1 h-16 bg-[#E8EDE7] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Product & Go-to-Market Support
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  I translate product ideas into launch concepts that actually make sense to customers. Whether it's a new feature or a full product launch, I help bridge the gap between what you're building and how you talk about it.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group transition-all duration-300 hover:translate-y-[-2px] p-4 rounded-sm">
              <div className="w-1 h-16 bg-[#E8EDE7] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Content & Communication
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  I create clear, engaging communication around products and campaigns, from writing articles or captions, defining brand identity and storytelling, to creating visual materials. The kind of content that helps people understand what you're offering and why it matters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group transition-all duration-300 hover:translate-y-[-2px] p-4 rounded-sm">
              <div className="w-1 h-16 bg-[#E8EDE7] rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Editorial & Design Production
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  I design structured materials like guides, workbooks, and resources that turn abstract ideas into something tangible. Think InDesign layouts, educational content, and branded materials that people can actually use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Selected Work */}
      <section id="selected-work" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Selected Work
            </p>
          </div>

          <div className="md:col-span-9 space-y-16">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-medium text-gray-900">
                  Montblanc Digital Paper
                </h3>
                <span className="text-xs text-gray-400">Ongoing</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed text-justify mb-2">
                Hands-on, project-based support across marketing, product, and execution. Shaping how 
                the product is understood, communicated, and supported across customer touchpoints, from 
                launch to post-purchase experience.
              </p>
              <p className="text-xs text-gray-500">
                Marketing & Project Management
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-medium text-gray-900">
                  BoraBora Studios
                </h3>
                <span className="text-xs text-gray-400">Ongoing</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed text-justify mb-2">
                Supporting the delivery of customer-facing activation campaigns. Translating creative 
                ideas into clear plans, aligning stakeholders, and ensuring smooth delivery from brief 
                to launch across three separate projects.
              </p>
              <p className="text-xs text-gray-500">
                Producer - Campaign & Activation
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-medium text-gray-900">
                  Other Clients
                </h3>
                <span className="text-xs text-gray-400">2024 - Present</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed text-justify mb-2">
                Supporting smaller brands with social media strategy, content planning, and community management.
              </p>
              <p className="text-xs text-gray-500">
                Social Media Management
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

     {/* Approach */}
<section id="approach" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
  <div className="grid md:grid-cols-12 gap-12">
    <div className="md:col-span-3">
      <p className="text-xs uppercase tracking-widest text-gray-400">
        Approach
      </p>
    </div>

    <div className="md:col-span-9 space-y-8">
      <p className="text-sm text-gray-700 leading-loose text-justify">
        I focus on work that moves ideas from concept to reality. Coordinating across teams, 
        shaping communication, and making sure customer-facing initiatives actually land.
      </p>
      
      <p className="text-sm text-gray-700 leading-loos text-justify">
        My approach combines structure with flexibility. I bring clarity to complex projects, 
        translate between different stakeholders, and stay close to execution. Whether it's 
        coordinating a product launch, building out communication materials, or supporting 
        campaign delivery, I work to keep things moving forward without losing sight of the 
        bigger picture.
      </p>

      <p className="text-sm text-gray-700 leading-loose text-justify">
        I work best with teams that value clear communication, thoughtful collaboration, and 
        getting things done. If you're looking for someone who can jump in, bring structure, 
        and help bring customer-facing ideas to life, let's talk.
      </p>

     {/* CTA */}
<div className="pt-4 border-t border-gray-200 mt-8 flex items-center gap-8">
  <img 
    src="/kyra.jpg" 
    alt="Kyra Hermann"
    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
  />
  <div>
    <p className="text-sm text-gray-600 mb-4">
      Need an extra pair of hands to bring an idea to life?
    </p>
    <a 
      href="mailto:hermann.kyra@gmail.com" 
      className="inline-block text-sm text-gray-900 border-b border-gray-900 hover:text-gray-500 hover:border-gray-500 transition-colors pb-1"
    >
      Get in touch →
    </a>
  </div>
</div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
  <div className="flex flex-col md:flex-row justify-between gap-8">
    <div className="text-xs text-gray-500">© 2026 Kyra Hermann</div>
    <div className="flex gap-8 text-xs">
      <a href="https://github.com/bykyra" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
      <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
      <a href="mailto:hermann.kyra@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">Email</a>
      <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">Impressum</a>
      <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">Datenschutz</a>
    </div>
  </div>
</footer>

    </motion.div>
  )
}

export default Home