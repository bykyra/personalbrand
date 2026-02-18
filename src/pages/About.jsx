import Timeline from "../Timeline";

function About() {
  return (
    <div className="min-h-screen bg-white">

{/* Hero Image */}
<section className="w-full pt-12 pb-16">
  <img 
    src="/headerabout.png" 
    alt="Kyra Hermann" 
    className="w-full h-[60vh] object-cover"
  />
</section>

      {/* Creativity with Structure */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">
          Creativity with Structure
        </h2>
        <div className="max-w-2xl space-y-6">
          <p className="text-gray-700 text-lm leading-loose">
            I've always been a creative person — drawn to ideas, stories, and the way things can be shaped. 
            Over time, I realised that what excites me most isn't creativity on its own, but creativity with structure.
          </p>
          <p className="text-gray-700 text-lm leading-loose">
            I enjoy bringing order to ideas, finding clarity in complexity, and turning something abstract into 
            something tangible, understandable, and usable. That balance between thinking and doing is what 
            continues to drive my work.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* How This Shapes My Work */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">
          How This Shapes the Way I Work
        </h2>
        <div className="max-w-2xl space-y-6">
          <p className="text-gray-700 text-lm leading-loose">
            This perspective naturally shapes how I approach projects. I'm most at ease in environments where 
            ideas need to be aligned, communicated, and carried through — where structure supports creativity 
            rather than limiting it.
          </p>
          <p className="text-gray-700 text-lm leading-loose">
            I like taking responsibility, coordinating across teams, and making sure things don't just start well, 
            but actually land. I care about how work is experienced on the other side — by customers, users, or 
            teams — and about making complex topics feel clear and approachable.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Timeline */}
      <Timeline />

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Becoming a Freelancer */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">
          Becoming a Freelancer
        </h2>
        <div className="max-w-2xl">
          <p className="text-gray-700 text-lm leading-loose">
            My move into freelancing wasn't something I planned in advance. It grew out of ongoing project work, 
            where I was asked to continue supporting initiatives independently so they could move forward without 
            interruption. Over time, this way of working became the most natural and effective setup — allowing me 
            to stay close to the work, take ownership, and support teams in a focused and hands-on way.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

   {/* Outside of Work - with Piano Image */}
<section className="max-w-4xl mx-auto px-6 py-24">
  <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">
    Outside of Work
  </h2>
  
  <div className="grid md:grid-cols-2 gap-12 items-start">
    {/* Piano Image */}
    <div className="h-full">
      <img 
        src="/piano.jpg" 
        alt="Piano" 
        className="w-full h-full object-cover rounded-sm min-h-[400px]"
      />
    </div>

    {/* Text */}
    <div className="space-y-6">
      <p className="text-gray-700 text-lm leading-loose">
        Outside of work, I'm drawn to things that require focus and repetition. I taught myself how to play 
        the piano and can easily spend hours practicing, moving across different octaves until patterns start 
        to feel natural.
      </p>
      <p className="text-gray-700 text-lm leading-loose">
        Music and sport are spaces where I recharge — but they've also taught me a lot about patience, 
        consistency, and showing up even when progress is quiet.
      </p>
      <p className="text-gray-700 text-lm leading-loose">
        I'm generally curious and open to trying new formats and ideas, whether that's learning something new, 
        experimenting creatively, or exploring conversations through side projects.
      </p>
    </div>
  </div>
</section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Working Together */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">
          Working Together
        </h2>
        <div className="max-w-2xl space-y-6">
          <p className="text-gray-700 text-lm leading-loose">
            I enjoy working with people who value clarity, trust, and thoughtful collaboration — and I'm always 
            open to conversations that start with curiosity.
          </p>
          <a 
            href="mailto:your@email.com" 
            className="inline-block text-gray-900 hover:text-sage-600 transition-colors border-b border-gray-900 hover:border-sage-600 pb-1"
          >
            Get in touch
          </a>
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
  )
}

export default About