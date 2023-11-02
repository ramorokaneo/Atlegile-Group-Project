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
                src="../images/logo2.png"
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
            <br/>
            <p className="email-text">atlegilemarketing.co.za</p>
          </div>
          <div className="footer-links">
            <h4 style={{marginBottom:30}}>ORDER HISTORY</h4>
            <h4 style={{marginBottom:30}}>TERMS & CONDITIONS</h4>
            <h4>PRIVACY POLICY</h4>
          </div>
        </div>
        <div className="company-section">
          <p className="company-text">
            Atlegile Marketing Solutions (Pty) Ltd eCommerce {" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
      <div className="lion-image-container">
        <img className="lion-image" src="../images/lion.png" alt="lion" />
      </div>
    </footer>
  );
}

export default Footer;
