import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from './components/Register';
import UserSignUp from "./Components/UserSignUp/UserSignUp";
import MainAcc from "./Components/MainAcc/MainAcc";
import AltContact from "./Components/AltContact/AltContact";
import Sign_In_Screen from "./Components/Sign_In_Screen/Signinscreen";
import Landing from "./Pages/Landing/Landing";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
import Signinscreen from './Sign_In_Screen/Signinscreen';
// import LandingPageHeader from './LandingPageHeader/LandingPageHeader';
import React from "react";
// import UserSignUp from "./Pages/UserSignUp/UserSignUp";
// import MainAcc from "./Pages/MainAcc/MainAcc";
// import AltContact from "./Pages/AltContact/AltContact";
// import UserSignIn from "./Pages/UserSignIn";
// import LandingScreen from "./Pages/LandingScreen";
// import BusinessSignUp from "./Pages/BusinessSignUp";
// import React from "react";
// import WelcomeToAMS from "./Pages/welcomeToAMS";
// import "./Pages/welcome.css";
// import React from "react";
//import Footer from "./componets/Footer";
// import Routes from "./routes/Routes";
// import Landing from "./Pages/Landing/Landing";
// import AboutUs from "./Pages/AboutUs/AboutUs";
// import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AddPhoto from "./Components/BusinessRegistration/AddPhoto"
import Register from "./Components/BusinessRegistration/Register";


function App() {
  return (

    <>
      <Routes>
        {/* <Route path="/" element={<SignIn />} /> */}
        {/* <Route path="/Dashboard" element={<WelcomeToAMS/>} /> */}
        {/* <Route path="/Businesses" element={<ManageBusinesses/>} /> */}
        {/* <Route path="/mangeusers" element={<ManageUserScreen/>} />     */}
      </Routes>

    </>

  );
}

export default App;
