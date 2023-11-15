import React from "react";
import "./NavBar.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import logo from "./your-logo.png"; // Import your logo image

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <nav className="navbar-atlagile">
      <Link to="/landingscreen" className="navbar-atlagile-logo">
        <img src="./images/logo.png" alt="Logo" />
      </Link>
      <div className="navbar-atlagile-buttons">
        <div className="more-info">
          <Link to="/shop" className="btn-atlagile">
            {" "}
            Shop
          </Link>
          <Link to="/aboutus" className="btn-atlagile">
            {" "}
            About Us
          </Link>
        </div>
        <div className="login">
          <Link to="/signinscreen" className="btn-atlagile">
            Sign In
          </Link>
          <Link to="/" className="btn-atlagile">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
