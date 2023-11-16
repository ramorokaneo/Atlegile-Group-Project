import React, { useState } from "react";
import "./signinscreen.css";
import Logo from "../assets/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase/firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

/*

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);
  const Items = ["I agree to Gallery360's Terms & Conditions"];
  function handleItemSelection(Item) {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(Item)
        ? prevSelected.filter((item) => item !== Item)
        : [...prevSelected, Item]
    );
  }

  const handleSignUp = async () => {
    console.log("line executed!!!");
    console.log(auth);

    try {
      setIsLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;

      console.log("Registered with:", user.email);
      setIsLoading(false);
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
      alert("Please Enter Your Email And Password");
    }
  };

*/
const Signinscreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignIn = () => {
    if (email === "" || password === "") {
      console.log("Good");
    } else {
      console.log("Filling");
    }
  };

  return (
    <div className="background">
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="sign">Sign In</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="sign-in-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="sign-in-input"
          />

          <a href="#" className="forgot-password-link">
            Forgot Password?
          </a>

          <button
            type="submit"
            className="submit-button"
            onClick={handleSignIn}
            required
          >
            Sign In
          </button>

          <a
            href="https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AVQVeyxNQ2A432r4bfY_nLZnSse1n4WLox8NOt3k4n4yU4mXFzdxmjwDpFI1rp9-wKRm_5qI3Xgc&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            className="Sign-with-google-link"
          >
            <FcGoogle /> Sign In With Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signinscreen;
