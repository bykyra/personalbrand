import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Notes() {
  const [posts, setPosts] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const postList = [
      {
        slug: 'language-switcher',
        title: 'Building Something I Had No Business Building',
        date: '2026-02-28',
        excerpt: 'How I programmed a 10-language switcher for the Montblanc Help Center with almost no prior coding experience and what it felt like when it finally worked.'
      },
      {
        slug: 'first-post',
        title: 'A Content Day with Pure Lettering',
        date: '2026-02-17',
        excerpt: 'A creative day in Berlin featuring 100h of video content, endless engraved products, great coffee, and a few hours inside someone\'s creative world.'
      }
    ]
    setPosts(postList)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Notes
            </p>
          </div>
          <div className="md:col-span-9 space-y-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              Thoughts on work, learning, and everything in between.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Posts List */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3" />

          <div className="md:col-span-9">
            <div className="space-y-12">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/notes/${post.slug}`}
                  className="block group"
                >
                  <article>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <h2 className="text-sm font-medium text-gray-900 mb-2 group-hover:text-gray-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-3 text-xs text-gray-900 border-b border-gray-900 group-hover:text-gray-500 group-hover:border-gray-500 transition-colors pb-0.5">
                      Read →
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
  <div className="flex flex-col md:flex-row justify-between gap-8">
    <div className="text-xs text-gray-500">© 2026 Kyra Hermann</div>
    <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 text-xs">
      <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
      <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">Impressum</a>
      <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">Datenschutz</a>
    </div>
  </div>
</footer>

    </motion.div>
  )
}

export default Notes