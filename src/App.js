import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainAcc from "../src/Components/MainAcc/MainAcc";
import UserSignUp from "../src/Components/UserSignUp/UserSignUp";
import Signinscreen from "./Components/Sign_In_Screen/Signinscreen";
import Landing from "./Pages/Landing/Landing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddPhoto from "./Components/BusinessRegistration/AddPhoto";
import MarketingSupport from "./Components/BusinessRegistration/MarketingSupport";
import PaymentInfo from "./Components/BusinessRegistration/PaymentInfo";
import Register from "./Components/BusinessRegistration/Register";
import SalesGrowth from "./Components/BusinessRegistration/SalesGrowth";
import ProductServices from "./Components/ProductsServices/ProdServices";
import BusinessAccount from "./Pages/BusinessAccount/businessAccount";
import DeliveryDone from "./Pages/Delivery_Done/DeliveryDone";
import Messages from "./Pages/Message/Messages";
import OrderHistory from "./Pages/Order_History/OrderHistory";
import Reciept from "./Pages/Reciept/Reciept";
// import ProdServices from "./Components/ProductsServices/ProdServices";
// import BusinessAccount from "./pages/BusinessAccount/businessAccount"
// import DeliveryDone from "./pages/Delivery_Done/DeliveryDone";
// import Messages from "./pages/Message/Messages";
// import OrderHistory from "./pages/Order_History/OrderHistory";
// import Reciept from "./pages/Reciept/Reciept"
import AltContact from "./Components/AltContact/AltContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mainacc" element={<MainAcc />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/signinscreen" element={<Signinscreen />} />
        <Route path="/alt" element={<AltContact />} />
        <Route path="/addphoto" element={<AddPhoto />} />
        <Route path="/marketing" element={<MarketingSupport />} />
        <Route path="/paymentinfo" element={<PaymentInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/salesgrowth" element={<SalesGrowth />} />
        <Route path="/productservices" element={<ProductServices />} />
        <Route path="busaccount" element={<BusinessAccount />} />
        <Route path="/delivery" element={<DeliveryDone />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/order" element={<OrderHistory />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/rep" element={<Reciept />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
