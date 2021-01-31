import React from "react"
import eye from '../../resource/icons/eye.png'
import slash_eye from '../../resource/icons/slash_eye.png'

export default class Signup extends React.Component {
  
  render(){
    return(
      <div className="signup">
        <div className="modalbody">
          <div className='wrapper'>
            <p className="errMsg">{this.props.serviceErrMsg}</p>
            <input className="modalinput" id="Name" placeholder="Name" onBlur={this.props.validateName} onChange={this.props.validateName} maxLength="50" />
            <p className="errMsg">{this.props.nameErrMsg}</p>
          </div>
          <div className="wrapper">
            <input className="modalinput" id="Email" placeholder="Email" onBlur={this.props.validateEmail} onChange={this.props.validateEmail} maxLength="50" />
            <p className="errMsg">{this.props.emailErrMsg}</p>
          </div>
          <div className="wrapper">
            <input className="modalinput" id="Password" placeholder="Password" type={this.props.show ? "text" : "password"} onChange={this.props.validatePwd} onBlur={this.props.validatePwd} maxLength="20" />
            <img className="showicon" alt="eye" src={this.props.show ? slash_eye : eye} onClick={this.props.showHidePassword}></img>
            <p className="errMsg">{this.props.passErrMsg}</p>
          </div>
          <button className={this.props.valid ? "ditl-button modalbutton" : "ditl-button modalbutton button-disabled"} onClick={this.props.submit}>SIGN UP</button>
        </div>
      </div>  
    )
  }
}