import React from "react";
import { FaStar } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import clipArt from "./clipArtBusinesses.png";

export default function ManageBusinesses() {
  // eslint-disable-next-line
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
      id: "01",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "02",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "03",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "04",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
    {
      id: "05",
      name: "Tech Logistics",
      regNum: "N/A",
      bizType: "Township",
      Industry: "Technology",
      actions: "View Details",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "30%",
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
            padding:80
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
            <span>Admins</span>
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
      <div style={{ height: "100%", width: "70%" }}>
        <div
          style={{
            height: "15%",
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
            Manage Businesses
          </span>
          <div
            style={{
              backgroundImage: `url(${clipArt})`,
              width: "20%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
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
            <span style={{ fontWeight: 700 }}>USERS</span>
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
            <span style={{ fontWeight: 700 }}>NEW BUSINESSES</span>
          </div>

          <div
            style={{
              width: "100%",
              backgroundColor: "#fafafa",
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Business Name</span>
              <span>
                <PiCaretUpDownFill color="gray" />
                <AiOutlineSearch color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Reg Number</span>
              <span>
                <PiCaretUpDownFill color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Type of Business</span>
              <span>
                <PiCaretUpDownFill color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Industry</span>
              <span>
                <PiCaretUpDownFill color="gray" />
              </span>
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <span style={{ fontWeight: 600 }}>Actions</span>
            </div>
          </div>
          <div>
            {fakeBusinessesList.map((business) => (
              <div
                key={business.id}
                style={{ display: "flex", flexDirection: "row" }}
              >
              <div
                style={{
                  width: "20%",
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <span style={{  }}>{business.name}</span>
              </div>

              <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{  }}>{business.regNum}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{  }}>{business.bizType}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{  }}>{business.Industry}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <span style={{ color:"#1890ff" }}>{business.actions}</span>
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
