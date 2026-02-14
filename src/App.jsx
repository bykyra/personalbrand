function App() {
  return (
    <div className="min-h-screen bg-white">
      
     {/* Hero Section */}
     <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <h1 className="text-5xl font-light text-gray-900 leading-tight">
            Kyra Hermann
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-2xl">
            I help teams bring customer-facing ideas to life — from campaigns and go-to-market 
            initiatives to product communication and rollout.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">How I Work</h2>
        <div className="prose prose-lg max-w-2xl">
          <p className="text-gray-700 leading-relaxed">
            I focus on work that moves ideas from concept to reality. Coordinating across teams, 
            shaping communication, and making sure customer-facing initiatives actually land.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">What I Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Campaign & Activation Coordination
            </h3>
            <p className="text-gray-600 leading-relaxed">
              End-to-end support for customer-facing campaigns, from planning through execution 
              and performance tracking.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Go-to-Market Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic coordination for product and feature launches, ensuring alignment 
              across teams and channels.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Cross-Functional Project Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bringing structure to complex initiatives, managing timelines, stakeholders, 
              and deliverables across functions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
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
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Selected Work Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">Selected Work</h2>
        <div className="space-y-12">
          
          {/* Project 1 - BoraBora Studios */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              BoraBora Studios
            </h3>
            <p className="text-sm text-gray-500 mb-4">Producer - Campaign & Activation | Ongoing</p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">My role:</span> I work with BoraBora Studios as a producer, 
              supporting the delivery of customer-facing activation campaigns. My role sits at the 
              intersection of concept, coordination, and execution of digital experience products — 
              translating creative ideas into clear plans, aligning stakeholders, and making sure 
              projects move smoothly from brief to launch.
            </p>
          </div>

          {/* Project 2 - Montblanc */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              Montblanc Digital Paper
            </h3>
            <p className="text-sm text-gray-500 mb-4">Marketing & Project Management | Ongoing</p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">My role:</span> I support Montblanc's Digital Paper 
              ecosystem through hands-on, project-based work across marketing, product, and execution. 
              My focus is on shaping how the product is understood, communicated, and supported across 
              customer touchpoints, from launch to post-purchase experience.
            </p>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Current Focus */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Right Now</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mb-6">
          Currently available for project-based work and open to conversations about 
          campaign support, product launches, and cross-functional initiatives.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Get in Touch</h2>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed max-w-2xl">
          Need a pair of hands to bring an idea to life? Let's talk.
          </p>
          <a 
            href="mailto:hermann.kyra@gmail.com" 
            className="inline-block text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600 pb-1"
          >
            hermann.kyra@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Kyra Hermann</p>
          <div className="flex gap-6">
            <a href="https://github.com/bykyra" className="hover:text-gray-900 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/kyra-hermann-931850149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App