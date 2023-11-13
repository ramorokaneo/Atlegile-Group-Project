import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignUp from "./Pages/UserSignUp/UserSignUp";
import MainAcc from "./Pages/MainAcc/MainAcc";
import AltContact from "./Pages/AltContact/AltContact";
import UserSignIn from "./Pages/UserSignIn";
import LandingScreen from "./Pages/LandingScreen";
import BusinessSignUp from "./Pages/BusinessSignUp";

function App() {
  return (
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
  );
}

export default App;
