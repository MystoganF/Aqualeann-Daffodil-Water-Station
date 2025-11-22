import React from 'react';
import './Nav.css';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Aqualeann Daffodil Saligue" className="logo-image" />
        <span className="logo-text">Aqualean</span>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;