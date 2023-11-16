// import React from "react";
// import "./NavBar.css";

// // import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import logo from "./your-logo.png"; // Import your logo image

// const Navbar = () => {
//   // const navigate = useNavigate();
//   return (
//     <nav className="navbar-atlagile">
//       <Link to="/landingscreen" className="navbar-atlagile-logo">
//         <img src="./images/logo.png" alt="Logo" />
//       </Link>
//       <div className="navbar-atlagile-buttons">
//         <div className="more-info">
//           <Link to="/shop" className="btn-atlagile">
//             {" "}
//             Shop
//           </Link>
//           <Link to="/aboutus" className="btn-atlagile">
//             {" "}
//             About Us
//           </Link>
//         </div>
//         <div className="login">
//           <Link to="/signinscreen" className="btn-atlagile">
//             Sign In
//           </Link>
//           <Link to="/" className="btn-atlagile">
//             {" "}
//             Sign Up
//           </Link>


// const Navbar = () => {
//   return (
//     <nav className="navbar-atlagile">
//       <div className="navbar-atlagile-logo">
//         <img src="./images/logo.png" alt="Logo" />
//       </div>
//       <div className="navbar-atlagile-buttons">
//         <div className="more-info">
//           <button className="btn-atlagile">Shop</button>
//           <button className="btn-atlagile">About Us</button>
//         </div>
//         <div className="login">
//           <button className="btn-atlagile">Sign In</button>
//           <button className="btn-atlagile">Sign Up</button>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-atlagile">
      <div className="navbar-atlagile-logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <div className="navbar-atlagile-buttons">
        <div className="more-info">
          <Link to="/shop" className="btn-atlagile">
            Shop
          </Link>
          <Link to="/aboutus" className="btn-atlagile">
            About Us
          </Link>
        </div>
        <div className="login">
          <Link to="/signinscreen" className="btn-atlagile">
            Sign In
          </Link>
          <Link to="/" className="btn-atlagile">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
