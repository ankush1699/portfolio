import { useEffect, useState } from 'react'
import './Hero.css'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <p className="hero-greeting animate-fade-in">Hello, I'm</p>
          <h1 className="hero-name animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your Name
          </h1>
          <h2 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Full Stack Developer
          </h2>
          <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            I create beautiful, functional, and user-centered digital experiences.
            Welcome to my corner of the internet.
          </p>
          <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
          </div>
          <div className="hero-social animate-fade-in" style={{ animationDelay: '1s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
        <div className="hero-image animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
          <div className="image-placeholder">
            <div className="placeholder-content">
              <span>Your Photo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <FiArrowDown />
      </div>
    </section>
  )
}

export default Hero
