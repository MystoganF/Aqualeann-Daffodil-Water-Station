import React from "react";
import "./Order.css";
import Nav from "../components/Nav";
import { Droplet, Package, School, Star, Truck, TrendingDown, Plus, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PRICE_PER_GALLON = 25;

const packages = [
  {
    id: 1,
    name: "Single Refill",
    gallons: 1,
    free: 0,
    delivery: "₱10 Delivery Fee",
    iconType: "droplet",
    basePrice: 1 * PRICE_PER_GALLON,
  },
  {
    id: 2,
    name: "Family Saver",
    gallons: 5,
    free: 0,
    delivery: "₱10 Delivery Fee",
    iconType: "package",
    basePrice: 5 * PRICE_PER_GALLON,
  },
  {
    id: 3,
    name: "Value Pack 10 + 1",
    gallons: 10,
    free: 1,
    delivery: "FREE Delivery",
    popular: true,
    iconType: "star",
    basePrice: 10 * PRICE_PER_GALLON,
  },
  {
    id: 4,
    name: "Monthly Home Pack",
    gallons: 15,
    free: 1,
    delivery: "FREE Delivery",
    iconType: "package",
    basePrice: 15 * PRICE_PER_GALLON,
  },
  {
    id: 5,
    name: "Store Owner Pack",
    gallons: 20,
    free: 2,
    delivery: "FREE Delivery",
    iconType: "truck",
    basePrice: 20 * PRICE_PER_GALLON,
  },
  {
    id: 6,
    name: "Office / School Pack",
    gallons: 30,
    free: 3,
    delivery: "FREE Delivery",
    iconType: "school",
    basePrice: 30 * PRICE_PER_GALLON,
  },
];

// Icon component mapping
const getIconComponent = (iconType, size = 32) => {
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

// Package descriptions
const getPackageDescription = (packageName) => {
  const descriptions = {
    "Single Refill": "Perfect for immediate needs or single-person households. One gallon of premium purified water delivered to your doorstep.",
    "Family Saver": "Ideal for families of 4-5 members. This 5-gallon pack lasts approximately 5-7 days with free bottle sanitization service included.",
    "Value Pack 10 + 1": "Best value package! Get 11 gallons for the price of 10. Perfect for families and small offices. Includes free delivery and bottle sanitization.",
    "Monthly Home Pack": "Monthly supply for medium to large families. 15+1 gallons ensures you never run out of clean drinking water. Schedule your monthly delivery.",
    "Store Owner Pack": "Designed for small retail stores and businesses. 20+2 gallons with bulk discount and priority delivery scheduling.",
    "Office / School Pack": "For offices, schools, or institutions. 30+3 gallons with commercial pricing and dedicated account management."
  };
  
  return descriptions[packageName] || "Premium drinking water package with strict quality control and purification processes.";
};

// Calculate total price including delivery
const calculateTotalPrice = (packageItem) => {
  const deliveryFee = packageItem.delivery.includes("FREE") ? 0 : 10;
  return packageItem.basePrice + deliveryFee;
};

// Calculate price per gallon including free gallons
const calculateEffectivePricePerGallon = (packageItem) => {
  const totalGallons = packageItem.gallons + (packageItem.free || 0);
  const totalPrice = calculateTotalPrice(packageItem);
  return (totalPrice / totalGallons).toFixed(2);
};

// Calculate savings compared to buying individually
const calculateSavings = (packageItem) => {
  // Compare against buying Single Refill packages
  const totalGallons = packageItem.gallons + (packageItem.free || 0);
  
  // Cost if bought as Single Refills (with delivery each time)
  const singleRefillCostPerGallon = 35; // ₱25 + ₱10 delivery
  const costIfBoughtIndividually = totalGallons * singleRefillCostPerGallon;
  
  // Actual cost of this package
  const actualCost = calculateTotalPrice(packageItem);
  
  // Calculate savings
  const savingsAmount = costIfBoughtIndividually - actualCost;
  const savingsPercentage = ((savingsAmount / costIfBoughtIndividually) * 100).toFixed(0);
  
  return {
    amount: savingsAmount,
    percentage: savingsPercentage,
    costIfIndividual: costIfBoughtIndividually
  };
};

function Order() {
  const navigate = useNavigate();
  
  const handleOrderClick = (packageItem) => {
    navigate("/transaction", { 
      state: { 
        package: {
          id: packageItem.id,
          name: packageItem.name,
          gallons: packageItem.gallons,
          free: packageItem.free,
          delivery: packageItem.delivery,
          iconType: packageItem.iconType,
          description: getPackageDescription(packageItem.name),
          basePrice: packageItem.basePrice,
          pricePerGallon: PRICE_PER_GALLON
        }
      } 
    });
  };
  
  return (
    <div className="order-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Nav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="order-hero">
        <div className="container">
          <h1>Choose Your Water Package</h1>
          <p className="hero-subtitle">
            Base rate: <strong>₱{PRICE_PER_GALLON} / gallon</strong>. 
            Orders below 10 gallons have a ₱10 delivery fee.  
            Orders 10 gallons and above enjoy <strong>FREE delivery</strong>.
          </p>
          <div className="savings-banner">
            <TrendingDown size={20} />
            <span>Save up to 35% by choosing larger packages!</span>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="order-packages">
        <div className="container">
          <div className="order-grid">
            {packages.map((p) => {
              const totalPrice = calculateTotalPrice(p);
              const effectivePricePerGallon = calculateEffectivePricePerGallon(p);
              const savings = calculateSavings(p);
              const totalGallons = p.gallons + (p.free || 0);
              
              return (
                <div key={p.id} className={`order-card ${p.popular ? "popular" : ""}`}>
                  {p.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}

                  <div className="card-header">
                    <div className="order-icon">
                      {getIconComponent(p.iconType)}
                    </div>
                    <h3>{p.name}</h3>
                    <p className="description">{getPackageDescription(p.name)}</p>
                  </div>
                  
                  <div className="package-pricing">
                    {/* Gallons Display */}
                    <div className="gallons-container">
                      <div className="gallons-base">
                        <span className="count">{p.gallons}</span>
                        <span className="label">Gallons</span>
                      </div>
                      
                      {p.free > 0 && (
                        <div className="gallons-free">
                          <Plus size={16} />
                          <span className="count">{p.free}</span>
                          <span className="label">FREE</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Price Breakdown */}
                    <div className="price-breakdown">
                      <div className="price-row">
                        <span className="label">Base Price</span>
                        <span className="value">₱{p.basePrice}</span>
                      </div>
                      <div className="price-row">
                        <span className="label">Delivery</span>
                        <span className={`value ${p.delivery.includes("FREE") ? "highlight-green" : ""}`}>
                          {p.delivery.includes("FREE") ? "FREE" : "₱10"}
                        </span>
                      </div>
                      <div className="price-divider"></div>
                      <div className="price-row total-row">
                        <span className="label">Total Price</span>
                        <span className="value total">₱{totalPrice}</span>
                      </div>
                      
                      {p.free > 0 && (
                        <div className="price-row effective-row">
                          <span className="label">Effective Cost:</span>
                          <span className="value highlight-blue">₱{effectivePricePerGallon} / gal</span>
                        </div>
                      )}
                    </div>

                    {/* Savings Display */}
                    {p.id !== 1 && savings.amount > 0 && (
                      <div className="savings-display">
                        <div className="savings-main">
                          <TrendingDown size={16} />
                          <span>You Save ₱{savings.amount}</span>
                        </div>
                        <span className="savings-sub">({savings.percentage}% OFF vs individual)</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="card-actions">
                    <button 
                      className={`btn ${p.popular ? "btn-primary" : "btn-secondary"} w-100`}
                      onClick={() => handleOrderClick(p)}
                    >
                      Select Package
                    </button>
                    {p.id !== 1 && savings.amount > 0 && (
                      <div className="comparison-note">
                        vs. {totalGallons} Single Refills (₱{savings.costIfIndividual})
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Pricing Footer Note */}
          <div className="pricing-footer-note">
            <Info size={18} className="info-icon" />
            <p>
              <strong>Note:</strong> All packages include free bottle sanitization. 
              Free gallons are added to your total delivery. 
              "You Save" calculations compare the package price against buying individual single refills separately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;