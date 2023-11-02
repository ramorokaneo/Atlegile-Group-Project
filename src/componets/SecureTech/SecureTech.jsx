// import React from "react";
// import "./secureTech.css";
// import Card from "../Card/Card";
// export default function SecureTech() {
//   const techArray = [1, 2, 3, 4, 5, 6, 7];
//   return (
//     <div>
//       <h2>SecureTech Solutions</h2>
//       <div>
//         {techArray.map((item) => {
//           return <Card />;
//         })}
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./secureTech.css";
import Card from "../Card/Card";
export default function SecureTech() {
  const techArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="secureTech-container">
      <h2>SecureTech Solutions</h2>
      <Card />
    </div>
  );
}
