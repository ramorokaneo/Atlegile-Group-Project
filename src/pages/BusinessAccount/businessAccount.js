import React, { useState, useRef } from "react";
import BlackSilk from "./blackSilk.jpg";
import { IoMdStopwatch } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import BusinessAccountPlus from "./BusinessPlus+.jpg";
import Card from "../../componets/Card/Card";
import FollowUs from "../../componets/FollowUs/FollowUs";
import NavBar from "../../componets/NavBar/NavBar";
import "./businessAccount.css";
const logo = require("./cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png");

export default function BusinessAccount() {
  const [editModal, setEditModal] = useState(false);
  const [bannerModal, setBannerModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [businessAuthorization, setBusinessAuthorization] = useState(true);

  const list = [1, 2, 3];
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSaveEditProduct = () => {
    setEditModal(false);
  };

  const handleSaveAddBanner = () => {
    setBannerModal(false);
  };

  const handleSavePaymentInfo = () => {
    setPaymentModal(false);
  };

  return (
    <>
      {businessAuthorization ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000, // Adjust as needed
          }}
          onClick={() => setBusinessAuthorization(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              paddingRight: 40,
              paddingLeft: 40,
            }}
            id="businessAuthorization"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,
                paddingTop: 20,
              }}
            >
              <img
                src={logo}
                alt="cropped AMS Shadow Queen Logo BNY-1320x772"
              />
            </div>

            <p style={{ fontWeight: 600, fontSize: 30, marginBottom: 5 }}>
              BUSINESS REGISTRATION AUTHORIZATION
            </p>

            <p style={{ textAlign: "center" }}>
              Welcome to AMS, where we strive to ensure a secure and trustworthy
              environment for businesses and customers alike. As part of our
              commitment to maintaining the integrity of our platform, we have
              implemented an authorization process for new business
              registrations. This process is designed to verify the legitimacy
              and authenticity of the businesses that join our community.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "49%",
                }}
              >
                <span>Enhance Trust</span>
                <p>
                  By confirming the legitimacy of businesses, we build trust
                  among our users, making it a safer place to conduct business.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "49%",
                }}
              >
                <span>Review</span>
                <p>
                  Our dedicated team will review the provided details, ensuring
                  they align with our platform's policies and standards.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "49%",
                }}
              >
                <span>Verification</span>
                <p>
                  In some cases, we may request additional documents or
                  information to verify the authenticity of your business.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px gray solid",
                  width: "49%",
                }}
              >
                <span>Approval</span>
                <p>
                  Once your registration is approved, your business profile will
                  be live on our platform, and you can start receiving orders
                  for your products and services.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px gray solid",
                  width: "49%",
                }}
              >
                <span>Approval</span>
                <p>
                  Once your registration is approved, your business profile will
                  be live on our platform, and you can start receiving orders
                  for your products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <FollowUs />
      <NavBar />

      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <div
          style={{
            height: "100%",
            width: "20%",
            padding: 30,
            backgroundColor: "#f5f5f5",
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "lightgray",
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%",
              }}
            >
              S
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 700 }}>SARAH</span>
            <span style={{ fontSize: 14, fontWeight: 700 }}>0123456789</span>
            <span style={{ fontWeight: 700 }}>example@mail.ccom</span>
          </div>

          <div style={{ textAlign: "center", marginTop: 30 }}>
            <p>
              1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: 30,
              backgroundColor: "white",
              marginTop: 30,
            }}
          >
            <p>
              <span style={{ color: "#072840", fontWeight: 600, fontSize: 22 }}>
                Julian Jameson
              </span>
              <br />
              <span style={{ color: "gray", fontWeight: 600 }}>
                Alternative Contact
              </span>
            </p>
          </div>

          <div style={{ marginTop: 30 }}>
            <div
              style={{
                border: "none",
                borderBottom: "2px #072840 solid",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: "center",
              }}
            >
              <IoMdStopwatch color="#072840" style={{ marginRight: 25 }} />
              <a
                href="http://localhost:3000/"
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  textDecoration: "none",
                }}
              >
                ORDER HISTORY
              </a>
            </div>
            <div
              style={{
                border: "none",
                borderBottom: "2px #072840 solid",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: "center",
              }}
            >
              <IoMdStopwatch color="#072840" style={{ marginRight: 25 }} />
              <a
                href="http://localhost:3000/"
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  textDecoration: "none",
                }}
              >
                TERMS & CONDITIONS
              </a>
            </div>
            <div
              style={{
                border: "none",
                borderBottom: "2px #072840 solid",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: "center",
              }}
            >
              <IoMdStopwatch color="#072840" style={{ marginRight: 25 }} />
              <a
                href="http://localhost:3000/"
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  textDecoration: "none",
                }}
              >
                PRIVACY POLICY
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: "100%", width: "80%" }}>
          <div
            style={{
              height: "20%",
              backgroundImage: `url(${BlackSilk})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: `center`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            style={{
              height: "15%",
              backgroundColor: "#072840",
              paddingTop: 20,
              paddingLeft: 30,
            }}
          >
            <p
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 18, marginBottom: -5 }}>
                BUSINESS
              </span>
              <span style={{ fontWeight: 600, fontSize: 30, marginBottom: 5 }}>
                SECURETECH SOLUTIONS
              </span>
              <span style={{ fontWeight: 600, fontSize: 14 }}>
                secure.tech.co.za
              </span>
            </p>
          </div>

          <div style={{ height: "60%" }}>
            {editModal ? (
              <div
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000, // Adjust as needed
                }}
              >
                <div
                  style={{ height: "100%", width: "33%" }}
                  onClick={() => setEditModal(false)}
                ></div>
                <div
                  style={{ height: "100%", width: "33%" }}
                  onClick={() => setEditModal(false)}
                ></div>
                <div
                  style={{
                    height: "100%",
                    width: "34%",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "40%",
                    }}
                  >
                    <img
                      src={logo}
                      alt="cropped AMS Shadow Queen Logo BNY-1320x772"
                    />
                  </div>
                  <div
                    style={{ height: "60%", paddingRight: 40, paddingLeft: 40 }}
                  >
                    <p
                      style={{ fontWeight: 600, fontSize: 30, marginBottom: 5 }}
                    >
                      EDIT PRODUCT
                    </p>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: 10,
                          paddingBottom: 20,
                        }}
                      >
                        {image && (
                          <img
                            src={image}
                            alt="Uploaded"
                            className="uploaded-image"
                            style={{
                              backgroundColor: "#fafafa",
                              border: "1px lightgray solid",
                              width: "100px",
                              padding: 7,
                              marginRight: 10,
                            }}
                          />
                        )}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "#fafafa",
                            border: "1px lightgray dotted",
                            width: "100px",
                            padding: 20,
                          }}
                          onClick={openFileInput}
                        >
                          <span
                            style={{
                              color: "gray",
                              fontSize: 20,
                              fontWeight: 700,
                            }}
                          >
                            +
                          </span>
                          <span style={{ color: "gray" }}>Upload</span>
                        </div>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          ref={fileInputRef}
                        />
                      </div>

                      <form className="my-form">
                        <input
                          type="text"
                          placeholder="Name"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 30,
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <input
                              type="text"
                              placeholder="Price"
                              style={{
                                border: "none",
                                borderBottom: "1px gray solid",
                                paddingBottom: 5,
                                marginTop: 40,
                              }}
                            />
                            <p style={{ fontSize: 12, paddingRight: 10 }}>
                              There will VAT, Service Fees, Delivery Fees added
                              to this amount.
                            </p>
                          </div>

                          <div style={{}}>
                            <input
                              type="text"
                              placeholder="Quantity"
                              style={{
                                border: "none",
                                borderBottom: "1px gray solid",
                                paddingBottom: 5,
                                marginTop: 40,
                                marginLeft: 20,
                              }}
                            />
                            <p></p>
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Description"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 40,
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Type of Product"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 40,
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Other"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 40,
                          }}
                        />

                        <div
                          onClick={handleSaveEditProduct}
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                            backgroundColor: "#072840",
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            padding: 10,
                            marginTop: 20,
                          }}
                        >
                          SAVE
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {bannerModal ? (
              <div
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000, // Adjust as needed
                }}
              >
                <div
                  style={{ height: "100%", width: "33%" }}
                  onClick={() => setBannerModal(false)}
                ></div>
                <div
                  style={{ height: "100%", width: "33%" }}
                  onClick={() => setBannerModal(false)}
                ></div>
                <div
                  style={{
                    height: "100%",
                    width: "34%",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "40%",
                    }}
                  >
                    <img
                      src={logo}
                      alt="cropped AMS Shadow Queen Logo BNY-1320x772"
                    />
                  </div>
                  <div
                    style={{ height: "60%", paddingRight: 40, paddingLeft: 40 }}
                  >
                    <p
                      style={{ fontWeight: 600, fontSize: 30, marginBottom: 5 }}
                    >
                      ADD BANNER
                    </p>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: 10,
                          paddingBottom: 20,
                        }}
                      >
                        {image && (
                          <img
                            src={image}
                            alt="Uploaded"
                            className="uploaded-image"
                            style={{
                              backgroundColor: "#fafafa",
                              border: "1px lightgray solid",
                              width: "100px",
                              padding: 7,
                              marginRight: 10,
                            }}
                          />
                        )}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "#fafafa",
                            border: "1px lightgray dotted",
                            width: "100px",
                            padding: 20,
                          }}
                          onClick={openFileInput}
                        >
                          <span
                            style={{
                              color: "gray",
                              fontSize: 20,
                              fontWeight: 700,
                            }}
                          >
                            +
                          </span>
                          <span style={{ color: "gray" }}>Upload</span>
                        </div>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          ref={fileInputRef}
                        />
                      </div>

                      <form className="my-form">
                        <input
                          type="text"
                          placeholder="Product Name"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 30,
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <input
                              type="text"
                              placeholder="Discount Price"
                              style={{
                                border: "none",
                                borderBottom: "1px gray solid",
                                paddingBottom: 5,
                                marginTop: 40,
                              }}
                            />
                          </div>

                          <div style={{}}>
                            <input
                              type="text"
                              placeholder="Quantity"
                              style={{
                                border: "none",
                                borderBottom: "1px gray solid",
                                paddingBottom: 5,
                                marginTop: 40,
                                marginLeft: 20,
                              }}
                            />
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Original Price"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 40,
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Other"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 40,
                          }}
                        />

                        <div
                          onClick={handleSavePaymentInfo}
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                            backgroundColor: "#072840",
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            padding: 10,
                            marginTop: 20,
                          }}
                        >
                          SAVE
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {paymentModal ? (
              <div
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000, // Adjust as needed
                }}
              >
                <div
                  style={{ height: "100%", width: "33%" }}
                  onClick={() => setPaymentModal(false)}
                ></div>
                <div
                  style={{ height: "100%", width: "33%" }}
                  onClick={() => setPaymentModal(false)}
                ></div>
                <div
                  style={{
                    height: "100%",
                    width: "34%",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "60%",
                    }}
                  >
                    <img
                      src={logo}
                      alt="cropped AMS Shadow Queen Logo BNY-1320x772"
                    />
                  </div>
                  <div
                    style={{ height: "40%", paddingRight: 40, paddingLeft: 40 }}
                  >
                    <p
                      style={{ fontWeight: 600, fontSize: 30, marginBottom: 5 }}
                    >
                      PAYMENT INFO
                    </p>
                    <div>
                      <form className="my-form">
                        <input
                          type="text"
                          placeholder="Card Holder"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 30,
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Card Number"
                          style={{
                            width: "100%",
                            border: "none",
                            borderBottom: "1px gray solid",
                            paddingBottom: 5,
                            marginTop: 30,
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <input
                              type="text"
                              placeholder="Expiry Date"
                              style={{
                                border: "none",
                                borderBottom: "1px gray solid",
                                paddingBottom: 5,
                                marginTop: 40,
                              }}
                            />
                          </div>

                          <div style={{}}>
                            <input
                              type="text"
                              placeholder="CVV"
                              style={{
                                border: "none",
                                borderBottom: "1px gray solid",
                                paddingBottom: 5,
                                marginTop: 40,
                                marginLeft: 20,
                              }}
                            />
                          </div>
                        </div>

                        <div
                          onClick={handleSaveAddBanner}
                          style={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: 14,
                            backgroundColor: "#072840",
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            padding: 10,
                            marginTop: 20,
                          }}
                        >
                          SAVE
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 30,
                paddingBottom: 30,
                paddingTop: 30,
                paddingLeft: 30,
              }}
            >
              <div style={{}}>
                <span style={{ fontWeight: 700, fontSize: 30 }}>
                  PRODUCTS & SERVICES
                </span>
                <br />
                <span style={{ fontWeight: 600, fontSize: 14 }}>
                  Please add a minimum of 3 products
                </span>
                <br />
                <div
                  style={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: 14,
                    backgroundColor: "#fe951c",
                    padding: 10,
                    borderRadius: 20,
                    display: "inline-block",
                    marginTop: 5,
                    cursor: "pointer",
                  }}
                  onClick={() => setBusinessAuthorization(true)}
                >
                  AUTHORIZATION PENDING
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: 14,
                    backgroundColor: "#072840",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 25,
                    paddingRight: 25,
                    borderRadius: 20,
                    display: "inline-block",
                  }}
                >
                  BUSINESS PLUS R150/PM
                </div>
              </div>
            </div>

            <div
              style={{
                // border: "1px lightgray solid",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                paddingRight: 10,
              }}
            >
              <div style={{ width: "75%" }}>
                <div style={{ display: "flex" }}>
                  {list.map((item, index) => (
                    <Card key={index} open={() => setEditModal(true)} />
                  ))}
                </div>
              </div>

              <div
                style={{
                  width: "26%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px lightgray solid",
                  padding: 40,
                  alignItems: "center",
                  height: "70vh",
                }}
              >
                <img
                  src={BusinessAccountPlus}
                  alt="business plus logo"
                  style={{ width: "60%", marginBottom: 5 }}
                />
                <p
                  style={{
                    color: "#252b42",
                    fontWeight: 700,
                    fontSize: 32,
                    textAlign: "center",
                  }}
                >
                  BUSINESS PLUS SUBSCRIPTION
                </p>
                <p
                  style={{
                    color: "#9e9e9e",
                    fontWeight: 700,
                    fontSize: 16,
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  Unlock More Opportunities with Business Plus Subscription
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      color: "#23a6f0",
                      fontWeight: 700,
                      fontSize: 40,
                      marginBottom: -10,
                    }}
                  >
                    R150
                  </span>
                  <span
                    style={{ color: "#b8d9f7", fontWeight: 700, fontSize: 20 }}
                  >
                    Per Month
                  </span>
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      marginTop: 15,
                      fontWeight: 700,
                      fontSize: 18,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <GoCheckCircleFill
                      color="#2dc071"
                      size={30}
                      style={{ marginRight: 7, marginBottom: 10 }}
                    />{" "}
                    List Unlimited Products
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 18,
                      marginTop: 15,

                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <GoCheckCircleFill
                      color="#2dc071"
                      size={30}
                      style={{ marginRight: 7, marginBottom: 10 }}
                    />{" "}
                    Priority Support
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 18,
                      marginTop: 15,

                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <GoCheckCircleFill
                      color="#2dc071"
                      size={30}
                      style={{ marginRight: 7 }}
                    />{" "}
                    Exclusive Promotions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "40vh" }}></div>
    </>
  );
}