// Footer.js
import React from "react";
import "./landing.css";
import Footer from "../componets/Footer/Footer";
import FollowUs from "../componets/FollowUs/FollowUs";
import SaveBigHeader from "../componets/SaveBigHeader/SaveBigHeader";
import AfricaBusines from "../componets/AfricaBusiness/AfricaBusines";
import Navbar from "../componets/NavBar/NavBar";
import SearchBar from "../componets/SearchBar/SearchBar";
function Landing() {
  return (
    <>
      <FollowUs />
      <Navbar />
      <SearchBar />
      <SaveBigHeader />
      <AfricaBusines />
      <Footer />
    </>
  );
}

export default Landing;
