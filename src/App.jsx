import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import BlogPage from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import HomePage from './pages/Home.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-page">
        <nav className="top-navigation" aria-label="Primary">
          <ul className="nav-links">
            <li>
              <Link to="/#about">ABOUT</Link>
            </li>
            <li>
              <Link to="/#skills">SKILLS</Link>
            </li>
            <li>
              <Link to="/#projects">PROJECTS</Link>
            </li>
            
            <li>
              <Link to="/#contact">CONTACT</Link>
            </li>
          </ul>
          <ul className='nav-links'>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>

        <footer className="page-footer">
          <span className="footer-note">© {new Date().getFullYear()} Werner Petrick </span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
