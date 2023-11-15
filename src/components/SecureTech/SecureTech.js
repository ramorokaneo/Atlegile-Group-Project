import React from "react";
import "./secureTech.css";
import Card from "../Card/Card";
export default function SecureTech({ data }) {
  // const { firebaseProducts } = data;
  // const techArray = [1, 2, 3, 4, 5];
  console.log("data : ", data);

  return (
    <div className="secureTech-container">
      <h2>SecureTech Solutions</h2>
      <div className="cards-container">
        {data?.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
}
