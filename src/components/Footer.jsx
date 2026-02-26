import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [avatarError, setAvatarError] = useState(false)

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            {avatarError ? (
              <span className="footer-avatar-fallback" aria-hidden="true">AC</span>
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}avatar.jpg`}
                alt="Ankush Chaudhary"
                className="footer-avatar"
                onError={() => setAvatarError(true)}
              />
            )}
            <h3 className="footer-logo">Ankush Chaudhary</h3>
            <p className="footer-tagline">
              Software & Machine Intelligence Engineer
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/research">Research</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a 
                href="https://github.com/ankush1699" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/ankushchaudhary01/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:ankushchaudhary.ac99@gmail.com"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
            <a href="mailto:ankushchaudhary.ac99@gmail.com" className="footer-email">
              ankushchaudhary.ac99@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ankush Chaudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
