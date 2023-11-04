import React from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./registar.css";
import SalesGrowth from "./SalesGrowth";
import { useNavigate } from "react-router-dom";

const AddPhoto = () => {

  const nav = useNavigate()

  return (
    <div className="background">
      {/* <div className="image-card">
        <div className="text-container">
          <h4 style={{ color: "orange" }}>For business</h4>
          <h1 style={{ color: "white" }}>Increased visibility</h1>
          <h4 style={{ color: "white" }}>
            Reach a wider audience and gain exposure to potential clients
          </h4>
        </div>
      </div> */}

      <SalesGrowth />
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
            <h3 style={{ marginTop: "6%" }}>ADD PRODUCTS + SERVICES</h3>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "purple",
                  width: 90,
                  height: 90,
                  border: "solid",
                  borderColor: "lightgray",
                  // borderRadius: 6,
                  borderWidth: 1,
                  marginRight: 5,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  width={90}
                  height={90}
                  style={{}}
                />
              </div>

              <div
                style={{
                  // backgroundColor: "purple",
                  width: 90,
                  height: 90,
                  border: "solid",
                  borderColor: "lightgray",
                  // borderRadius: 6,
                  borderWidth: 1,
                  borderStyle: "dotted",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h7>+</h7>
                    <span>Upload</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="group textInput-container">
              <input type="text" required />
              <label>Name</label>
            </div>

            <div className="row">

              <div class="group textInput-container">
                <input type="text" required />
                <label>Price</label>
               

              </div>
            

              <div class="group textInput-container">
                <input type="text" required />
                <label>Quantity</label>
              </div>
            </div>

            <span style={{fontSize: 8, color: 'lightgrey', width: '35%', marginLeft: '-65%'}}>
                There will be VAT. Service Fee and Delivery Fees added to this
                amount
              </span>

            <div class="group textInput-container">
              <input type="text" required />
              <label>Description</label>
            </div>

            <div class="group textInput-container">
              <input type="text" required />
              <label>Type of product</label>
            </div>

            <div class="group textInput-container">
              <input type="text" required />
              <label>Other</label>
            </div>

            <button type="submit" className="btn-continue" onClick={() => nav('/paymentInfo')}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
