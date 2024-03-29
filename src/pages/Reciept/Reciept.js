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
import { BsCheckSquare } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
// import Footer from "../../componets/Footer/Footer";
import Datetime from "react-datetime";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Footer from "../../Components/Footer/Footer"

function Reciept() {
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


  const handleNavigate =()=>{
     console.log('navigate to shpoing')
  }
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
          width: "100%",
          border: "none",
          //   borderBottom: "1px lightgray solid",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          //   backgroundColor: "#072840",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "85vh",
            width: "60%",
            border: "none",
            //   borderBottom: "1px lightgray solid",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            // backgroundColor: "yellow",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "25vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <BsCheckSquare
              style={{ color: "green", width: "150px", height: "150px" }}
            />
          </div>
          <div
            style={{
              // backgroundColor: "red",
              width: "60vw",
              height: "10vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            THANK YOU FOR YOUR PATCHASE
          </div>
          <div
            style={{
              //   backgroundColor: "yellow",
              width: "100%",
              height: "5vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <div
              style={{
                height: "12vh",
                width: "69%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              your order has been sucdessfuly placed, and we apreciate your
              trust in our products/services
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "red",
              width: "100%",
              height: "12vh",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                // backgroundColor: "red",
                height: "12vh",
                width: "15vw",
                alignItems: "flex-start",
                display: "flex",
                justifyContent: "flex-start",

                flexDirection: "column",
              }}
            >
              <div>Order Ditails:</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems:"center",
                  flexDirection: "row",
                }}
              >
                <GoDotFill />
                <div>Order Number:#AABBCC</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems:"center",
                  flexDirection: "row",
                }}
              >
                <GoDotFill />
                <div>Date:23 Oct 202x</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems:"center",
                  flexDirection: "row",
                }}
              >
                <GoDotFill />
                <div>Total Amount: R4500.00</div>
              </div>

             
             
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "15vh",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "12vh",
                width: "69%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              our team is working diligently to process and ship your order. If
              you have any question or concern, our customer support is here to
              help. Contuct us at 0123456789
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "red",
              width: "100%",
              height: "15vh",
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "5vh",
                width: "13vw",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                backgroundColor: "#072840",
                borderRadius: 50,
                color: "white",
                cursor:"pointer"
              }}
              onClick={handleNavigate}
            >
              CONTINUE SHOPING
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reciept;
