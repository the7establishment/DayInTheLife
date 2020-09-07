import React from "react";
import "../../css/LoginSignup.css"
import close_icon from "../../resource/icons/close_icon.png"
import eye from '../../resource/icons/eye.png'
import slash_eye from '../../resource/icons/slash_eye.png'

export default class LoginSignup extends React.Component {

  constructor(){
    super()
    this.state = {
      isLogin: true,
      show: false,
      passErrMsg: '',
      emailErrMsg: '',
      nameErrMsg: '',
      hasError: false,
      valid: true
    }
  }

  closeModal = () => {
    var modal = document.getElementById("login")
    var body = document.body
    modal.style.display = "none"
    body.classList.remove("modal-open")
  }

  changeLoginType = () => {
    var {isLogin} = this.state
    if(isLogin)
      this.setState({isLogin:false})
    else
      this.setState({isLogin:true})
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      nameErrMsg: '',
      emailErrMsg: '',
      passErrMsg: '',
      hasError:false,
      valid:true
    })
    var email = document.getElementById("Email")
    var name = document.getElementById("Name")
    var pass = document.getElementById("Password")
    email.classList.remove("error")
    email.value = ""
    pass.classList.remove("error")
    pass.value = ""
    name.classList.remove("error")
    name.value = ""
  }

  showHidePassword = () => {
    var {show} = this.state
    if(show)
      this.setState({show:false})
    else
      this.setState({show:true})
  }

  verifyName = () => {
    var name = document.getElementById("Name")
    var re = /([a-zA-Z]).{3,50}/
    if(name.value == 0){
      name.classList.add("error")
      this.setState({nameErrMsg: "Please enter a name.", hasError: true, valid: false})
      return false
    }
    else if(!re.test(name.value)){
      name.classList.add("error")
      this.setState({nameErrMsg: "Please enter at least 3 characters.", hasError: true, valid: false})
      return false
    }
    else {
      name.classList.remove("error")
      this.setState({nameErrMsg: "",hasError: false, valid: true})
      return true
    }
  }

  verifyPassword = () => {
    var pass = document.getElementById("Password")
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,20}$/
    if(pass.value.length == 0){
      pass.classList.add("error")
      this.setState({passErrMsg: "Please enter a password.", hasError: true, valid: false})
      return false
    }
    else if(!re.test(pass.value)){
      pass.classList.add("error")
      this.setState({passErrMsg: "Passwords must be 8 to 20 characters, contain more than 2 types of characters, and not include spaces.", hasError: true, valid: false})
      return false
    }
    else {
      pass.classList.remove("error")
      this.setState({passErrMsg: "",hasError: false, valid: true})
      return true
    }
  }

  verifyEmail = () => {
    var email = document.getElementById("Email")
    var re = /.+\@[a-z]+\.[a-z]+/
    if(email.value.length == 0){
      email.classList.add("error")
      this.setState({emailErrMsg: "Please enter a email address.", hasError: true, valid: false})
      return false
    }
    else if(!re.test(email.value)) {
      email.classList.add("error")
      this.setState({emailErrMsg: "Please provide a valid email address.", hasError: true, valid: false})
      return false
    }
    else {
      email.classList.remove("error")
      this.setState({emailErrMsg: "", hasError: false, valid: true})
      return true
    }
  }

  validateEmailNamePass = () => {
    var validEmail = this.verifyEmail()
    var validPass = this.verifyPassword()
    var validName = this.verifyName()
    if(this.state.isLogin)
      return validEmail && validPass ? true : false 
    else
      return validEmail && validPass && validName ? true : false
  }

  login_signup = () => {
    var isValid = this.validateEmailNamePass()
    if(isValid){
      this.setState({valid:isValid})
      if(this.state.isLogin)
        this.props.login()
      else
        console.log("signup")
      this.closeModal()
    }
    else
      this.setState({valid:isValid})
  }

  render() {
    return (
      <div id="login" className="login modalbackground">
        <div className="modal">
          <div className="modalheader">
            <span className="modaltitle">{this.state.isLogin ? 'LOG IN' : 'SIGN UP'}</span>
          </div>
          <div className="modalbody">
            <div className={this.state.isLogin ? 'none' : 'wrapper'}>
              <input className="modalinput" id="Name" placeholder="Name" onBlur={this.verifyName} onChange={this.verifyName} maxLength="50"/>
              <p className="errMsg">{this.state.nameErrMsg}</p>
            </div>
            <div className="wrapper">
              <input className="modalinput" id="Email" placeholder="Email" onBlur={this.verifyEmail} onChange={this.verifyEmail} maxLength="50"/>
              <p className="errMsg">{this.state.emailErrMsg}</p>
            </div>
            <div className="wrapper">
              <input className="modalinput" id="Password" placeholder="Password" type={this.state.show ? "text" : "password"} onChange={this.verifyPassword} onBlur={this.verifyPassword} maxLength="20"/>
              <img className="showicon" alt="eye" src={this.state.show ?slash_eye : eye} onClick={this.showHidePassword}></img>
              <p className="errMsg">{this.state.passErrMsg}</p>
            </div>
            <div className={this.state.isLogin ? 'rememberforgotbar' : 'none'}>
              <div className="remembermebox">
                <input className="rememberme" type="checkbox" />
                <span>Keep me logged in</span>
              </div>
              <div>
                <span className="forgotpassword">Forgot Password?</span>
              </div>
            </div>
            <button className={this.state.valid ? "ditl-button modalbutton" : "ditl-button modalbutton button-disabled"} onClick={this.login_signup}>{this.state.isLogin ? 'LOG IN' : 'SIGN UP'}</button>
            <div className="logintypebox">
              <span className="signtypehint">{this.state.isLogin ? 'No account yet?' : 'Already have an account?'}</span>
              <span className="signuplink" onClick={this.changeLoginType}>{this.state.isLogin ? 'Sign up' : 'Log in'}</span>
            </div>
          </div>
          <div className="modalfooter">
            <hr/>
            <span className="policy">
              By logging in or creating an account, you agree to DayInTheLife's Terms of Service and Privacy Policy.
            </span>
          </div>
          <button className="modalclosebutton">
              <img className="modalcloseicon" alt="" src={close_icon} onClick={this.closeModal}></img>
          </button>
        </div>
      </div>
    )
  }
}