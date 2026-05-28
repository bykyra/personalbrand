import { motion } from 'framer-motion'

function DesignUnderPressure() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <a
          href="/notes"
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors uppercase tracking-widest"
        >
          ← Notes
        </a>
      </div>

      {/* Article header */}
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              28 May 2026
            </p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-base font-medium text-gray-900 mb-4 leading-snug">
              From Handwritten Notes to a Live Stage — Every Week
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Design · Editorial · Client Work
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      <article className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3" />

          <div className="md:col-span-9 space-y-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              Every Tuesday evening, I receive handwritten notes. By Wednesday lunchtime, 
              they need to be a polished presentation — ready for a live workshop that starts 
              at four in the afternoon.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              That's the rhythm I've been working in for one of my clients, a senior expert 
              who runs weekly workshops for dental clinic owners on how to build more 
              successful, sustainable practices. The content is his — built from decades of 
              experience and a deep understanding of his audience. My job is to take that 
              content and give it a visual language that makes it land.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              When I first came on board, there was no design system. I built the template 
              from scratch — dark navy backgrounds, gold accents, clean bold typography — 
              working from his brand colours and the premium positioning of what he offers. 
              The goal was a visual identity that felt authoritative and clear, something that 
              matched the level of the content without distracting from it.
            </p>

            {/* Slide placeholder */}
            <div className="border border-gray-200 rounded-sm overflow-hidden my-8">
              <img
                src="/zahnarzt-slide-1.png"
                alt="Example presentation slide"
                className="w-full h-auto"
              />
              <p className="text-xs text-gray-400 text-center py-3 border-t border-gray-100">
                Example slide — design and layout by Kyra Hermann
              </p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              Once the template existed, the work became about speed and consistency. 
              Each week brings new content — new frameworks, new data, new talking points — 
              and each week it needs to fit seamlessly into the established system. That 
              means making quick decisions about hierarchy, emphasis, and how to visualise 
              information clearly when you have less than twenty-four hours and a live 
              audience waiting at the end of it.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              Working under that kind of time pressure teaches you to trust your instincts. 
              There's no time to overthink. You read the content, understand what the key 
              message is, and build around it. The design serves the idea — it's not 
              decoration, it's structure. A well-designed slide tells the audience where to 
              look and what to remember. That's the job.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              What I find most satisfying about this kind of work is the collaboration 
              itself. My client focuses entirely on his content and his audience. I focus 
              entirely on making sure that content looks exactly as good as it deserves to. 
              By the time he walks into that workshop on Wednesday afternoon, the visual 
              side is handled — and that's one less thing on his mind.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              That's what good design support should feel like. Not a bottleneck, not an 
              extra layer of approval — just something that works, reliably, every week.
            </p>
          </div>
        </div>
      </article>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="text-xs text-gray-500">© 2026 Kyra Hermann</div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-xs">
            <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

    </motion.div>
  )
}

export default DesignUnderPressure
