<<<<<<< HEAD
import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import ManageUserSceen from './ManageUserScreen';
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <div className="profile">
          <div className="profileContainer">
            <div className="imgBackGround">
              <div className="profileImage">
                <div className="letter">
                  <p>S</p>
                </div>
              </div>
            </div>
            <div className="Identitydetails">
              <div className="Name">
                <h1>Sarah</h1>
              </div>
              <div className="ContactDitails">
                <div className="phoneNumber">
                  <p> 0123456789</p>
                </div>
                <div className="email">
                  <p> example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="routes">
          <div className="routesContainer">
            <div className="sidbarDitails">
              <p> Deshbord</p>
            </div>
            <div className="sidbarDitails">
              <p> Admin</p>
            </div>
            <div className="sidbarDitails">
              <p> Users</p>
            </div>
            <div className="sidbarDitails">
              <p> Businesses</p>
            </div>
          </div>
        </div>
      </div>
      <div className="manager">
        <div className="managerheader">
          <div className="managerheaderText">
            <h1>Manage Users</h1>
          </div>
          <div className="managerheaderIcon"></div>
        </div>
        <div className="managerContent">
          <div className="contentContaner">
            <div className="users">
              <div className="usersheader">
                <h1> Users</h1>
              </div>
              <div className="space"></div>

              <div className="stats">
                <div className="statsText">
                  <div className="salesText">
                    <p>Sales</p>
                  </div>
                  <div className="businessText">
                    <p>New Business</p>
                  </div>
                  <div className="NewUserText">
                    <p>New Users</p>
                  </div>
                </div>
                <div className="statsNumbers">
                  <div className="salesNumber">
                    <p>300</p>
                  </div>
                  <div className="businessNumber">
                    <p>300</p>
                  </div>
                  <div className="NewUserNumber">
                    <p>300</p>
                  </div>                
                </div>                
              </div>
              <div className="space"></div>

              <div className = "NewUser">
              <div className="usersheader">
                <h1>New Users</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
import "./App.css";
//import SignIn from "./signIn";
import ManageBusinesses from "./manageBusinesses";

function App() {
  return (
    <>
      <ManageBusinesses/>
    </>
>>>>>>> af0c2d45f9fc15c0f1aa60ee4ef764fa80757144
  );
}

export default App;
