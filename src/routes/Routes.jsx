import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { NotFound } from "./pages/NotFound";
// import Login from "./pages/Login";
// import PrivateRoute from "./pages/PrivateRoute";
// import Dashboard from "./components/App";
// import Register from "./pages/Register";
import AboutUsPage from "../Pages/AboutUs/AboutUs";
import altContact from "../Pages/AltContact/AltContact";
import BusinessAccount from "../Pages/BusinessAccount/businessAccount";
import BusinessTech from "../Pages/BusinessSecTech/businessAccount";
import DeliveryDone from "../Pages/Delivery Done/DeliveryDone";
import Landing from "../Pages/Landing/Landing";
import MainAcc from "../Pages/MainAcc/MainAcc";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import SignIN from "../Pages/Sign_In_Screen/Signinscreen";
import UserSignUp from "../Pages/UserSignUp/UserSignUp";
//import { useSelector } from "react-redux";
import OrderHistory from "../Pages/Order History/OrderHistory";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  // const { email, password } = useSelector((state) => state.auth);
  //const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIN />} />
        <Route path="/sign-up" element={<UserSignUp />}></Route>
        <Route path="/contact" element={<altContact />} />
        <Route path="/main" element={<MainAcc />} />
        {/* <Route path="/register" element={<UserSignUp />} /> */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/business-account" element={<BusinessAccount />} />
        <Route path="/business-tech" element={<BusinessTech />} />
        <Route path="/delivery-done" element={<DeliveryDone />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
