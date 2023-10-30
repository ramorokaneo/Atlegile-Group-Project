import React from "react";
import './landingpageheader.css';
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const LandingPageHeader = () => {
    return (
        <header className="landing-header">
            <div className="header-content">
                <div className="phone">
                    <FiPhone /> <span className="phone-number">(225) 555-0118</span>
                    <AiOutlineMail className="mail" /> <span className="email">michelle.rivera@example.com</span>
                    <span className="follow">Follow</span>
                    
                </div>
            </div>
        </header>
    );
};

export default LandingPageHeader;