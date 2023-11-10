import React from "react";
import "./NavBar.css";
// import logo from "./your-logo.png"; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar-atlagile">
      <div className="navbar-atlagile-logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <div className="navbar-atlagile-buttons">
        <div className="more-info">
          <button className="btn-atlagile">Shop</button>
          <button className="btn-atlagile">About Us</button>
        </div>
        <div className="login">
          <button className="btn-atlagile">Sign In</button>
          <button className="btn-atlagile">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
