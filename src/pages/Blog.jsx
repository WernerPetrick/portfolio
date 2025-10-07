import { Link } from 'react-router-dom'
import {blogPosts} from '../data/blogPosts.js'

const layouts = ['featured', 'top-left', 'top-right', 'bottom-left', 'bottom-right']

function BlogPage() {
  return (
    <main className="content-wrapper">
      <section className="section blog-section" aria-labelledby="blog-title">
        <div className="section-header">
          <h2 id="blog-title">BLOG</h2>
        </div>
        <p className="blog-intro">
          Notes on code and life. Some tutorials, some reflections. Written for anyone figuring it out.
        </p>
        <div className="blog-grid">
          {blogPosts.map((post, index) => {
            const layout = layouts[index] ?? 'default'
            const isFeatured = layout === 'featured'

            return (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className={`blog-card${isFeatured ? ' blog-card-featured' : ''}`}
                data-layout={layout}
              >
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.date}</span>
                  <div className="blog-card-tags" aria-label="Tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <span className="blog-card-cta" aria-hidden="true">
                  Read this essay →
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default BlogPage
