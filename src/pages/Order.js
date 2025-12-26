import React from "react";
import "./Order.css";
import Nav from "../components/Nav";
import { Droplet, Package, School, Star, Truck, TrendingDown } from "lucide-react";
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
    <div className="order">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Nav />
          </div>
        </div>
      </header>

      <section className="order-hero">
        <div className="container">
          <h1>Choose Your Water Package</h1>
          <p>
            Each gallon costs <strong>₱{PRICE_PER_GALLON}</strong>. 
            Orders below 10 gallons have a ₱10 delivery fee.  
            Orders 10 gallons and above enjoy <strong>FREE delivery</strong>.
          </p>
          <div className="savings-note">
            <TrendingDown size={18} />
            <span>Save up to 35% by choosing larger packages!</span>
          </div>
        </div>
      </section>

      <section className="order-packages">
        <div className="container">
          <div className="order-grid">
            {packages.map((p) => {
              const totalPrice = calculateTotalPrice(p);
              const effectivePricePerGallon = calculateEffectivePricePerGallon(p);
              const savings = calculateSavings(p);
              const totalGallons = p.gallons + (p.free || 0);
              
              return (
                <div
                  key={p.id}
                  className={`order-card ${p.popular ? "popular" : ""}`}
                >
                  {p.popular && (
                    <span className="popular-badge">Most Popular</span>
                  )}

                  <div className="order-icon">
                    {getIconComponent(p.iconType)}
                  </div>
                  <h3>{p.name}</h3>
                  
                  <div className="package-pricing">
                    <div className="gallons-display">
                      <span className="gallons-count">{p.gallons}</span>
                      <span className="gallons-label">GALLONS</span>
                    </div>
                    
                    {p.free > 0 && (
                      <div className="free-display">
                        <span className="free-icon">+</span>
                        <span className="free-count">{p.free}</span>
                        <span className="free-label">FREE GALLON{p.free > 1 ? 'S' : ''}</span>
                      </div>
                    )}
                    
                    <div className="price-section">
                      {/* Base Price - Always show */}
                      <div className="price-row">
                        <span className="price-label">Base Price:</span>
                        <span className="price-value">₱{p.basePrice}</span>
                      </div>
                      
                      {/* Delivery */}
                      <div className="price-row">
                        <span className="price-label">Delivery:</span>
                        <span className={`price-value ${p.delivery.includes("FREE") ? "free-delivery" : ""}`}>
                          {p.delivery.includes("FREE") ? "FREE" : "₱10"}
                        </span>
                      </div>
                      
                      {/* Total */}
                      <div className="price-row total-row">
                        <span className="price-label">Total:</span>
                        <span className="price-value total">₱{totalPrice}</span>
                      </div>
                      
                      {/* Cost per Gallon - Only for packages with free gallons */}
                      {p.free > 0 && (
                        <div className="price-row effective-row">
                          <span className="price-label">Cost/Gallon:</span>
                          <span className="price-value effective">₱{effectivePricePerGallon}</span>
                        </div>
                      )}
                      
                      {/* Savings Display - Only show if there are actual savings (not for Single Refill) */}
                      {p.id !== 1 && savings.amount > 0 && (
                        <div className="savings-display">
                          <span className="savings-label">
                            <TrendingDown size={14} />
                            You Save:
                          </span>
                          <div className="savings-amount">
                            <span className="savings-price">₱{savings.amount}</span>
                            <span className="savings-percentage">({savings.percentage}% OFF)</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Button Container */}
                  <div className="button-container">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleOrderClick(p)}
                    >
                      Order Now
                    </button>
                  </div>
                  
                  {/* Savings Comparison Note - Only show for packages with savings */}
                  {p.id !== 1 && savings.amount > 0 && (
                    <p className="comparison-note">
                      vs. buying {totalGallons} Single Refills: ₱{savings.costIfIndividual}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Pricing Note */}
          <div className="pricing-note">
            <p>
              <strong>Note:</strong> All packages include free bottle sanitization. 
              Free gallons are added to your total delivery. 
              "You Save" calculation compares package price vs. buying individual gallons separately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;