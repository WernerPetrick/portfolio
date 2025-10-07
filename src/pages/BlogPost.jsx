import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function BlogPost() {
  const { id } = useParams()
  const [content, setContent] = useState('')
  const [frontmatter, setFrontmatter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    import(`../content/blog/${id}.md?raw`)
      .then((module) => {
        const text = module.default
        const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
        if (match) {
          setFrontmatter(parseFrontmatter(match[1]))
          setContent(match[2])
        } else {
          setContent(text)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load blog post:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="content-wrapper">Loading...</div>

  return (
    <main className="content-wrapper">
      <article className="blog-post">
        <Link to="/blog" className="back-link">← Back to blog</Link>
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  )
}

function parseFrontmatter(text) {
  const lines = text.split('\n')
  const data = {}
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      data[key.trim()] = valueParts.join(':').trim()
    }
  }
  return data
}

export default BlogPost