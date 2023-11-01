import React, { useState } from "react";
import { FaStar, FaCaretUp, FaCaretDown } from "react-icons/fa";
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

  const handlePress = () => {
    console.log("Pressed");
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
      {/* Left Sidebar */}
      <div
        style={{
          width: "20%",
          height: "100%",
          border: "none",
          borderRight: "1px lightgray solid",
          padding: 20,
        }}
      >
        {/* Profile Info */}
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
        {/* Sidebar Navigation */}
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

      {/* Main Content */}
      <div style={{ height: "100%", width: "80%", overflowY: "auto" }}>
        {/* Header */}
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

        {/* Dashboard Section */}
        <div style={{ padding: 20 }}>
          {/* Dashboard Title */}
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

          {/* Dashboard Stats */}
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
            <span style={{ fontWeight: 700, }}>NEW USERS</span>
          </div>

          {/* Tables Container (Side by Side) */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* First Table (User Table) */}
            <div style={{ flex: 1 }}>
              {/* Table Header */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "10px 10px 0",
                  borderBottom: "1px lightgray solid",
                  backgroundColor: "#fafafa",
                }}
              >
                <span style={{ fontWeight: 600, width: "50%", fontSize:"small" }}>Name</span>
                <span
                  style={{
                    border: "none",
                    // borderRight: "1px lightgray solid",
                    alignItems: "center",
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
                    boarderRight: "1px lightgray solid",
                  }}
                />
                <span style={{ fontWeight: 600, width: "60%", fontSize:"small"  }}>Surname</span>
                <span style={{ fontWeight: 600, width: "60%", fontSize:"small" }}>Phone</span>
                <span style={{ fontWeight: 600, width: "60%", fontSize:"small"  }}>Email</span>
                <span style={{ fontWeight: 600, width: "60%", fontSize:"small"  }}>Location</span>
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
                  <span style={{ width: "60%", fontSize:"small"  }}>{user.name}</span>
                  <span style={{ width: "60%", fontSize:"small"  }}>{user.surname}</span>
                  <span style={{ width: "60%", fontSize:"small"  }}>{user.phone}</span>
                  <span style={{ width: "60%", fontSize:"small" }}>{user.email}</span>
                  <span style={{ width: "60%", fontSize:"small" }}>{user.location}</span>
                </div>
              ))}
            </div>
            <div
    style={{
      backgroundColor: "gray",
      colour: "gray",
      width: "10px",
      height: "100%",
      boarderRight: "1px lightgray solid",
    }}
  ></div>
            {/* Second Table (Business Table) */}
            <div style={{ flex: 1 }}>
              {/* Table Header */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "10px 10px 0",
                  borderBottom: "1px lightgray solid",
                  backgroundColor: "#fafafa",
                }}
                
              >
                <span style={{ fontWeight: 600, fontSize:"small", marginRight:"-10px" }}>Business Name</span>
                <span
                  style={{
                    border: "none",
                    paddingRight: 20,
                  }}
                >
                  <PiCaretUpDownFill color={piCaretColor} onClick={handlePiCaretClick} />
                  <AiOutlineSearch color={searchColor} onClick={handleSearchClick} />
                </span>
                <span
                  style={{
                    border: "none",
                    borderLeft: "1px lightgray solid",

                    marginRight: "110px",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize:"small", marginLeft:"20px"}}>
                    Reg Number
                    <PiCaretUpDownFill color={piCaretColor} onClick={handlePiCaretClick} />
                  </span>
                  <span
                    style={{
                      border: "none",
                      borderRight: "1px lightgray solid",
                      paddingRight: 10,
                      marginRight: "2px",
                    }}
                  ></span>
                  <span style={{ fontWeight: 600, fontSize:"small" }}>
                    Type of Business
                  </span>
                  <span
                    style={{
                      border: "none",
                      borderRight: "1px lightgray solid",
                      paddingRight: 10,
                      marginLeft: "1px",
                    }}
                  >
                    <PiCaretUpDownFill color={piCaretColor} onClick={handlePiCaretClick} />
                  </span>
                  <span style={{ fontWeight: 600, fontSize:"small" }}>
                    Industry
                  </span>
                  <span
                    style={{
                      border: "none",
                      borderRight: "1px lightgray solid",
                      paddingLeft: 5,
                    }}
                  >
                    <PiCaretUpDownFill color={piCaretColor} onClick={handlePiCaretClick} />
                  </span>
                </span>
              </div>
              {fakeBusinessesList.map((business) => (
                <div
                  key={business.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "10px",
                    borderBottom: "1px lightgray solid",
                    marginRight: 15,
                  }}
                >
                  <span style={{ width: "75%", fontSize:"small"  }}>{business.name}</span>
                  <span style={{ width: "50%", fontSize:"small", marginLeft: "15px" }}>{business.regNum}</span>
                  <span style={{ width: "65%", fontSize:"small" }}>{business.bizType}</span>
                  <span style={{ width: "55%", fontSize:"small"  }}>{business.Industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
