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
import shop from "../assets/Group.png";
import back from "../assets/BACKGROUND.png";
import front from "../assets/Roar.png";


const LandingPageHeader = () => {
    return (
        <div id="above">
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




            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="main">
                    <div className="p-tag">
                        <img src={log} alt="" />
                        <p className="market">ATLEGILE MARKETING SOLUTIONS</p>
                        <p>Welcome to Atlegile Marketing Solutions (Pty) Ltd, where passion, purpose, and expertise collide to create exceptional Marketing strategies. Our Youth
                            Woman-owned and led Business, based in South Africa, was founded in 2015, and we’ve been on an exciting journey with our Partners ever since.
                            From ground level to the Digital space, we’re committed to building strong Brands, effectively Communicating products + service offerings, and transferring our
                            Skills to help you engage with the Online Market Successfully.</p>
                        <p>AMS is dedicated to helping African businesses succeed by developing strong brands, marketing their products and services effectively, and connecting
                            them with a global customer base. They aim to drive sales, increase revenue, and create a lasting impact.
                        </p>
                    </div>
                    <div className="flexbox-container-1">
                        <div className="flexbox-item flexbox-item-1 centered-text">
                            <h4>What We Offer</h4>
                            <p className="JUMP">Ams creates strong influential brands, by
                                applying tailored market approaches +
                                using compelling content, to effectively
                                communicate, build and manage good
                                relationships with online communities. We
                                support ESD + marketing departments and
                                agencies.</p></div>
                        <div className="flexbox-item flexbox-item-2 centered-text">
                            <h4>About AMS</h4>
                            <p className="JUMP">Atlegile Marketing Solutions (Pty) Ltd is a
                                360 creative brand marketing company
                                that assists African businesses to reach
                                their intended audience from online to
                                offline. We are located in Pimville, Soweto,
                                and service our partners online.</p></div>
                        <div className="flexbox-item flexbox-item-3 centered-text">
                            <h4>OUR USP</h4>
                            <p className="JUMP">We use a unique strategic brand approach
                                that is coupled with creativity, while
                                transferring 8 years of professional quality service.</p>
                            <p>#AGILE IS WHAT ATLEGILE IS ABOUT</p></div>

                    </div>
                    <div class="image-container">
                        <img src={plane} alt="" />
                        <p style={{ fontWeight: "bold" }}>Bussiness Research and Youth Development Project</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", padding: "12px" }}>

                        <p className="mini-heading">AMS IS GUIDED BY SEVERAL CORE VALUES</p>


                        <div className="" style={{ display: 'flex', flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                            <h5 classNataineme="ams">PASSION</h5>
                            <h5 className="ams">GLOBAL CONNECTION</h5>
                            <h5 className="ams">INNOVATION</h5>
                            <h5 className="ams">SOCIAL IMPACT</h5>
                            <h5 className="ams">SKILL DEVELOPMENT</h5>
                            <h5 className="ams">CREATIVITY</h5>
                        </div>



                    </div>
                    {/* big text */}
                    <h2 className="big">AMS AIMS TO NOT ONLY HELP BUSSINESS GROW
                        BUT ALSO MAKE A POSITIVE IMAPCT ON SOCIETY
                        BY NURTURING LOCAL TALENT AND FOSTERING
                        SUSTAINABLE BUSSINESS GROWTH</h2>


                </div>
            </div>


            {/* background below */}
            <div className="pic-2" style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>




                {/* lion below */}
                <div className="pic-1" >
                    <img style={{ width: "100%" }} src={front} alt="LION ON ROCK" />
                </div>
            </div>

            <div></div>
        </div>
    );
};
export default LandingPageHeader;

