import React from "react";
//import picture from "./GroupAtlegileUsers.png";
import { FaStar } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";
import { PiCaretDownFill } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import "./OrderHistory.css";
import Logo from "./Logo.png";
import Footer from "../../components/Footer/Footer";

function OrderHistory() {
  function calculateBackgroundProperties() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let backgroundPositionX, backgroundPositionY, backgroundSize;

    // Define the standard screen sizes and their corresponding values
    const screenSizes = [
      {
        width: 1515,
        height: 1441,
        positionX: 340,
        positionY: -150,
        size: "700px 450px",
      },
      {
        width: 1738,
        height: 871,
        positionX: 530,
        positionY: -115,
        size: "600px 350px",
      },
      // Add more screen sizes and values as needed
    ];

    // Calculate the ratio of the screen size to the standard sizes
    const matchingSize = screenSizes.find(
      (size) => size.width === screenWidth && size.height === screenHeight
    );

    if (matchingSize) {
      backgroundPositionX = matchingSize.positionX;
      backgroundPositionY = matchingSize.positionY;
      backgroundSize = matchingSize.size;
    } else {
      // Calculate ratios for custom screen sizes
      const ratioX = screenWidth / screenSizes[0].width;
      const ratioY = screenHeight / screenSizes[0].height;

      backgroundPositionX = Math.round(screenSizes[0].positionX * ratioX);
      backgroundPositionY = Math.round(screenSizes[0].positionY * ratioY);
      backgroundSize = `${Math.round(700 * ratioX)}px ${Math.round(
        450 * ratioY
      )}px`;
    }

    return { backgroundPositionX, backgroundPositionY, backgroundSize };
  }

  const { backgroundPositionX, backgroundPositionY, backgroundSize } =
    calculateBackgroundProperties();

  const data = [
    { date: "27 JUL, 2023", name: "SIBUSISO", status: "ONGOING" },
    {
      date: "27 JUL, 2023",
      name: "SIBUSISO",
      status: "DELIVERED",
    },
    {
      date: "27 JUL, 2023",
      name: "SIBUSISO",
      status: "DELIVERED",
    },
    {
      date: "27 JUL, 2023",
      name: "SIBUSISO",
      status: "DELIVERED",
    },
  ];

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          // backgroundColor: "red",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "5vh",
            width: "100%",
            border: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#072840",
          }}
        >
          <div
            style={{
              height: "5vh",
              width: "23%",
              // backgroundColor: "red",
            }}
          ></div>

          <FiPhone style={{ width: "1%", color: "white" }} />
          <div style={{ width: "7%", color: "white" }}>(225) 555-0118</div>

          <AiOutlineMail style={{ width: "1%", color: "white" }} />
          <div style={{ width: "9%", color: "white" }}>
            <p style={{ fontSize: "0.7rem" }}>michelle.rivera@example.com</p>
          </div>
          <div style={{ width: "20%", color: "white", fontWeight: "bold" }}>
            Follow US and get a chance to win 80% off
          </div>

          <div style={{ width: "5%", color: "white", fontWeight: "bold" }}>
            Follow Us :
          </div>

          <div style={{ width: "1.5%", color: "white" }}>
            <FaInstagram />
          </div>
          <div style={{ color: "white", width: "1.5%" }}>
            <FiYoutube />
          </div>
          <div style={{ color: "white", width: "1.5%" }}>
            <SiFacebook />
          </div>
          <div style={{ color: "white", width: "1.5%" }}>
            <FiTwitter />
          </div>
          <div
            style={{
              height: "5vh",
              width: "30%",
              // backgroundColor: "red",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "10vh",
            width: "100%",
            border: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "green",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "20%",
              border: "none",
              display: "flex",
              flexDirection: "colunm",
              alignItems: "center",
              paddingBottom: "100px",
            }}
          ></div>

          <div
            style={{
              width: "40%",
            }}
          >
            <img
              style={{
                paddingLeft: "10px",
                position: "relative",
                height: "auto",
                width: "100px",
              }}
              src={Logo}
              alt=""
            />
          </div>

          <div
            style={{
              width: "80px",
              height: "40px",
              backgroundColor: "#072840",
              borderRadius: 50,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <p style={{ color: "white" }}>SHOP</p>
          </div>

          <div
            style={{
              width: "100px",
              height: "40px",
              //backgroundColor: "#072840",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            ABOUT US
          </div>

          <div
            style={{
              width: "140px",
              height: "40px",
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              //backgroundColor:'red'
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "gray",
                borderRadius: "8%",
                //  paddingLeft:32
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <p style={{ fontSize: "1.4rem", color: "white" }}>AS</p>
            </div>
            <div
              style={{
                width: "100px",
                height: "40px",
                alignItems: "flex-start",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                //  backgroundColor: "brown",
              }}
            >
              <div
                style={{
                  margin: 0,
                  fontWeight: "medium",
                }}
              >
                <p style={{ paddingLeft: 10, margin: 0, fontSize: "1.2rem" }}>
                  Welcome
                </p>
              </div>
              <div>
                <p style={{ paddingLeft: 10, fontSize: "0.8rem", margin: 0 }}>
                  Jane
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "100%",
              width: "22%",
              border: "none",
              display: "flex",
              flexDirection: "colunm",
              alignItems: "center",
              // backgroundColor: "blue",
            }}
          ></div>
        </div>
        <div
          style={{
            border: "none",
            borderBottom: "1px lightgray solid",
            display: "flex",
            flexDirection: "row",
            height: "60%",
            width: "100%",
            alignItems: "center",
            //   backgroundColor: "yellow",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "20%",
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              //  backgroundColor: "blue",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "60%",
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // backgroundColor: "green",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                border: "none",
                //borderBottom: "1px lightgray solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                // backgroundColor: "red",
              }}
            >
              <die
                style={{
                  height: "15%",
                  width: "60%",
                  border: "none",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    height: "50px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      border: "none",
                      width: "20%",
                      height: "100%",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      paddingTop: "15px",
                    }}
                  >
                    <p>ORDER HISTORY</p>
                  </div>
                  <div
                    style={{
                      width: "40%",
                      height: "100%",
                      borderBottom: "1px lightgray solid",
                      color: "gray",
                    }}
                  >
                    <p
                      style={{
                        marginTop: "25px",
                      }}
                    >
                      Search
                    </p>
                  </div>

                  <div
                    style={{
                      width: "28%",
                      borderBottom: "1px lightgray solid",
                      height: "100%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "90%",
                        height: "100%",
                        color: "gray",
                      }}
                    >
                      <p style={{ marginTop: "25px" }}>Category</p>
                    </div>
                    <div
                      style={{
                        width: "10%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      {" "}
                      <p style={{ marginTop: "40px" }}>
                        <PiCaretDownFill color="gray" />
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "10%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: "40px" }}>
                      <AiOutlineSearch color="black" />
                    </p>
                  </div>
                </div>
              </die>

              <div className="details">
                {data.map((item, index) => (
                  <div
                    style={{
                      width: "100%",
                      height: "8vh",
                      borderBottom: "2px #1D1D1D solid",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "flex-start",
                      paddingTop: "2px",
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        width: "8%",
                        // borderBottom: "1px lightgray solid",
                        height: "100%",
                        backgroundColor: "#000026", // Navy blue color code
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "flex",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "30%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        display: "flex",
                        paddingTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingLeft: "10px",
                          color: "gray",
                          margin: "0",
                        }}
                      >
                        #aabbcc
                      </p>
                      <p
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          paddingLeft: "10px",
                          paddingBottom: "10px",
                          margin: "0",
                        }}
                      >
                        {item.date}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        display: "flex",
                        paddingTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingLeft: "10px",
                          color: "gray",
                          margin: "0",
                        }}
                      >
                        Deliverd by
                      </p>
                      <p
                        style={{
                          paddingLeft: "10px",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          paddingBottom: "10px",
                          margin: "0",
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        display: "flex",
                        paddingTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          paddingLeft: "10px",
                          color: "gray",
                          margin: "0",
                        }}
                      >
                        Status
                      </p>
                      <p
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          paddingLeft: "10px",
                          paddingBottom: "10px",
                          color:
                            item.status === "DELIVERED"
                              ? "green"
                              : item.status === "ONGOING"
                              ? "orange"
                              : "inherit",
                          margin: "0",
                        }}
                      >
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "20%",
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              //  backgroundColor:"blue"
            }}
          ></div>
        </div>
        {/* <div
        style={{
          height: "28%",
          width: "100%",
          border: "none",
          borderBottom: "1px lightgray solid",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#072840",
        }}
      ></div> */}
      </div>
      <Footer />
    </>
  );
}

export default OrderHistory;
