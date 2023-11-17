import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
const logo = require("./Logo.png");

function UserSignUp() {
  const navigate = useNavigate();
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

    // Navigate to the /mainacc route programmatically
    navigate("/mainacc");
  };
  const handleShop = () => {
    // Navigate to the /landingscreen route programmatically
    navigate("/");
  };

  const handleBusinessSignUp = () => {
    // Navigate to the /businesssignup route programmatically
    navigate("/register");
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
              height: "51vh",

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
                  marginBottom: "10px",
                }}
              >
                <span style={{ fontSize: 25, fontWeight: 700 }}>SIGN UP</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleShop}
                >
                  <span style={{ fontSize: 12, marginRight: 10 }}>SHOP</span>
                  <FaAngleRight size={10} color="#59b0f6" />
                </div>
              </div>
              <div
                style={{
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
              >
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  SIGN UP
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
                  ALREADY HAVE AN ACCOUNT?
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
                  <FaGoogle
                    color="#d32f2f"
                    size={20}
                    style={{ marginRight: 5 }}
                  />{" "}
                  SIGN UP WITH GOOGLE
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
                onClick={handleBusinessSignUp}
                style={{
                  borderRadius: 20,
                  border: "1px #072840 solid",
                  textAlign: "center",
                  marginBottom: 20,
                  padding: 5,
                  fontWeight: 600,
                  fontSize: 12,
                  cursor: "pointer",
                  marginTop: "130px",
                }}
              >
                SIGN UP AS A BUSINESS <FaAngleRight size={10} color="#59b0f6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
