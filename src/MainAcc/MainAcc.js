import React from "react";
import "./MainAcc.css";

function UserSignUp() {
  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h3 className="main-acc">Main Account Holder</h3>
          <h2 className="yourself">TELL US ABOUT YOURSELF</h2>
          <form>
            <label>Name</label>
            <input
              type="text"
              placeholder="Jane"
              className="form-group"
              required
            />

            <label>Surname</label>
            <input
              type="text"
              placeholder="Doe"
              className="form-group"
              required
            />

            <label>Phone</label>
            <input
              type="text"
              placeholder="0123456789"
              className="form-group"
              required
            />

            <label>Gender</label>
            <input
              type="text"
              placeholder=""
              className="form-group"
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="form-group"
              required
            />

            <label>Location</label>
            <input
              type="text"
              placeholder="1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa"
              className="form-group"
              required
            />

            <button className="submit-button" type="submit">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
