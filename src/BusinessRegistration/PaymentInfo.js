import React from 'react'
import logo from '../BusinessRegistration/cropped-AMS-Shadow-Queen-Logo_BNY-1320x772 1.png'
import './registar.css'
import MarketingSupport from './MarketingSupport'

const PaymentInfo = () => {
  return (
    <div className="background">
    <MarketingSupport />

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
          <h3>PAYMENT INFO</h3>
          

          <div className="inputbox">
            <label htmlFor="username" >Card Holder</label>
            <input type="text" />
          </div>

          <div className="inputbox">
            <label htmlFor="confirmPassword" >Card Number</label>
            <input type="text" />
          </div>
          

          <div className="form-group row">
            <div className="inputbox">
              <label htmlFor="type" >Expiry</label>
              <input type="text" />
            </div>

            <div className="inputbox">
              <label htmlFor="industry" >CVV</label>
              <input type="text" />
            </div>
          </div>


         
          <button type="submit" className="btn-continue">Continue</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default PaymentInfo