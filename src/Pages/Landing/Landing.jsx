// Footer.js
import React from "react";
import Footer from "../../Components/Footer/Footer";
import FollowUs from "../../Components/FollowUs/FollowUs";
import SaveBigHeader from "../../Components/SaveBigHeader/SaveBigHeader";
import AfricaBusines from "../../Components/AfricaBusiness/AfricaBusines";
import Navbar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Explore from "../../Components/Explore/Explore";
import SecureTech from "../../Components/SecureTech/SecureTech";
import LearnZa from "../../Components/LearnZa/LearnZa";
import TechWise from "../../Components/TechWise/TechWise";
import MindMatters from "../../Components/MindMatters/MindMatters";
// import AboutUs from "../../Components/AboutUs/AboutUs";
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
