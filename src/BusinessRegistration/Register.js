import React from 'react'
import logo from '../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png'
import './registar.css'

const Register = () => {
  return (
    <div className="background">
    <div className="image-card">
      <div className="text-container">
        <h4 style={{ color: "orange" }}>For business</h4>
        <h1 style={{ color: "white" }}>Increased visibility</h1>
        <h4 style={{ color: "white" }}>
          Reach a wider audience and gain exposure to potential clients
        </h4>
      </div>
    </div>

    <div className="card">
      <div className="logo-container">
        <img src={logo} width={110} height={50} 
        style={{
          justifyContent: 'center',
          paddingTop: 120
          }}/>
      </div>

      <div className="textInput-container">
        <form>
          <h3>BUSINESS REGISTRATION</h3>
          <div className="inputbox">
            <label htmlFor="name" >Business Name</label>
            <input type="text" />
          </div>

          <div className="inputbox">
            <label htmlFor="role" >Role</label>
            <input type="text" />
          </div>

          <div className="inputbox">
            <label htmlFor="password" >Reg Number</label>
            <input type="text" />
          </div>

          <div className="inputbox">
            <label htmlFor="username" >Website</label>
            <input type="text" />
          </div>

          <div className="inputbox">
            <label htmlFor="confirmPassword" >Location</label>
            <input type="text" />
          </div>
          

          <div className="form-group row">
            <div className="inputbox">
              <label htmlFor="type" >Types of business</label>
              <input type="text" />
            </div>

            <div className="inputbox">
              <label htmlFor="industry" >Industry</label>
              <input type="text" />
            </div>
          </div>


          <div className="inputbox">
            <label htmlFor="confirmPassword" >Phone Number</label>
            <input type="text" />
          </div>
          <div className="inputbox">
            <label htmlFor="confirmPassword" >Bio</label>
            <input type="text" />
          </div>
          <button type="submit" className="btn-continue">Continue</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register