import React from "react";
import AboutUs from "../../componets/AboutUs/AboutUs";
import Footer from "../../componets/Footer/Footer";
import FollowUs from "../../componets/FollowUs/FollowUs";
import Navbar from "../../componets/NavBar/NavBar";
// import SearchBar from "../../componets/SearchBar/SearchBar";
import NoSearchBar from "../../componets/NoSearchBar/NoSearchBar";

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
