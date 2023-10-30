import React from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import "./registar.css";
import SalesGrowth from "./SalesGrowth";

const AddPhoto = () => {
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
            <h3>ADD PRODUCTS + SERVICES</h3>

<div style={{display: 'flex', }}>
    <div
              style={{
                // backgroundColor: "purple",
                width: 60,
                border: 'solid',
                  borderColor: "lightgray",
                  borderRadius: 6,
                  borderWidth: 1,
                  marginRight: 25
              }}
            >
              <img
                src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1200"
                width={50}
                height={50}
                style={{
                  padding: "7.5%",
                  
                }}
              />
            </div>

            <div
              style={{
                // backgroundColor: "purple",
                width: 60,
                border: 'solid',
                  borderColor: "lightgray",
                  borderRadius: 6,
                  borderWidth: 1
              }}
            >
                <div 
                style={{
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                <h3>+</h3>
                {/* <h6>Upload</h6> */}
                </div>
              
           
            </div>
</div>
            
            
            <div className="inputbox">
              <label htmlFor="username">Name</label>
              <input type="text" />
            </div>

            <div className="form-group row">
              <div className="inputbox">
                <label htmlFor="type">Price</label>
                <input type="text" />
              </div>

              <div className="inputbox">
                <label htmlFor="industry">Quantity</label>
                <input type="text" />
              </div>
            </div>

            <div className="inputbox">
              <label htmlFor="confirmPassword">Description</label>
              <input type="text" />
            </div>

            <div className="inputbox">
              <label htmlFor="confirmPassword">Type of Product</label>
              <input type="text" />
            </div>
            <div className="inputbox">
              <label htmlFor="confirmPassword">Other</label>
              <input type="text" />
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

export default AddPhoto;
