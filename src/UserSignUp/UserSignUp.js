import React from "react";
import "./SignUp.css";
import { FcGoogle } from 'react-icons/fc';
import { FcNext } from "react-icons/fc";

function UserSignUp() {
  return (
    <div className="background-container">
      <div className="form-container">
       <div className="form-item form-items">
        <img src="./logo.png" alt="Logo" className="logo" />
        <h2 className="signUp">Sign Up</h2>
        <form>

            <label>Email</label>
            <input 
              type="email" 
              placeholder="" 
              className="form-group" 
            />

            <label>Password</label>
            <input 
              type="password" 
              placeholder="" 
              className="form-group" 
            />
          

          <div className="forgot-password">
            <a href="/">FORGOT PASSWORD?</a>
          </div>

          <button className="submit-button" type="submit">SIGN IN</button>

          <div className="google-signin">
            <a href="/"><FcGoogle/> SIGN IN WITH GOOGLE</a>
          </div>

        </form>
        <button className="signup-business">SIGN UP AS A BUSINESS <FcNext/></button>
      </div>
      </div>
    </div>
  );
}

export default UserSignUp;
