import React, { useState } from "react";
import "./AltContact.css";
import { useNavigate } from "react-router-dom";
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
    <div className="background-container">
      <div className="form-container">
        <div className="form-item form-items">
          <img src="./logo.png" alt="Logo" className="logo" />
          <h2 className="alt-contact">ALTERNATIVE CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Jane"
              className="form-group"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="label">Phone</label>
            <input
              type="text"
              placeholder="0123456789"
              className="form-group"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button className="submit-button" type="submit">
              CONTINUE
            </button>
          </form>

          <button className="not-now" onClick={handleNotNow}>
            NOT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default AltContact;
