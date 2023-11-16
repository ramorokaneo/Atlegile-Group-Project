import React from "react";
import "./learnZa.css";
import Card from "../Card/Card";
export default function SecureTech({ data }) {
  // const techArray = [1, 2, 3];
  return (
    <div className="secureTech-container">
      <h2>LearnZA</h2>
      <div className="cards-container">
        {data?.slice(0, 3)?.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
}
