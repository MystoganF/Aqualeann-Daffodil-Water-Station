import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../assets/logo.png';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    receiveUpdates: true
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    console.log('Registration data:', formData);
    
    // For demo purposes, show success and navigate to login
    alert('Registration successful! Please check your email to verify your account.');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        {/* Left side - Branding */}
        <div className="register-branding">
          <div className="register-logo">
            <img src={logo} alt="AquaLean" className="brand-logo" />
            <h1 className="brand-name">AquaLean</h1>
          </div>
          <div className="brand-tagline">
            <h2>Join Our Hydration Community</h2>
            <p>Sign up today and enjoy pure, mineral-rich alkaline water delivered to your doorstep.</p>
          </div>
          <div className="benefits">
            <h3>Benefits of Joining:</h3>
            <div className="benefit-item">
              <span className="benefit-icon">🎁</span>
              <span>10% off your first order</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📅</span>
              <span>Flexible delivery scheduling</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">👑</span>
              <span>Exclusive member discounts</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📱</span>
              <span>Easy online order management</span>
            </div>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">"Ilang tubig kay lami kaajo niya sila pay mo deliver niya barato ra! Sulit kaaju!"</p>
            <p className="testimonial-author">- Eric Pajulio, Mayor of  Matalom </p>
          </div>
        </div>

        {/* Right side - Registration Form */}
        <div className="register-form-container">
          <div className="register-form-wrapper">
            <h2 className="form-title">Create Your Account</h2>
            <p className="form-subtitle">Fill in your details to get started</p>
            
            <form onSubmit={handleSubmit} className="register-form">
              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Delivery Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full delivery address"
                  rows="3"
                  required
                />
              </div>
              
              <div className="password-fields">
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    minLength="6"
                  />
                  <small className="password-hint">Minimum 6 characters</small>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
              
            
              <button type="submit" className="register-btn">
                Create Account
              </button>
              
              <div className="divider">
                <span>Already have an account?</span>
              </div>
              
              <Link to="/login" className="login-link">
                Sign in to your account
              </Link>
              
              <div className="security-info">
                <div className="security-icon">🔒</div>
                <div className="security-text">
                  <p>Your information is secured with us in accordance to Data Privacy Act of 2012 (RA 10173)</p>
                  <small>We never share your personal data with third parties</small>
                </div>
              </div>
            </form>
            
            <div className="back-to-home">
              <Link to="/" className="back-link">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;