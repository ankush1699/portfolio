import { Link } from 'react-router-dom'
import './Footer.css'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Ankush</h3>
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
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:ankushchaudhary1@vt.edu"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
            <a href="mailto:ankushchaudhary1@vt.edu" className="footer-email">
              ankushchaudhary1@vt.edu
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ankush Chaudhary. All rights reserved.</p>
          <p className="footer-signature">Built with simple things beautifully</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
