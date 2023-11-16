import React, { useState } from "react";
import "./MainAcc.css";
import { useNavigate } from "react-router-dom";
import { firebase, firestore } from "../../config";

function MainAcc() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const user = firebase.auth().currentUser
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !phone || !gender || !email || !location) {
      alert("Please fill in all fields before continuing.");
      return;
    }

    try {
      const userRef = firestore.collection("Users").doc(user.uid);

      await userRef.set({
        name,
        surname,
        phone,
        gender,
        email,
        location,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user.uid
      });

      console.log("User information submitted to Users collection in Firestore.");

      navigate("/altcontact");
    } catch (error) {
      console.error("Error submitting user information:", error.message);
      alert("Error submitting user information. Please try again.");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h3 className="main-acc">Main Account Holder</h3>
          <h2 className="yourself">TELL US ABOUT YOURSELF</h2>
          <form onSubmit={handleSubmit}>
            <div className="fullname">
              <label className="label-1">Name</label>
              <input
                type="text"
                placeholder="Jane"
                className="form-group-1"
                value={name}
                onChange={handleNameChange}
                required
              />

              <label className="label-1">Surname</label>
              <input
                type="text"
                placeholder="Doe"
                className="form-group-1"
                value={surname}
                onChange={handleSurnameChange}
                required
              />
            </div>

            <label className="label">Phone</label>
            <input
              type="text"
              placeholder="0123456789"
              className="form-group"
              value={phone}
              onChange={handlePhoneChange}
              required
            />

            <label className="label">Gender</label>
            <div className="gender-dropdown">
              <select
                className="form-group"
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <label className="label">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="form-group"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label className="label">Location</label>
            <input
              type="text"
              placeholder="1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa"
              className="form-group"
              value={location}
              onChange={handleLocationChange}
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

export default MainAcc;
