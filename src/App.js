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



>>>>>>> origin/Mbali
function App() {
  return (
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
  );
}

export default App;
