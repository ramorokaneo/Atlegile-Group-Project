// AddPhoto.js
import React, { useState, useRef } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import placeholderImage from "../assets/BACKGROUND.png"; // Import your placeholder image
import "./registar.css";
import SalesGrowth from "./SalesGrowth";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage functions
import { db } from "../config";

const AddPhoto = () => {
  const nav = useNavigate();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [other, setOther] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const storage = getStorage(); // Firebase Storage instance

  const handleImageChange = (e) => {
    const files = e.target.files;
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleImageUpload = async () => {
    const uploadTasks = images.map(async (image) => {
      const storageRef = ref(storage, `product_images/${image.name}`);
      await uploadBytes(storageRef, image);
      return getDownloadURL(storageRef);
    });

    return Promise.all(uploadTasks);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrls = await handleImageUpload();

      const docRef = await addDoc(collection(db, "Products"), {
        productName,
        price,
        quantity,
        description,
        productType,
        other,
        imageUrls,
      });

      console.log("Document written with ID: ", docRef.id);

      nav("/paymentInfo");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="background">
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
            alt="Logo"
          />
        </div>

        <div className="textInput-container">
          <form onSubmit={handleSubmit}>
            <h3 style={{ marginTop: "6%" }}>ADD PRODUCTS + SERVICES</h3>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}>
                {/* Display selected images */}
                {images.length > 0 ? (
                  images.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "purple",
                        width: 90,
                        height: 90,
                        border: "solid",
                        borderColor: "lightgray",
                        borderWidth: 1,
                        marginRight: 5,
                        marginBottom: 5,
                      }}>
                      <img
                        src={URL.createObjectURL(image)}
                        width={90}
                        height={90}
                        alt={`Selected ${index + 1}`}
                      />
                    </div>
                  ))
                ) : (
                  // Placeholder image when no photos are selected
                  <img
                    src={placeholderImage}
                    width={90}
                    height={90}
                    alt="Placeholder"
                  />
                )}
              </div>

              <div
                style={{
                  width: 90,
                  height: 90,
                  border: "solid",
                  borderColor: "lightgray",
                  borderWidth: 1,
                  borderStyle: "dotted",
                  marginRight: 5,
                }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  {/* Input for selecting image files */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    multiple
                  />
                  {/* Trigger the file input when the button is clicked */}
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    style={{
                      backgroundColor: "white",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <h7>+</h7>
                    <span>Upload</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="group textInput-container">
              <input
                type="text"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <label>Name</label>
            </div>

            <div className="row">
              <div className="group textInput-container">
                <input
                  type="text"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label>Price</label>
              </div>

              <div className="group textInput-container">
                <input
                  type="text"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <label>Quantity</label>
              </div>
            </div>

            <span
              style={{
                fontSize: 8,
                color: "lightgrey",
                width: "35%",
                marginLeft: "-65%",
              }}>
              There will be VAT. Service Fee and Delivery Fees added to this
              amount
            </span>

            <div className="group textInput-container">
              <input
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Description</label>
            </div>

            <div className="group textInput-container">
              <input
                type="text"
                required
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              />
              <label>Type of product</label>
            </div>

            <div className="group textInput-container">
              <input
                type="text"
                required
                value={other}
                onChange={(e) => setOther(e.target.value)}
              />
              <label>Other</label>
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
