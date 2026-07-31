import React from 'react';
import './FAQ.css';
import Nav from '../components/Nav';
import { Clock, Truck, ShieldCheck, CreditCard, RefreshCw, Phone, Facebook } from 'lucide-react';

const faqs = [
  {
    id: 1,
    icon: <Clock size={28} />,
    question: "What are your delivery hours?",
    answer: "We deliver Monday through Saturday from 7:00 AM to 5:00 PM, and Sundays from 8:00 AM to 5:00 PM. Orders placed after 4:00 PM will be scheduled for the next morning."
  },
  {
    id: 2,
    icon: <Truck size={28} />,
    question: "Is there a delivery fee?",
    answer: "Delivery is FREE for orders of 10 gallons or more! For smaller orders (under 10 gallons), a minimal delivery fee of ₱10 applies."
  },
  {
    id: 3,
    icon: <ShieldCheck size={28} />,
    question: "How do you clean your bottles?",
    answer: "We take sanitation seriously. Every returned bottle goes through a rigorous multi-step cleaning and sanitization process using food-grade, safe disinfectants before being refilled."
  },
  {
    id: 4,
    icon: <CreditCard size={28} />,
    question: "What payment methods do you accept?",
    answer: "We accept Cash on Delivery (COD), GCash, and Maya. For corporate or school accounts, we can arrange weekly or monthly billing cycles."
  },
  {
    id: 5,
    icon: <RefreshCw size={28} />,
    question: "Do you accept container trade-ins?",
    answer: "Yes! If you have empty, good-condition standard 5-gallon water containers from other brands, we can accept them for a refill after they pass our quality and sanitation inspection."
  }
];

function FAQ() {
  return (
    <div className="faq-page">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Nav />
          </div>
        </div>
      </header>

      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="hero-subtitle">
            Everything you need to know about our water, delivery, and services.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-card">
                <div className="faq-icon-wrapper">
                  {faq.icon}
                </div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="faq-footer">
            <h3>Still have questions?</h3>
            <p>We're just a call or text away.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
              <a href="tel:09319709818" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <Phone size={18} />
                0931-970-9818
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592432765622" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <Facebook size={18} />
                Message us on FB
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;