import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import logo from "./Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./SignUp.css";

function UserSignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields before signing in.");
      return;
    }

    console.log("Form submitted:", { email, password });
    navigate("/mainacc");
  };

  const handleShop = () => {
    navigate("/landingscreen");
  };

  const handleBusinessSignUp = () => {
    navigate("/businesssignup");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {/* Your background container */}
        </div>
        <div className="col-md-4">
          <div className="background-container">
            <div style={{ backgroundColor: "white", display: "flex", flexDirection: "column" }}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={logo} alt="Logo" style={{ width: "100%" }} />
              </div>
              <div className="d-flex flex-column justify-content-between" style={{ padding: "0 20px" }}>
                <div>
                  <div className="d-flex justify-content-between">
                    <span className="font-weight-bold" style={{ fontSize: "1.5em" }}>SIGN UP</span>
                    <div className="d-flex align-items-center" style={{ cursor: "pointer" }} onClick={handleShop}>
                      <span style={{ fontSize: "0.75em", marginRight: 10 }}>SHOP</span>
                      <FaAngleRight size={10} color="#59b0f6" />
                    </div>
                  </div>
                  <div>
                    <br />
                    <div className="">
                      <span style={{ fontSize: "0.75em" }}>Email</span>
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
                      <span style={{ fontSize: "0.75em" }}>Password</span>
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
                  <div className="d-flex flex-column align-items-center justify-content-between" style={{ marginTop: 10 }}>
                    <a
                      href="/signinscreen"
                      className="font-weight-bold"
                      style={{ color: "#072840", fontSize: "0.75em" }}
                    >
                      ALREADY HAVE AN ACCOUNT?
                    </a>
                    <a
                      href="/"
                      className="d-flex align-items-center"
                      style={{
                        color: "#d32f2f",
                        fontSize: "0.75em",
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
