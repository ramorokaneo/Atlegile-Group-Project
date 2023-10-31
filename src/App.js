import React from "react";
import picture from "./GroupAtlegileUsers.png";
import "./App.css";
function App() {

  function calculateBackgroundProperties() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let backgroundPositionX, backgroundPositionY, backgroundSize;

    // Define the standard screen sizes and their corresponding values
    const screenSizes = [
      {
        width: 1515,
        height: 1441,
        positionX: 340,
        positionY: -150,
        size: "700px 450px",
      },
      {
        width: 1738,
        height: 871,
        positionX: 530,
        positionY: -115,
        size: "600px 350px",
      },
      // Add more screen sizes and values as needed
    ];

    // Calculate the ratio of the screen size to the standard sizes
    const matchingSize = screenSizes.find(
      (size) => size.width === screenWidth && size.height === screenHeight
    );

    if (matchingSize) {
      backgroundPositionX = matchingSize.positionX;
      backgroundPositionY = matchingSize.positionY;
      backgroundSize = matchingSize.size;
    } else {
      // Calculate ratios for custom screen sizes
      const ratioX = screenWidth / screenSizes[0].width;
      const ratioY = screenHeight / screenSizes[0].height;

      backgroundPositionX = Math.round(screenSizes[0].positionX * ratioX);
      backgroundPositionY = Math.round(screenSizes[0].positionY * ratioY);
      backgroundSize = `${Math.round(700 * ratioX)}px ${Math.round(
        450 * ratioY
      )}px`;
    }

    return { backgroundPositionX, backgroundPositionY, backgroundSize };
  }

  const { backgroundPositionX, backgroundPositionY, backgroundSize } = calculateBackgroundProperties();

  const data = [
    {
      name: "Jane",
      surname: "Doe",
      phone: "0123456789",
      email: "example@gmail.com",
      location: "1235 Vilakazi street...",
      actions: ["Block User", "View Details"],
    },
    {
      name: "Jane",
      surname: "Doe",
      phone: "0123456789",
      email: "example@gmail.com",
      location: "1235 Vilakazi street...",
      actions: ["Block User", "View Details"],
    },
    {
      name: "Jane",
      surname: "Doe",
      phone: "0123456789",
      email: "example@gmail.com",
      location: "1235 Vilakazi street...",
      actions: ["Block User", "View Details"],
    },
    {
      name: "Jane",
      surname: "Doe",
      phone: "0123456789",
      email: "example@gmail.com",
      location: "1235 Vilakazi street...",
      actions: ["Block User", "View Details"],
    },
    {
      name: "Jane",
      surname: "Doe",
      phone: "0123456789",
      email: "example@gmail.com",
      location: "1235 Vilakazi street...",
      actions: ["Block User", "View Details"],
    },
    // Add more data objects as needed
  ];
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
          <div style={{
              backgroundImage: `url(${picture})`,
              width: "60%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
              backgroundSize: backgroundSize,
              height: "100%",              
            }}>
          
          </div>
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
           

              <div className="NewUser">
                <div className="usersheader">
                  <h1>New Users</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="headings">
            <div className="heading">
              <p>Name</p>
            </div>
            <div className="heading">
              <p>Surname</p>
            </div>
            <div className="heading">
              <p>Phone</p>
            </div>
            <div className="heading">
              <p>Email</p>
            </div>
            <div className="heading">
              <p>Location</p>
            </div>
            <div className="heading">
              <p>Actions</p>
            </div>
          </div>
        </div>
        <div className="details">
          {data.map((item, index) => (
            <div className="headings1" key={index}>
              <div className="heading1">
                <p>{item.name}</p>
              </div>
              <div className="heading1">
                <p>{item.surname}</p>
              </div>
              <div className="heading1">
                <p>{item.phone}</p>
              </div>
              <div className="heading1">
                <p>{item.email}</p>
              </div>
              <div className="heading1">
                <p>{item.location}</p>
              </div>
              <div className="heading1">
                <div className="heading2">
                  <p>{item.actions[0]}</p>
                </div>
                <div className="heading2">
                  <p>{item.actions[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
