import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function LanguageSwitcher() {
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
              28 February 2026
            </p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-base font-medium text-gray-900 mb-4 leading-snug">
              Building Something I Had No Business Building
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Montblanc Help Center · Development
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

          <div className="md:col-span-9 space-y-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              I am not a developer. That felt important to say upfront, because everything that 
              follows only makes sense in that context.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              Earlier this year I built a language switcher for the Montblanc Digital Paper Help 
              Center. A feature that lets users manually switch between ten different language 
              versions of the site. It works. It's live. And getting there was one of the more 
              unexpectedly satisfying things I've done in a while.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              The Help Center itself was something I'd built from scratch...content architecture, 
              article writing, the whole thing. At a certain point it became clear that a single 
              language wasn't enough. The product is sold across markets, and customers needed to 
              be able to read in their own language. So we expanded to ten: English, German, French, 
              Italian, Spanish, Portuguese, Japanese, Korean, Chinese Simplified and Traditional. 
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              The switcher came after. The idea was simple enough: a dropdown that lets users 
              choose their language and land in the right version. But actually building it required 
              going into parts of the platform I hadn't touched before. I had no real frame of 
              reference for what I was doing. I just started, broke things (all savely in preview), read everything I could 
              find, and tried again.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              There were a lot of moments where something almost worked. Where the switcher would 
              appear but not redirect correctly, or redirect but lose the page context, or work in 
              one language but silently fail in three others. Each of those almost-moments was its 
              own small lesson. I got better at reading what the errors were actually telling me 
              instead of just reacting to them.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              Then one afternoon, it worked. All ten languages, switching cleanly, landing in the 
              right place. I clicked through it probably fifteen times just to be sure. Then came 
              the QA days. Methodically checking every language, every breakpoint, every edge case,
              which turned out to be genuinely satisfying in a different way. Not the rush of 
              something clicking into place, but the quieter feeling of knowing something is solid.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              I think what I took from it isn't really about code. It's about what happens when 
              you commit to figuring something out even when you're not sure you're qualified to. 
              There's a version of this scenario where I would've simply handed it off to someone technical. Instead 
              I now have an understand of the implementation from end to end.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              My takeaway? I'll keep trying new things I have no business trying. It's been working out fine so far.
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
          <div className="flex gap-8 text-xs">
            <a href="https://github.com/bykyra" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="mailto:hermann.kyra@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </motion.div>
  )
}

export default LanguageSwitcher