import React, { useState } from "react";
//import mapImage from "./mapImage.png";

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

function Messages() {
  const [isVisible, setIsVisible] = useState(true);
  const [component1Visible, setComponent1Visible] = useState(true);
  const [component2Visible, setComponent2Visible] = useState(false);
  const [component3Visible, setComponent3Visible] = useState(false);

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
  ];

  return (
    <>
      

      <div
        style={{
          height: "100vh",
          width: "100vw",
          border: "none",
          //  borderBottom: "1px lightgray solid",
          display: "flex",
          //flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: "#072840",
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
            //  backgroundColor: "yellow",
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
            height: "5vh",
            width: "25vw",
            border: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            //    backgroundColor: "yellow",
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
              //   backgroundColor: "red",
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

      {/* <Footer /> */}
    </>
  );
}

export default Messages;
