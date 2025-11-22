import React from 'react';
import './Home.css';
import Nav from './Nav'; // Import the Nav component
import waterGallons from '../assets/waterGallons.png'

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            
            <Nav />
          </div>
        </div>
      </header>

      {/* Rest of your component remains the same */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Pure Refreshment Delivered to Your Door</h1>
              <p>Experience the crisp, clean taste of our purified, mineral-enriched alkaline water. Your health deserves the best hydration.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Order Now</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="water-bottle-placeholder">
                <img src={waterGallons}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Our Water?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💧</div>
              <h3>Purified</h3>
              <p>Advanced purification process removes impurities while retaining essential minerals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Mineral Rich</h3>
              <p>Naturally enriched with essential minerals for better taste and health benefits</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Alkaline</h3>
              <p>Perfect pH balanced water to help maintain your body's natural balance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Home Delivery</h3>
              <p>Convenient delivery service right to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-content">
            <div className="service-item">
              <h3>Water Refilling</h3>
              <p>Bring your containers for refilling at our station</p>
            </div>
            <div className="service-item">
              <h3>Home Delivery</h3>
              <p>Regular scheduled deliveries to your home or office</p>
            </div>
            <div className="service-item">
              <h3>Bottle Rental</h3>
              <p>Rent water dispensers and bottles for your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>AQUALEAN DAFFODIL SALIGUE</h3>
              <p>Purified, Mineral, Alkaline Water</p>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>📍 Zaragoza Matalom, Leyte</p>
              <p>📞 0931-970-9818</p>
              <p>✉️ keanmaverickaaligue@gmail.com</p>
            </div>
            <div className="footer-hours">
              <h4>Business Hours</h4>
              <p>Monday - Saturday: 7:00 AM - 5:00 PM</p>
              <p>Sunday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Aqualean Daffodil Saligue Water Refilling Station. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;