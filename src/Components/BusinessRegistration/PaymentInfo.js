import React, { useEffect, useState } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./form.css";
import MarketingSupport from "./MarketingSupport";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

const PaymentInfo = () => {
  const nav = useNavigate();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, index) => currentYear + index);
  const months = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );
  const expiryOptions = years
    .map((year) => {
      return months.map((month) => `${month}/${year}`);
    })
    .flat();

  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [selectedExpiry, setSelectedExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    const storedCardHolder = localStorage.getItem("cardHolder");
    const storedCardNumber = localStorage.getItem("cardNumber");
    const storedExpiry = localStorage.getItem("selectedExpiry");
    const storedCvv = localStorage.getItem("cvv");

    if (storedCardHolder) setCardHolder(storedCardHolder);
    if (storedCardNumber) setCardNumber(storedCardNumber);
    if (storedExpiry) setSelectedExpiry(storedExpiry);
    if (storedCvv) setCvv(storedCvv);
  }, []);

  const handleExpiryChange = (e) => {
    setSelectedExpiry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update local storage with the form data
      localStorage.setItem("cardHolder", e.target.elements.cardHolder.value);
      localStorage.setItem("cardNumber", e.target.elements.cardNumber.value);
      localStorage.setItem("selectedExpiry", selectedExpiry);
      localStorage.setItem("cvv", e.target.elements.cvv.value);

      // Add all state variables from local storage to the Firestore collection
      const docRef = await addDoc(collection(db, "Business"), {
        createdAt: serverTimestamp(),
        cardHolder: e.target.elements.cardHolder.value,
        cardNumber: e.target.elements.cardNumber.value,
        expiry: selectedExpiry,
        cvv: e.target.elements.cvv.value,
        businessName: localStorage.getItem("businessName"),
        selectedRole: localStorage.getItem("selectedRole"),
        website: localStorage.getItem("website"),
        regNumber: localStorage.getItem("regNumber"),
        location: localStorage.getItem("location"),
        selectedBusinessType: localStorage.getItem("selectedBusinessType"),
        selectedIndustry: localStorage.getItem("selectedIndustry"),
        phoneNumber: localStorage.getItem("phoneNumber"),
        bio: localStorage.getItem("bio"),
        // Add more state variables as needed
      });

      // Redirect to the next page (adjust as needed)
      nav("/");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className="background">
      <MarketingSupport />

      <div className="card">
        <div className="logo-container">
          <img
            src={logo}
            width={110}
            height={50}
            style={{
              justifyContent: "center",
              marginTop: 120,
            }}
            alt="Logo"
          />
        </div>

        <div className="textInput-container">
          <form onSubmit={handleSubmit}>
            <h3>PAYMENT INFO</h3>

            <div className="group textInput-container">
              <input
                type="text"
                name="cardHolder"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                required
              />
              <label>Card Holder</label>
            </div>

            <div className="group textInput-container">
              <input
                type="text"
                name="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              <label>Card Number</label>
            </div>

            <div className="row">
              <div className="group textInput-container">
                {selectedExpiry ? null : <label>Expiry</label>}
                <div className="dropdown">
                  <div className="scrollable-dropdown">
                    <select
                      style={{ fontSize: "12px", width: "200px" }}
                      value={selectedExpiry}
                      onChange={handleExpiryChange}>
                      <option value=""></option>
                      {expiryOptions.map((expiry, index) => (
                        <option key={index} value={expiry}>
                          {expiry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="group textInput-container">
                <input
                  type="text"
                  name="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
                <label>CVV</label>
              </div>
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

export default PaymentInfo;
