import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { firebase, firestore } from "../../config";

function UserSignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields before signing in.");
      return;
    }

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (userCredential.user) {
        console.log("User signed up:", userCredential.user);

        // Create a user document with the UID in the Users collection
        await firestore.collection("Users").doc(userCredential.user.uid).set({
          email: email,
        });

        // Navigate to "/mainacc" after successful sign-up
        navigate("/mainacc");
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Error signing up. Please try again.");
    }
  };

  const handleShop = () => {
    navigate("/landingscreen");
  };

  const handleBusinessSignUp = () => {
    navigate("/businesssignup");
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <div className="header">
            <h2 className="signUp">Sign Up</h2>
            <p className="shop" onClick={handleShop}>
              SHOP <FcNext />
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

            <div className="forgot-password">
              <a href="/usersignin">ALREADY HAVE AN ACCOUNT?</a>
            </div>

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
