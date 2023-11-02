import React from "react";
import "./AfricaBusines.css";

export default function AfricaBusines() {
  return (
    <div>
      <div className="africa">
        <div className="africa-container">
          <div className="africa-hero">
            <div className="africa-body">
              <h1 className="africa-header">Africa's Business Support</h1>
              <p className="africa-header-text">
                High Impact Enter prise + Skills Development Solutions
              </p>
              <div className="africa-buttons">
                <a href="/shop" className="btn-link">
                  <div className="btn btn-shop">SHOP</div>
                </a>
                <a href="/about-us" className="btn-link">
                  <div className="btn ">ABOUT US</div>
                </a>
              </div>
            </div>
            <div className="africa-cards">
              <div className="card">
                <p className="card-text">SoWhereTo &gt; Township Business</p>
                <a href="/viewProject" className="card-text-btn">
                  VIEW PROJECT
                </a>
              </div>
              <div className="card">
                <p className="card-text">SoWhereTo &gt; Youth Training</p>
                <a href="/viewProject" className="card-text-btn">
                  VIEW PROJECT
                </a>
              </div>
              <div className="card">
                {" "}
                <p className="card-text">SoWhereTo &gt; @HUB Support</p>
                <a href="/viewProject" className="card-text-btn">
                  VIEW PROJECT
                </a>
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
    </div>
  );
}
