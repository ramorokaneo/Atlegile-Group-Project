import React, { useState } from "react";
import "./AltContact.css";

function UserSignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name and phone are not empty
    if (name.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields before continuing.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", { name, phone });
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h2 className="alt-contact">ALTERNATIVE CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Jane"
              className="form-group"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Phone</label>
            <input
              type="text"
              placeholder="0123456789"
              className="form-group"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button className="submit-button" type="submit">
              CONTINUE
            </button>
          </form>
          <button className="not-now">NOT NOW</button>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;