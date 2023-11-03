// App.js
import React from "react";
//import Footer from "./componets/Footer";
import "./App.css"; // Import your CSS file
import Landing from "./pages/Landing";
import AboutUsPage from "./pages/AboutUs";

function App() {
  return (
    <div className="app">
      {/* Your main content here */}
      <Landing />
      {/* <AboutUsPage /> */}
    </div>
  );
}

export default App;
