import React from "react"
import eye from '../../resource/icons/eye.png'
import slash_eye from '../../resource/icons/slash_eye.png'

const GUEST_EMAIL = 'dayInTheLifeGuestEmail7@email.com'
const GUEST_PASSWORD = 'dayInTheLifeGuest7'

export default class Login extends React.Component {
  
  render(){
    return(
      <div className="login">
        <div className="modalbody">
          <p className="errMsg">{this.props.serviceErrMsg}</p>
          <div className="wrapper">
            <input className="modalinput" id="loginEmail" placeholder="Email" value={this.props.email} onBlur={()=>this.props.validateEmail('login')} onChange={()=>this.props.validateEmail('login')} maxLength="50" />
            <p className="errMsg">{this.props.emailErrMsg}</p>
          </div>
          <div className="wrapper">
            <input className="modalinput" id="loginPassword" placeholder="Password" type={this.props.show ? "text" : "password"} value={this.props.password} onChange={()=>this.props.validatePwd('login')} onBlur={()=>this.props.validatePwd('login')} maxLength="20" />
            <img className="showicon" alt="eye" src={this.props.show ? slash_eye : eye} onClick={this.props.showHidePassword}></img>
            <p className="errMsg">{this.props.passErrMsg}</p>
          </div>
          <div className='rememberforgotbar'>
            <div className="remembermebox">
              <input className="rememberme" type="checkbox" />
              <span>Keep me logged in</span>
            </div>
            <div>
              <span className="forgotpassword">Forgot Password?</span>
            </div>
          </div>
          <button className="ditl-button-guest modelbutton" onClick={()=>this.props.executeLogin(GUEST_EMAIL,GUEST_PASSWORD,this.props.closeModal)}>LOG IN AS GUEST</button>
          <button className={this.props.valid ? "ditl-button modalbutton" : "ditl-button modalbutton button-disabled"} onClick={this.props.submit}>LOG IN</button>
        </div>
      </div>  
    )
  }
}