
// // atlegile-Footer.js

// // Footer.js

// import React from "react";
// import "./footer.css";
// function Footer() {
//   return (

//     <footer className="atlegile-footer">
//       <div className="atlegile-footer-container">
//         <div className="atlegile-footer-hero">
//           <div className="atlegile-footer-body">
//             <div className="atlegile-footer-logo">
//               <img
//                 className="atlegile-footer-logo-image"

//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-hero">
//           <div className="footer-body">
//             <div className="logo">
//               <img
//                 className="logo-image"

//                 src={"./images/logo2.png"}
//                 alt="AMS COMPANY"
//               />
//             </div>
//             <h3>Marketing Services</h3>
//             <p>
//               Welcome to AMS, where we specialize in building beautiful brands,
//               marketing African businesses, and connecting them with a global
//               customer base, driving sales of their exceptional products and
//               services.
//             </p>

//             <p className="atlegile-footer-email-text">
//               atlegilemarketing.co.za
//             </p>
//           </div>
//           <div className="atlegile-footer-links">
//             <a href="/order-history">

//             <p className="email-text">atlegilemarketing.co.za</p>
//           </div>
//           <div className="footer-links">
//             <a href="#">

//               <h4>ORDER HISTORY</h4>
//             </a>
//             <a href="#">
//               <h4>TERMS & CONDITIONS</h4>
//             </a>

//             <a href="#">
//               <h4>PRIVACY POLICY</h4>
//             </a>
//           </div>
//         </div>

//         <div className="atlegile-footer-company-section">
//           <p className="atlegile-footer-company-text">

//         <div className="company-section">
//           <p className="company-text">

//             Atlegile Marketing Solutions (Pty) Ltd eCommerce 2023
//             {new Date().getFullYear()}{" "}
//           </p>
//         </div>
//       </div>

//       <div className="atlegile-footer-lion-image-container">
//         <img
//           className="atlegile-footer-lion-image"
//           src={"./images/lion.png"}
//           alt="lion"
//         />

//       <div className="lion-image-container">
//         <img className="lion-image" src={"./images/lion.png"} alt="lion" />

//       </div>
//     </footer>
//   );
// }

// export default Footer;


// atlegile-Footer.js

import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="atlegile-footer">
      <div className="atlegile-footer-container">
        <div className="atlegile-footer-hero">
          <div className="atlegile-footer-body">
            <div className="atlegile-footer-logo">
              <img
                className="atlegile-footer-logo-image"
                src={"./images/logo2.png"}
                alt="AMS COMPANY"
              />
            </div>
            <h3>Marketing Services</h3>
            <p>
              Welcome to AMS, where we specialize in building beautiful
              brands, marketing African businesses, and connecting them with a
              global customer base, driving sales of their exceptional products
              and services.
            </p>
            <p className="atlegile-footer-email-text">
              atlegilemarketing.co.za
            </p>
          </div>
          <div className="atlegile-footer-links">
            <a href="/order-history">ORDER HISTORY</a>
            <a href="#/">TERMS & CONDITIONS</a>
            <a href="#/">PRIVACY POLICY</a>
          </div>
        </div>

        <div className="atlegile-footer-company-section">
          <p className="atlegile-footer-company-text">
            Atlegile Marketing Solutions (Pty) Ltd eCommerce 2023{" "}
            {new Date().getFullYear()}{" "}
          </p>
        </div>

        <div className="atlegile-footer-lion-image-container">
          <img
            className="atlegile-footer-lion-image"
            src={"./images/lion.png"}
            alt="lion"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
