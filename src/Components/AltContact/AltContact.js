import React, { useState } from "react";
import "./AltContact.css";
import { useNavigate } from "react-router-dom";
const logo = require("./Logo.png");

function AltContact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields before continuing.");
      return;
    }

    console.log("Form submitted:", { name, phone });

    navigate("/");
  };

  const handleNotNow = () => {
    alert("Thank you for signing up");


    navigate("/usersignup");
  };

  return (
    <div
      className="background-container"
    >
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
              height: "50vh",
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
                <span style={{ fontSize: 25, fontWeight: 700 }}>ALTERNATIVE CONTACT</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <span style={{fontSize: 12, marginRight: 10 }}></span>
                  
                </div>
              </div>
              <div
                style={{
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
              >
                <br />
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Name</span>
                  <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <br />
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Phone</span>
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "8vh",
                  paddingRight: 60,
                  paddingLeft: 60,
                  marginTop: 10,
                }}
              >
                <a
                  style={{ color: "#072840", fontSize: 12, fontWeight: 600 }}
                  href="/signinscreen"
                >
                
                </a>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#d32f2f",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                  href="/"
                >
                
                </a>
              </div>
            </div>

            <div
              style={{
                paddingRight: 60,
                paddingLeft: 60,
              }}
            >
              <div
                onClick={handleNotNow}
                style={{
                  borderRadius: 20,
                  border: "1px #072840 solid",
                  textAlign: "center",
                  marginBottom: 20,
                  padding: 5,
                  fontWeight: 600,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                NOT NOW 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AltContact;