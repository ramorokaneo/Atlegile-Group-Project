<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from './components/Register';
import UserSignUp from "./Components/UserSignUp/UserSignUp";
import MainAcc from "./Components/MainAcc/MainAcc";
import AltContact from "./Components/AltContact/AltContact";
import Sign_In_Screen from "./Components/Sign_In_Screen/Signinscreen";
import Landing from "./Pages/Landing/Landing";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
=======
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signinscreen from './Sign_In_Screen/Signinscreen';
// import LandingPageHeader from './LandingPageHeader/LandingPageHeader';
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignUp from "./Pages/UserSignUp/UserSignUp";
import MainAcc from "./Pages/MainAcc/MainAcc";
import AltContact from "./Pages/AltContact/AltContact";
import UserSignIn from "./Pages/UserSignIn";
import LandingScreen from "./Pages/LandingScreen";
import BusinessSignUp from "./Pages/BusinessSignUp";
>>>>>>> origin/Tlhogi
=======
import React from "react";
import WelcomeToAMS from "./Pages/welcomeToAMS";
import "./Pages/welcome.css";
>>>>>>> origin/Mahlatse



>>>>>>> origin/Mbali
function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* <Route path='/' element={<Register />} /> */}
        <Route path="/" element={<UserSignUp />} />
        <Route path="/mainacc" element={<MainAcc />} />
        <Route path="/altcontact" element={<AltContact />} />
        <Route path="/signinscreen" element={<Sign_In_Screen />} />
        <Route path="/landingscreen" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/productdetails" element={<ProductDetails />} />
=======
        <Route path="/" element={<Signinscreen />} />
        {/* <Route path="/" element={<LandingPageHeader/>}/>  */}
>>>>>>> origin/Mbali
      </Routes>
    </BrowserRouter>
=======
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserSignUp />} />
          <Route path="/mainacc" element={<MainAcc />} />
          <Route path="/altcontact" element={<AltContact />} />
          <Route path="/usersignin" element={<UserSignIn />} />
          <Route path="/landingscreen" element={<LandingScreen />} />
          <Route path="/businesssignup" element={<BusinessSignUp />} />
        </Routes>
      </div>
    </Router>
>>>>>>> origin/Tlhogi
=======
    <div>
      <WelcomeToAMS />
    </div>
>>>>>>> origin/Mahlatse
  );
}

export default App;
