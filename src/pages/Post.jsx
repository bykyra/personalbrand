import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/notes/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        console.log('Raw markdown:', text) // Debug log
        
        // Parse front matter
        const lines = text.split('\n')
        const metadata = {}
        let contentStart = 0
        
        if (lines[0] === '---') {
          for (let i = 1; i < lines.length; i++) {
            if (lines[i] === '---') {
              contentStart = i + 1
              break
            }
            const [key, ...value] = lines[i].split(':')
            if (key && value.length) {
              metadata[key.trim()] = value.join(':').trim().replace(/^["']|["']$/g, '')
            }
          }
        }
        
        const content = lines.slice(contentStart).join('\n')
        console.log('Parsed metadata:', metadata) // Debug log
        console.log('Parsed content:', content) // Debug log
        
        setPost({ ...metadata, content })
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading post:', err)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-gray-500">Loading...</p>
        </section>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-gray-500">Post not found</p>
          <Link to="/notes" className="text-sage-600 hover:text-sage-700 mt-4 inline-block">
            ← Back to Notes
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      
      <section className="max-w-4xl mx-auto px-6 py-24">
        <Link 
          to="/notes" 
          className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block"
        >
          ← Back to Notes
        </Link>
        
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 mt-8">
          {post.date}
        </p>
        
        <h1 className="text-4xl font-light text-gray-900 mb-8">
          {post.title}
        </h1>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-sage-200"></div>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <article className="max-w-2xl prose-custom">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </article>
      </section>

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

export default Post