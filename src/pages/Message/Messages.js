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
      messages: "HI Pleas drop the pakedge nea the green box at hte gate ",
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
              color: "white",
              fontSize: "1.4rem",
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
            display: "flex",
            flexDirection: "colunm",
            alignItems: "center",
            // backgroundColor: "blue",
          }}
        ></div>
      </div>

      <div
        style={{
          height: "85vh",
          width: "100vw",
          border: "none",
          borderBottom: "1px lightgray solid",
          display: "flex",
          //flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#072840",
        }}
      >
        <div
          style={{
            height: "85vh",
            width: "35vw",
            border: "none",
            borderBottom: "1px lightgray solid",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              height: "5vh",
              width: "35vw",
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
                margin: "5px",
                
              }}
            >
              <div
                style={{
                  backgroundColor:
                    item.status === "sent"
                      ? "#e6e6e6"
                      : item.status === "recieved"
                      ? "#072840"
                      : "#ffffff",
                  padding: "10px",
                  borderTopRightRadius:
                    item.status === "sent"
                      ? "10px"
                      : item.status === "recieved"
                      ? 0
                      : 0,
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",

                  borderTopLeftRadius:
                    item.status === "sent"
                      ? "0px"
                      : item.status === "recieved"
                      ? "10px"
                      : 0,

                  maxWidth: "70%",
                 
                  wordWrap: "break-word",
                  marginBottom: "10px",
                  display:"flex",
                  flexDirection:"row",
                 
                }}
              >
                <p style={{ height:"uuto",margin: 0, color: "white",
                
                // position:"absolute"  
                
                }}>{item.messages}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Messages;
