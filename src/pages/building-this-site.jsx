import { motion } from 'framer-motion'

function BuildingThisSite() {
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
              23 March 2026
            </p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-base font-medium text-gray-900 mb-4 leading-snug">
              I Built This Website From Scratch
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Personal Project · Development
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Article body */}
      <article className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3" />

          <div className="md:col-span-9 pr-4 space-y-6">
            <p className="text-sm text-gray-700 leading-relaxe text-justify">
              I had been putting off building my own website for the longest time. There was so 
              much out there, so many designs, so many directions, and I kept struggling to put 
              what I do into words in a way that felt right. It's easy to describe one thing. 
              I work across a lot of different areas, and that's harder to communicate.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              What changed was momentum. Earlier this year I built a language switcher for the 
              Montblanc Digital Paper Help Center. No real development background, just 
              documentation, trial and error, and a lot of patience. When it finally worked, 
              something shifted. I thought: if I can do that, I can probably build my own site. 
              It was a bit impulsive, a bit overconfident, and exactly the kind of energy that 
              actually gets things started.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              What I didn't expect was how much I'd enjoy the process itself. There's something 
              about coding that appeals to the same part of me that likes project coordination: 
              breaking something complex into parts, building it piece by piece, and getting 
              immediate visual feedback. You make a change and you see it. That loop is 
              satisfying in a way I hadn't anticipated.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              I built it in React, using Vite, Tailwind, and Framer Motion, working with AI to 
              develop and piece together code, using technology to my advantage rather than 
              pretending I was doing it all from scratch. The design is intentionally minimal. 
              I wanted something clean, considered, and easy to build on over time.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              The base came together faster than I expected. The refinements took longer. 
              The small details that make the difference between something that works and 
              something that actually feels right. That part I enjoyed most.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              The site is live now. For me it does two things: it defines what I offer across 
              the different areas I work in, and it gives me a place to show rather than just 
              tell. But more than that, it's a starting point. Now that everything is set up, 
              I can keep building on it, adding work, writing more, refining the details,
              until it's something that's truly mine.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              That part is just beginning.
            </p>
          </div>
        </div>
      </article>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="text-xs text-gray-500">© 2026 Kyra Hermann</div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-xs">
            <a href="https://github.com/bykyra" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

    </motion.div>
  )
}

export default BuildingThisSite