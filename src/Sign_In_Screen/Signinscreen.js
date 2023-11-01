import React, { useState } from "react";
import "./signinscreen.css";
import Logo from "../assets/Logo.png";
import { FcGoogle } from 'react-icons/fc';

const Signinscreen = () => {
    const [email, setemail] = useState('');
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
                    <input type="text" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} required className="sign-in-input" />
                    <input type="text" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="sign-in-input" />

                    <a href="#" className="forgot-password-link">Forgot Password?</a>

                    <button type="submit" className="submit-button" onClick={handleSignIn} required>Sign In</button>

                    <a href="#" className="Sign-with-google-link"><FcGoogle /> Sign In With Google</a>
                </div>
            </div>
        </div>
    );
};

export default Signinscreen;
