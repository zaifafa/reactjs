import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">GUtech Exam Store</Link>
        <Link to="/cart" className="cart-icon">
          🛒 <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
