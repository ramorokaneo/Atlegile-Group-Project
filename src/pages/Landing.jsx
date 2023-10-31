// Footer.js
import React from "react";
import "./landing.css";
import Footer from "../componets/Footer/Footer";
import Navbar from "../componets/NavBar/NavBar";
function Landing() {
  return (
    <>
      <Navbar />
      <div className="africa">
        <div className="africa-container">
          <div className="africa-hero">
            <div className="africa-body">
              <h1 className="africa-header">Africa's Business Support</h1>
              <p className="africa-header-text">
                High Impact Enter prise + Skills Development Solutions
              </p>
              <div className="africa-buttons">
                <button className="btn">SHOP</button>
                <button className="btn"> ABOUT US</button>
              </div>
            </div>
            <div className="africa-cards">
              <div className="card">
                <p className="card-text">SoWhereTo &gt; Township Business</p>
                <p className="card-text-btn">VIEW PROJECT</p>
              </div>
              <div className="card">
                <p className="card-text">SoWhereTo &gt; Youth Training</p>
                <p className="card-text-btn">VIEW PROJECT</p>
              </div>
              <div className="card">
                {" "}
                <p className="card-text">SoWhereTo &gt; @HUB Support</p>
                <p className="card-text-btn">VIEW PROJECT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop1-image-container">
          <img
            className="shop1-image"
            src={"./images/shop1.png"}
            alt="shop 1"
          />
        </div>
        <div className="shop2-image-container">
          <img
            className="shop2-image"
            src={"./images/shop2.png"}
            alt="shop 2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
