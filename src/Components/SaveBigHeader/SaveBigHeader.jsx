import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./saveBigHeader.css";
export default function SaveBigHeader() {
  return (
    <div className="big-save-header-container">
      {/* <FontAwesomeIcon icon={faPhone} /> */}
      <div className="big-save-header-body">
        <div className="arrow-left-container">
          <div className="icons arrow-left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          {/* <div className="arrow"></div> */}
          <div className="big-save-header-body-text">
            <h4>Exclusive Offer : Save Big Today!</h4>
            <p className="smart-tv-text">Ultra HD Smart TV</p>
            <p>
              <scan className="gold-price">R1699.99</scan>R1899.99
            </p>
          </div>
        </div>

        <div className="icons arrow-right">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}
