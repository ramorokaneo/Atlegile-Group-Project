import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import ProductDetail from "../../Components/ProductDetails/ProductDetail";

import { useFetchProducts } from "../../hooks/useFetchProducts";

export default function ProductDetails() {
  const { firebaseProducts } = useFetchProducts();
  console.log("firebase Products : ", firebaseProducts);

  return (
    <>
      <Navbar />
      <ProductDetail firebaseProducts={firebaseProducts} />
    </>
  );
}
