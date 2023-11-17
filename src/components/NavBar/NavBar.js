import React, { useState } from "react";
import "./NavBar.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchProfileData } from "../../hooks/useFetchUsers";
// import logo from "./your-logo.png"; // Import your logo image
// import { auth } from "../../firebase/firebase.config.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useAuth } from "../../hooks/";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { firebase, firestore } from "../../firebase/firebase.config";

const Navbar = () => {
  // const user = firebase.auth().currentUser;

  // const user = localStorage.getItem("user");
  const uid = localStorage.getItem("user");

  // // Parse the string into a JSON object
  // const user = JSON.parse(userString);
  // console.log("user : ", user);

  // Now 'user' is a JavaScript object
  const { userData } = useFetchProfileData(uid);
  console.log("userData : ", userData);
  console.log("uid : ", uid);
  // const [loggedIn,  setLoggedIn] = useState(false);
  // const user = firebase.auth().currentUser;
  // if (user) {
  //   setLoggedIn(true);
  // }
  // const navigate = useNavigate();
  // const checkAuth = () => {
  //   if (auth.currentUser) {
  //     return setLoggedIn(true);
  //   } else {
  //     return setLoggedIn(false);
  //   }
  // };
  // const userData = null;
  // const user = 15;
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
        {!uid ? (
          <div className="login">
            <Link to="/sign-in" className="btn-atlagile">
              Sign In
            </Link>
            <Link to="/sign-up" className="btn-atlagile">
              {" "}
              Sign Up
            </Link>
          </div>
        ) : (
          <>
            <div>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{
                  fontSize: "1.5em",
                  color: "black",
                  backgroundColor: "white",
                  padding: "12px",
                  marginLeft: "13px",
                  borderRadius: "50%",
                }}
                className="icon"
                onClick={() => alert("Go to Cart")}
              />
            </div>
            <div
              style={{
                width: "140px",
                height: "40px",
                alignItems: "flex-start",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                cursor: "pointer",
                //backgroundColor:'red'
              }}
              onClick={() => alert("Go to Profile")}
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
                <p
                  style={{
                    fontSize: "1.4rem",
                    color: "white",
                    padding: 10,
                    alignSelf: "center",
                  }}
                >
                  AS
                </p>
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
                    {userData?.name}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
