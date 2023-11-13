import React, { useState } from "react";
import "./MainAcc.css";
import { useNavigate } from "react-router-dom";

function MainAcc() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!name || !surname || !phone || !gender || !email || !location) {
      alert("Please fill in all fields before continuing.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", {
      name,
      surname,
      phone,
      gender,
      email,
      location,
    });

    // Navigate to the /altcontact route programmatically
    navigate("/altcontact");
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
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="label-1">Surname</label>
              <input
                type="text"
                placeholder="Doe"
                className="form-group-1"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>

            <label className="label">Phone</label>
            <input
              type="text"
              placeholder="0123456789"
              className="form-group"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label className="label">Gender</label>
            <div className="gender-dropdown">
              <select
                className="form-group"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Location</label>
            <input
              type="text"
              placeholder="1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa"
              className="form-group"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
