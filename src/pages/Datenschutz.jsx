import { motion } from 'framer-motion'

function Datenschutz() {
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
            <h1 className="text-base font-medium text-gray-900">Datenschutzerklärung</h1>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">Datenschutz</p>
          </div>

          <div className="md:col-span-9 space-y-10">

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-400">1. Verantwortliche Person</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="space-y-1">
                <p className="text-sm text-gray-700">Kyra Hermann</p>
                <p className="text-sm text-gray-700">Löwenstraße 27, 20251 Hamburg</p>
                <p className="text-sm text-gray-700">
                  E-Mail:{' '}
                  <a href="mailto:hermann.kyra@gmail.com" className="border-b border-gray-400 hover:text-gray-500 transition-colors">
                    hermann.kyra@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-400">2. Hosting</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Wenn Sie diese Website besuchen, verarbeitet Vercel automatisch bestimmte Verbindungsdaten (z. B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs) zur Bereitstellung des Dienstes. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="border-b border-gray-400 hover:text-gray-500 transition-colors">vercel.com/legal/privacy-policy</a>.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-400">3. Keine Cookies, kein Tracking</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diese Website verwendet keine Cookies und setzt kein Tracking oder Analyse-Tools ein. Es werden keine personenbezogenen Daten durch den Betreiber dieser Website aktiv gesammelt oder gespeichert.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-400">4. Instagram-Einbettungen</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Auf dieser Website sind Inhalte von Instagram (Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland) eingebettet. Beim Laden dieser Inhalte kann Instagram Daten über Ihren Besuch erheben. Weitere Informationen finden Sie in der Datenschutzerklärung von Instagram: <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="border-b border-gray-400 hover:text-gray-500 transition-colors">privacycenter.instagram.com/policy</a>.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-400">5. Kontaktaufnahme per E-Mail</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben (E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-400">6. Ihre Rechte</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Wenden Sie sich dazu an: <a href="mailto:hermann.kyra@gmail.com" className="border-b border-gray-400 hover:text-gray-500 transition-colors">hermann.kyra@gmail.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="text-xs text-gray-500">© 2026 Kyra Hermann</div>
          <div className="flex gap-8 text-xs">
            <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </motion.div>
  )
}

export default Datenschutz