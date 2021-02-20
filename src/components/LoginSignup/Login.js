import React from "react"
import eye from '../../resource/icons/eye.png'
import slash_eye from '../../resource/icons/slash_eye.png'

export default class Login extends React.Component {
  
  render(){
    return(
      <div className="login">
        <div className="modalbody">
          <p className="errMsg">{this.props.serviceErrMsg}</p>
          <div className="wrapper">
            <input className="modalinput" id="Email" placeholder="Email" onBlur={this.props.validateEmail} onChange={this.props.validateEmail} maxLength="50" />
            <p className="errMsg">{this.props.emailErrMsg}</p>
          </div>
          <div className="wrapper">
            <input className="modalinput" id="Password" placeholder="Password" type={this.props.show ? "text" : "password"} onChange={this.props.validatePwd} onBlur={this.props.validatePwd} maxLength="20" />
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
          <button className={this.props.valid ? "ditl-button modalbutton" : "ditl-button modalbutton button-disabled"} onClick={this.props.submit}>LOG IN</button>
        </div>
      </div>  
    )
  }
}