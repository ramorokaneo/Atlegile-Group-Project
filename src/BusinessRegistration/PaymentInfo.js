import React from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./form.css";
import MarketingSupport from "./MarketingSupport";

const PaymentInfo = () => {
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
       
            <form >
              <h3 >PAYMENT INFO</h3>

              <form>
                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Card Holder</label>
                </div>

                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Card Number</label>
                </div>

                <div className="row">
                  <div class="group textInput-container">
                    <input type="text" required />
                    <label>Card Number</label>
                  </div>

                  <div class="group textInput-container">
                    <input type="text" required />
                    <label>Card Number</label>
                  </div>
                </div>
              </form>

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
