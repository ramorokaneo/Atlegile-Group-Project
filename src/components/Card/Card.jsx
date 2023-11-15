import { useState } from "react";
import "./card.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import downloadIcon from "../../icons/download.svg";
import RightIcon from "../../icons/icon-right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRed } from "@fortawesome/free-solid-svg-icons";

// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import faCart from "../../icons/shopping-cart.png";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Card = ({ item }) => {
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
              src={item?.imageUrls[0]}
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
            <h2 className="title">{item?.productType}</h2>
            <div className="rating">⭐ 4.5</div>
          </div>
          <h1>{item?.productName}</h1>
          <p className="card-description">
            {item?.description.slice(0, 110)}...
          </p>
          <p className="card-sales">
            <img src={downloadIcon} alt="download icon" />0 Sales
          </p>
          <p className="card-prices">
            <scan> R{item?.price}</scan>
          </p>
          <Link
            to="/product-details"
            onClick={() => console.log("View Button Clicked!!!")}
            className="view-button"
          >
            VIEW <img src={RightIcon} className="right-icon" alt="right icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
