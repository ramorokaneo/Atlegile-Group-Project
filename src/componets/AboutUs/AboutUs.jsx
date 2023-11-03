import React from "react";
import "./about.css";
import logo from "../../icons/logo.svg";
import Plane from "../../images/plane.svg";
import Lion from "../../images/bigger-lion.png";
// import ShopLeft from "../../images/shop-left.svg";
// import shopRight from "../../images/shop-right.svg";

export default function AboutUs() {
  const amsArr = [
    "Passion",
    "Innovation",
    "Global Connection",
    "Global Connection",
    "Skills Development",
    "creativity",
  ];
  return (
    <div className="about-container">
      <div className="about-header-container">
        <div className="about-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="about-text-section">
          <h2>Atlegile Marketing Solutions</h2>
          <p>
            Welcome to Atlegile Marketing Solutions (Pty) Ltd, where passion,
            purpose, and expertise collide to create exceptional Marketing
            strategies. Our Youth Woman-owned and led Business, based in South
            Africa, was founded in 2015, and we’ve been on an exciting journey
            with our Partners ever since. From ground level to the Digital
            space, we’re committed to building strong Brands, effectively
            Communicating products + service offerings, and transferring our
            Skills to help you engage with the Online Market Successfully.
          </p>
          <p>
            AMS is dedicated to helping African businesses succeed by developing
            strong brands, marketing their products and services effectively,
            and connecting them with a global customer base. They aim to drive
            sales, increase revenue, and create a lasting impact.
          </p>
        </div>
        <div className="about-cards">
          <div className="about-card-one">
            <h3>WHAT WE OFFER</h3>
            <p>
              Ams creates strong influential brands, by applying tailored market
              approaches + using compelling content, to effectively communicate,
              build and manage good relationships with online communities. We
              support ESD + marketing departments and agencies.
            </p>
          </div>
          <div className="about-card-one">
            <h3>ABOUT AMS</h3>
            <p>
              Atlegile Marketing Solutions (Pty) Ltd is a 360 creative brand
              marketing company that assists African businesses to reach their
              intended audience from online to offline. We are located in
              Pimville, Soweto, and service our partners online.
            </p>
          </div>
          <div className="about-card-one">
            <h3>OUR USP</h3>
            <p>
              We use a unique strategic brand approach that is coupled with
              creativity, while transferring 8 years of professional quality
              service.
            </p>
            <p>#AGILE IS WHAT ATLEGILE IS ABOUT</p>
          </div>
        </div>
        <div className="about-plane">
          <img src={Plane} alt="plane" />
          <p>Business Research and Youth Development Project</p>
        </div>
        <div className="ams-container">
          <h2 className="ams-header">AMS is guided by several core values</h2>
          <ul className="ams-lists">
            {amsArr.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className="ams-text">
          <p>
            AMS aims to not only help businesses grow but also make a positive
            impact on society by nurturing local talent and fostering
            sustainable business growth.
          </p>
        </div>
        <div className="lion-images-container">
          <div className="big-lion">
            <img src={Lion} alt="big lion" />
          </div>
        </div>
      </div>
    </div>
  );
}
