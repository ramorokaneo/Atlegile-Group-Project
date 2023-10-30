import React from "react";
import "./AltContact.css";
// import { FcGoogle } from 'react-icons/fc';
// import { FcNext } from "react-icons/fc";

function UserSignUp() {
  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h2 className="alt-contact">ALTERNATIVE CONTACT</h2>
          <form>
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Jane" 
              className="form-group" 
            />

            <label>Phone</label>
            <input
              type="number"
              placeholder="0123456789"
              className="form-group"
            />

            {/* <div className="forgot-password">
            <a href="/">FORGOT PASSWORD?</a>
          </div> */}

            <button className="submit-button" type="submit">
              CONTINUE
            </button>

            {/* <div className="google-signin">
            <a href="/"><FcGoogle/> SIGN IN WITH GOOGLE</a>
          </div> */}
          </form>
          <button className="not-now">NOT NOW</button>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
