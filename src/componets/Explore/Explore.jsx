import React from "react";
import "./Explore.css";
export default function Explore() {
  return (
    <div className="explore-container">
      <h2>EXPLORE</h2>
      <div className="explore-circles-container">
        <div className="explore-circles">
          <div className="circle-one-container">
            <p>Buy</p>
          </div>
        </div>

        <div className=" explore-circles ">
          <div className="circle-one-container">
            <p>Sell</p>
          </div>
        </div>
        <div className="explore-circles">
          <div className="circle-one-container">
            <p>Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
