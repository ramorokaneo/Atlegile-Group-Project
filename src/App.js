
import ManageUserScreen from "./Pages/Manage Users/ManageUserScreen";
import SignIn from "./Pages/Sign In/signIn";
import ManageBusinesses from "./Pages/Manage Businesses/manageBusinesses";
import { Route, Routes } from "react-router";
import WelcomeToAMS from "./Pages/Welcome To AMS/welcomeToAMS"
import OrderHistory from "./Pages/Order History/OrderHistory";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Dashboard" element={<WelcomeToAMS/>} />
        <Route path="/Businesses" element={<ManageBusinesses/>} />
        <Route path="/mangeusers" element={<ManageUserScreen/>} />    
      </Routes> */}
<OrderHistory/>
    </>
  );
}

export default App;
