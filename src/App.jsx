function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Kyra Hermann</h1>
          <p className="text-xl text-gray-600 mt-2">What I'm doing now</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Current Focus */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Focus</h2>
          <p className="text-gray-700 leading-relaxed">
            Write what you're currently working on or focused on right now.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Projects</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Project 1</h3>
              <p className="text-gray-600 mt-2">Description of your project</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Project 2</h3>
              <p className="text-gray-600 mt-2">Description of your project</p>
            </div>
          </div>
        </section>

        {/* Learning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Currently Learning</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Thing you're learning 1</li>
            <li>Thing you're learning 2</li>
            <li>Thing you're learning 3</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
            <a href="mailto:your@email.com" className="text-blue-600 hover:text-blue-800">Email</a>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App