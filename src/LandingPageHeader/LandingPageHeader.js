import React from "react";
import './landingpageheader.css';
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si';
import Logo from "../assets/Logo.png";
import lion from "../assets/Lion.png";
import shadow from "../assets/Shadow_Logo.png";
import log from "../assets/Logo.png";
import plane from "../assets/plane.png";


const LandingPageHeader = () => {
    return (
        <div>
            <header className="landing-header">
                <div className="header-content">
                    <div className="phone">
                        <FiPhone /> <span className="phone-number">(225) 555-0118</span>
                        <AiOutlineMail className="mail" /> <span className="email">  michelle.rivera@example.com</span>
                        <h3 className="follow">Follow US and get a chance to win 80% off</h3>
                        <h4 className="us">Follow Us : <FaInstagram className="insta" />  <FiYoutube className="youtube" />
                            <SiFacebook className="facebook" /> <FiTwitter className="twiit" />
                        </h4>
                    </div>
                </div>
            </header>
            {/* next header */}
            <img className="mid-header" src={Logo} alt="" />
            <button className="shop-button">SHOP</button>
            <button className="about-us">ABOUT US</button>
            <button className="sign-in">SIGN IN</button>
            <button className="sign-up">SIGN UP</button>
            <div className="lower-header">
                <img className="lion" src={lion} alt="" />
                <img className="logo-2" src={shadow} alt="" />
            </div>
            <div className="p-tag">
                <img src={log} alt="" />
                <p className="market">ATLEGILE MARKETING SOLUTIONS</p>
                <p>Welcome to Atlegile Marketing Solutions (Pty) Ltd, where passion, purpose, and expertise collide to create exceptional Marketing strategies. Our Youth<br />
                    Woman-owned and led Business, based in South Africa, was founded in 2015, and we’ve been on an exciting journey with our Partners ever since.<br />
                    From ground level to the Digital space, we’re committed to building strong Brands, effectively Communicating products + service offerings, and transferring our<br />
                    Skills to help you engage with the Online Market Successfully.</p>
                <p>AMS is dedicated to helping African businesses succeed by developing strong brands, marketing their products and services effectively, and connecting<br />
                    them with a global customer base. They aim to drive sales, increase revenue, and create a lasting impact.
                </p>
            </div>
            <div className="flexbox-container-1">
                <div className="flexbox-item flexbox-item-1 centered-text">What We Offer
                    <p className="JUMP">Ams creates strong influential brands, by<br />
                        applying tailored market approaches + <br />
                        using compelling content, to effectively<br />
                        communicate, build and manage good<br />
                        relationships with online communities. We<br />
                        support ESD + marketing departments and<br />
                        agencies.</p></div>
                <div className="flexbox-item flexbox-item-2 centered-text">About AMS
                    <p className="JUMP">Atlegile Marketing Solutions (Pty) Ltd is a<br />
                        360 creative brand marketing company<br />
                        that assists African businesses to reach<br />
                        their intended audience from online to<br />
                        offline. We are located in Pimville, Soweto,<br />
                        and service our partners online.</p></div>
                <div className="flexbox-item flexbox-item-3 centered-text">OUR USP
                    <p className="JUMP">We use a unique strategic brand approach<br />
                        that is coupled with creativity, while<br />
                        transferring 8 years of professional quality<br /> service.</p>
                    <p>#AGILE IS WHAT ATLEGILE IS ABOUT</p></div>
            </div>
            <div>
                <img src={plane} alt=""/>
            </div>
        </div>
    );
};
export default LandingPageHeader;