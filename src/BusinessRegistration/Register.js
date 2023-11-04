import React from 'react'
import logo from '../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png'
import './form.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const nav = useNavigate()

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

 <form>
                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Business Name</label>
                </div>

                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Role</label>
                </div>

                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Website</label>
                </div>

                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Location</label>
                </div>

                <div className="row">
                  <div class="group textInput-container">
                    <input type="text" required />
                    <label>Business type</label>
                  </div>

                  <div class="group textInput-container">
                    <input type="text" required />
                    <label>Industry</label>
                  </div>
                </div>

                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Phone Number</label>
                </div>

                <div class="group textInput-container">
                  <input type="text" required />
                  <label>Bio</label>
                </div>
                <button type="submit" className="btn-continue" onClick={() => nav('/addPhoto')}>Continue</button>
              </form>
       
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register