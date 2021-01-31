import React from "react"
import Modal from '../Modal'
import "../../css/LoginSignup.css"
import close_icon from "../../resource/icons/close_icon.png"
import Login from './Login'
import Signup from "./Signup"

const EMPTY_NAME_MESSAGE = 'Please enter a name.';
const INVALID_NAME_MESSAGE = 'Please enter at least 3 characters.';
const EMPTY_PASSWORD_MESSAGE = 'Please enter a password.';
const INVALID_PASSWORD_MESSAGE = 'Passwords must be 8 to 20 characters, contain at least 1 uppercase and lowercase letter, 1 number, and not include spaces.';

export default class LoginSignup extends React.Component {
  constructor(){
    super()
    this.state={
      isLogin: true,
      show: false,
      passErrMsg: '',
      emailErrMsg: '',
      nameErrMsg: '',
      hasError: false,
      validName: false,
      validEmail: false,
      validPwd: false,
      validLogin: true
    }
  }

  changeLoginType = () => {
    var { isLogin } = this.state
    if (isLogin)
      this.setState({ isLogin: false, validName : false, validEmail : false, validPwd: false })
    else
      this.setState({ isLogin: true, validName : false, validEmail : false, validPwd : false })
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      nameErrMsg: '',
      emailErrMsg: '',
      passErrMsg: '',
      hasError: false,
      valid: true
    })
    var email = document.getElementById("Email")
    var pass = document.getElementById("Password")
    email.classList.remove("error")
    email.value = ""
    pass.classList.remove("error")
    pass.value = ""
    if(!this.state.isLogin){
      var name = document.getElementById("Name")
      name.classList.remove("error")
      name.value = ""
    }
  }

  checkForm = () => {
    if(this.state.isLogin) {
      if(this.state.validEmail && this.state.validPwd) 
        this.setState({ hasError: false, valid: true })
    } else {
      if(this.state.validName && this.state.validEmail && this.state.validPwd) 
        this.setState({ hasError: false, valid: true })
    }
  }

  showHidePassword = () => {
    var { show } = this.state
    if (show)
      this.setState({ show: false })
    else
      this.setState({ show: true })
  }

  validateName = () => {
    var name = document.getElementById("Name")
    var re = /([a-zA-Z]).{3,50}/
    if (name.value === 0) {
      name.classList.add("error")
      this.setState({ nameErrMsg: EMPTY_NAME_MESSAGE, hasError: true, valid: false })
      return false
    }
    else if (!re.test(name.value)) {
      name.classList.add("error")
      this.setState({ nameErrMsg: INVALID_NAME_MESSAGE, hasError: true, valid: false })
      return false
    }
    else {
      name.classList.remove("error")
      this.setState({ nameErrMsg: "", validName : true }, this.checkForm)
      return true
    }
  }

  validatePwd = () => {
    var pass = document.getElementById("Password")
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,20}$/
    if (pass.value.length === 0) {
      pass.classList.add("error")
      this.setState({ passErrMsg: EMPTY_PASSWORD_MESSAGE, hasError: true, valid: false })
      return false
    }
    else if (!re.test(pass.value)) {
      pass.classList.add("error")
      this.setState({ passErrMsg: INVALID_PASSWORD_MESSAGE, hasError: true, valid: false })
      return false
    }
    else {
      pass.classList.remove("error")
      this.setState({ passErrMsg: "", validPwd : true }, this.checkForm)
      return true
    }
  }

  validateEmail = () => {
    var email = document.getElementById("Email")
    var re = /.+@[a-z]+\.[a-z]+/
    if (email.value.length === 0) {
      email.classList.add("error")
      this.setState({ emailErrMsg: "Please enter a email address.", hasError: true, valid: false })
      return false
    }
    else if (!re.test(email.value)) {
      email.classList.add("error")
      this.setState({ emailErrMsg: "Please provide a valid email address.", hasError: true, valid: false })
      return false
    }
    else {
      email.classList.remove("error")
      this.setState({ emailErrMsg: "", validEmail : true }, this.checkForm)
      return true
    }
  }

  validateEmailNamePass = () => {
    var validEmail = this.verifyEmail()
    var validPass = this.verifyPassword()
    if (this.state.isLogin) {
      var validLogin = validEmail && validPass;
      return validLogin;
    } else{
      var validName = this.verifyName()
      var validSignup = validEmail && validPass && validName;
      return validSignup;
    }
  }

  submit = () => {
    var isValid;
    if(this.state.isLogin)
      this.handleLogin();
    else
      this.handleSignup();
  }

  handleLogin() {
    var validLogin = this.validateLogin();
    if(validLogin) 
      this.executeLogin();
    else
      this.setState({ valid: false })
  }

  handleSignup() {
    var validSignup = this.validateSignup()
    if(validSignup) 
      this.executeSignup()
    this.setState({ valid: validSignup })
  }

  validateLogin() {
    var validEmail = this.validateEmail();
    var validPwd = this.validatePwd();
    return validEmail && validPwd;
  }

  validateSignup() {
    var validName = this.validateName();
    var validEmail = this.validateEmail();
    var validPwd = this.validatePwd();
    return validName && validEmail && validPwd;
  }

  executeLogin() {
    this.props.login();
    this.props.openOrCloseLoginModal();
  }

  executeSignup() {
    this.props.openOrCloseLoginModal();
  }

  render() {
    return(
      <Modal title={this.state.isLogin ? 'LOG IN' : 'SIGN UP'} id="login" isOpen={this.props.isLoginSignupModalOpen}>
        {this.state.isLogin ? //Dynamically shows Login or Signup Page with tertionary operator
        <Login 
        validateEmail={this.validateEmail} 
          validatePwd={this.validatePwd} 
          emailErrMsg={this.state.emailErrMsg} 
          passErrMsg={this.state.passErrMsg} 
          valid={this.state.valid} 
          submit={this.submit} 
          showHidePassword={this.showHidePassword} 
          show={this.state.show}
        /> : 
        <Signup 
          validateEmail={this.validateEmail} 
          validatePwd={this.validatePwd} 
          validateName={this.validateName} 
          nameErrMsg={this.state.nameErrMsg} 
          emailErrMsg={this.state.emailErrMsg} 
          passErrMsg={this.state.passErrMsg} 
          valid={this.state.valid} 
          submit={this.submit} 
          showHidePassword={this.showHidePassword} 
          show={this.state.show}
        />}
        <div className="logintypebox">
          <span className="signtypehint">{this.state.isLogin ? 'No account yet?' : 'Already have an account?'}</span>
          <span className="signuplink" onClick={this.changeLoginType}>{this.state.isLogin ? 'Sign up' : 'Log in'}</span>
        </div>
        <div className="modalfooter">
          <hr />
          <span className="policy">
            By logging in or creating an account, you agree to DayInTheLife's Terms of Service and Privacy Policy.
          </span>
        </div>
        <button className="modalclosebutton">
          <img className="modalcloseicon" alt="" src={close_icon} onClick={this.props.openOrCloseLoginModal}></img>
        </button>
      </Modal>
    )
  }
}