import "./App.css";
//import SignIn from "./signIn";
//import ManageBusinesses from "./manageBusinesses";
//import Footer from "./footer/footer";
import BusinessAccount from "./businessAccount";
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
