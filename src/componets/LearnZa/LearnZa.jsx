import React from "react";
import "./learnZa.css";
import Card from "../Card/Card";
export default function SecureTech() {
  const techArray = [1, 2, 3, 4, 5];
  return (
    <div className="secureTech-container">
      <h2>LearnZA</h2>
      <div className="cards-container">
        {techArray.map((item) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}
