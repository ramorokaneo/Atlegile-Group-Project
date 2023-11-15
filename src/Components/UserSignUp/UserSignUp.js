import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
const logo = require("./Logo.png");
//const backgroundImage = require("./bg-img.jpg")

function UserSignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields before signing in.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", { email, password });

    // Navigate to the /mainacc route programmatically
    navigate("/mainacc");
  };
  const handleShop = () => {
    // Navigate to the /landingscreen route programmatically
    navigate("/landingscreen");
  };

  const handleBusinessSignUp = () => {
    // Navigate to the /businesssignup route programmatically
    navigate("/businesssignup");
  };

  return (
    <div
      // style={{
      //   width: "100%",
      //   height: "100%",
      //   backgroundImage: require('./bg-img.jpg'),
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="background-container"
    >
      <div className="form-container">
        <div className="form-item form-items">
          <img src={logo} alt="Logo" />
          <div className="header">
            <h2 className="signUp">Sign Up</h2>
            <p className="shop" onClick={handleShop}>
              SHOP
              <FcNext />
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="label">Email</label>
            <input
              type="email"
              placeholder=""
              className="form-group"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              placeholder=""
              className="form-group"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="submit-button" type="submit">
              SIGN UP
            </button>

            <a className="forgot-password" href="/signinscreen">
              ALREADY HAVE AN ACCOUNT?
            </a>

            <div className="google-signin">
              <a href="/">
                <FcGoogle /> SIGN IN WITH GOOGLE
              </a>
            </div>
          </form>
          <button className="signup-business" onClick={handleBusinessSignUp}>
            SIGN UP AS A BUSINESS <FcNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
