import React, { useState } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./form.css";
import MarketingSupport from "./MarketingSupport";

const PaymentInfo = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, index) => currentYear + index);
  const months = Array.from({ length: 12 }, (_, index) => (index + 1).toString().padStart(2, "0"));
  const expiryOptions = years.map((year) => {
    return months.map((month) => `${month}/${year}`);
  }).flat();
  const [selectedExpiry, setSelectedExpiry] = useState("");

  const handleExpiryChange = (e) => {
    setSelectedExpiry(e.target.value);
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
          />
        </div>

        <div className="textInput-container">
          <form>
            <h3>PAYMENT INFO</h3>

            <div className="group textInput-container">
              <input type="text" required />
              <label>Card Holder</label>
            </div>

            <div className="group textInput-container">
              <input type="text" required />
              <label>Card Number</label>
            </div>

            <div className="row">
              <div className="group textInput-container">
                {selectedExpiry ? null : (
                  <label>Expiry</label>
                )}
                <div className="dropdown">
                  <div className="scrollable-dropdown">
                    <select
                      style={{ fontSize: "12px", width: "200px" }}
                      value={selectedExpiry}
                      onChange={handleExpiryChange}
                    >
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
                <input type="text" required />
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
