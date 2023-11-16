import React, { useState } from "react";
import mapImage from "./mapImage.png";

//import "./OrderHistory.css";
//import "./LandingPageHeader/landingpageheader.css";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import Logo from "./Logo.png";

import Footer from "../../componets/Footer/Footer";
import Datetime from "react-datetime";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function DeliveryDone() {
  const [isVisible, setIsVisible] = useState(true);
  const [component1Visible, setComponent1Visible] = useState(true);
  const [component2Visible, setComponent2Visible] = useState(false);
  const [component3Visible, setComponent3Visible] = useState(false);
  const [chatmodelVisble, setChatmodelVisible] = useState(false);
  const handleComponentA = () => {
    setComponent1Visible(false);
    setComponent2Visible(true);
  };

  const handleComponentB = () => {
    setComponent1Visible(false);
    setComponent2Visible(false);
    setComponent3Visible(true);
  };

  const handleDateChange = () => {};
  const handlePress = () => {
    setIsVisible(false); // Hide the first component upon clicking
  };
  function calculateBackgroundProperties() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let backgroundPositionX, backgroundPositionY, backgroundSize;

    const screenSizes = [
      {
        width: 1515,
        height: 1441,
        positionX: 0,
        positionY: 0,
        size: "800px 600px", // Adjust the size to your desired dimensions
      },
      {
        width: 1738,
        height: 871,
        positionX: 0,
        positionY: 0,
        size: "800px 600px", // Adjust the size to your desired dimensions
      },
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
    { product: "HD TV", item: 1, amount: 4500.0 },
    { product: "HD TV", item: 1, amount: 4500.0 },
    { product: "HD TV", item: 1, amount: 4500.0 },
    { product: "HD TV", item: 1, amount: 4500.0 },
  ];

  const Dates = [
    { month: "Jul", date: 2, status: "PRESSED" },
    { month: "Jul", date: 2, status: "null" },
    { month: "Jul", date: 2, status: "null" },
  ];

  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [date, setDate] = useState(null); // Initialize it to null
  const handleDateTimeSelect = (item) => {
    const selectedDate = new Date().toLocaleDateString();
    const selectedTime = new Date().toLocaleTimeString();
    const selectedDateTime = `${selectedDate} ${selectedTime}`;
    setSelectedDateTime(selectedDateTime);
    setDate(selectedDateTime);
  };

  const handleMessageButtonClick = () => {
    setChatmodelVisible(!chatmodelVisble);
  };

  const chats = [
    {
      dateAntTime: "Wed 8:21 AM ",
      image: "OP",
      status: "sent",
      messages: "Hello",
    },
    {
      dateAntTime: "Wed 8:21 AM ",
      image: "OP",
      status: "recieved",
      messages:
        "HI Pleas drop the pakedge nea the green box at hte gate leas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green bo ",
    },
    {
      dateAntTime: "Wed 8:21 AM ",
      image: "OP",
      status: "sent",
      messages: "i see it, okey i will live it there",
    },
    {
      dateAntTime: "Wed 8:21 AM ",
      image: "OP",
      status: "recieved",
      messages: "Hello",
    },
    {
      dateAntTime: "Wed 8:21 AM ",
      image: "OP",
      status: "recieved",
      messages:
        "HI Pleas drop the pakedge nea the green box at hte gate leas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green bo ",
    },
    {
      dateAntTime: "Wed 8:21 AM ",
      image: "OP",
      status: "recieved",
      messages:
        "HI Pleas drop the pakedge nea the green box at hte gate leas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green bo ",
    },
    {
      dateAntTime: "Wed 8:21 AM ",
      image: "OP",
      status: "recieved",
      messages:
        "HI Pleas drop the pakedge nea the green box at hte gate leas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green boleas drop the pakedge nea the green bo ",
    },
  ];

  return (
    <>
      {chatmodelVisble && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              height: "100vh",
              width: "100vw",
              //  border: "none",
              //  borderBottom: "1px lightgray solid",
              display: "flex",
              //flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              //backgroundColor: "#072840",
              // flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "90vh",
                width: "27vw",
                //border: "1px solid gray",
                border: "1px lightgray solid",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "85vh",
                  width: "25vw",
                  border: "none",
                  //   borderBottom: "1px lightgray solid",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "white",
                  zIndex: 900,
                  overflowY: "auto",

                 
                }}
                
              >
                <div
                  style={{
                    height: "5vh",
                    width: "25vw",
                    justifyContent: "flex-start",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  CHAT TO DRIVER
                </div>
                {chats.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      alignSelf:
                        item.status === "sent"
                          ? "flex-start"
                          : item.status === "recieved"
                          ? "flex-end"
                          : "inherit",

                      maxWidth: "60%",
                      display: "flex",
                      flexDirection: "row",
                    
                    }}
                  >
                    {item.status === "sent" && (
                      <div
                        style={{
                          minHeight: "30px",
                          minWidth: "30px",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          display: "flex",
                          marginRight: "10px",
                        }}
                      >
                        <div
                          style={{
                            height: "30px",
                            width: "30px",
                            color: "white",
                            backgroundColor: "gray",
                            borderRadius: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          OP
                        </div>
                      </div>
                    )}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          backgroundColor:
                            item.status === "sent"
                              ? "#e6e6e6"
                              : item.status === "recieved"
                              ? "#072840"
                              : "#ffffff",
                          padding: "10px",

                          maxWidth: "100%",

                          wordWrap: "break-word",
                          display: "flex",
                          borderTopRightRadius:
                            item.status === "sent"
                              ? "20px"
                              : item.status === "recieved"
                              ? "20px"
                              : 0,
                          borderBottomRightRadius:
                            item.status === "sent"
                              ? "20px"
                              : item.status === "recieved"
                              ? 0
                              : 0,

                          borderBottomLeftRadius: "20px",

                          borderTopLeftRadius:
                            item.status === "sent"
                              ? "0px"
                              : item.status === "recieved"
                              ? "20px"
                              : 0,
                        }}
                      >
                        <p
                          style={{
                            height: "auto",
                            margin: 0,
                            color:
                              item.status === "sent"
                                ? "black"
                                : item.status === "recieved"
                                ? "#ffffff"
                                : "black",
                          }}
                        >
                          {item.messages}
                        </p>
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          width: "100%",
                          height: "outo",
                          display: "flex",
                          justifyContent:
                            item.status === "sent"
                              ? "flex-start"
                              : item.status === "recieved"
                              ? "flex-end"
                              : "inherit",
                        }}
                      >
                        {item.dateAntTime}
                      </div>
                    </div>
                    {item.status === "recieved" && (
                      <div
                        style={{
                          minHeight: "30px",
                          minWidth: "30px",
                          justifyContent: "flex-end",
                          alignItems: "flext-start",
                          display: "flex",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            height: "30px",
                            width: "30px",
                            color: "white",
                            backgroundColor: "gray",
                            borderRadius: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          OP
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div
                style={{
                  height: "12vh",
                  width: "25vw",
                  border: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
              //   backgroundColor: "blue",
                }}
              >
                <div
                  style={{
                    height: "5vh",
                    width: "20vw",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                 //      backgroundColor: "red",
                  }}
                >
                  <div style={{ height: "25px", width: "100%", color: "gray" }}>
                    Sent Message
                  </div>
                  <div
                    style={{
                      flex: 1,
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderBottom: " 1px solid black",
                      fontSize: "1.3rem",
                   //   backgroundColor: "yellow",
                    }}
                  >
                    Thank you
                  </div>
                </div>
                <div
                  style={{
                    width: "5vw",
                    height: "5vh",
                    // border: "none",
                    display: "flex",
                    //  flexDirection: "row",
                    alignItems: "center",
                   // backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "5vw",
                      height: "5vh",
                      backgroundColor: "#072840",
                      borderRadius: "40px",
                      display: "flex",
                      //  flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    SEND
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
              color: "white",
            }}
          >
            {" "}
            SHOP
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
                fontSize: "1.4rem",
                color: "white",
              }}
            >
              AS
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
              // borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "colunm",
              alignItems: "center",
              //  backgroundColor: "blue",
            }}
          ></div>
        </div>
        <div
          style={{
            border: "none",
            // borderBottom: "1px lightgray solid",
            display: "flex",
            flexDirection: "row",
            // height: "76vh",
            width: "100%",
            alignItems: "center",
            //backgroundColor: "yellow",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "20%",
              border: "none",
              // borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "colunm",
              alignItems: "center",
              //  backgroundColor: "blue",
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "60%",
              border: "none",
              // borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // backgroundColor: "green",
            }}
          >
            <div
              style={{
                height: "76vh",
                width: "100%",
                border: "none",
                // borderBottom: "1px lightgray solid",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                //backgroundColor: "green",
              }}
            >
              <div
                style={{
                  height: "76vh",
                  width: "40vw",
                  border: "none",
                  // borderBottom: "1px lightgray solid",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  //   backgroundColor: "red",
                }}
              >
                <div
                  style={{
                    height: "96%",
                    width: "96%",
                    border: "none",
                    // borderBottom: "1px lightgray solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    //    backgroundColor: "yellow",
                    //paddingTop:'10px'
                  }}
                >
                  {" "}
                  <div
                    style={{
                      width: "100%",
                      height: "10%",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "flex-start",
                      paddingTop: "20px",
                      flexDirection: "column",
                      //     backgroundColor: "blue",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",

                        margin: "0",
                      }}
                    >
                      ORDER #AABBCC
                    </div>
                    <div
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: "bold",
                        margin: "0",
                      }}
                    >
                      PRODUCTS
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",

                        margin: "0",
                      }}
                    >
                      27 JUL, 202X
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "55vh",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "flex-start",
                      paddingTop: "40px",
                      flexDirection: "column",
                      //backgroundColor:"brown"
                    }}
                  >
                    {data.map((item, index) => (
                      <div
                        style={{
                          width: "100%",
                          height: "2",
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
                            width: "12%",
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
                            Product
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
                            {item.product}
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
                            Items
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
                            {item.item}
                          </p>
                        </div>
                        <div
                          style={{
                            width: "20%",
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
                            Amaount
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
                            R{item.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "10vh",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "flex-start",
                      // paddingTop: "20px",
                      flexDirection: "column",
                      //   backgroundColor: "yellow",
                    }}
                  >
                    <div
                      style={{
                        height: "10vh",
                        width: "100%",
                        //    backgroundColor: "green",
                      }}
                    >
                      <div
                        style={{
                          height: "22%",
                          width: "100%",
                          //    backgroundColor: "green",
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            //    paddingLeft: "10px",
                            margin: "0",
                          }}
                        >
                          Order Summery
                        </p>
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            paddingLeft: "10px",
                            margin: "0",
                          }}
                        >
                          R3000.00
                        </p>
                      </div>
                      <div
                        style={{
                          height: "22%",
                          width: "100%",
                          //    backgroundColor: "yellow",
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            //  paddingLeft: "10px",
                            margin: "0",
                          }}
                        >
                          Delivery
                        </p>
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            paddingLeft: "10px",
                            margin: "0",
                          }}
                        >
                          R150.00
                        </p>
                      </div>
                      <div
                        style={{
                          height: "22%",
                          width: "100%",
                          //  backgroundColor: "green",
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            //   paddingLeft: "30px",
                            margin: "0",
                          }}
                        >
                          Agent Referal
                        </p>
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            paddingLeft: "10px",
                            margin: "0",
                          }}
                        >
                          10%
                        </p>
                      </div>
                      <div
                        style={{
                          height: "32%",
                          width: "100%",
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            // paddingLeft: "10px",
                            margin: "0",
                          }}
                        >
                          Total
                        </p>
                        <p
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            paddingLeft: "10px",
                            margin: "0",
                          }}
                        >
                          R3170.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  height: "96%",
                  width: "20vw",
                  border: "none",
                  // borderBottom: "1px lightgray solid",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "#072840",
                }}
              >
                <div
                  style={{
                    height: "8%",
                    width: "90%",
                    border: "none",
                    // borderBottom: "1px lightgray solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    //   backgroundColor: "yellow",
                    paddingTop: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: "bold",
                      // paddingLeft: "10px",
                      margin: "0",
                      color: "white",
                    }}
                  >
                    DELIVERY DETAILS
                  </p>
                </div>
                <div
                  style={{
                    height: "12%",
                    width: "90%",
                    border: "none",
                    borderBottom: "1px white solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      height: "20%",
                      width: "100%",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "gray",
                        margin: "0",
                      }}
                    >
                      Delivery Address
                    </p>
                  </div>
                  <div
                    style={{
                      height: "40%",
                      width: "100%",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "White",
                        margin: "0",
                      }}
                    >
                      567 Zamakulingisa St,Emdeni South,Soweto
                    </p>
                  </div>
                  <div
                    style={{
                      height: "40%",
                      width: "100%",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "white",
                        margin: "0",
                      }}
                    >
                      1861
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${mapImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
                    backgroundSize: backgroundSize,
                    height: "14vh",
                    width: "17vw",
                    paddingTop: "10px",
                    borderRadius: 20,
                    marginBottom: "10px",
                  }}
                ></div>
                <div
                  style={{
                    height: "3%",
                    width: "90%",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "grey",
                      margin: "0",
                    }}
                  >
                    Delivery Notes
                  </p>
                </div>
                <div
                  style={{
                    height: "13%",
                    width: "90%",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    borderBottom: "1px white solid",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "white",
                      margin: "0",
                    }}
                  >
                    In essence, AMS aims not to only he businesses grow but also
                    make a positive impact on society by nuturing local talent
                    and fostering sustanable businesses growth.
                  </p>
                </div>
                <div
                  style={{
                    width: "90%",
                    border: "none",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  {component1Visible && (
                    <div
                      style={{
                        marginTop: "20px",
                        width: "100px",
                        height: "30px",
                        border: "1px white solid",
                        borderRadius: 15,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      onClick={handleMessageButtonClick}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "white",
                          margin: "0",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          marginLeft: "5px",
                        }}
                      >
                        MESSAGE
                      </p>
                      <div
                        style={{
                          height: "18px",
                          width: "18px",
                          borderRadius: 8,
                          backgroundColor: "gray",
                          marginRight: "5px",
                        }}
                      ></div>
                    </div>
                  )}
                  {component2Visible && (
                    <>
                      <div
                        style={{
                          width: "100%",
                          height: "90%",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          flexDirection: "column",
                          // backgroundColor: "red",
                        }}
                      >
                        <div
                          style={{
                            width: "300px",
                            height: "30px",
                            borderRadius: 15,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            style={{
                              height: "12px",
                              width: "12px",
                              borderRadius: 8,
                              backgroundColor: "gray",
                              marginRight: "5px",
                              marginTop: "10px",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                            }}
                          ></div>
                          <p
                            style={{
                              color: "white",
                              // marginTop: "10px",
                              height: "100%",
                              marginRight: "5px",
                              marginTop: "20px",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            Preocesing
                          </p>
                        </div>
                        <div
                          style={{
                            marginTop: "1px",
                            width: "300px",
                            height: "30px",
                            borderRadius: 15,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              height: "12px",
                              width: "12px",
                              borderRadius: 8,
                              backgroundColor: "gray",
                              marginRight: "5px",
                              marginTop: "10px",
                            }}
                          ></div>
                          <p
                            style={{
                              color: "white",
                              //marginTop: "10px",
                              height: "100%",
                              marginRight: "5px",
                              marginTop: "20px",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            On the way
                          </p>
                        </div>
                        <div
                          style={{
                            marginTop: "1px",
                            width: "300px",
                            height: "30px",
                            borderRadius: 15,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              height: "12px",
                              width: "12px",
                              borderRadius: 8,
                              backgroundColor: "gray",
                              marginRight: "5px",
                              marginTop: "10px",
                            }}
                          ></div>
                          <p
                            style={{
                              color: "white",
                              //  marginTop: "10px",
                              height: "100%",
                              marginRight: "5px",
                              marginTop: "20px",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            Delivered
                          </p>
                        </div>
                        <div
                          style={{
                            marginTop: "10px",
                            width: "100px",
                            height: "30px",
                            border: "1px white solid",
                            borderRadius: 15,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "white",
                              margin: "0",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              marginLeft: "5px",
                            }}
                          >
                            MESSAGE
                          </p>
                          <div
                            style={{
                              height: "18px",
                              width: "18px",
                              borderRadius: 8,
                              backgroundColor: "gray",
                              marginRight: "5px",
                            }}
                          ></div>
                        </div>
                        <div
                          style={{
                            height: "46px",
                            width: "100%",
                            marginRight: "5px",
                            marginTop: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              height: "40%",
                              width: "20%",
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                height: "100%",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              AUTH PIN
                            </p>
                          </div>
                          <div
                            style={{
                              height: "60%",
                              width: "20%",
                              //backgroundColor: "blue",
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                              marginTop: "5px",
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                height: "100%",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                fontSize: "2rem",
                                fontWeight: "bold",
                              }}
                            >
                              1234
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "20%",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            height: "30px",
                            borderRadius: 15,
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            border: "1px white solid",
                            marginTop: "30px",
                            fontSize: "1rem",
                            color: "white",
                          }}
                          onClick={handleComponentB}
                        >
                          ONGOING
                        </div>
                      </div>
                    </>
                  )}

                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      //  backgroundColor: "red",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {component3Visible && (
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          {/* Component 1 */}
                          <div
                            style={{
                              position: "relative",
                              height: "70px",
                              width: "60px",
                              marginTop: "30px",
                              display: "flex",
                              flexDirection: "column",
                              border: "1px white solid",
                              marginLeft: "10px",
                            }}
                            //  onClick={handleDateTimeSelect}
                          >
                            <div
                              style={{
                                height: "50%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "1rem",
                                  color: "white",
                                  paddingTop: "10px",
                                }}
                              >
                                Jul
                              </p>
                            </div>
                            <div
                              style={{
                                height: "50%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "1.5rem",
                                  color: "white",
                                  fontWeight: "bold",
                                  paddingBottom: "10px",
                                }}
                              >
                                2
                              </p>
                            </div>
                          </div>
                          {/* Component 2 */}
                          <div
                            style={{
                              position: "relative",
                              height: "70px",
                              width: "60px",
                              marginTop: "30px",
                              display: "flex",
                              flexDirection: "column",
                              border: "1px white solid",
                              marginLeft: "10px",
                            }}
                            //  onClick={handleDateTimeSelect}
                          >
                            <div
                              style={{
                                height: "50%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "1rem",
                                  color: "white",
                                  paddingTop: "10px",
                                }}
                              >
                                Jul
                              </p>
                            </div>
                            <div
                              style={{
                                height: "50%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "1.5rem",
                                  color: "white",
                                  fontWeight: "bold",
                                  paddingBottom: "10px",
                                }}
                              >
                                2
                              </p>
                            </div>
                          </div>

                          {/* Component 3 */}
                          <div
                            style={{
                              position: "relative",
                              height: "70px",
                              width: "60px",
                              marginTop: "30px",
                              display: "flex",
                              flexDirection: "column",
                              border: "1px white solid",
                              marginLeft: "10px",
                            }}
                            //  onClick={handleDateTimeSelect}
                          >
                            <div
                              style={{
                                height: "50%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "1rem",
                                  color: "white",
                                  paddingTop: "10px",
                                }}
                              >
                                Jul
                              </p>
                            </div>
                            <div
                              style={{
                                height: "50%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "1.5rem",
                                  color: "white",
                                  fontWeight: "bold",
                                  paddingBottom: "10px",
                                }}
                              >
                                2
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {component3Visible && (
                      <div
                        style={{
                          width: "100%",
                          height: "20%",
                          //   backgroundColor: "yellow",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "30px",
                            //backgroundColor: "red",
                            borderRadius: 20,
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                            border: "1px white solid",
                            fontSize: "1.2rem",
                            color: "white",
                            // fontWeight: "bold",
                            paddingBottom: "10px",
                          }}
                        >
                          CHECKOUT
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "20%",
              border: "none",
              // borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              //  backgroundColor:'red'
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DeliveryDone;
