import React from 'react';
import './About.css';
import Nav from '../components/Nav';
import { 
  Droplet, 
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook
} from 'lucide-react';

function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Nav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Aqualean</h1>
          <p className="hero-subtitle">
            Your trusted source for premium purified, mineral, and alkaline water in Zaragoza Matalom, Leyte.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <div className="section-divider-left"></div>
              <p>
                At <strong>Aqualean Daffodil Saligue</strong>, we believe that access to clean, safe, and healthy drinking water is a fundamental right. Our mission is to provide our community with the highest quality hydration solutions through advanced purification technology and exceptional customer service.
              </p>
              <p>
                Whether you need everyday purified water, mineral-enriched water for added taste, or pH-balanced alkaline water for optimal health, we ensure every drop that reaches your glass is pristine and refreshing.
              </p>
            </div>
            <div className="mission-image-placeholder">
              <Droplet size={80} className="water-icon-large" />
              <h3>Pure. Clean. Refreshing.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <h3>Uncompromising Quality</h3>
              <p>We utilize state-of-the-art filtration and sanitization processes to ensure every gallon exceeds safety standards.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon-wrapper">
                <HeartHandshake size={32} />
              </div>
              <h3>Community First</h3>
              <p>As a local business in Leyte, we treat our customers like family, prioritizing your health and convenience above all.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Droplet size={32} />
              </div>
              <h3>Health & Wellness</h3>
              <p>Through our mineral and alkaline options, we aim to actively contribute to the overall well-being of our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions about our water packages or need to schedule a delivery? We're here to help.</p>
              
              <ul className="contact-list">
                <li>
                  <MapPin className="contact-icon" size={24} />
                  <div>
                    <strong>Location</strong>
                    <span>Zaragoza Matalom, Leyte</span>
                  </div>
                </li>
                <li>
                  <Phone className="contact-icon" size={24} />
                  <div>
                    <strong>Phone</strong>
                    <span>0931-970-9818</span>
                  </div>
                </li>
                <li>
                  <Mail className="contact-icon" size={24} />
                  <div>
                    <strong>Email</strong>
                    <span>keanmaverickaaligue@gmail.com</span>
                  </div>
                </li>
                <li>
                  <Facebook className="contact-icon" size={24} />
                  <div>
                    <strong>Facebook</strong>
                    <a href="https://www.facebook.com/profile.php?id=61592432765622" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Message us on Messenger</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="hours-card">
              <div className="hours-header">
                <Clock size={28} className="hours-icon" />
                <h3>Business Hours</h3>
              </div>
              <div className="hours-list">
                <div className="hours-row">
                  <span className="day">Monday - Saturday</span>
                  <span className="time">7:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Sunday</span>
                  <span className="time">8:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="hours-footer">
                <p>Delivery available during operating hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;