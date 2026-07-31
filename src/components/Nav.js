import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Helper to check if a navigation link is the current active path
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <Droplet className="logo-icon" size={32} strokeWidth={2.5} />
        <div className="logo-text">
          <span className="logo-main">AQUALEAN</span>
          <span className="logo-sub">Daffodil Saligue</span>
        </div>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className={isActive('/')} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/order-packages" className={isActive('/order-packages')} onClick={closeMenu}>
            Order
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/faq" className={isActive('/faq')} onClick={closeMenu}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;