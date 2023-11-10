import React from "react";
import "./noSearchBar.css";
export default function NoSearchBar() {
  return (
    <div className="no-search-bar-container">
      <div className="no-search-bar-body">
        <div className="logo">
          <img
            className="logo-image"
            src={"./images/logo2.png"}
            alt="AMS COMPANY"
          />
        </div>
      </div>
      <div className="no-search-image-container">
        <img className="shop2-image" src={"./images/lion.png"} alt="shop 2" />
      </div>
    </div>
  );
}
