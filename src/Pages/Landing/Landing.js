// Footer.js
import React from "react";
import Footer from "../../componets/Footer/Footer";
import FollowUs from "../../componets/FollowUs/FollowUs";
import SaveBigHeader from "../../componets/SaveBigHeader/SaveBigHeader";
import AfricaBusines from "../../componets/AfricaBusiness/AfricaBusines";
import Navbar from "../../componets/NavBar/NavBar";
import SearchBar from "../../componets/SearchBar/SearchBar";
import Explore from "../../componets/Explore/Explore";
import SecureTech from "../../componets/SecureTech/SecureTech";
import LearnZa from "../../componets/LearnZa/LearnZa";
import TechWise from "../../componets/TechWise/TechWise";
import MindMatters from "../../componets/MindMatters/MindMatters";
// import AboutUs from "../../componets/AboutUs/AboutUs";
function Landing() {
  return (
    <>
      <FollowUs />
      <Navbar />
      <SearchBar />
      <Explore />
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <SecureTech />
      </div>
      <SaveBigHeader />
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <LearnZa />
      </div>
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <TechWise />
      </div>
      <SaveBigHeader />
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <MindMatters />
      </div>
      <AfricaBusines />

      <Footer />
    </>
  );
}

export default Landing;