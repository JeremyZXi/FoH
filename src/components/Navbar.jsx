import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop Navigation */}
        <div className="navbar-desktop">

          <div className="navbar-right">
            <a href="/" className="navbar-link">Festival of Hope 2026</a>
            <a href="/FoH" className="navbar-link">About Us</a>
            <a href="/attend" className="navbar-link">Attend Event</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="navbar-mobile">
          <div className="navbar-mobile-header">
            <button 
              className="navbar-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="/" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
              Festival of Hope 2026
            </a>
            <a href="/FoH" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a href="/attend" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
              Attend Event
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
