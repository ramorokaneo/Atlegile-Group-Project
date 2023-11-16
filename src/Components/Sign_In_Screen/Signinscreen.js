import React, { useState } from "react";
import "./signinscreen.css";

import { FaGoogle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const logo = require("./cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png");

const Signinscreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email === "" || password === "") {
      console.log("Good");
    } else {
      console.log("Filling");
    }
  };
  const handleShop = () => {
    // Navigate to the /landingscreen route programmatically
    navigate("/landingscreen");
  };

  return (
    <div className="background">
      {/* <div className="flexbox-container">
                <div className="flexbox-item flexbox-item-1">
                    <img src={Logo} alt="Logo" className="logo" />
                    <h1 className="sign">Sign In</h1>
                    <div className="header">
                        {/* <h2 className="signIN">Sign IN</h2> 
                        <p className="shop" onClick={handleShop}>
                            SHOP
                            <FcNext />
                        </p>
                    </div>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} required className="sign-in-input" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="sign-in-input" />

                    <a href="#/" className="forgot-password-link">Forgot Password?</a>



                    <button type="submit" className="submit-button" onClick={handleSignIn} required>Sign In</button>


                    <a className="forgot-password" href="/">DONT HAVE AN ACCOUNT?</a>


                    <a href="https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followIN=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AVQVeyxNQ2A432r4bfY_nLZnSse1n4WLox8NOt3k4n4yU4mXFzdxmjwDpFI1rp9-wKRm_5qI3Xgc&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="Sign-with-google-link"><FcGoogle /> Sign In With Google</a>
                </div>
            </div> */}
      <div style={{ height: "100%", width: "70%" }}></div>
      <div
        style={{
          height: "100%",
          width: "30%",
          padding: 10,
        }}
      >
        <div style={{ height: "100%", backgroundColor: "white" }}>
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="Logo" style={{  }} />
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
              >
                <span style={{ fontSize: 25, fontWeight: 700 }}>SIGN IN</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleShop}
                >
                  <span
                    style={{ fontWeight: 700, fontSize: 12, marginRight: 10 }}
                  >
                    SHOP
                  </span>
                  <FaAngleRight size={12} color="#59b0f6" />
                </div>
              </div>

            <div
                style={{
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
            >
                <br />
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <br />
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 25,
                    paddingBottom: 25,
                  }}
                >
                  <a
                    href="http://localhost:3000/"
                    style={{
                      fontSize: 15,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    No Text
                  </a>
                  <a
                    href="http://localhost:3000/"
                    style={{
                      textDecoration: "none",
                      color: "#072840",
                      fontWeight: "500",
                      fontSize: 15,
                    }}
                  >
                    FORGOT PASSWORD?
                  </a>
                </div>
                <div
                  onClick={handleSignIn}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#072840",
                    textAlign: "center",
                    marginTop: 20,
                    padding: 10,
                    fontWeight: 600,
                    color: "white",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  SIGN IN
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "8vh",
                  paddingRight: 60,
                  paddingLeft: 60,
                  marginTop: 10,
                }}
              >
                <a
                  style={{ color: "#072840", fontSize: 12, fontWeight: 600 }}
                  href="/signinscreen"
                >
                  DON'T HAVE AN ACCOUNT?
                </a>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#d32f2f",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                  href="/"
                >
                  <FaGoogle
                    color="#d32f2f"
                    size={20}
                    style={{ marginRight: 5 }}
                  />{" "}
                  SIGN IN WITH GOOGLE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinscreen;
