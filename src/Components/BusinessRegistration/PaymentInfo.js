import React, { useState } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./form.css";
import MarketingSupport from "./MarketingSupport";
import { useNavigate } from "react-router-dom";
import { addDoc, doc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../config";
import useRegister from "./useRegister";

const PaymentInfo = () => {
  const {
    businessName,

    selectedRole,

    website,

    regNumber,

    location,

    selectedBusinessType,

    selectedIndustry,

    phoneNumber,
    bio,
  } = useRegister();
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
  const [selectedExpiry, setSelectedExpiry] = useState("");

  const handleExpiryChange = (e) => {
    setSelectedExpiry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the document reference based on your application logic
      // const businessDocRef = doc(db, "Business", docRef.id);

      // Update the payment information in Firebase Firestore
      // await addDoc(businessDocRef, {
      //   paymentInfo: {
      //     cardHolder: e.target.elements.cardHolder.value,
      //     cardNumber: e.target.elements.cardNumber.value,
      //     expiry: selectedExpiry,
      //     cvv: e.target.elements.cvv.value,
      //   },
      // });

      const docRef = await addDoc(collection(db, "Business"), {
        businessName,
        role: selectedRole,
        website,
        location,
        regNumber,
        businessType: selectedBusinessType,
        industry: selectedIndustry,
        phoneNumber,
        bio,
        createdAt: serverTimestamp(),
        cardHolder: e.target.elements.cardHolder.value,
        cardNumber: e.target.elements.cardNumber.value,
        expiry: selectedExpiry,
        cvv: e.target.elements.cvv.value,
      });

      // Redirect to the next page (adjust as needed)
      nav("/nextPage");
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
              paddingTop: 120,
            }}
            alt="Logo"
          />
        </div>

        <div className="textInput-container">
          <form onSubmit={handleSubmit}>
            <h3>PAYMENT INFO</h3>

            <div className="group textInput-container">
              <input type="text" name="cardHolder" required />
              <label>Card Holder</label>
            </div>

            <div className="group textInput-container">
              <input type="text" name="cardNumber" required />
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
                <input type="text" name="cvv" required />
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
