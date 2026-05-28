import { motion } from 'framer-motion'

function SteppingIn() {
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
              2 April 2026
            </p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-base font-medium text-gray-900 mb-4 leading-snug">
              What It Actually Means to Step In
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Work · Freelance
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
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              A lot of the work I do starts the same way. A team is stretched. A project 
              is moving but not fast enough, or it's stalled because nobody has the bandwidth 
              to push it forward. Someone needs to step in — not to consult, not to restructure 
              everything, just to take things off the table and make sure they get done.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              That's the role I've found myself in more than once, and it's the one I think 
              I'm most useful in. Not as an outside voice telling a team what to do differently, 
              but as an extra pair of hands that actually understands the work and takes 
              responsibility for it.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              When I step into a project, the first thing I care about is making whoever 
              brought me in feel less overwhelmed. That sounds simple but it's the whole point. 
              If a manager is already stretched and now has to spend time onboarding me, 
              explaining context, and checking my work, I haven't helped anyone. So I try 
              to get up to speed quickly, ask the right questions early, and take ownership 
              of things rather than waiting to be told what to do next.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Being proactive here means more than just ticking tasks off a list. It means 
              understanding the project well enough to anticipate where things might get stuck. 
              It means noticing when something is unclear and resolving it before it becomes 
              a problem. It means reading the room, understanding what the team needs, where 
              the pressure points are, and what a good outcome actually looks like for the 
              people involved.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              The relationship side of this matters more than it might seem. Stepping into 
              an existing team mid-project means navigating dynamics that were already in 
              place before you arrived. I try to be easy to work with, genuinely positive, 
             and to build trust quickly by being reliable. People 
              need to feel that bringing you in was the right call. The best way to show 
              that is to just do good work and be a decent person to have around.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              At the end of the day, what I'm offering is simple: things get handled. 
              Deadlines get met, deliverables get done, and the manager who brought me in 
              has one less thing to worry about. That's what stepping in actually means, 
              and in a market where teams are leaner and capacity is tighter than ever, 
              I think that's worth a lot.
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
            <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

    </motion.div>
  )
}

export default SteppingIn
