import React from "react"
import Modal from '../Modal'
import "../../css/LoginSignup.css"
import close_icon from "../../resource/icons/close_icon.png"
import Login from './Login'
import Signup from "./Signup"

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
      valid: true
    }
  }

  changeLoginType = () => {
    var { isLogin } = this.state
    if (isLogin)
      this.setState({ isLogin: false })
    else
      this.setState({ isLogin: true })
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

  showHidePassword = () => {
    var { show } = this.state
    if (show)
      this.setState({ show: false })
    else
      this.setState({ show: true })
  }

  verifyName = () => {
    var name = document.getElementById("Name")
    var re = /([a-zA-Z]).{3,50}/
    if (name.value == 0) {
      name.classList.add("error")
      this.setState({ nameErrMsg: "Please enter a name.", hasError: true, valid: false })
      return false
    }
    else if (!re.test(name.value)) {
      name.classList.add("error")
      this.setState({ nameErrMsg: "Please enter at least 3 characters.", hasError: true, valid: false })
      return false
    }
    else {
      name.classList.remove("error")
      this.setState({ nameErrMsg: "", hasError: false, valid: true })
      return true
    }
  }

  verifyPassword = () => {
    var pass = document.getElementById("Password")
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,20}$/
    if (pass.value.length == 0) {
      pass.classList.add("error")
      this.setState({ passErrMsg: "Please enter a password.", hasError: true, valid: false })
      return false
    }
    else if (!re.test(pass.value)) {
      pass.classList.add("error")
      this.setState({ passErrMsg: "Passwords must be 8 to 20 characters, contain at least 1 uppercase and lowercase letter, 1 number, and not include spaces.", hasError: true, valid: false })
      return false
    }
    else {
      pass.classList.remove("error")
      this.setState({ passErrMsg: "", hasError: false, valid: true })
      return true
    }
  }

  verifyEmail = () => {
    var email = document.getElementById("Email")
    var re = /.+\@[a-z]+\.[a-z]+/
    if (email.value.length == 0) {
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
      this.setState({ emailErrMsg: "", hasError: false, valid: true })
      return true
    }
  }

  validateEmailNamePass = () => {
    var validEmail = this.verifyEmail()
    var validPass = this.verifyPassword()
    if (this.state.isLogin)
      return validEmail && validPass ? true : false
    else{
      var validName = this.verifyName()
      return validEmail && validPass && validName ? true : false
    }
  }

  login_signup = () => {
    var isValid = this.validateEmailNamePass()
    if (isValid) {
      this.setState({ valid: isValid })
      if (this.state.isLogin)
        this.props.login()
      else
        console.log("signup")
      this.props.openOrCloseLoginModal()
    }
    else
      this.setState({ valid: isValid })
  }

  render() {
    return(
      <Modal title={this.state.isLogin ? 'LOG IN' : 'SIGN UP'} id="login" isOpen={this.props.isLoginSignupModalOpen}>
        {this.state.isLogin ? //Dynamically shows Login or Signup Page with tertionary operator
        <Login 
          verifyEmail={this.verifyEmail} 
          verifyPassword={this.verifyPassword} 
          emailErrMsg={this.state.emailErrMsg} 
          passErrMsg={this.state.passErrMsg} 
          valid={this.state.valid} 
          login_signup={this.login_signup} 
          showHidePassword={this.showHidePassword} 
          show={this.state.show}
        /> : 
        <Signup 
          verifyEmail={this.verifyEmail} 
          verifyPassword={this.verifyPassword} 
          verifyName={this.verifyName} 
          nameErrMsg={this.state.nameErrMsg} 
          emailErrMsg={this.state.emailErrMsg} 
          passErrMsg={this.state.passErrMsg} 
          valid={this.state.valid} 
          login_signup={this.login_signup} 
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