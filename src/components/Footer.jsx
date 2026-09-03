import { Link } from 'react-router-dom'
import './Footer.css'
import { FiArrowUpRight } from 'react-icons/fi'
import { personal } from '../data/profile'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-col-main">
            <img src={`${import.meta.env.BASE_URL}logo-dark.svg`} alt="Ankush Chaudhary" className="footer-logo-img" />
            <p className="footer-role">{personal.role}</p>
            <a href={`mailto:${personal.email}`} className="footer-email">
              {personal.email}
            </a>
          </div>

          <div className="footer-col">
            <p className="mono-label footer-heading">Site</p>
            <nav className="footer-nav">
              <Link to="/projects">Work</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/research">Research</Link>
              <Link to="/resume">Résumé</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-col">
            <p className="mono-label footer-heading">Elsewhere</p>
            <nav className="footer-nav">
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                GitHub <FiArrowUpRight />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <FiArrowUpRight />
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Ankush Chaudhary</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
