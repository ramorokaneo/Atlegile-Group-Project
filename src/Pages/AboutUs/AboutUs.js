import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import FollowUs from "../../components/FollowUs/FollowUs";
import Navbar from "../../components/NavBar/NavBar";
// import SearchBar from "../../components/SearchBar/SearchBar";
import NoSearchBar from "../../components/NoSearchBar/NoSearchBar";

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
