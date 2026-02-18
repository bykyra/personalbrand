import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Notes() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // For now, manually list your posts
    // Later we can make this dynamic
    const postList = [
      {
        slug: 'first-post',
        title: 'First Post',
        date: '2026-02-17',
        excerpt: 'A short description of this post that appears in the list view.'
      }
    ]
    setPosts(postList)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">
          Notes
        </h1>
        <p className="text-gray-700 text-lg leading-loose max-w-2xl">
          Thoughts on work, learning, and everything in between.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      {/* Posts List */}
      <section className="max-w-4xl mx-auto px-6 py-24">
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
                <h2 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-sage-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
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

export default Notes