function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900">Kyra Hermann</h1>
          <p className="text-xl text-gray-600 mt-2">Freelancer for Marketing & Project Management</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Current Focus */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Focus</h2>
          <p className="text-gray-700 leading-relaxed">
            I focus on work that moves ideas from concept to reality. Coordinating across teams, shaping communication, and making sure customer-facing initiatives actually land. 
            <div>Need a pair of hands to bring an idea to life? Let's talk.</div> 
          </p>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Projects</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">BoraBora Studios</h3>
              <p className="text-gray-600 mt-2">Producer - Campaign & Activation<div>I work with BoraBora Studios as a producer, supporting the delivery of customer-facing activation campaigns. My role sits at the intersection of concept, coordination, and execution of digital experience products - translating creative ideas into clear plans, aligning stakeholders, and making sure projects move smoothly from brief to launch.</div></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Montblanc Digital Paper</h3>
              <p className="text-gray-600 mt-2">Marketing & Project Management<div>I support Montblanc's Digital Paper ecosystem through hands-on, project-based work across marketing, product, and execution. My role focuses on shaping how the product is understood, communicated, and supported across customer touchpoints, from launch to post-purchase experience.</div></p>
            </div>
          </div>
        </section>

        {/* Learning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Currently Learning</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><b>Coding & web development</b> - buidling this site from scratch, learning how structure, layout, and logic come together on the web</li>
            <li><b>Piano arpeggios</b> - working on moving more fluidly across octabes and building more comfort beyond fixed patterns.</li>
            <li><b>Communicating complexity</b> - finding better ways to explain products, ideas, and systems clearly and thoughtfully.</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/kyra-hermann-931850149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="mailto:hermann.kyra@gmail.com" className="text-blue-600 hover:text-blue-800">Email</a>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App