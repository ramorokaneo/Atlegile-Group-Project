import React, { useState, useEffect } from "react";
import "./signinscreen.css";
import Logo from "../assets/Logo.png"
import { FcGoogle } from 'react-icons/fc';
import { FcNext } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {firebase} from "../../src/config";

const Signinscreen = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleSignIn = () => {
        if (email === "" || password === "") {
            console.log("Good");
        } else {
            console.log("Filling");
        }
    };

    const handleShop = () => {
       
        navigate("/landingscreen");
    };

    useEffect(() => {
        
        if (!firebase.apps.length) {
            const firebaseConfig = {
               
            };
            firebase.initializeApp(firebaseConfig);
        }

        
        const db = firebase.firestore();
        const usersCollection = db.collection('users');

       
        usersCollection.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                
            });
        }).catch((error) => {
            console.log("Error getting users:", error);
        });
    }, []);



    return (
        <div className="background">
            <div className="flexbox-container">
                <div className="flexbox-item flexbox-item-1">
                    <img src={Logo} alt="Logo" className="logo" />
                    <h1 className="sign">Sign In</h1>
                    <div className="header">
                        <p className="shop" onClick={handleShop}>
                            SHOP
                            <FcNext />
                        </p>
                    </div>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} required className="sign-in-input" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="sign-in-input" />

                    <a href="#/" className="forgot-password-link">Forgot Password?</a>



                    <button type="submit" className="submit-button" onClick={handleSignIn} required>Sign In</button>


                    <a className="forgot-password" href="/">DONT HAVE AN ACCOUNT?</a>


                    <a href="https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AVQVeyxNQ2A432r4bfY_nLZnSse1n4WLox8NOt3k4n4yU4mXFzdxmjwDpFI1rp9-wKRm_5qI3Xgc&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="Sign-with-google-link"><FcGoogle /> Sign In With Google</a>
                </div>
            </div>
        </div>
    );
};

export default Signinscreen;
