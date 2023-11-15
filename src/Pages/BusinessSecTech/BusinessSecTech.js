import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import BusinessAccountPlus from "../../images/BusinessPlus+.jpg";
import Card from "../../componets/Card/Card";
import ProductsServices from "../../componets/ProductsServices/ProdServices";
import "./BusinessSecTech.css";
export default function BusinessSecTech() {
  const list = [1, 2, 3];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <div style={{ height: "100%", width: "80%" }}>
          {/* <div
            style={{
              height: "20%",
              backgroundImage: `url()`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: `center`,
              backgroundSize: "cover",
            }}
          ></div> */}
          <div className="imagefix-container">
            <img src="../../images/blackSilk.jpg" alt="" />
          </div>
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
                width: "100%",
                display: "flex",
                flexDirection: "row",
                paddingRight: 10,
              }}
            >
              <div style={{ width: "75%" }}>
                <div style={{ display: "flex" }}>
                  {list.map(() => (
                    <Card />
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
        <ProductsServices />
      </div>
    </>
  );
}