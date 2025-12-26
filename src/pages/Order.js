import React from "react";
import "./Order.css";
import Nav from "../components/Nav";
import { Droplet, Gamepad2Icon, GitPullRequestArrow, LucideRecycle, Package, School, Star, Truck, TruckElectric } from "lucide-react";

const packages = [
  {
    name: "Single Refill",
    gallons: 1,
    free: 0,
    delivery: "₱10 Delivery Fee",
    icon: <Droplet size={42} />,
  },
  {
    name: "Family Saver",
    gallons: 5,
    free: 0,
    delivery: "₱10 Delivery Fee",
    icon: <Package size={42} />,
  },
  {
    name: "Value Pack 10 + 1",
    gallons: 10,
    free: 1,
    delivery: "FREE Delivery",
    popular: true,
    icon: <Star size={42} />,
  },
  {
    name: "Monthly Home Pack",
    gallons: 15,
    free: 1,
    delivery: "FREE Delivery",
    icon: <Package size={42} />,
  },
  {
    name: "Store Owner Pack",
    gallons: 20,
    free: 2,
    delivery: "FREE Delivery",
    icon: <Truck size={42} />,
  },
  {
    name: "Office / School Pack",
    gallons: 30,
    free: 3,
    delivery: "FREE Delivery",
    icon: <School size={42} />,
  },
  {
    name: "Custom Order",
    gallons: "<>",
    free: 1,
    delivery: "Delivery Fee Depends on Number of Gallons",
    icon: <Gamepad2Icon size={42} />,

  }
];

function Order() {
  return (
    <div className="order">
      {/* Header (same as Home) */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Nav />
          </div>
        </div>
      </header>

      {/* Order Hero */}
      <section className="order-hero">
        <div className="container">
          <h1>Choose Your Water Package</h1>
          <p>
            Orders below 10 gallons have a ₱10 delivery fee.  
            Orders 10 gallons and above enjoy <strong>FREE delivery</strong>.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="order-packages">
        <div className="container">
          <div className="order-grid">
            {packages.map((p, index) => (
              <div
                key={index}
                className={`order-card ${p.popular ? "popular" : ""}`}
              >
                {p.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}

                <div className="order-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p className="gallons">{p.gallons} Gallons</p>

                {p.free > 0 && (
                  <p className="free">+ {p.free} FREE Gallon</p>
                )}

                <p className="delivery">{p.delivery}</p>

                <button className="btn btn-primary">Add to Order</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
