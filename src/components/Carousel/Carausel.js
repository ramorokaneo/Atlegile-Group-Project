import React from "react";
import Slider from "./Slider";
import slides from "./mock.json";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Carausel({ images }) {
  return (
    <div>
      <Slider slides={images} />
    </div>
  );
}
