import React, { useState } from "react";
import "./NavBar.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import logo from "./your-logo.png"; // Import your logo image
import { auth } from "../../firebase/firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useAuth } from "../../hooks/";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();
  // const checkAuth = () => {
  //   if (auth.currentUser) {
  //     return setLoggedIn(true);
  //   } else {
  //     return setLoggedIn(false);
  //   }
  // };

  return (
    <nav className="navbar-atlagile">
      <Link to="/" className="navbar-atlagile-logo">
        <img src="./images/logo.png" alt="Logo" />
      </Link>
      <div className="navbar-atlagile-buttons">
        <div className="more-info">
          <Link to="/shop" className="btn-atlagile">
            {" "}
            Shop
          </Link>
          <Link to="/about-us" className="btn-atlagile">
            {" "}
            About Us
          </Link>
        </div>
        {/* <div className="login">
          <Link to="/sign-in" className="btn-atlagile">
            Sign In
          </Link>
          <Link to="/sign-up" className="btn-atlagile">
            {" "}
            Sign Up
          </Link>
        </div> */}
        <div
          style={{
            width: "140px",
            height: "40px",
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            //backgroundColor:'red'
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "gray",
              borderRadius: "8%",
              //  paddingLeft:32
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <p style={{ fontSize: "1.4rem", color: "white" }}>AS</p>
          </div>
          <div
            style={{
              width: "100px",
              height: "40px",
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              //  backgroundColor: "brown",
            }}
          >
            <div
              style={{
                margin: 0,
                fontWeight: "medium",
              }}
            >
              <p
                style={{
                  paddingLeft: 10,
                  margin: 0,
                  fontSize: "1.2rem",
                  color: "black",
                }}
              >
                Welcome
              </p>
            </div>
            <div>
              <p
                style={{
                  paddingLeft: 10,
                  fontSize: "0.8rem",
                  margin: 0,
                  color: "black",
                }}
              >
                Jane
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
