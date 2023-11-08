import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { PiCaretUpDownFill } from "react-icons/pi";
import clip from "./cilp.png";

const fakeUsersList = [
  {
    id: "01",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@mail....",
    location: "1235 Vilakazi",
  },
  {
    id: "02",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@mail....",
    location: "1235 Vilakazi",
  },
  {
    id: "03",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@mail....",
    location: "1235 Vilakazi",
  },
  {
    id: "04",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@mail....",
    location: "1235 Vilakazi",
  },
  {
    id: "05",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@mail....",
    location: "1235 Vilakazi",
  },
  {
    id: "06",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@mail....",
    location: "1235 Vilakazi",
  },
];

const fakeBusinessesList = [
  {
    id: "01",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
  },
  {
    id: "02",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
  },
  {
    id: "03",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
  },
  {
    id: "04",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
  },
  {
    id: "05",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
  },
];
export default function WelcomeToAMS() {
  const [piCaretColor, setPiCaretColor] = useState("gray");
  const [searchColor, setSearchColor] = useState("gray");

  const handlePiCaretClick = () => {
    setPiCaretColor(piCaretColor === "gray" ? "blue" : "gray");
  };

  const handleSearchClick = () => {
    setSearchColor(searchColor === "gray" ? "green" : "gray");
  };

  const handleNavigateToDashboard = () => {
    console.log("Dashboard");
  };

  const handleNavigateToBusinesses = () => {
    console.log("Businesses");
  };

  const handleNavigateToUsers = () => {
    console.log("Users");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "row",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "20%",
          height: "100vh",
          border: "none",
          borderRight: "1px lightgray solid",
          padding: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "lightgray",
            borderRadius: "100%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            marginTop: 5,
            marginBottom: 10,
            padding: 50,
            marginLeft: "35px",
          }}
        >
          S
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginRight: "20px",
          }}
        >
          <span style={{ fontSize: 40, fontWeight: 700 }}>Sarah</span>
          <span style={{ fontWeight: 600 }}>0123456789</span>
          <span style={{ fontWeight: 600 }}>example@gmail.com</span>
        </div>

        <div style={{ marginTop: 30 }}>
          <div
            onClick={handleNavigateToDashboard}
            style={{
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
              width: "90%",
              marginLeft: "20px",
            }}
          >
            <FaStar color="gray" style={{ marginRight: 25 }} />
            <span>Dashboard</span>
          </div>
          <div
            id="users-link"
            onClick={handleNavigateToUsers}
            style={{
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
              width: "90%",
              marginLeft: "20px",
              transition: "background-color 0.3s",
            }}
          >
            <FaStar color="gray" style={{ marginRight: 25 }} />
            <span>Users</span>
          </div>
          <div
            id="businesses-link"
            onClick={handleNavigateToBusinesses}
            style={{
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
              width: "90%",
              marginLeft: "20px",
              transition: "background-color 0.3s",
            }}
          >
            <FaStar color="gray" style={{ marginRight: 25 }} />
            <span>Businesses</span>
          </div>
        </div>
      </div>

      <div style={{ height: "100%", width: "80%", overflowY: "auto" }}>
        <div
          style={{
            backgroundColor: "#072840",
            height: "110px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              paddingLeft: 20,
              width: "80%",
            }}
          >
            Welcome to AMS
          </span>
          <div
            style={{
              backgroundImage: `url(${clip})`,
              width: "30%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "200%",
            }}
          ></div>
        </div>

        <div style={{ padding: 20 }}>
          <div
            style={{
              paddingBottom: 10,
              border: "none",
              borderBottom: "1px lightgray solid",
              marginLeft: 10,
            }}
          >
            <span style={{ fontWeight: 700 }}>DASHBOARD</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 50,
              paddingBottom: 50,
              marginTop: 10,
            }}
          >
            <div
              style={{ width: "10%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>Sales</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>
            <div
              style={{ width: "15%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>New Businesses</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>
            <div
              style={{ width: "10%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>New Users</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>
          </div>

          <div
            style={{
              paddingBottom: 10,
              border: "none",
              borderBottom: "1px, lightgray solid",
            }}
          >
            <span style={{ fontWeight: 700 }}>NEW USERS</span>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1, width: "50%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  padding: "10px 10px",
                  borderBottom: "1px lightgray solid",
                  backgroundColor: "#fafafa",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    width: "1%",
                    fontSize: "small",
                    marginRight: 50,
                    marginLeft: 10,
                  }}
                >
                  Name
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "flex-start",
                    alignItems: "center",
                    marginRight: 10,
                    // marginLeft: 10,
                  }}
                >
                  <PiCaretUpDownFill
                    color={piCaretColor}
                    onClick={handlePiCaretClick}
                  />
                  <AiOutlineSearch
                    color={searchColor}
                    onClick={handleSearchClick}
                  />
                </span>
                <span
                  style={{
                    border: "none",
                    borderRight: "1px lightgray solid",
                    paddingLeft: 5,
                  }}
                ></span>
                <span
                  style={{
                    fontWeight: 600,
                    // width: "25%",
                    fontSize: "small",
                    marginRight: 50,

                    marginLeft: 15,
                  }}
                >
                  Surname
                </span>
                <span
                  style={{
                    border: "none",
                    borderRight: "1px lightgray solid",
                    paddingLeft: 5,
                  }}
                ></span>
                <span
                  style={{
                    fontWeight: 600,
                    // width: "25%",
                    fontSize: "small",
                    marginRight: 60,

                    marginLeft: 15,
                  }}
                >
                  Phone
                </span>
                <span
                  style={{
                    border: "none",
                    borderRight: "1px lightgray solid",
                    paddingLeft: 5,
                  }}
                ></span>
                <span
                  style={{
                    fontWeight: 600,
                    // width: "25%",
                    fontSize: "small",
                    marginRight: 70,

                    marginLeft: 15,
                  }}
                >
                  Email
                </span>
                <span
                  style={{
                    border: "none",
                    borderRight: "1px lightgray solid",
                    paddingLeft: 5,
                  }}
                ></span>
                <span
                  style={{
                    fontWeight: 600,
                    // width: "25%",
                    fontSize: "small",
                    marginRight: 50,
                    marginLeft: 15,
                  }}
                >
                  Location
                </span>
              </div>
              {fakeUsersList.map((user) => (
                <div
                  key={user.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "10px",
                    marginLeft: "10px",
                    borderBottom: "1px lightgray solid",
                    marginRight: 10,
                  }}
                >
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {user.name}
                  </span>
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {user.surname}
                  </span>
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {user.phone}
                  </span>
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {user.email}
                  </span>
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {user.location}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ width: "1px", backgroundColor: "gray" }}></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginLeft: "10px",
                translate: "",
                // transform: ""
              }}
              className="new-business-container"
            >
              <div
                style={{
                  // display: "inline-block",
                  paddingBottom: 10,
                  border: "none",
                  // borderBottom: "1px, lightgray solid",
                }}
              >
                <span style={{ fontWeight: 700 }}>NEW BUSINESSES</span>
              </div>

              <div style={{ flex: 1, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    padding: "10px 10px",
                    borderBottom: "1px lightgray solid",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "small",
                      marginRight: "10px",
                    }}
                  >
                    Business Name
                  </span>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <PiCaretUpDownFill
                      color={piCaretColor}
                      onClick={handlePiCaretClick}
                    />
                    <AiOutlineSearch
                      color={searchColor}
                      onClick={handleSearchClick}
                    />
                  </span>
                  <span
                    style={{
                      border: "none",
                      borderLeft: "1px lightgray solid",
                      marginRight: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "small",
                        marginLeft: "20px",
                      }}
                    >
                      Reg Number
                      <PiCaretUpDownFill
                        style={{ marginLeft: "20px" }}
                        color={piCaretColor}
                        onClick={handlePiCaretClick}
                      />
                    </span>
                    <span
                      style={{
                        border: "none",
                        borderRight: "1px lightgray solid",
                        paddingRight: 10,
                        marginRight: "2px",
                      }}
                    ></span>

                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "small",
                        marginRight: "20px",
                        marginLeft: "20px",
                      }}
                    >
                      Type of Business
                    </span>
                    <span
                      style={{
                        border: "none",
                        borderRight: "1px lightgray solid",
                        paddingRight: 6,
                        marginLeft: "10px",
                      }}
                    >
                      <PiCaretUpDownFill
                        style={{}}
                        color={piCaretColor}
                        onClick={handlePiCaretClick}
                      />
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "small",
                        marginRight: "50px",
                        marginLeft: "20px",
                      }}
                    >
                      Industry
                    </span>
                    <span
                      style={{
                        border: "none",
                        // borderRight: "1px lightgray solid",
                        paddingLeft: 5,
                      }}
                    >
                      <PiCaretUpDownFill
                        color={piCaretColor}
                        onClick={handlePiCaretClick}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div></div>

              {fakeBusinessesList.map((business) => (
                <div
                  key={business.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    padding: "10px",
                    borderBottom: "1px lightgray solid",
                    marginRight: 15,
                  }}
                >
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {business.name}
                  </span>
                  <span
                    style={{
                      width: "25%",
                      fontSize: "small",
                      marginLeft: "10px",
                    }}
                  >
                    {business.regNum}
                  </span>
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {business.bizType}
                  </span>
                  <span style={{ width: "25%", fontSize: "small" }}>
                    {business.Industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
