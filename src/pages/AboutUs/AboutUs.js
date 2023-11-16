import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";
import FollowUs from "../../Components/FollowUs/FollowUs";
import Navbar from "../../Components/NavBar/NavBar";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import NoSearchBar from "../../Components/NoSearchBar/NoSearchBar";

export default function AboutUsPage() {
  return (
    <>
      <FollowUs />
      <Navbar />
      {/* <SearchBar /> */}
      <NoSearchBar />
      <AboutUs />
      <Footer />
    </>
  );
}
