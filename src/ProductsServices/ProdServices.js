import React, { useState } from "react";
import "./ProdServices.css";
import { FaPlus } from "react-icons/fa";

function ProdServices() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [other, setOther] = useState("");
  // const [image, setImage] = useState("");
  const [images, setImages] = useState([])


  // console.log("we got the image : ", image)
  const handleImageChange = (e) => {

      const file = e.target.files[0];
    
      if (file) {
        const reader = new FileReader();
    
        reader.onload = (e) => {
          // `e.target.result` contains the data URL representing the blob
          const dataUrl = e.target.result;
    
          // You can use the `dataUrl` or convert it to a Blob if needed
          // For example, to create a new Blob:
          // const blob = dataURLToBlob(dataUrl);
    
          // Now `blob` contains the actual blob data
          console.log(dataUrl);
          // setImage(dataUrl)
          const newImage = [...images, dataUrl]
          setImages(newImage)
        };
    
        // Read the blob as a data URL
        reader.readAsDataURL(file);
      }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (
      !name ||
      !price ||
      !quantity ||
      !description ||
      !productType ||
      !other
    ) {
      alert("Please fill in all fields before continuing.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", {
      name,
      price,
      quantity,
      description,
      productType,
      other,
    });
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h2 className="products-services">ADD PRODUCTS + SERVICES</h2>
          <form onSubmit={handleSubmit}>
            <div className="upload-img">
              {images.map((item)=>{
                return(
                  <div className="upload">
                <img src={item} alt="" />
              </div>
                )
              })}
              <div className="upload">
                <FaPlus />
                <p>Upload</p>
                <input
                  type="file"
                  placeholder="Uplaod"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="form-group"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="fullname">
              <input
                type="text"
                placeholder="Price"
                className="form-group-1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Quantity"
                className="form-group-2"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div className="label-1">
              <label>
                There will be VAT, Fee, and Delivery <br /> Fees added to this
                amount
              </label>
            </div>

            <input
              type="text"
              placeholder="Description"
              className="form-group"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Type of Product"
              className="form-group"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Other"
              className="form-group"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              required
            />

            <button className="submit-button" type="submit">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProdServices;
