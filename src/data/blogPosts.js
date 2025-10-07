// Import all markdown files
const modules = import.meta.glob('../content/blog/*.md', { 
  query: '?raw',
  eager: true 
})

// Parse frontmatter and generate blog posts
export const blogPosts = Object.entries(modules).map(([path, module]) => {
  const text = module.default
  const match = text.match(/^---\n([\s\S]*?)\n---/)
  
  // Extract filename for id
  const filename = path.split('/').pop().replace('.md', '')
  
  if (match) {
    const frontmatter = parseFrontmatter(match[1])
    return {
      id: filename,
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || '',
      tags: frontmatter.tags ? frontmatter.tags.split(',').map(t => t.trim()) : [],
      summary: frontmatter.summary || ''
    }
  }
  
  return {
    id: filename,
    title: 'Untitled',
    date: '',
    tags: [],
    summary: ''
  }
})

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