import React, { useState, useRef } from "react";
import { IoMdStopwatch, IoMdSearch } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import Card from "../../components/Card/Card";
import FollowUs from "../../components/FollowUs/FollowUs";
import NavBar from "../../components/NavBar/NavBar";
import "./favourites.css";

export default function Favourite() {
  const [editModal, setEditModal] = useState(false);
  const [bannerModal, setBannerModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [businessAuthorization, setBusinessAuthorization] = useState(false);
  const [businessRegistered, setBusinessRegistered] = useState(true);

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSaveEditProduct = () => {
    setEditModal(false);
  };

  const handleSaveAddBanner = () => {
    setBannerModal(false);
  };

  const handleSavePaymentInfo = () => {
    setPaymentModal(false);
  };

  // useEffect(() => {
  //   // This will run once the component is mounted
  //   $("#myModal").modal('show');

  //   // Optionally, you might want to clean up when the component unmounts
  //   return () => {
  //     $("#myModal").modal('hide');
  //   };
  // }, []);

  return (
    <>
      <FollowUs />
      <NavBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: businessRegistered ? "20%" : "100%",
            paddingLeft: 30,
            paddingRight: 30,
            backgroundColor: "#f5f5f5",
            display: "flex",

            justifyContent: "center",
          }}
        >
          <div id="sideNav">
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  backgroundColor: "lightgray",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                }}
              >
                S
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: 30, fontWeight: 700 }}>SARAH</span>
              <span style={{ fontSize: 14, fontWeight: 700 }}>0123456789</span>
              <span style={{ fontWeight: 700 }}>example@mail.ccom</span>
            </div>

            <div style={{ textAlign: "center", marginTop: 30 }}>
              <p>
                1235 Vilakazi Street, Orlando West, Soweto, 1804, South Africa
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 30,
                backgroundColor: businessRegistered ? "white" : "",
                marginTop: 30,
              }}
            >
              <p>
                <span
                  style={{ color: "#072840", fontWeight: 600, fontSize: 22 }}
                >
                  Julian Jameson
                </span>
                <br />
                <span style={{ color: "gray", fontWeight: 600 }}>
                  Alternative Contact
                </span>
              </p>
            </div>

            <div style={{ marginTop: 30 }}>
              <div
                style={{
                  border: "none",
                  borderBottom: businessRegistered ? "2px #072840 solid" : null,
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <IoMdStopwatch color="#072840" style={{ marginRight: 25 }} />
                <a
                  href="http://localhost:3000/"
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  ORDER HISTORY
                </a>
              </div>

              <div
                style={{
                  border: "none",
                  borderBottom: businessRegistered ? "2px #072840 solid" : null,
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <IoMdStopwatch color="#072840" style={{ marginRight: 25 }} />
                <a
                  href="http://localhost:3000/"
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  FAVOURITES
                </a>
              </div>

              <div
                style={{
                  border: "none",
                  borderBottom: businessRegistered ? "2px #072840 solid" : null,
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <IoMdStopwatch color="#072840" style={{ marginRight: 25 }} />
                <a
                  href="http://localhost:3000/"
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  TERMS & CONDITIONS
                </a>
              </div>

              <div
                style={{
                  border: "none",
                  borderBottom: businessRegistered ? "2px #072840 solid" : null,
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <IoMdStopwatch color="#072840" style={{ marginRight: 25 }} />
                <a
                  href="http://localhost:3000/"
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  PRIVACY POLICY
                </a>
              </div>
            </div>

            <div
              style={{
                // border: "1px #072840 solid",
                display: businessRegistered ? "none" : "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 20,
                paddingBottom: 150,
              }}
            >
              <div
                style={{
                  color: "#072840",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "1px #072840 solid",
                  padding: 10,
                  borderRadius: 20,
                  display: "inline-block",
                  marginTop: 5,
                  cursor: "pointer",
                  marginRight: 5,
                }}
                onClick={() => setBusinessAuthorization(true)}
              >
                REGISTER BUSINESS
              </div>

              <div
                style={{
                  color: "#072840",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "1px #072840 solid",
                  padding: 10,
                  borderRadius: 20,
                  display: "inline-block",
                  marginTop: 5,
                  cursor: "pointer",
                }}
                onClick={() => setBusinessAuthorization(true)}
              >
                REGISTER AS A FREELANCER
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingLeft: 20, paddingTop: 30 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: 18, marginBottom: -5 }}>
              FAVOURITES
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              width:"100%",
              //border:"1px red solid"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "16px",
                padding: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              className="shadow p-3 mb-5 bg-white rounded"
            >
              <input
                type="text"
                placeholder="Search"
                style={{
                  width: "100%",
                  border: "none",
                  borderBottom: "1px gray solid",
                }}
              />
              <RiSearch2Line color="#072840" size={20} style={{}} />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {list.map((item, index) => (
              <Card key={index} open={() => setEditModal(true)} />
            ))}
          </div>
        </div>
      </div>
      {/* <div style={{ marginTop: "40vh" }}></div> */}
    </>
  );
}
