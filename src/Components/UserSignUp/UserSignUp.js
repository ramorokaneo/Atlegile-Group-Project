import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import logo from "./Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUp.css";

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
    navigate("/landingscreen");
  };

  const handleBusinessSignUp = () => {
    // Navigate to the /businesssignup route programmatically
    navigate("/businesssignup");
  };

  return (
    <div className="container-fluid" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="row">
        <div className="col-md-8">
          {/* Your background container */}
        </div>
        <div className="col-md-4" style={{ padding: 10 }}>
          <div className="background-container" style={{ height: "100vh" }}>
            <div style={{ height: "100%", backgroundColor: "white", display: "flex", flexDirection: "column" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ height: "50%" }}>
                <img src={logo} alt="Logo" style={{ width: 250 }} />
              </div>
              <div className="d-flex flex-column justify-content-between" style={{ height: "50%", padding: "0 20px" }}>
                <div>
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold" style={{ fontSize: 25 }}>SIGN UP</span>
                    <div className="d-flex align-items-center" style={{ cursor: "pointer" }} onClick={handleShop}>
                      <span style={{ fontSize: 12, marginRight: 10 }}>SHOP</span>
                      <FaAngleRight size={10} color="#59b0f6" />
                    </div>
                  </div>
                  <div>
                    <br />
                    <div className="">
                      <span style={{ fontSize: 12 }}>Email</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <br />
                    <div className="">
                      <span style={{ fontSize: 12 }}>Password</span>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div
                      onClick={handleSubmit}
                      className="btn btn-primary mt-4"
                    >
                      SIGN UP
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-between" style={{ height: "8vh", marginTop: 10 }}>
                    <a
                      href="/signinscreen"
                      className="font-weight-bold"
                      style={{ color: "#072840", fontSize: 12 }}
                    >
                      ALREADY HAVE AN ACCOUNT?
                    </a>
                    <a
                      href="/"
                      className="d-flex align-items-center"
                      style={{
                        color: "#d32f2f",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      <FaGoogle color="#d32f2f" size={20} style={{ marginRight: 5 }} />
                      SIGN UP WITH GOOGLE
                    </a>
                  </div>
                </div>

                <div>
                  <div
                    onClick={handleBusinessSignUp}
                    className="btn btn-outline-primary mb-4"
                  >
                    SIGN UP AS A BUSINESS <FaAngleRight size={10} color="#59b0f6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
