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
import LearnZa from "../componets/LearnZa/LearnZa";
import TechWise from "../componets/TechWise/TechWise";
import MindMatters from "../componets/MindMatters/MindMatters";
function Landing() {
  return (
    <>
      <FollowUs />
      <Navbar />
      <SearchBar />
      <Explore />
      <SecureTech />
      <SaveBigHeader />
      <LearnZa />
      <TechWise />
      <SaveBigHeader />
      <MindMatters />
      <AfricaBusines />
      <Footer />
    </>
  );
}

export default Landing;
