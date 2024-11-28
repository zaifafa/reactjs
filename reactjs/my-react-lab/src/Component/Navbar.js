import React from 'react';
import '../styles/Navbar.css'; // Import CSS file
import logo from '../Component/assets/logo.webp'; // Import your logo image
function Navbar() {
        return (
          <nav className="navbar">
            <div className="navbar-logo">
              <img src={logo} alt="Krufter Logo" className="logo-image" />
            </div>
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">About</a></li>
<li><a href="#" className="navbar-link">Services</a></li>
<li><a href="#" className="navbar-link">Contact</a></li>
</nav>
);
}
export default Navbar;