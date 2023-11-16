import React, { useState } from "react";
import "./MainAcc.css";
import { useNavigate } from "react-router-dom";
const logo = require("./Logo.png");

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

    navigate("/alt");
  };

  return (
    <div className="background-container">
      <div style={{ height: "100%", width: "70%" }}></div>
      <div
        style={{
          height: "100%",
          width: "30%",
          padding: 10,
        }}
      >
        <div style={{ height: "100%", backgroundColor: "white" }}>
          <div
            style={{
              width: "100%",
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="Logo" style={{ width: 250 }} />
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700 }}>
                  Main Account Holder
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 60,
                  paddingLeft: 60,
                  marginBottom: "10px",
                }}
              >
                <span style={{ fontSize: 25, fontWeight: 700 }}>
                  TELL US ABOUT YOURSELF
                </span>
              </div>
              <div
                style={{
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div style={{}}>
                    <span style={{ fontSize: 12 }}>Name</span>
                    <input
                      type="text"
                      placeholder="Jane"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ width: "90%" }}
                      required
                    />
                  </div>
                  <div style={{}}>
                    <span style={{ fontSize: 12 }}>Surname</span>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      style={{ width: "100%" }}
                      required
                    />
                  </div>
                </div>

                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Phone</span>
                  <input
                    type="text"
                    placeholder="0123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>

                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Gender</span>
                  <select
                    placeholder="Select gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ width: "100%" }}
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

                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Email</span>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>

                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Location</span>
                  <input
                    type="text"
                    placeholder="1235 Vilakazi Street, Orlando West, Seweto, 1804, South africa"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <div
                  onClick={handleSubmit}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#072840",
                    textAlign: "center",
                    marginTop: 20,
                    padding: 10,
                    fontWeight: 600,
                    color: "white",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  CONTINUE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAcc;
