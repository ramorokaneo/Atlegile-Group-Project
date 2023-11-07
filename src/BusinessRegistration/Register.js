import React, { useState } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./form.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const selectRole = (role) => {
    setSelectedRole(role);
  };

  const selectBusinessType = (businessType) => {
    setSelectedBusinessType(businessType);
  };

  const selectIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  const emptyOption = [""];

  const roleOptions = [
    ...emptyOption,
    "Graphic Designer",
    "Data Entry Specialist",
    "Project Manager",
    "Software Engineer",
    "Marketing Specialist",
    "Sales Manager",
    "Accountant",
    "HR Manager",
    "Content Writer",
    "Customer Support Specialist",
    "Product Manager",
    "Financial Analyst",
    "UI/UX Designer",
    "Network Administrator",
    "Legal Counsel",
    "Business Analyst",
    "Quality Assurance Engineer",
    "Data Scientist",
    "Operations Manager",
    "Research Scientist",
  ];

  const businessTypeOptions = [
    ...emptyOption,
    "Sole Proprietorship",
    "Partnership",
    "Online Business",
    "Limited Liability Company (LLC)",
    "Corporation",
    "Cooperative",
    "Franchise",
    "Nonprofit Organization",
    "Joint Venture",
    "S Corporation",
    "Trust",
    "Limited Partnership (LP)",
    "General Partnership",
    "Limited Liability Partnership (LLP)",
    "B Corporation",
    "Sole Proprietorship",
    "Freelancer or Independent Contractor",
    "Home-Based Business",
    "Retail Business",
    "E-commerce Business",
  ];

  const industryOptions = [
    ...emptyOption,
    "Technology",
    "Energy",
    "Telecommunications",
    "Healthcare",
    "Finance",
    "Education",
    "Entertainment",
    "Manufacturing",
    "Retail",
    "Transportation",
    "Agriculture",
    "Real Estate",
    "Hospitality",
    "Construction",
    "Automotive",
    "Media",
    "Aerospace",
    "Biotechnology",
    "Pharmaceutical",
    "Fashion",
  ];

  return (
    <div className="background">
      <div className="image-card">
        <div className="text-container">
          <h4 style={{ color: "orange" }}>For business</h4>
          <h1 style={{ color: "white" }}>Increased visibility</h1>
          <h4 style={{ color: "white" }}>
            Reach a wider audience and gain exposure to potential clients
          </h4>
        </div>
      </div>

      <div className="card">
        <div className="logo-container">
          <img
            src={logo}
            width={110}
            height={50}
            style={{
              justifyContent: "center",
              paddingTop: 120,
            }}
            alt="Logo"
          />
        </div>

        <div className="textInput-container">
          <form>
            <h3>BUSINESS REGISTRATION</h3>

            <div className="group textInput-container">
              <input type="text" required />
              <label>Business Name</label>
            </div>

            <div className="group textInput-container select-role">
              {selectedRole ? null : (
                <label style={{ marginRight: "20px", minWidth: "200px" }}>Role</label>
              )}
              <div className="dropdown">
                <div className="scrollable-dropdown">
                  <select
                    value={selectedRole}
                    onChange={(e) => selectRole(e.target.value)}
                    style={{ fontSize: "12px" }}
                  >
                    {roleOptions.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="group textInput-container">
              <input type="text" required />
              <label>Website</label>
            </div>

            <div className="group textInput-container">
              <input type="text" required />
              <label>Location</label>
            </div>

            <div className="row">
              <div className="group textInput-container">
                {selectedBusinessType ? null : (
                  <label>Business type</label>
                )}
                <div className="dropdown">
                  <div className="scrollable-dropdown">
                    <select
                      value={selectedBusinessType}
                      onChange={(e) => selectBusinessType(e.target.value)}
                      style={{ fontSize: "12px" }}
                    >
                      {businessTypeOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="group textInput-container">
                {selectedIndustry ? null : (
                  <label>Industry</label>
                )}
                <div className="dropdown">
                  <div className="scrollable-dropdown">
                    <select
                      value={selectedIndustry}
                      onChange={(e) => selectIndustry(e.target.value)}
                      style={{ fontSize: "12px" }}
                    >
                      {industryOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="group textInput-container">
              <input type="text" required />
              <label>Phone Number</label>
            </div>

            <div className="group textInput-container">
              <input type="text" required />
              <label>Bio</label>
            </div>
            <button
              type="submit"
              className="btn-continue"
              onClick={() => nav("/addPhoto")}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
