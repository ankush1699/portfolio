import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
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
    { path: '/projects', label: 'Work' },
    { path: '/experience', label: 'Experience' },
    { path: '/research', label: 'Research' },
    { path: '/resume', label: 'Résumé' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrollY > 60 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLogoClick} aria-label="Home">
          A—C
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
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
