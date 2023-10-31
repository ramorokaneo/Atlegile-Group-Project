import React, { useState } from "react";
import "./SignUp.css";
import { FcGoogle } from 'react-icons/fc';
import { FcNext } from "react-icons/fc";

function UserSignUp() {
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
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h2 className="signUp">Sign Up</h2>
          <form onSubmit={handleSubmit}>

            <label>Email</label>
            <input 
              type="email" 
              placeholder="" 
              className="form-group" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input 
              type="password" 
              placeholder="" 
              className="form-group" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="forgot-password">
              <a href="/">FORGOT PASSWORD?</a>
            </div>

            <button className="submit-button" type="submit">SIGN IN</button>

            <div className="google-signin">
              <a href="/"><FcGoogle /> SIGN IN WITH GOOGLE</a>
            </div>

          </form>
          <button className="signup-business" onClick={() => console.log("Sign up as a business clicked!")}>SIGN UP AS A BUSINESS <FcNext /></button>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
