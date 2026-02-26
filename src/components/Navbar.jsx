import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const closeMenu = () => setIsOpen(false)

  const handleLogoClick = (e) => {
    closeMenu()
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo(0, 0)
    }
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/research', label: 'Research' },
    { path: '/contact', label: 'Contact' },
    { path: '/resume', label: 'Resume' },
  ]

  return (
    <nav className={`navbar ${scrollY > 60 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLogoClick} aria-label="Home">
          {logoError ? (
            <span className="nav-logo-fallback">AC</span>
          ) : (
            <img
              src={`${import.meta.env.BASE_URL}avatar.jpg`}
              alt="Ankush Chaudhary"
              className="nav-logo-img"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="nav-logo-name">
            <span className="nav-logo-line">Ankush</span>
            <span className="nav-logo-line">Chaudhary</span>
          </span>
        </Link>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? 'active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
