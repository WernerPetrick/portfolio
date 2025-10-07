import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GithubLogo from "../assets/github_logo.webp"
import JavascriptLogo from "../assets/javascript_logo.webp"
import ReactLogo from "../assets/react_logo.webp"
import RailsLogo from "../assets/ror_logo.webp"
import SupabaseLogo from "../assets/supabase_logo.webp"

const scrollToHash = (hash) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'auto' })
    return
  }

  const targetId = hash.replace('#', '')
  const focusElement = document.getElementById(targetId)

  if (focusElement) {
    requestAnimationFrame(() => {
      focusElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
}

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    scrollToHash(location.hash)
  }, [location])

  return (
    <main className="content-wrapper">
      <header id="hero" className="section hero-section">
        <div className="hero-copy">
          <h1 className="hero-title">
            Werner Petrick <span className="accent-slash">//</span>
          </h1>
          <p className="hero-subtitle">
            a full stack developer who’s spent years on both sides of the screen.
          </p>
          <p className="hero-hook">
            I've seen what breaks and frustrates people, now I build with that in mind.
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://github.com/WernerPetrick"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="secondary-link"
              href="https://www.linkedin.com/in/petrickwerner01/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-highlight" aria-hidden="true">
          <p className="highlight-label">CURRENTLY</p>
          <p className="highlight-text">Junior Fullstack Developer at <a href="https://puzzl.co.za/" target="_blank" rel="noreferrer">Puzzl Media</a></p>
        </div>
      </header>

      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="section-header">
          <h2 id="about-title">ABOUT</h2>
          <span className="section-number">01</span>
        </div>
        <p className="about-body">
          Before writing code, I spent years solving user problems - the kind that don’t fit neatly into tickets. That experience shaped how I build software today: with empathy, clarity, and a focus on what truly works.
        </p>
        <p>
          Now, as a full stack developer, I work across JavaScript, React, Ruby on Rails, and Supabase to create fast, reliable applications. My goal is to keep sharpening that craft - building things that are both elegant for developers and effortless for users.
        </p>
      </section>

      <section id="skills" className="section skills-section" aria-labelledby="skills-title">
        <div className="section-header">
          <h2 id="skills-title">SKILLS</h2>
          <span className="section-number">02</span>
        </div>
        <div className="skills-showcase">
          <h3 className="skills-label">TECH STACK</h3>
          <ul className="skill-logo-list" aria-label="Technical skills">
            <li className="skill-logo-item">
              <span aria-hidden="true">
                <img src={JavascriptLogo} alt="" className='skill-logo'/>
              </span>
              <span className="visually-hidden">JavaScript</span>
            </li>
            <li className="skill-logo-item">
              <span aria-hidden="true">
                <img src={ReactLogo} alt="" className='skill-logo'/>
              </span>
              <span className="visually-hidden">React</span>
            </li>
            <li className="skill-logo-item">
              <span aria-hidden="true">
                <img src={RailsLogo} alt="" className='skill-logo'/>
              </span>
              <span className="visually-hidden">Ruby on Rails</span>
            </li>
            <li className="skill-logo-item">
              <span aria-hidden="true">
                <img src={SupabaseLogo} alt="" className='skill-logo'/>
              </span>
              <span className="visually-hidden">Supabase</span>
            </li>
            <li className="skill-logo-item">
              <span aria-hidden="true">
                <img src={GithubLogo} alt="" className='skill-logo'/>
              </span>
              <span className="visually-hidden">Git</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section projects-section" aria-labelledby="projects-title">
        <div className="section-header">
          <h2 id="projects-title">PROJECTS</h2>
          <span className="section-number">03</span>
        </div>
        <div className="projects-grid">
          <article className="project-card" aria-labelledby="project-wizzle">
            <div className="project-header">
              <h3 id="project-wizzle">Wizzle</h3>
              <span className="project-tech">Ruby on Rails</span>
            </div>
            <p className="project-description">
              A social wishlist platform that keeps gift-giving personal. Craft wishlists, invite friends, ask and answer item questions, and track gifting history with inline editing that keeps the flow fast.
            </p>
            <span className="project-cta"><a href="https://github.com/WernerPetrick/wizzle" rel="noreferrer" target="_blank">Explore the build →</a></span>
          </article>
          <article className="project-card" aria-labelledby="project-comet">
            <div className="project-header">
              <h3 id="project-comet">Comet</h3>
              <span className="project-tech">Ruby · Markdown · ERB · Stimulus</span>
            </div>
            <p className="project-description">
              A static-first site framework for Ruby. Write in Markdown, drop in ERB shards, spark interactivity with Stimulus, and hydrate only when it matters. The result: cached HTML with optional, razor-thin JavaScript.
            </p>
            <span className="project-cta"><a href="https://github.com/WernerPetrick/comet" rel="noreferrer" target="_blank">Dive into the framework →</a></span>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact-section" aria-labelledby="contact-title">
        <div className="section-header">
          <h2 id="contact-title">CONTACT</h2>
          <span className="section-number">04</span>
        </div>
        <div className="contact-grid">
          <p className="contact-line">Always happy to connect - whether it’s about code, projects, or ideas.</p>
          <div className="contact-links">
            <a
              className="primary-link"
              href="https://github.com/WernerPetrick"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="secondary-link"
              href="https://www.linkedin.com/in/petrickwerner01/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
