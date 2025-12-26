import React from "react";
import "./About.css";
import Nav from "../components/Nav";

function About() {
  return (
    <div className="about">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Nav />
          </div>
        </div>
      </header>

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>
            A family-owned water refilling station committed to clean, safe, and
            affordable drinking water.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Aqualean Daffodil Saligue is a family-owned water refilling station
            based in Zaragoza, Matalom, Leyte. Established in March 2025, our
            business was built to provide accessible and reliable clean water for
            local communities.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section light">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            The Saligue family started this water refilling station after
            recognizing a challenge faced by families in Zaragoza and Bukidnon,
            Brgy. Sta. Paz. Water stations were far away, deliveries were often
            delayed, and orders were sometimes not fulfilled.
          </p>
          <p>
            To address this, we established Aqualean Daffodil Saligue closer to
            the community—ensuring faster, more reliable access to clean drinking
            water.
          </p>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="about-section">
        <div className="container">
          <h2>Quality & Safety Assurance</h2>
          <ul className="about-list">
            <li>✔ Government-certified water refilling station</li>
            <li>✔ Monthly water sample testing</li>
            <li>✔ Strict sanitation and purification standards</li>
            <li>✔ Clean, mineral-enriched, alkaline water</li>
          </ul>
        </div>
      </section>

      {/* Customers & Services */}
      <section className="about-section light">
        <div className="container">
          <h2>Our Customers & Services</h2>
          <p>We proudly serve:</p>
          <ul className="about-list">
            <li>Households</li>
            <li>Sari-sari stores</li>
            <li>Offices</li>
            <li>Schools</li>
          </ul>
          <p className="bonus">
            🎁 <strong>Special Offer:</strong> Free 1 gallon for every 10 gallons
            ordered.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Affordability</h3>
              <p>Fair pricing for every family and business.</p>
            </div>
            <div className="value-card">
              <h3>Quality Assurance</h3>
              <p>Consistent safety and cleanliness in every gallon.</p>
            </div>
            <div className="value-card">
              <h3>Trust & Reliability</h3>
              <p>Service you can depend on from people who care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="about-section light">
        <div className="container">
          <h2>Looking Ahead</h2>
          <ul className="about-list">
            <li>🚚 Expansion of delivery services across Matalom Municipality</li>
            <li>💻 Launch of online ordering for easier access</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
