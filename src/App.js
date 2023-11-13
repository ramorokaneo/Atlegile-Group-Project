import "./App.css";
import SignIn from "./Pages/Sign In/signIn";
import ManageBusinesses from "./Pages/Manage Businesses/manageBusinesses";
import BusinessAccount from "./Pages/Business Account/businessAccount";
import Footer from "./components/Footer/Footer";
import Favourite from "./Pages/Favourites/favourites";

function App() {
  return (
    <>
      {/* <SignIn/>
      <ManageBusinesses/> */}
      <Favourite />
      <Footer />
    </>
  );
}

export default App;
