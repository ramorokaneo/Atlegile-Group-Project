import React, { useState, useRef } from "react";
import logo from "../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png";
import placeholderImage from "./login.jpg";
import "./registar.css";
import SalesGrowth from "./SalesGrowth";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "./config";

const AddPhoto = () => {
  const nav = useNavigate();
  const [productName, setProductName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const fileInputRef = useRef(null);

  const storage = getStorage();

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

      // Save the entered details to Firebase Firestore
      const docRef = await addDoc(collection(db, "Products"), {
        productName,
        price,
        quantity,
        description,
        brand,
        selectedCategory,
        imageUrls,
        businessName,
      });

      console.log("Document written with ID: ", docRef.id);

      // Redirect to the paymentInfo page
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
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    multiple
                  />
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

            <div className="group textInput-container">
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
              <label>Business Name</label>
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

            {/* Dropdown for product categories */}
            <div className="group textInput-container">
              <label>Product Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="" disabled></option>
                {[
                  "Electronics",
                  "Clothing and Apparel",
                  "Home and Furniture",
                  "Beauty and Personal Care",
                  "Sports and Outdoors",
                  "Toys and Games",
                  "Books and Stationery",
                  "Health and Wellness",
                  "Automotive",
                  "Grocery and Gourmet",
                  "Jewelry and Watches",
                  "Home Improvement",
                  "Pet Supplies",
                  "Office Supplies",
                  "Music and Instruments",
                  "Garden and Outdoor Living",
                  "Art and Craft Supplies",
                  "Travel and Luggage",
                  "Baby and Maternity",
                  "Electrical and Lighting",
                  // ... (add other categories)
                ].map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="group textInput-container">
              <input
                type="text"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <label>brand</label>
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
