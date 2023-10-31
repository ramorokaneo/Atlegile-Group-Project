import React from "react";
import { FaStar } from "react-icons/fa";
import clipArt from "./clipArtBusinesses.png";
import WelcomeToAMS from "./welcomeToAMS";

const fakeUsersList = [
  {
    id: "00",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@gmail.com",
    location: "1235 Vilakazi",
  },
  {
    id: "00",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@gmail.com",
    location: "1235 Vilakazi",
  },
  {
    id: "00",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@gmail.com",
    location: "1235 Vilakazi",
  },
  {
    id: "00",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@gmail.com",
    location: "1235 Vilakazi",
  },
  {
    id: "00",
    name: "Jane",
    surname: "Doe",
    phone: "0123456789",
    email: "example@gmail.com",
    location: "1235 Vilakazi",
  },
  // Add more user objects here
];

const fakeBusinessesList = [
  {
    id: "00",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
    actions: "View Details",
  },
  {
    id: "00",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
    actions: "View Details",
  },
  {
    id: "00",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
    actions: "View Details",
  },
  {
    id: "00",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
    actions: "View Details",
  },
  {
    id: "00",
    name: "Tech Logistics",
    regNum: "N/A",
    bizType: "Township",
    Industry: "Technology",
    actions: "View Details",
  },
  // Add more business objects here
];

export default function welcomeToAMS() {
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
          width: "15%",
          height:"250%",
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
            width: 180,
            height: 180,
            marginTop: 30,
            padding: 50, 
          }}
        >
          S
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: 40, fontWeight: 700 }}>Sarah</span>
          <span style={{ fontWeight: 600 }}>0123456789</span>
          <span style={{ fontWeight: 600 }}>example@gmail.com</span>
        </div>

        <div style={{ paddingTop: 10 }}>
          <div
            style={{
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <FaStar color="gray" style={{ marginRight: 25 }} />
            <span>Dashboard</span>
          </div>
          <div
            style={{
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <FaStar color="gray" style={{ marginRight: 25 }} />
            <span>Users</span>
          </div>
          <div
            style={{
              border: "none",
              borderBottom: "1px lightgray solid",
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <FaStar color="gray" style={{ marginRight: 25 }} />
            <span>Businesses</span>
          </div>
        </div>
      </div>

      <div style={{ height: "120%", width: "90%" }}>
        <div
          style={{
            // height: "30%",
            backgroundColor: "#072840",
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
              backgroundImage: `url(${clipArt})`,
              width: "20%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "120%",
            }}
          ></div>
        </div>

        <div style={{ padding: 40 }}>
          <div
            style={{
              paddingBottom: 10,
              border: "none",
              borderBottom: "1px lightgray solid",
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
            }}
          >
            <div
              style={{ width: "20%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>Sales</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>

            <div
              style={{ width: "20%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>New Businesses</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>

            <div
              style={{ width: "20%", display: "flex", flexDirection: "column" }}
            >
              <span style={{ color: "gray" }}>New Users</span>
              <span style={{ fontWeight: 400 }}>300</span>
            </div>
          </div>
          <div
            style={{
              paddingBottom: 10,
              border: "none",
              borderBottom: "1px lightgray solid",
            }}
          >
            <span style={{ fontWeight: 700 }}>NEW USERS</span>
          </div>

          {/* First Table */}
          <div>
            {/* Table Header */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px 10px 0",
                borderBottom: "1px lightgray solid",
              }}
            >
              <span style={{ fontWeight: 700, width: "20%" }}>Name</span>
              <span style={{ fontWeight: 600, width: "20%" }}>Surname</span>
              <span style={{ fontWeight: 600, width: "20%" }}>Phone</span>
              <span style={{ fontWeight: 600, width: "20%" }}>Email</span>
              <span style={{ fontWeight: 600, width: "20%" }}>Location</span>
            </div>
            {fakeUsersList.map((user) => (
              <div
                key={user.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px lightgray solid",
                }}
              >
                {/* Table Rows */}
                <span style={{ width: "20%" }}>{user.name}</span>
                <span style={{ width: "20%" }}>{user.surname}</span>
                <span style={{ width: "20%" }}>{user.phone}</span>
                <span style={{ width: "20%" }}>{user.email}</span>
                <span style={{ width: "20%" }}>{user.location}</span>
               
              </div>
            ))}
          </div>

          {/* Second Table */}
          <div>
            {/* Table Header */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px 10px 0",
                borderBottom: "1px lightgray solid",
              }}
            >
              <span style={{ fontWeight: 700, width: "20%" }}>Business Name</span>
              <span style={{ fontWeight: 600, width: "20%" }}>Reg Number</span>
              <span style={{ fontWeight: 600, width: "20%" }}>Type of Business</span>
              <span style={{ fontWeight: 600, width: "20%" }}>Industry</span>
            
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
                }}
              >
                {/* Table Rows */}
                <span style={{ width: "20%" }}>{business.name}</span>
                <span style={{ width: "20%" }}>{business.regNum}</span>
                <span style={{ width: "20%" }}>{business.bizType}</span>
                <span style={{ width: "20%" }}>{business.Industry}</span>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}