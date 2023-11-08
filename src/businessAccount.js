import React, { useState } from "react";
import BlackSilk from "./blackSilk.jpg";
import { IoMdStopwatch } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import BusinessAccountPlus from "./BusinessPlus+.jpg";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
const logo = require("./cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png");

export default function BusinessAccount() {
  const [editModal, setEditModal] = useState(false);

  const list = [1, 2, 3];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        {editModal
          ? console.log("Edit modal is true")
          : console.log("Edit modal is false")}
        {editModal ? (
          <div
            style={{
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100%",
              height: "100%",
              position: "fixed",
              display: "flex",
            }}
          >
            <div style={{ height: "100%", width: "33%" }}></div>
            <div style={{ height: "100%", width: "33%" }}></div>
            <div
              style={{ height: "100%", width: "33%", backgroundColor: "white",paddingRight:60,paddingLeft:60 }}
            >
              <div
                style={{
                  height: "30%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  alt="cropped AMS Shadow Queen Logo BNY-1320x772"
                />
              </div>
              <div>
              <p style={{ fontWeight: 600, fontSize: 30, marginBottom: 5 }}>
                EDIT PRODUCT
              </p>
              <div></div>
              <div></div>
              
              </div>
            </div>
          </div>
        ) : null}

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

          <div style={{ height: "60%", paddingTop: 30, paddingLeft: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 30,
                paddingBottom: 30,
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
                  }}
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
                border: "1px lightgray solid",

                width: "100%",
                display: "flex",
                flexDirection: "row",
                paddingRight: 10,
              }}
            >
              <div style={{ width: "75%", display: "flex" }}>
                {list.map((item, index) => (
                  <div key={index} onClick={() => setEditModal(true)}>
                    <Card />
                  </div>
                ))}
              </div>
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px lightgray solid",
                  padding: 40,
                  alignItems: "center",
                }}
              >
                <img
                  src={BusinessAccountPlus}
                  alt="business plus logo"
                  style={{ width: "40%", marginBottom: 5 }}
                />
                <p
                  style={{
                    color: "#252b42",
                    fontWeight: 700,
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  BUSINESS PLUS SUBSCRIPTION
                </p>
                <p
                  style={{
                    color: "#9e9e9e",
                    fontWeight: 700,
                    fontSize: 15,
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
                      fontSize: 30,
                      marginBottom: -10,
                    }}
                  >
                    R150
                  </span>
                  <span
                    style={{ color: "#b8d9f7", fontWeight: 700, fontSize: 15 }}
                  >
                    Per Month
                  </span>
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      marginTop: 7,
                    }}
                  >
                    <GoCheckCircleFill
                      color="#2dc071"
                      size={40}
                      style={{ marginRight: 7 }}
                    />
                    List Unlimited Products
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      marginTop: 7,
                    }}
                  >
                    <GoCheckCircleFill
                      color="#2dc071"
                      size={40}
                      style={{ marginRight: 7 }}
                    />
                    Priority Support
                  </p>

                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      marginTop: 7,
                    }}
                  >
                    <GoCheckCircleFill
                      color="#2dc071"
                      size={40}
                      style={{ marginRight: 7 }}
                    />
                    Exclusive Promotions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
