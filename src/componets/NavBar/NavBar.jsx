import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="contact-info">
        {/* <FontAwesomeIcon icon="fa-light fa-phone" /> */}
        <FontAwesomeIcon icon={faPhone} />
        <p> (225) 555-0118</p>
      </div>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          michelle.rivera@example.com
        </p>
      </div>
      <div className="contact-info follow-us1">
        <p>Follow us and get a chance to win 80% off</p>
      </div>
      <div className="follow-us">
        <p>Follow us :</p>
        <ul className="social-icons">
          <li className="navbar-item">
            <a href="https://www.youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li className="navbar-item">
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="navbar-item">
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="navbar-item">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
