import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { NotFound } from "./pages/NotFound";
// import Login from "./pages/Login";
// import PrivateRoute from "./pages/PrivateRoute";
// import Dashboard from "./components/App";
// import Register from "./pages/Register";
import AboutUsPage from "../pages/AboutUs/AboutUs";
import altContact from "../pages/AltContact/AltContact";
import BusinessAccount from "../pages/BusinessAccount/businessAccount";
import BusinessTech from "../pages/BusinessSecTech/businessAccount";
import DeliveryDone from "../pages/Delivery Done/DeliveryDone";
import Landing from "../pages/Landing/Landing";
import MainAcc from "../pages/MainAcc/MainAcc";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SignIN from "../pages/Sign_In_Screen/Signinscreen";
import UserSignUp from "../pages/UserSignUp/UserSignUp";
//import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  // const { email, password } = useSelector((state) => state.auth);
  //const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/signup" element={<UserSignUp />}>
          <Route path="contact" element={<altContact />} />
          <Route path="main" element={<MainAcc />} />
        </Route>
        <Route path="/register" element={<UserSignUp />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/business-account" element={<BusinessAccount />} />
        <Route path="/business-tech" element={<BusinessTech />} />
        <Route path="/delivery-done" element={<DeliveryDone />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/product-details" element={<ProductDetails />} />=
      </Routes>
    </BrowserRouter>
  );
};

export default App;
