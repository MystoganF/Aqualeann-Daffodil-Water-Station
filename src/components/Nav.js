import React, { Profiler } from 'react';
import './Nav.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import {UserCircleIcon} from "lucide-react";

function Nav() {

  

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Aqualeann Daffodil Saligue" className="logo-image" />
        <span className="logo-text">Aqualeann</span>
      </div>
      <ul>
       
        <li><a href="/">Home</a></li>
        <li><a href="/order-packages">Order</a></li>
        <li><a href="#pricing">Transactions</a></li>
        <li><a href="/about">About</a></li>
        <li>
            <a href="#profile" className="profile-link">
              <span className="profile-icon"><UserCircleIcon/></span>
              <span className="profile-name">Kean</span>
            </a>
        </li>


      </ul>

     

    </nav>
  );
}

export default Nav;