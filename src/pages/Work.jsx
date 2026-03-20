import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Work() {
  const [activeSection, setActiveSection] = useState('project-management')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process()
    }
    return () => document.body.removeChild(script)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      const sections = ['project-management', 'product-gtm', 'content-communication', 'editorial-design']
      
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
              onClick={() => scrollToSection('project-management')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'project-management'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Project Management
            </button>
            
            <button
              onClick={() => scrollToSection('product-gtm')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'product-gtm'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Marketing
            </button>
            
            <button
              onClick={() => scrollToSection('content-communication')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'content-communication'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Communication
            </button>
            
            <button
              onClick={() => scrollToSection('editorial-design')}
              className={`whitespace-nowrap transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } ${
                activeSection === 'editorial-design'
                  ? 'text-gray-900 border-b-2 border-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              } pb-1`}
            >
              Design
            </button>
          </div>
        </nav>
      </div>

      {/* PROJECT & OPERATIONAL MANAGEMENT */}
      <section id="project-management" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 sticky top-32">
              Project & Operational Management
            </p>
          </div>
          
          <div className="md:col-span-9">
            <div className="space-y-6 mb-12">
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                I help teams bring projects from concept to execution. The kind of work that sits between multiple departments and needs someone to make sure everything actually happens.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                My role is usually coordinating across marketing, product, retail, and development teams to keep projects structured and moving forward. I handle timelines, align stakeholders, and make sure deliverables don't get lost in translation.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">How I typically support teams</h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700 leading-relaxed">Cross-functional project coordination</li>
                <li className="text-sm text-gray-700 leading-relaxed">Stakeholder alignment across departments</li>
                <li className="text-sm text-gray-700 leading-relaxed">Timeline and deliverable management</li>
                <li className="text-sm text-gray-700 leading-relaxed">Campaign and initiative execution</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-900 pl-6 space-y-4">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Examples</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                At <span className="font-medium">Montblanc Digital Paper</span>, I coordinated cross-functional initiatives across the Digital Paper ecosystem. From feature development to internal resources and launch materials.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                At <span className="font-medium">Studio Bora Bora</span>, I supported campaign and activation projects for international clients by keeping teams, timelines, and production workflows on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* PRODUCT & GO-TO-MARKET SUPPORT */}
      <section id="product-gtm" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 sticky top-32">
              Product & Go-to-Market Support
            </p>
          </div>
          
          <div className="md:col-span-9">
            <div className="space-y-6 mb-12">
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                I bring a customer perspective into product launches and feature development. That means taking what you're building and figuring out how to explain it, position it, and activate customers around it.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">How I support product initiatives</h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700 leading-relaxed">Go-to-market coordination and planning</li>
                <li className="text-sm text-gray-700 leading-relaxed">Feature and product storytelling</li>
                <li className="text-sm text-gray-700 leading-relaxed">Customer activation concepts</li>
                <li className="text-sm text-gray-700 leading-relaxed">Connecting product, marketing, and e-commerce teams</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-900 pl-6 space-y-4">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Example: Montblanc Digital Paper</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                I supported the development and communication of product features, digital tools, and launch materials. This meant translating technical features into customer-facing narratives and coordinating launch activities across teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* CONTENT & COMMUNICATION */}
      <section id="content-communication" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 sticky top-32">
              Content & Communication
            </p>
          </div>
          
          <div className="md:col-span-9">
            <div className="space-y-6 mb-12">
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                Clear communication is what makes the difference between a product people understand and one they don't. I help teams shape how ideas and products are explained across channels - whether that's written content, visual storytelling, or social media.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                This means I'm often creating the content myself: writing articles, filming reels, taking photos, editing videos. From strategy to execution, I handle what needs to get communicated and how.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">How I support communication</h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700 leading-relaxed">Product and campaign storytelling</li>
                <li className="text-sm text-gray-700 leading-relaxed">Help center and educational content</li>
                <li className="text-sm text-gray-700 leading-relaxed">Social media management and content creation (filming, editing, photography)</li>
                <li className="text-sm text-gray-700 leading-relaxed">Digital content across web, social, and email</li>
                <li className="text-sm text-gray-700 leading-relaxed">Brand voice and messaging</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#8B9A8B] pl-6 space-y-6 mb-16">
  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
    Example: Montblanc Digital Paper Help Center
  </h3>
  <p className="text-sm text-gray-700 leading-relaxed text-justify">
    I conceptualized and built the entire Help Center from scratch: defining the content architecture, writing all the articles, and creating resources that actually help customers understand and use the product.
  </p>
  
  <a 
    href="https://papersupport.montblanc.com/portal/en/home" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block text-sm text-gray-900 border-b border-gray-900 hover:text-[#8B9A8B] hover:border-[#8B9A8B] transition-colors pb-1"
  >
    Explore the live Help Center →
  </a>

  {/* Screenshot instead of iframe */}
  <a 
    href="https://papersupport.montblanc.com/portal/en/home" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block mt-6 border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
  >
    <img 
      src="/helpcenter.png" 
      alt="Montblanc Help Center Preview"
      className="w-full h-auto"
    />
  </a>
  <p className="text-xs text-gray-500 italic text-center">
    Click to explore the live Help Center
  </p>
</div>

            {/* INSTAGRAM EXAMPLE */}
<div className="border-l-2 border-gray-900 pl-6 space-y-6">
  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Example: Pure Lettering - Social Media & Content Creation</h3>
  <p className="text-sm text-gray-700 leading-relaxed text-justify">
    I manage Instagram end-to-end by creating all content myself, including filming reels that showcase the lettering process, photographing finished work, and building a feed that reflects the brand's creative identity.
  </p>

  <a 
    href="https://instagram.com/purelettering" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block text-sm text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1"
  >
    View Instagram profile →
  </a>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/reel/DU-5qOrjMBR/?utm_source=ig_embed&utm_campaign=loading"
      data-instgrm-version="14"
      style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}
    />
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/reel/DVv48QjDBhr/?utm_source=ig_embed&utm_campaign=loading"
      data-instgrm-version="14"
      style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}
    />
  </div>
</div>
            </div>
            </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* EDITORIAL & DESIGN PRODUCTION */}
      <section id="editorial-design" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 sticky top-32">
              Editorial & Design Production
            </p>
          </div>
          
          <div className="md:col-span-9">
            <div className="space-y-6 mb-12">
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                Sometimes ideas need to become real, structured materials, such as guides, workbooks, templates, resources. I design and produce these using tools like InDesign to create something people can reference, use, and share.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">How I support teams</h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700 leading-relaxed">Workbook and guide design</li>
                <li className="text-sm text-gray-700 leading-relaxed">Educational materials and templates</li>
                <li className="text-sm text-gray-700 leading-relaxed">Structured editorial layouts (InDesign, Figma)</li>
                <li className="text-sm text-gray-700 leading-relaxed">Translating complex information into clear visual formats</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-900 pl-6 space-y-4">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Example: Montblanc Digital Paper Workbooks</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                I designed structured workbooks and resources for Montblanc Digital Paper to help users explore handwriting, productivity, and creativity with the device. This included designing layouts, writing content, and creating templates they could download and use.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mt-6">
                <p className="text-amber-900 text-xs">
                  <strong>📄 Workbook samples coming soon</strong> — Currently finalizing materials for publication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 sticky top-32">
              Get in Touch
            </p>
          </div>
          
          <div className="md:col-span-9 space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Are you in need of an extra pair of hands to bring an idea to life? Let's talk!
            </p>
            <a 
              href="mailto:hermann.kyra@gmail.com" 
              className="inline-block text-sm text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1"
            >
              hermann.kyra@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="text-xs text-gray-500">
            © 2026 Kyra Hermann
          </div>
          <div className="flex gap-8 text-xs">
            <a href="https://github.com/bykyra" className="text-gray-600 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:hermann.kyra@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

    </motion.div>
  )
}

export default Work