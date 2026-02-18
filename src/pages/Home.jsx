import { motion, useScroll, useTransform } from 'framer-motion'

function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="min-h-screen bg-white"
  >
    <div className="min-h-screen bg-white">

{/* New Text-Based Hero - Refined */}
<section className="max-w-4xl mx-auto px-6 pt-16 pb-20">
  <div className="text-center">
    {/* Logo with everything integrated */}
    <div className="mb-12">
      <img 
        src="/homelogo.jpeg" 
        alt="Kyra - Freelancer Marketing & Project Management" 
        className="h-24 md:h-28 mx-auto"
      />
    </div>
    
    {/* Tagline */}
    <div className="max-w-2xl mx-auto">
      <p className="text-sm md:text-xm uppercase text-gray-700 leading-relaxed">
        I help teams bring customer-facing ideas to life — from campaigns and go-to-market 
        initiatives to product communication and rollout.
      </p>
    </div>
  </div>
</section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

{/* How I Work - Centered */}
<section
  className="max-w-4xl mx-auto px-6 py-16"
>
  <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-medium">How I Work</h2>
  
  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Photo */}
    <div className="md:flex-shrink-0">
      <img 
        src="/kyra.jpg" 
        alt="Kyra Hermann" 
        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
      />
    </div>
    
    {/* Text */}
    <div className="flex-1">
      <p className="text-gray-700 text-lm leading-loose">
        I focus on work that moves ideas from concept to reality. Coordinating across teams, 
        shaping communication, and making sure customer-facing initiatives actually land.
      </p>
    </div>
  </div>
</section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* What I Offer */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">What I Offer</h2>
        <div className="grid md:grid-cols-2 gap-6 group">
          
          <div className="p-6 border border-gray-100 rounded-sm transition-all duration-300 group-hover:opacity-40 hover:!opacity-100 cursor-default">
            <h3 className="text-lm font-medium text-gray-900 mb-3">
              Campaign & Activation Coordination
            </h3>
            <p className="text-gray-600 leading-relaxed">
              End-to-end support for customer-facing campaigns, from planning through execution 
              and performance tracking.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-sm transition-all duration-300 group-hover:opacity-40 hover:!opacity-100 cursor-default">
            <h3 className="text-lm font-medium text-gray-900 mb-3">
              Go-to-Market Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic coordination for product and feature launches, ensuring alignment 
              across teams and channels.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-sm transition-all duration-300 group-hover:opacity-40 hover:!opacity-100 cursor-default">
            <h3 className="text-lm font-medium text-gray-900 mb-3">
              Cross-Functional Project Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bringing structure to complex initiatives, managing timelines, stakeholders, 
              and deliverables across functions.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-sm transition-all duration-300 group-hover:opacity-40 hover:!opacity-100 cursor-default">
            <h3 className="text-lm font-medium text-gray-900 mb-3">
              Product Communication
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Shaping how products and initiatives are positioned and communicated across 
              digital and retail touchpoints.
            </p>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Selected Work */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">Selected Work</h2>
        <div className="space-y-12">

          <div>
            <h3 className="text-xm font-medium text-gray-900 mb-2">Montblanc Digital Paper</h3>
            <p className="text-sm text-gray-500 mb-4">Marketing & Project Management | Ongoing</p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">My role:</span> Hands-on, project-based support across 
              marketing, product, and execution — shaping how the product is understood, communicated, 
              and supported across customer touchpoints, from launch to post-purchase experience.
            </p>
          </div>

          <div>
            <h3 className="text-xm font-medium text-gray-900 mb-2">BoraBora Studios</h3>
            <p className="text-sm text-gray-500 mb-4">Producer - Campaign & Activation | Ongoing</p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">My role:</span> Supporting the delivery of customer-facing 
              activation campaigns. Translating creative ideas into clear plans, aligning stakeholders, 
              and ensuring smooth delivery from brief to launch across three separate projects.
            </p>
          </div>

          <div>
            <h3 className="text-xm font-medium text-gray-900 mb-2">Other Clients</h3>
            <p className="text-sm text-gray-500 mb-4">Social Media Management | 2024 - Present</p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">My role:</span> Supporting smaller brands with social 
              media strategy, content planning, and community management.
            </p>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Currently Learning */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">Currently Learning</h2>
        <div className="space-y-6 max-w-2xl">
          <div>
            <h3 className="text-lm font-medium text-gray-900 mb-2">Coding & web development</h3>
            <p className="text-gray-600 leading-relaxed">
              Building this site from scratch, learning how structure, layout, and logic come together on the web.
            </p>
          </div>
          <div>
            <h3 className="text-lm font-medium text-gray-900 mb-2">Piano arpeggios</h3>
            <p className="text-gray-600 leading-relaxed">
              Working on moving more fluidly across octaves and building more comfort beyond fixed patterns.
            </p>
          </div>
          <div>
            <h3 className="text-lm font-medium text-gray-900 mb-2">Communicating complexity</h3>
            <p className="text-gray-600 leading-relaxed">
              Finding better ways to explain products, ideas, and systems clearly and thoughtfully.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-medium">Get in Touch</h2>
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          <div className="md:flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Kyra Hermann" 
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <div className="space-y-4 flex-1">
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              If you're working on something that could use support, let's talk.
            </p>
            <a 
              href="mailto:hermann.kyra@gmail.com" 
              className="inline-block text-gray-900 hover:text-sage-600 transition-colors border-b border-gray-900 hover:border-sage-600 pb-1"
            >
              hermann.kyra@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Kyra Hermann</p>
          <div className="flex gap-6">
            <a href="https://github.com/bykyra" className="hover:text-sage-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-sage-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  
  </motion.div>)
}

export default Home