import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import logo from '../assets/logo.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
    navigate("/");
  };

  const navToRegister = () => {
    navigate("/Register");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left side - Branding */}
        <div className="login-branding">
          <div className="login-logo">
            <img src={logo} alt="AquaLean" className="brand-logo" />
            <h1 className="brand-name">AquaLean</h1>
          </div>
          <div className="brand-tagline">
            <h2>Pure Refreshment Delivered</h2>
            <p>
              Access your account to manage orders, delivery schedules, and
              account settings.
            </p>
          </div>
        
            <div className="brand-features">
              <div className="feature">
                <span className="feature-icon">💧</span>
                <span>Track your water orders</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📅</span>
                <span>Manage delivery schedules</span>
              </div>
              <div className="feature">
                <span className="feature-icon">👤</span>
                <span>Update account details</span>
              </div>
            </div>

            <div className="testimonial"> {/* ← Moved outside brand-features */}
              <p className="testimonial-text">
                "Ilang tubig kay lami kaajo niya sila pay mo deliver niya barato ra! Sulit kaaju!"
              </p>
              <p className="testimonial-author">
                - Eric Pajulio, Mayor of Matalom
              </p>
            </div>
    
        </div>

        {/* Right side - Login Form */}
        <div className="login-form-container">
          <div className="login-form-wrapper">
            <h2 className="form-title">Welcome Back</h2>
            <p className="form-subtitle">
              Please enter your credentials to access your account
            </p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="login-btn">
                Sign In
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              <button
                type="button"
                className="signup-btn"
                onClick={navToRegister}
              >
                Create New Account
              </button>
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

export default Login;
