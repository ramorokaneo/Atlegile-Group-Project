import React from "react";
import "./NavBar.css";
// import logo from "./your-logo.png"; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <div className="more-info">
          <button className="btn">Shop</button>
          <button className="btn">About Us</button>
        </div>
        <div className="login">
          <button className="btn">Sign In</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
