import React from "react";
<<<<<<< HEAD
import Footer from "../../components/Footer/Footer";
import FollowUs from "../../components/FollowUs/FollowUs";
import SaveBigHeader from "../../components/SaveBigHeader/SaveBigHeader";
import AfricaBusines from "../../components/AfricaBusiness/AfricaBusines";
import Navbar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Explore from "../../components/Explore/Explore";
import SecureTech from "../../components/SecureTech/SecureTech";
import LearnZa from "../../components/LearnZa/LearnZa";
import TechWise from "../../components/TechWise/TechWise";
import MindMatters from "../../components/MindMatters/MindMatters";
import AboutUs from "../../components/AboutUs/AboutUs";
=======
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
// import AboutUs from "../../components/AboutUs/AboutUs";
>>>>>>> 1669cffafd760f347c9d0dad678c9d9f6edd748f
import { useFetchProducts } from "../../hooks/useFetchProducts";
function Landing() {
  const { firebaseProducts } = useFetchProducts();
  console.log("firebase Products : ", firebaseProducts);
  return (
    <>
      <FollowUs />
      <Navbar />
      <SearchBar />
      <Explore />
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <SecureTech data={firebaseProducts} />
      </div>
      <SaveBigHeader />
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <LearnZa data={firebaseProducts} />
      </div>
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <TechWise data={firebaseProducts} />
      </div>
      <SaveBigHeader />
      <div
        style={{ paddingLeft: "20vw", display: "flex", alignItems: "center" }}
      >
        <MindMatters data={firebaseProducts} />
      </div>
      <AfricaBusines />

      <Footer />
    </>
  );
}

export default Landing;
