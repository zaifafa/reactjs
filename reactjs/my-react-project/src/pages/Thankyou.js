import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css"; 

const ThankYou = ({ clearCart }) => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1> Thank You for Your Purchase!</h1>
        <p>Your order has been confirmed and is being processed.</p>
        <Link to="/">
          <button className="return-home-btn" onClick={clearCart}>
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
