// atlegile-Footer.js
import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="atlegile-footer">
      <div className="atlegile-footer-container">
        <div className="atlegile-footer-hero">
          <div className="atlegile-footer-body">
            <div className="atlegile-footer-logo">
              <img
                className="atlegile-footer-logo-image"
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
            <p className="atlegile-footer-email-text">
              atlegilemarketing.co.za
            </p>
          </div>
          <div className="atlegile-footer-links">
            <a href="/order-history">
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
        <div className="atlegile-footer-company-section">
          <p className="atlegile-footer-company-text">
            Atlegile Marketing Solutions (Pty) Ltd eCommerce &nbsp;
            {new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
      <div className="atlegile-footer-lion-image-container">
        <img
          className="atlegile-footer-lion-image"
          src={"./images/lion.png"}
          alt="lion"
        />
      </div>
    </footer>
  );
}

export default Footer;
