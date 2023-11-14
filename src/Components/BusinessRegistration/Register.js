import React, { useState } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebaseConfig";

const Register = () => {
  const nav = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the user's information to the Firestore collection
      const docRef = await addDoc(collection(db, "BusinessRegistration"), {
        businessName,
        role: selectedRole,
        website,
        location,
        businessType: selectedBusinessType,
        industry: selectedIndustry,
        phoneNumber,
        bio,
      });

      console.log("Document written with ID: ", docRef.id);

      // Redirect to the next page after successful registration
      nav("/addPhoto");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <h3>BUSINESS REGISTRATION</h3>

            <div className="group textInput-container">
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />
              <label>Business Name</label>
            </div>

            <div className="group  ">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "8%" }}>
                  {selectedRole ? null : (
                    <label style={{ marginLeft: "-35%" }}>Profession</label>
                  )}
                </div>
                <div style={{ width: "180%", marginLeft: "-34%" }}>
                  <select
                    value={selectedRole}
                    onChange={(e) => selectRole(e.target.value)}
                    style={{ fontSize: "12px" }}>
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
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
              <label>Website</label>
            </div>

            <div className="group textInput-container">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <label>Location</label>
            </div>

            <div className="row">
              <div className="group ">
                {selectedBusinessType ? null : (
                  <label style={{ marginTop: "-15%" }}>Business type</label>
                )}

                <div className="dropdown">
                  <div>
                    <select
                      value={selectedBusinessType}
                      onChange={(e) => selectBusinessType(e.target.value)}
                      style={{ fontSize: "12px" }}>
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
                  <label style={{ marginTop: "-11%" }}>Industry</label>
                )}
                <div className="dropdown">
                  <div>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => selectIndustry(e.target.value)}
                      style={{ fontSize: "12px" }}>
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
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <label>Phone Number</label>
            </div>

            <div className="group textInput-container">
              <input
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
              <label>Bio</label>
            </div>
            <button type="submit" className="btn-continue">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
