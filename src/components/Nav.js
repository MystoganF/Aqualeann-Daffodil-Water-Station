import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Custom navigation handler for smooth menu closing animation
  const handleNavClick = (e, path) => {
    e.preventDefault(); // Prevent instant routing

    // If the user clicks the link of the page they are currently on
    if (location.pathname === path) {
      closeMenu(); 
      return;
    }

    // If on mobile and the menu is open
    if (isOpen) {
      closeMenu(); // Trigger the CSS closing animation
      
      // Wait exactly 300ms (matching our CSS transition time) before navigating
      setTimeout(() => {
        navigate(path);
      }, 300);
    } else {
      // If on desktop (menu closed), navigate instantly
      navigate(path);
    }
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
      
      {/* Dark overlay that dims the background */}
      <div 
        className={`menu-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>

      {/* Logo Section */}
      <Link to="/" className="nav-logo" onClick={(e) => handleNavClick(e, '/')}>
        <Droplet className="logo-icon" size={32} strokeWidth={2.5} />
        <div className="logo-text">
          <span className="logo-main">AQUALEAN</span>
          <span className="logo-sub">Daffodil Saligue</span>
        </div>
      </Link>

      {/* Hamburger Icon for Mobile (Opens Menu) */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <Menu size={28} />
      </div>

      {/* Navigation Links Sidebar */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        
        {/* Mobile Sidebar Header with Close Button */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
             <Droplet className="logo-icon" size={24} strokeWidth={2.5} />
             <span className="sidebar-title">Menu</span>
          </div>
          <X size={28} className="close-icon" onClick={closeMenu} />
        </div>

        <li>
          <Link to="/" className={isActive('/')} onClick={(e) => handleNavClick(e, '/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/order-packages" className={isActive('/order-packages')} onClick={(e) => handleNavClick(e, '/order-packages')}>
            Order
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about')} onClick={(e) => handleNavClick(e, '/about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/faq" className={isActive('/faq')} onClick={(e) => handleNavClick(e, '/faq')}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;