// Footer.js
import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-hero">
          <div className="footer-body">
            <div className="logo">
              <img
                className="logo-image"
                src={"./images/logo2.png"}
                alt="AMS COMPANY"
              />
            </div>
            <h3>Marketing Services</h3>
            <p>
              Welcome to AMS, where we specialize in building beautiful brands,
              marketing African businesses, and connecting them with a global
              customer base, driving sales of their exceptional products and
              services.
            </p>
            <p className="email-text">atlegilemarketing.co.za</p>
          </div>
          <div className="footer-links">
            <a href="#">
              <h4>ORDER HISTORY</h4>
            </a>
            <a href="#">
              <h4>TERMS & CONDITIONS</h4>
            </a>

            <a href="#">
              <h4>PRIVACY POLICY</h4>
            </a>
          </div>
        </div>
        <div className="company-section">
          <p className="company-text">
            Atlegile Marketing Solutions (Pty) Ltd eCommerce 2023
            {new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
      <div className="lion-image-container">
        <img className="lion-image" src={"./images/lion.png"} alt="lion" />
      </div>
    </footer>
  );
}

export default Footer;
