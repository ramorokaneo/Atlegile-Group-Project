import React, { useState } from "react";
import "./AltContact.css";
import { useNavigate } from "react-router-dom";
import { firebase } from "../../config";

function UserSignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields before continuing.");
      return;
    }

    try {
  
      const firestore = firebase.firestore();

      await firestore.collection("users").add({
        alternativeContact: {
          name,
          phone,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
        },
      });

      console.log("Alternative contact information submitted to 'users' collection in Firestore.");

      navigate("/landingscreen");
    } catch (error) {
   
      console.error("Error submitting alternative contact information:", error.message);
      alert("Error submitting alternative contact information. Please try again.");
    }
  };

  const handleNotNow = () => {
   
    console.log("Not Now button clicked");

  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h2 className="alt-contact">ALTERNATIVE CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Jane"
              className="form-group"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="label">Phone</label>
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

          <button className="not-now" onClick={handleNotNow}>
            NOT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
