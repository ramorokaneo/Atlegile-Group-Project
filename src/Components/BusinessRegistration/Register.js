import React, { useEffect, useState } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./form.css";
import { Navigate, useNavigate } from "react-router-dom";
import useRegister from "./useRegister";
import PaymentInfo from "./PaymentInfo";

const Register = () => {
  const nav = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [selectedRole, selectRole] = useState("");
  const [website, setWebsite] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [location, setLocation] = useState("");
  const [selectedBusinessType, selectBusinessType] = useState("");
  const [selectedIndustry, selectIndustry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  // const [expiry, setExpiry] = useState("");
  // const [cvv, setCvv] = useState("");
  // const [cardHolder, updateCardHolder] = useState("");
  // const [cardNumber, updateCardNumber] = useState("");

  // useEffect to store state in local storage
  useEffect(() => {
    localStorage.setItem("businessName", businessName);
    localStorage.setItem("selectedRole", selectedRole);
    localStorage.setItem("website", website);
    localStorage.setItem("regNumber", regNumber);
    localStorage.setItem("location", location);
    localStorage.setItem("selectedBusinessType", selectedBusinessType);
    localStorage.setItem("selectedIndustry", selectedIndustry);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("bio", bio);
    // localStorage.setItem("expiry", expiry);
    // localStorage.setItem("cvv", cvv);
    // localStorage.setItem("cardHolder", cardHolder);
    // localStorage.setItem("cardNumber", cardNumber);
  }, [
    businessName,
    selectedRole,
    website,
    regNumber,
    location,
    selectedBusinessType,
    selectedIndustry,
    phoneNumber,
    bio,
    // expiry,
    // cvv,
    // cardHolder,
    // cardNumber,
  ]);

  // const selectRole = (role) => {
  //   setSelectedRole(role);
  // };

  // const selectBusinessType = (businessType) => {
  //   setSelectedBusinessType(businessType);
  // };

  // const selectIndustry = (industry) => {
  //   setSelectedIndustry(industry);
  // };

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
      // You can add additional validation before proceeding with Firebase upload
      nav("/addPhoto");
      // Render the Payment component to handle Firebase upload
      return (
        <PaymentInfo
          businessName={businessName}
          selectedRole={selectedRole}
          website={website}
          regNumber={regNumber}
          location={location}
          selectedBusinessType={selectedBusinessType}
          selectedIndustry={selectedIndustry}
          phoneNumber={phoneNumber}
          bio={bio}
          // expiry={expiry}
          // cvv={cvv}
          // cardHolder={cardHolder}
          // cardNumber={cardNumber}
        />
      );
    } catch (error) {
      console.error("Error processing registration: ", error);
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
              marginTop: 90,
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

            <div className="group ">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "3%" }}>
                  {selectedRole ? null : (
                    <label style={{ marginLeft: "-35%" }}>Profession</label>
                  )}
                </div>
                <div style={{ width: "155%", marginLeft: "-20%" }}>
                  <select
                    value={selectedRole}
                    onChange={(e) => selectRole(e.target.value)}
                    style={{ fontSize: "15px" }}>
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
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                required
              />
              <label>Reg Number</label>
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

            <div
              className="row"
              style={{ display: "flex", backgroundColor: "", width: "100%" }}>
              <div
                className="group "
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                {selectedBusinessType ? null : (
                  <label style={{ marginTop: "0%" }}>Business type</label>
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

              <div
                className="group textInput-container"
                style={{
                  width: "100%",
                  // backgroundColor: "whitesmoke",
                  padding: 15,
                }}>
                {selectedIndustry ? null : (
                  <label style={{ paddingTop: "0%" }}>Industry</label>
                )}
                <div className="dropdown" style={{ width: "100%" }}>
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
            <button type="submit" className="btn-continue" style={{marginBottom:20}}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
