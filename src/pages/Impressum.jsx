import { motion } from 'framer-motion'

function Impressum() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <a
          href="/"
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors uppercase tracking-widest"
        >
          ← Home
        </a>
      </div>

      <header className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">Legal</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-base font-medium text-gray-900">Impressum</h1>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">Angaben gemäß § 5 TMG</p>
          </div>
          <div className="md:col-span-9 space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-700">Kyra Hermann</p>
              <p className="text-sm text-gray-700">Löwenstraße 27</p>
              <p className="text-sm text-gray-700">20251 Hamburg</p>
              <p className="text-sm text-gray-700">Deutschland</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Kontakt</p>
              <p className="text-sm text-gray-700">
                E-Mail:{' '}
                <a href="mailto:hermann.kyra@gmail.com" className="border-b border-gray-400 hover:text-gray-500 transition-colors">
                  hermann.kyra@gmail.com
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Haftung für Inhalte</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Haftung für Links</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Urheberrecht</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default Impressum