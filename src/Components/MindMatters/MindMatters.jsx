import React from "react";
import "./mindMatters.css";
import Card from "../Card/Card";
export default function SecureTech() {
  const techArray = [1, 2, 3];
  return (
    <div className="secureTech-container">
      <h2>MindMatters Publications</h2>
      <div className="cards-container">
        {techArray.map((item) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}
