// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faYoutube,
//   faTwitter,
//   faInstagram,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";
// import "./NavBar.css";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="contact-info">
//         {/* <FontAwesomeIcon icon="fa-light fa-phone" className="fa-phone" /> */}
//         <FontAwesomeIcon icon={faPhone} />
//         <p> (225) 555-0118</p>
//       </div>
//       <div className="contact-info">
//         <p>
//           <FontAwesomeIcon icon={faEnvelope} />
//           michelle.rivera@example.com
//         </p>
//       </div>
//       <div className="contact-info follow-us1">
//         <p>Follow us and get a chance to win 80% off</p>
//       </div>
//       <div className="follow-us">
//         <p>Follow us :</p>
//         <ul className="social-icons">
//           <li className="navbar-item">
//             <a href="https://www.instagram.com">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//           </li>
//           <li className="navbar-item">
//             <a href="https://www.youtube.com">
//               <FontAwesomeIcon icon={faYoutube} />
//             </a>
//           </li>

//           <li className="navbar-item">
//             <a href="https://www.facebook.com">
//               <FontAwesomeIcon icon={faFacebook} />
//             </a>
//           </li>
//           <li className="navbar-item">
//             <a href="https://www.twitter.com">
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "./NavBar.css";
// import logo from "./your-logo.png"; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <div className="more-info">
          <button className="btn">Shop</button>
          <button className="btn">About Us</button>
        </div>
        <div className="login">
          <button className="btn">Sign In</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
