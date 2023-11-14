import "./App.css";
<<<<<<< HEAD
import SignIn from "./Pages/Sign In/signIn";
import ManageBusinesses from "./Pages/Manage Businesses/manageBusinesses";
import BusinessAccount from "./Pages/Business Account/businessAccount";
import Footer from "./components/Footer/Footer";
import Favourite from "./Pages/Favourites/favourites";

function App() {
  return (
    <>
      {/* <SignIn/>
      <ManageBusinesses/> */}
      <BusinessAccount />
      <Footer />
    </>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from './components/Register';
import UserSignUp from "./Components/UserSignUp/UserSignUp";
import MainAcc from "./Components/MainAcc/MainAcc";
import AltContact from "./Components/AltContact/AltContact";
import Sign_In_Screen from "./Components/Sign_In_Screen/Signinscreen";
import Landing from "./Pages/Landing/Landing";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Register />} /> */}
        <Route path="/" element={<UserSignUp />} />
        <Route path="/mainacc" element={<MainAcc />} />
        <Route path="/altcontact" element={<AltContact />} />
        <Route path="/signinscreen" element={<Sign_In_Screen />} />
        <Route path="/landingscreen" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
>>>>>>> e41507744b41264a348eb3853695020425abcbbc
  );
}

export default App;
