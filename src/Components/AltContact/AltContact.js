import React, { useState } from "react";
import "./AltContact.css";
import { useNavigate } from "react-router-dom";
const logo = require("./Logo.png");

import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { firebase, firestore } from "../../firebase/firebase.config";
import { useFetchProfileData } from "../../hooks/useFetchUsers";

function AltContact() {
  const user = firebase.auth().currentUser;

  const { userData } = useFetchProfileData(user.uid);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields before continuing.");
      return;
    }

    try {
      // localStorage.setItem("user", user.uid);

      // const stringObj = localStorage.getItem("user");
      // const parsedString = JSON.parse(stringObj);
      // console.log("user : ", user);
      const userRef = firestore.collection("Users").doc(user.uid);
      await userRef.set({
        name: userData.name,
        surname: userData.surname,
        phone: userData.phone,
        gender: userData.gender,
        email: userData.email,
        location: userData.location,
        uid: user.uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        alternativeContact: {
          name,
          phone,
          timestamp: serverTimestamp(),
        },
      });
      // await firestore
      //   .collection("Users")
      //   .doc(user.uid)
      //   .set({
      //     alternativeContact: {
      //       name,
      //       phone,
      //       timestamp: serverTimestamp(),
      //     },
      //   });
      // await updateDoc(
      //   userRef,
      //   {
      //     name: localStorage.getItem("name"),
      //     surname: localStorage.getItem("surname"),
      //     phone: localStorage.getItem("phone"),
      //     gender: localStorage.getItem("gender"),
      //     email: localStorage.getItem("email"),
      //     location: localStorage.getItem("location"),
      //     alternativeContact: {
      //       name,
      //       phone,
      //       timestamp: serverTimestamp(),
      //     },
      //   },
      //   { merge: true }
      // );

      console.log(
        "Alternative contact information submitted to 'Users' collection in Firestore."
      );

      navigate("/");
    } catch (error) {
      console.error(
        "Error submitting alternative contact information:",
        error.message
      );
      // alert("Error submitting alternative contact information. Please try again.");
    }
  };

  const handleNotNow = () => {
    console.log("Not Now button clicked");
  };



  return (
    <div
      className="background-container"
    >
      <div style={{ height: "100%", width: "70%" }}></div>
      <div
        style={{
          height: "100%",
          width: "30%",
          padding: 10,
        }}
      >
        <div style={{ height: "100%", backgroundColor: "white" }}>
          <div
            style={{
              width: "100%",
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="Logo" style={{ width: 250 }} />
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
              >
                <span style={{ fontSize: 25, fontWeight: 700 }}>ALTERNATIVE CONTACT</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <span style={{fontSize: 12, marginRight: 10 }}></span>
                  
                </div>
              </div>
              <div
                style={{
                  paddingRight: 60,
                  paddingLeft: 60,
                }}
              >
                <br />
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Name</span>
                  <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <br />
                <div style={{}}>
                  <span style={{ fontSize: 12 }}>Phone</span>
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
                <div
                  onClick={handleSubmit}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#072840",
                    textAlign: "center",
                    marginTop: 20,
                    padding: 10,
                    fontWeight: 600,
                    color: "white",
                    fontSize: 12,
                    cursor: "pointer",
                    
                  }}
                >
                  CONTINUE
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "8vh",
                  paddingRight: 60,
                  paddingLeft: 60,
                  marginTop: 10,
                }}
              >
                <a
                  style={{ color: "#072840", fontSize: 12, fontWeight: 600 }}
                  href="/signinscreen"
                >
                
                </a>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#d32f2f",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                  href="/"
                >
                
                </a>
              </div>
            </div>

            <div
              style={{
                paddingRight: 60,
                paddingLeft: 60,
              }}
            >
              <div
                onClick={handleNotNow}
                style={{
                  borderRadius: 20,
                  border: "1px #072840 solid",
                  textAlign: "center",
                  marginBottom: 20,
                  padding: 5,
                  fontWeight: 600,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                NOT NOW 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AltContact;
