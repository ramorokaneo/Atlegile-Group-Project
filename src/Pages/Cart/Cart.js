import React, { useRef } from "react";
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
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../componets/Footer/Footer";
// import Datetime from "react-datetime";
// import DatePicker from "react-datepicker";

function Cart() {
  // const [isVisible, setIsVisible] = useState(true);
  // const [component1Visible, setComponent1Visible] = useState(true);
  // const [component2Visible, setComponent2Visible] = useState(false);
  // const [component3Visible, setComponent3Visible] = useState(false);

  // const handleComponentA = () => {
  //   setComponent1Visible(false);
  //   setComponent2Visible(true);
  // };

  // const handleComponentB = () => {
  //   setComponent1Visible(false);
  //   setComponent2Visible(false);
  //   setComponent3Visible(true);
  // };

  // const handleDateChange = () => {};
  // const handlePress = () => {
  //   setIsVisible(false); // Hide the first component upon clicking
  // };
  const submitRef = useRef(null);
  const handleCheckout = () => {
    submitRef.current.click();
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

  // const Dates = [
  //   { month: "Jul", date: 2, status: "PRESSED" },
  //   { month: "Jul", date: 2, status: "null" },
  //   { month: "Jul", date: 2, status: "null" },
  // ];

  // const [selectedDateTime, setSelectedDateTime] = useState(null);
  // const [date, setDate] = useState(null); // Initialize it to null
  // const handleDateTimeSelect = (item) => {
  //   const selectedDate = new Date().toLocaleDateString();
  //   const selectedTime = new Date().toLocaleTimeString();
  //   const selectedDateTime = `${selectedDate} ${selectedTime}`;
  //   setSelectedDateTime(selectedDateTime);
  //   setDate(selectedDateTime);
  // };

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
            //backgroundColor: "green",
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
              // backgroundColor: "blue",
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
              //backgroundColor: "blue",
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
                  // backgroundColor: "red",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                    paddingRight: 20,
                    // borderBottom: "1px lightgray solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    //backgroundColor: "yellow",
                    //paddingTop:'10px'
                  }}
                >
                  {" "}
                  <div
                    style={{
                      width: "26vw",
                      height: "13vh",
                      justifyContent: "space-between",
                      display: "flex",
                      alignItems: "flex-start",
                      // paddingTop: "20px",
                      flexDirection: "column",
                      //backgroundColor: "blue",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1rem",
                        //  fontWeight: "bold",
                        height: "6vh",
                        width: "26vw",
                        color: "gray",
                        // margin: "0",
                        // backgroundColor: "green",
                      }}
                    >
                      Account / Cart /
                    </div>
                    <div
                      style={{
                        width: "26vh",
                        height: "7vh",
                        justifyContent: "flex-start",
                        display: "flex",
                        alignItems: "flex-start",
                        // paddingTop: "20px",
                        flexDirection: "column",
                        //  backgroundColor: "red",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.7rem",
                          fontWeight: "bold",
                        }}
                      >
                        CART
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",

                          // margin: "0",
                        }}
                      >
                        27 JUL, 202X
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "60vh",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "flex-start",
                      //  paddingTop: "40px",
                      flexDirection: "column",
                      //      backgroundColor: "brown",
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
                  height: "100%",
                  width: "20vw",
                  border: "none",
                  // borderBottom: "1px lightgray solid",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "#072840",
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    //height: "8%",
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
                    //height: "12%",
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
                      //height: "40%",
                      width: "100%",
                      justifyContent: "flex-start",
                      display: "flex",
                      alignItems: "flex-start",
                      //backgroundColor: "yellow",
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
                    //marginBottom: "10px",
                  }}
                ></div>
                <div
                  style={{
                    //height: "3%",
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
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "white",
                    }}
                  >
                    Select delivery date
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
                    //backgroundColor: "green",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      //alignItems: "flex-start",
                      flexDirection: "column",
                      //backgroundColor: "red",
                      paddingBottom: 25,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {/* Component 1 */}
                      <div
                        style={{
                          position: "relative",
                          height: "70px",
                          width: "60px",
                          //marginTop: "30px",
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
                          //marginTop: "30px",
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
                          //marginTop: "30px",
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

                    <div
                      style={{
                        width: "100%",
                        // height: "30px",
                        //backgroundColor: "red",
                        borderRadius: 20,
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        border: "1px white solid",
                        fontSize: "1.2rem",
                        color: "white",
                        padding: 5,
                        cursor:"pointer"
                        // fontWeight: "bold",
                        // paddingBottom: "10px",
                      }}

                      onClick={handleCheckout}
                    >
                      CHECKOUT{" "}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        color: "white",
                        display: "none",
                      }}
                    >
                      <form
                        action="https://sandbox.payfast.co.za​/eng/process"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="merchant_id"
                          value="10000100"
                        />
                        <input
                          type="hidden"
                          name="merchant_key"
                          value="46f0cd694581a"
                        />
                        <input
                          type="hidden"
                          name="return_url"
                          value="https://atlegilemarketing.firebaseapp.com/"
                        />
                        <input
                          type="hidden"
                          name="cancel_url"
                          value="https://atlegilemarketing.firebaseapp.com/"
                        />
                        <input
                          type="hidden"
                          name="notify_url"
                          value="https://atlegilemarketing.firebaseapp.com/"
                        />

                        <input type="hidden" name="amount" value="3170.00" />
                        <input
                          type="hidden"
                          name="item_name"
                          value="Test Product"
                        />
                        <input type="submit" id="submitBTN" ref={submitRef} />
                      </form>
                    </div>
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

export default Cart;
