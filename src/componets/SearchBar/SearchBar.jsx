import React from "react";
import "./searchBar.css";
import filterIcon from "../../icons/filter.svg";
import searchIcon from "../../icons/search-status.svg";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="shop1-image-container">
        <img
          className="shop1-image"
          src={"./images/left_lion.png"}
          alt="shop 1"
        />
      </div>
      <div className="search-bar-body">
        <div className="logo">
          <img
            className="logo-image"
            src={"./images/logo2.png"}
            alt="AMS COMPANY"
          />
        </div>
        <div className="search-input-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
          />
          <div className="icons-container">
            <img src={filterIcon} className="icon" alt="icon filter" />
            <img
              src={searchIcon}
              className="icon icon-search"
              alt="icon search"
            />
          </div>
        </div>
      </div>
      <div className="shop2-image-container">
        <img
          className="shop2-image"
          src={"./images/right_lion.png"}
          alt="shop 2"
        />
      </div>
    </div>
  );
}
