import React from "react";
import "./secureTech.css";
import Card from "../Card/Card";
export default function SecureTech() {
  const techArray = [1, 2, 3, 4, 5];
  return (
    <div className="secureTech-container">
      <h2>SecureTech Solutions</h2>
      <div className="cards-container">
        {techArray.map((item) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}
