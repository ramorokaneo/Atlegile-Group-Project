import React, { useState } from "react";
import mapImage from "./mapImage.png";
import { FaStar } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";
import { BiMessageAlt } from "react-icons/pi";

import { AiOutlineSearch } from "react-icons/ai";
import "./OrderHistory.css";

function Order() {
  const [isVisible, setIsVisible] = useState(true);

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

  return (
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
          height: "5%",
          width: "100%",
          border: "none",
          borderBottom: "1px lightgray solid",
          display: "flex",
          flexDirection: "row",

          alignItems: "center",
          backgroundColor: "#072840",
        }}
      >
        <span>Shohn's part</span>
      </div>
      <div
        style={{
          height: "7%",
          width: "100%",
          border: "none",
          borderBottom: "1px lightgray solid",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#072840",
        }}
      >
        <span>Dlozi's part</span>
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
            flexDirection: "colunm",
            alignItems: "center",
            //   backgroundColor: "blue",
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
            //   backgroundColor: "green",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              border: "none",
              // borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              // backgroundColor: "green",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "60%",
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
                  height: "96%",
                  width: "96%",
                  border: "none",
                  // borderBottom: "1px lightgray solid",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  // backgroundColor: "yellow",
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
                    //   backgroundColor: "blue",
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
                    height: "50%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "20px",
                    flexDirection: "column",
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
                    height: "40%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "flex-start",
                    paddingTop: "20px",
                    flexDirection: "column",
                    //backgroundColor: "yellow",
                  }}
                >
                  <div
                    style={{
                      height: "40%",
                      width: "100%",
                      //backgroundColor: "green",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "60%",
                      width: "100%",
                      //   backgroundColor: "yellow",
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
                        //   backgroundColor: "red",
                        justifyContent: "space-between",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          // paddingLeft: "10px",
                          margin: "0",
                        }}
                      >
                        Total
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
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
                width: "35%",
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
                    paddingLeft: "10px",
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
                      fontSize: "1rem",
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
                      fontSize: "1rem",
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
                  height: "20%",
                  width: "90%",
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
                  // borderBottom: "1px lightgray solid",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  // backgroundColor: "red",
                  //paddingTop: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    //  fontWeight: "bold",
                    //paddingLeft: "10px",
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
                  paddingBottom: "25px",
                  borderBottom: "1px white solid",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  In essence, AMS aims not to only he businesses grow but also
                  make a positive impact on society by nuturing local talent and
                  fostering sustanable businesses growth.
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
                {isVisible && (
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
                    onClick={handlePress}
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
                {!isVisible && (
                  <>
                    <div
                      style={{
                        marginTop: "20px",
                        width: "100px",
                        height: "30px",
                    //    border: "1px white solid",
                        borderRadius: 15,
                        display: "flex",
                        justifyContent: "space-between",
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
                    </div>
                    <div
                      style={{
                        marginTop: "1px",
                        width: "100px",
                        height: "30px",
                     //   border: "1px white solid",
                        borderRadius: 15,
                        display: "flex",
                        justifyContent: "space-between",
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
                    </div>
                    <div
                      style={{
                        marginTop: "1px",
                        width: "100px",
                        height: "30px",
                       // border: "1px white solid",
                        borderRadius: 15,
                        display: "flex",
                        justifyContent: "space-between",
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
                    </div>
                  </>
                )}
              </div>
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
          }}
        ></div>
      </div>
      <div
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
      ></div>
    </div>
  );
}

export default Order;
