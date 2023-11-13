import React from "react";
import Carausel from "../Carousel/Carausel";
import "./productDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import MindMatters from "../MindMatters/MindMatters";
import circle from "../../images/circle.svg";
import Reviews from "../Reviews/Reviews";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import star from "../../images/Vector.svg";
import star2 from "../../images/Vector_2.svg";

export default function ProductDetail() {
  const [quantity, setQuantity] = React.useState(1);
  const reviewsArr = [1, 2, 3];
  const handleIncrease = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };
  const handleDecrease = () => {
    if (quantity < 1) {
      return 0;
    } else
      setQuantity((prev) => {
        return prev - 1;
      });
  };
  return (
    <div className="Product-details-container">
      <div className="Product-details-container-body">
        <div className="header-container">
          <p>HOME /&nbsp;</p>
          <p>VAAS /&nbsp;</p>
          <p className="digital-text">Digital Marketing Course</p>
        </div>
        <div className="Product-details-body">
          <div className="Product-details-body-left">
            <Carausel />
          </div>
          <div className="Product-details-body-right">
            <div className="Product-details-body-right-top">
              <h1 className="Product-details-header">
                Digital Marketing Course
              </h1>
              <p className="Product-details-desc">
                An in-depth online course covering digital marketing strategies
                and techniques.
              </p>
              <p className="Product-details-price">R1500</p>
              <p className="Product-details-quantity">Quantity</p>
              <div className="Product-details-counter-container">
                <div className="Product-details-counter">
                  <div
                    className="Product-details-icons"
                    onClick={handleDecrease}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <p>{quantity}</p>
                  <div
                    className="Product-details-icons"
                    onClick={handleIncrease}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <button className="add-to-cart-btn">Add to cart</button>
              </div>
            </div>
            <div className="digital-product">
              <div className="background-red"></div>
              <div>
                <img src={circle} alt="digital-produt-cicle" />
              </div>
              <div>
                <h4>Digital Product</h4>
                <p>
                  Please note that you will receive this product in your email
                </p>
              </div>
            </div>
            <div className="Product-details-reviews">
              <h2>Reviews </h2>
              <div className="">
                {reviewsArr.map(() => {
                  return <Reviews />;
                })}
              </div>
            </div>
            <div className="Product-details-pagination-container">
              <div className="Product-details-pagination">
                <FontAwesomeIcon icon={faChevronLeft} />
                <p>1 </p>
                <p>2</p>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <div className="add-review-container">
              <div className="add-review-stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star2} alt="" />
                <img src={star2} alt="" />
              </div>
              <input type="text" placeholder="Write a review..." required />
              <button className="add-review-btn">Review</button>
            </div>
            <p className="floating-display">Physical</p>
          </div>
        </div>
        <div className="related-products-container">
          <h1>Related Products</h1>
          <div className="mind-mattters-containers">
            <MindMatters />
          </div>
          <div className="mind-mattters-containers">
            <MindMatters />
          </div>
        </div>
      </div>
    </div>
  );
}
