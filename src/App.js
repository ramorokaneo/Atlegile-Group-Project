import DeliveryDone from "./Pages/Delivery Done/DeliveryDone";

import BusinessAccount from "./Pages/Business Account/businessAccount";
import ManageUserScreen from "./Pages/Manage Users/ManageUserScreen";
import SignIn from "./Pages/Sign In/signIn";
import Footer from "./components/Footer/Footer";
import ManageBusinesses from "./Pages/Manage Businesses/manageBusinesses";
import { Route, Routes } from "react-router";
import WelcomeToAMS from "./Pages/welcomeToAMS"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Dashboard" element={<WelcomeToAMS/>} />
        <Route path="/mangeusers" element={<ManageBusinesses/>} />
        <Route path="/Business" element={<BusinessAccount/>} />
        <Route path="/Dashboard" element={<WelcomeToAMS/>} />
       
      </Routes>
      {/* <ManageBusinesses/> */}
      {/* <DeliveryDone/> */}
      {/* <BusinessAccount/> */}
      {/* <SignIn/> */}
      {/* <ManageUserScreen/> */}
      {/* <DeliveryDone/> */}
    </>
  );
}

export default App;
