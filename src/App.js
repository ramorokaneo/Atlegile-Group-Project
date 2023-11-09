import "./App.css";
import SignIn from "./Pages/Sign In/signIn";
import ManageBusinesses from "./Pages/Manage Businesses/manageBusinesses";
import BusinessAccount from "./Pages/Business Account/businessAccount";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <div style={{}}>
        <div style={{}}></div>
        <div style={{}}></div>
        <div style={{}}></div>
      </div> */}
      <BusinessAccount />
      <Footer />
    </>
  );
}

export default App;
