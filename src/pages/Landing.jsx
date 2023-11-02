// Footer.js
import React from "react";
import "./landing.css";
import Footer from "../componets/Footer/Footer";
import FollowUs from "../componets/FollowUs/FollowUs";
import SaveBigHeader from "../componets/SaveBigHeader/SaveBigHeader";
import AfricaBusines from "../componets/AfricaBusiness/AfricaBusines";
import Navbar from "../componets/NavBar/NavBar";
import SearchBar from "../componets/SearchBar/SearchBar";
import Explore from "../componets/Explore/Explore";
import SecureTech from "../componets/SecureTech/SecureTech";
function Landing() {
  return (
    <>
      <FollowUs />
      <Navbar />
      <SearchBar />
      <Explore />
      <SecureTech />
      <SaveBigHeader />
      <AfricaBusines />
      <Footer />
    </>
  );
}

export default Landing;
