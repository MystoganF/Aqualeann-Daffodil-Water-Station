import React from "react";
import "./Transaction.css";
import Nav from "../components/Nav";
import { ArrowLeft, CreditCard, Package, Check, Truck, Droplet, Star, School } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// Icon component mapping (same as Order.jsx)
const getIconComponent = (iconType, size = 42) => {
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

  // Calculate total gallons
  const totalGallons = packageData.gallons + (packageData.free || 0);
  
  // Calculate estimated price (use the passed pricePerGallon or default to 25)
  const pricePerGallon = packageData.pricePerGallon || 25;
  
  // Use basePrice if provided, otherwise calculate it
  const subtotal = packageData.basePrice || (packageData.gallons * pricePerGallon);
  const deliveryFee = packageData.delivery.includes("FREE") ? 0 : 10;
  const total = subtotal + deliveryFee;

  const handleGoBack = () => {
    navigate("/order-packages");
  };

  const handleProceedToPayment = () => {
    navigate("/payment", { 
      state: { 
        package: packageData,
        total,
        subtotal,
        deliveryFee
      }
    });
  };

  return (
    <div className="transaction">
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
          <h1>Complete Your Order</h1>
          <p>Review your package details and proceed to payment</p>
        </div>
      </section>

      <div className="container transaction-container">
        <div className="transaction-content">
          {/* Order Summary Card */}
          <div className="summary-card">
            <div className="summary-header">
              <h2>
                <Package size={24} />
                Order Summary
              </h2>
              <span className="order-status">Pending Payment</span>
            </div>

            <div className="package-details">
              <div className="package-header">
                <div className="package-icon">
                  {getIconComponent(packageData.iconType, 42)}
                </div>
                <div>
                  <h3>{packageData.name}</h3>
                  <p className="package-type">Water Package</p>
                </div>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Gallons Purchased:</span>
                  <span className="detail-value">{packageData.gallons} gal</span>
                </div>
                {packageData.free > 0 && (
                  <div className="detail-item">
                    <span className="detail-label">Free Gallons:</span>
                    <span className="detail-value free-text">+{packageData.free} gal</span>
                  </div>
                )}
                <div className="detail-item">
                  <span className="detail-label">Total Gallons:</span>
                  <span className="detail-value total-gallons">{totalGallons} gal</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Delivery:</span>
                  <span className="detail-value">{packageData.delivery}</span>
                </div>
              </div>

              {/* Package Description */}
              <div className="description-section">
                <h4>About This Package</h4>
                <p className="package-description">
                  {packageData.description}
                </p>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="price-breakdown">
              <h3>Price Breakdown</h3>
              <div className="price-item">
                <span>{packageData.gallons} gallons × ₱{pricePerGallon}</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="price-item">
                <span>Delivery Fee</span>
                <span className={deliveryFee === 0 ? "free-text" : ""}>
                  {deliveryFee === 0 ? "FREE" : `₱${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className="price-total">
                <span>Total Amount</span>
                <span className="total-amount">₱{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Order Actions Sidebar */}
          <div className="actions-sidebar">
            <div className="delivery-info">
              <h3>
                <Truck size={20} />
                Delivery Information
              </h3>
              <p>Your order will be delivered within 24-48 hours after payment confirmation.</p>
              <ul className="benefits-list">
                <li>
                  <Check size={16} />
                  Contactless delivery available
                </li>
                <li>
                  <Check size={16} />
                  Free bottle sanitization
                </li>
                <li>
                  <Check size={16} />
                  Schedule delivery time
                </li>
              </ul>
            </div>

            <div className="payment-section">
              <h3>
                <CreditCard size={20} />
                Payment Method
              </h3>
              <p>Secure payment processed through our trusted partners</p>
              
              <div className="payment-options">
                <div className="payment-option">
                  <input type="radio" id="gcash" name="payment" defaultChecked />
                  <label htmlFor="gcash">GCash</label>
                </div>
                <div className="payment-option">
                  <input type="radio" id="card" name="payment" />
                  <label htmlFor="card">Credit/Debit Card</label>
                </div>
                <div className="payment-option">
                  <input type="radio" id="cod" name="payment" />
                  <label htmlFor="cod">Cash on Delivery</label>
                </div>
              </div>

              <button className="btn btn-primary btn-payment" onClick={handleProceedToPayment}>
                <CreditCard size={20} />
                Proceed to Payment
              </button>

              <p className="security-note">
                🔒 Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;