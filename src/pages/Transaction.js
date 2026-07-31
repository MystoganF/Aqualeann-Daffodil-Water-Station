import React from "react";
import "./Transaction.css";
import Nav from "../components/Nav";
import { ArrowLeft, Package, Check, Truck, Droplet, Star, School, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// Icon component mapping
const getIconComponent = (iconType, size = 36) => {
  switch (iconType) {
    case "droplet":
      return <Droplet size={size} />;
    case "package":
      return <Package size={size} />;
    case "star":
      return <Star size={size} />;
    case "truck":
      return <Truck size={size} />;
    case "school":
      return <School size={size} />;
    default:
      return <Droplet size={size} />;
  }
};

function Transaction() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get package data from navigation state or fallback to default
  const packageData = location.state?.package || {
    id: 3,
    name: "Value Pack 10 + 1",
    gallons: 10,
    free: 1,
    delivery: "FREE Delivery",
    iconType: "star",
    pricePerGallon: 25,
    basePrice: 250,
    description: "Best value package! Get 11 gallons for the price of 10. Perfect for families and small offices. Includes free delivery and bottle sanitization."
  };

  // Calculate totals
  const totalGallons = packageData.gallons + (packageData.free || 0);
  const pricePerGallon = packageData.pricePerGallon || 25;
  const subtotal = packageData.basePrice || (packageData.gallons * pricePerGallon);
  const deliveryFee = packageData.delivery.includes("FREE") ? 0 : 10;
  const total = subtotal + deliveryFee;

  const handleGoBack = () => {
    navigate("/order-packages");
  };

  return (
    <div className="transaction-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Nav />
          </div>
        </div>
      </header>

      {/* Transaction Hero */}
      <section className="transaction-hero">
        <div className="container">
          <button className="back-button" onClick={handleGoBack}>
            <ArrowLeft size={20} />
            Back to Packages
          </button>
          <h1>Order Summary</h1>
          <p>Review your package details and contact us to place your order</p>
        </div>
      </section>

      <section className="transaction-section">
        <div className="container">
          <div className="transaction-grid">
            
            {/* Left Column: Order Summary Card */}
            <div className="summary-card">
              <div className="card-header-flex">
                <h2>
                  <Package size={24} className="header-icon" />
                  Order Details
                </h2>
                <span className="status-badge">Ready to Order</span>
              </div>

              <div className="package-info-box">
                <div className="package-title-row">
                  <div className="icon-wrapper">
                    {getIconComponent(packageData.iconType)}
                  </div>
                  <div>
                    <h3>{packageData.name}</h3>
                    <span className="package-type">Water Package</span>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Purchased</span>
                    <span className="detail-value">{packageData.gallons} gal</span>
                  </div>
                  {packageData.free > 0 && (
                    <div className="detail-item highlight">
                      <span className="detail-label">Free Bonus</span>
                      <span className="detail-value">+{packageData.free} gal</span>
                    </div>
                  )}
                  <div className="detail-item">
                    <span className="detail-label">Total Volume</span>
                    <span className="detail-value font-bold">{totalGallons} gal</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Delivery</span>
                    <span className="detail-value">{packageData.delivery}</span>
                  </div>
                </div>

                <div className="description-box">
                  <h4>About This Package</h4>
                  <p>{packageData.description}</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="price-breakdown">
                <h3>Price Breakdown</h3>
                <div className="price-row">
                  <span className="price-label">{packageData.gallons} gallons × ₱{pricePerGallon}</span>
                  <span className="price-value">₱{subtotal.toFixed(2)}</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Delivery Fee</span>
                  <span className={`price-value ${deliveryFee === 0 ? "free-text" : ""}`}>
                    {deliveryFee === 0 ? "FREE" : `₱${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="price-divider"></div>
                <div className="price-row total-row">
                  <span className="price-label">Estimated Total</span>
                  <span className="price-value total-amount">₱{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions Sidebar */}
            <div className="actions-sidebar">
              
              {/* Contact to Order Card */}
              <div className="sidebar-card contact-card">
                <div className="card-header-flex">
                  <h3>
                    <Phone size={20} className="header-icon primary-color" />
                    How to Order
                  </h3>
                </div>
                <p className="sidebar-text">
                  To proceed with this package, please call our station directly. Have your order summary ready for faster processing.
                </p>
                
                <div className="contact-numbers">
                  <div className="number-box">0931-970-9818</div>
                  <div className="number-box">(032) 123-4567</div>
                </div>

                <a href="tel:09319709818" className="btn btn-primary call-btn">
                  <Phone size={18} />
                  Call Now to Order
                </a>
              </div>

              {/* Delivery Info Card */}
              <div className="sidebar-card delivery-card">
                <div className="card-header-flex">
                  <h3>
                    <Truck size={20} className="header-icon" />
                    Delivery Info
                  </h3>
                </div>
                <p className="sidebar-text">
                  Your order will be scheduled for delivery upon confirming your request via phone call.
                </p>
                <ul className="benefits-list">
                  <li>
                    <Check size={18} className="check-icon" />
                    Contactless delivery available
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    Free bottle sanitization
                  </li>
                  <li>
                    <Check size={18} className="check-icon" />
                    Flexible delivery scheduling
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Transaction;