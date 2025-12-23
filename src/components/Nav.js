import React from 'react';
import './Nav.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


function Nav() {

  // const navigate = useNavigate();

  // function handleProfileClick(){
  //   navigate('/profile');
  // }

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Aqualeann Daffodil Saligue" className="logo-image" />
        <span className="logo-text">Aqualean</span>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#order">Order</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Profile</a></li>

      </ul>

     

    </nav>
  );
}

export default Nav;