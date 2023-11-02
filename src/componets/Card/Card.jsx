import React from "react";
import "./card.css"; // Create a CSS file for styling
import downloadIcon from "../../icons/download.svg";
import RightIcon from "../../icons/icon-right.svg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="image-container">
          <div className="circular-image-div">
            <img
              className="circular-image"
              src={"./images/headsets.png"}
              alt="shop 2"
            />
          </div>
        </div>
        <div className="content">
          <div className="header">
            <h2 className="title">English Department</h2>
            <div className="rating">⭐ 4.5</div>
          </div>
          <h1>Graphic Design</h1>
          <p className="description">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <p>
            <img src={downloadIcon} alt="download icon" />
            15 Sales
          </p>
          <p>
            <scan>$16.48</scan>$6.48
          </p>
          <button className="view-button">
            View <img src={RightIcon} alt="right icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
