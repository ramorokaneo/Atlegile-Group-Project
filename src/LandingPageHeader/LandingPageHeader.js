import React from "react";
import './landingpageheader.css';
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si';

const LandingPageHeader = () => {
    return (
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
    );
};

export default LandingPageHeader;