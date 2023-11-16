import { useState } from "react";
import "./card.css"; // Create a CSS file for styling

import { Link } from "react-router-dom";
import downloadIcon from "../../assets/icons/download.svg";
import RightIcon from "../../assets/icons/icon-right.svg";

import downloadIcon from "../../icons/download.svg";
import RightIcon from "../../icons/icon-right.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRed } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import faCart from "../../assets/icons/shopping-cart.png";
import faCart from "../../icons/shopping-cart.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleHeart = () => {
    setIsRed((prevState) => !prevState);
  };
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
            <div className="card-icons">
              <FontAwesomeIcon
                icon={isRed ? faHeartRed : faHeart}
                style={{
                  fontSize: "1.5em",
                  color: isRed ? "red" : "black",
                  backgroundColor: "white",
                  padding: "12px",
                  marginLeft: "13px",
                  borderRadius: "50%",
                }}
                className="icon"
                onClick={toggleHeart}
              />

              {/* <FontAwesomeIcon
                icon={faCart}
                style={{
                  fontSize: "1.5em",
                  color: "black",
                  backgroundColor: "white",
                  padding: "12px",
                  marginLeft: "15px",
                  borderRadius: "50%",
                }}
                onClick={() => console.log("Cart Icon Clicked!!!")}
                className="icon"
              /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "1.5em",
                  width: "2em",
                  height: "2em",
                  color: "black",
                  backgroundColor: "white",
                  padding: "12px",
                  marginLeft: "15px",
                  borderRadius: "50%",
                }}
                className="faCart icon"
              >
                <img src={faCart} alt="" />
              </div>
            </div>
          </div>
          <p className="image-sale">sale</p>
        </div>
        <div className="content">
          <div className="header">
            <h2 className="title">English Department</h2>
            <div className="rating">⭐ 4.5</div>
          </div>
          <h1>Graphic Design</h1>
          <p className="card-description">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <p className="card-sales">
            <img src={downloadIcon} alt="download icon" />
            15 Sales
          </p>
          <p className="card-prices">
            $16.48<scan>$6.48</scan>
          </p>

          <Link
            to="/productdetails"
            // onClick={() => console.log("View Button Clicked!!!")}
            className="view-button"
          >
            VIEW <img src={RightIcon} className="right-icon" alt="right icon" />
          </Link>

          <button
            onClick={() => console.log("View Button Clicked!!!")}
            className="view-button"
          >
            VIEW <img src={RightIcon} className="right-icon" alt="right icon" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;
