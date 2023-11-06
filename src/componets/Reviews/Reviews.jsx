import React from "react";
import star from "../../images/Vector.svg";
import star2 from "../../images/Vector_2.svg";
import "./reviews.css";
export default function Reviews() {
  return (
    <div className="reviews-container">
      <div className="stars-container">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star2} alt="star" />
      </div>
      <p className="card-description">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.We focus on ergonomics and meeting you where you work.
        It's only a keystroke away.
      </p>
      <h4>Regina Miles</h4>
      <p className="stars-container-text">Designer</p>
    </div>
  );
}
