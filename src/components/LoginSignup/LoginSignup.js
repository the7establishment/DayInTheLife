import React from "react"
import Modal from '../Modal'
import "../../css/LoginSignup.css"
import close_icon from "../../resource/icons/close_icon.png"
import Login from './Login'
import { Form1, Form2 } from "./Signup"
import { RestDataSource } from "../../data/RestDataSource"

const EMPTY_NAME_MESSAGE = 'Please enter a name.';
const INVALID_NAME_MESSAGE = 'Please enter at least 3 characters.';
const EMPTY_PASSWORD_MESSAGE = 'Please enter a password.';
const INVALID_PASSWORD_MESSAGE = 'Passwords must be 8 to 20 characters, contain at least 1 uppercase and lowercase letter, 1 number, and not include spaces.';
const SERVICE_DOWN_MESSAGE = 'Service is not available at this time. Please try again later.'

var dataSource = new RestDataSource()

export default class LoginSignup extends React.Component {
  constructor(){
    super()
    this.state={
      currentForm: "Login",
      show: false,
      // error messages
      loginErrMsg:'',
      signUpErrMsg:'',
      loginPassErrMsg: '',
      loginEmailErrMsg: '',
      signupPassErrMsg: '',
      signupEmailErrMsg: '',
      firstNameErrMsg: '',
      lastNameErrMsg: '',
      // login
      loginEmail: '',
      loginPassword: '',      
      loginHasError: false,
      firstValidName: false,
      lastValidName: false,
      loginValidEmail: false,
      loginValidPwd: false,
      loginValid: false,
      // signup
      firstValidName: false,
      lastValidName: false,
      signupHasError: false,
      signupValidEmail: false,
      signupValidPwd: false,
      signupValid: false,
      firstName: '',
      lastName:'',
      signupEmail: '',
      signupPassword: '',
      gender: 'Other',
      country: 'United States',
      region: '',
      homeCountry: 'United States',
      homeRegion: ''
    }
  }

  changeLoginType = () => {
    var isLogin = this.state.currentForm === "Login"
    if (isLogin)
      this.setState({ currentForm: "Form1" })
    else
      this.setState({ currentForm: "Login" })
  }

  clearForm = (mode) => {
    this.setState({
      nameErrMsg: '',
      emailErrMsg: '',
      passErrMsg: '',
      hasError: false,
      valid: false
    })
    var email = document.getElementById("Email")
    var pass = document.getElementById("Password")
    var notLogin = this.state.currentForm !== "Login"
    email.classList.remove("error")
    email.value = ""
    pass.classList.remove("error")
    pass.value = ""
    if(notLogin){
      var name = document.getElementById("Name")
      name.classList.remove("error")
      name.value = ""
    }
  }

  checkForm = () => {
    var isLogin = this.state.currentForm === "Login"
    if(isLogin) {
      if(this.state.loginValidEmail && this.state.loginValidPwd) 
        this.setState({ loginHasError: false, loginValid: true })
    } else {
      if(this.state.firstValidName && this.state.lastValidName && this.state.signupValidEmail && this.state.signupValidPwd) 
        this.setState({ signupHasError: false, signupValid: true })
    }
  }

  changeForm = (form) => {
      this.setState({ currentForm: form })
  }

  showHidePassword = () => {
    var { show } = this.state
    if (show)
      this.setState({ show: false })
    else
      this.setState({ show: true })
  }

  validateName = (type) => {
    var elementId = type + "Name" 
    var validName = type + "ValidName"
    var nameErrMsg = type + "NameErrMsg"
    var name = document.getElementById(elementId)
    var re = /([a-zA-Z]).{3,50}/
    if (name.value.length === 0) {
      name.classList.add("error")
      this.setState({ [nameErrMsg]: EMPTY_NAME_MESSAGE, signupHasError: true, signupValid: false, [name.id]: name.value })
      return false
    }
    else if (!re.test(name.value)) {
      name.classList.add("error")
      this.setState({ [nameErrMsg]: INVALID_NAME_MESSAGE, signupHasError: true, signupValid: false, [name.id]: name.value })
      return false
    }
    else {
      name.classList.remove("error")
      this.setState({ [nameErrMsg]: "", [validName] : true, [name.id]: name.value}, this.checkForm)
      return true
    }
  }

  validatePwd = (mode) => {
    var elementId = mode + "Password"
    var valid = mode + "Valid"
    var hasError = mode + "HasError"
    var validPwd = mode + "ValidPwd"
    var passErrMsg = mode + "PassErrMsg"
    var pass = document.getElementById(elementId)
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,20}$/
    if (pass.value.length === 0) {
      pass.classList.add("error")
      this.setState({ [passErrMsg]: EMPTY_PASSWORD_MESSAGE, [hasError]: true, [valid]: false, [pass.id]: pass.value })
      return false
    }
    else if (!re.test(pass.value)) {
      pass.classList.add("error")
      this.setState({ [passErrMsg]: INVALID_PASSWORD_MESSAGE, [hasError]: true, [valid]: false, [pass.id]: pass.value })
      return false
    }
    else {
      pass.classList.remove("error")
      this.setState({ [passErrMsg]: "", [validPwd] : true, [pass.id]: pass.value }, this.checkForm)
      return true
    }
  }

  validateEmail = (mode) => {
    var elementId = mode + "Email"
    var valid = mode + "Valid"
    var hasError = mode + "HasError"
    var validEmail = mode + "ValidEmail"
    var emailErrMsg = mode + "EmailErrMsg"
    var email = document.getElementById(elementId)
    var re = /.+@[a-z]+\.[a-z]+/
    if (email.value.length === 0) {
      email.classList.add("error")
      this.setState({ [emailErrMsg]: "Please enter an email address.", [hasError]: true, [valid]: false, [email.id]: email.value })
      return false
    }
    else if (!re.test(email.value)) {
      email.classList.add("error")
      this.setState({ [emailErrMsg]: "Please provide a valid email address.", [hasError]: true, [valid]: false, [email.id]: email.value })
      return false
    }
    else {
      email.classList.remove("error")
      this.setState({ [emailErrMsg]: "", [validEmail] : true, [email.id]: email.value }, this.checkForm)
      return true
    }
  }

  updateFormValue = (event) => {
    this.setState({ [ event.target.name ] : event.target.value })
  }

  updateCountry = (country) => {
    //requires separate handler
    this.setState({ country: country})
  }

  updateHomeCountry = (country) => {
    //requires separate handler
    this.setState({ homeCountry: country})
  }

  updateRegion = (region) => {
    //requires separate handler
    this.setState({ region: region})
  }

  updateHomeRegion = (region) => {
    //requires separate handler
    this.setState({ homeRegion: region})
  }

  submit = () => {
    var isLogin = this.state.currentForm === "Login";
    if(isLogin)
      this.handleLogin();
    else
      this.executeSignup();
  }

  handleLogin() {
    var validLogin = this.validateLogin();
    if(validLogin) 
      this.executeLogin();
    else
      this.setState({ valid: false })
  }

  validateLogin() {
    var validEmail = this.validateEmail('login');
    var validPwd = this.validatePwd('login');
    return validEmail && validPwd;
  }

  async executeLogin() {
    var { openOrCloseLoginModal } = this.props
    var email = this.state.loginEmail
    var password = this.state.loginPassword


    // post login
    dataSource.PostData("login", { email : email, password : password})
    .then(function(res) {
        openOrCloseLoginModal();
        window.location.href = `/Home?user=${res.data.userId}`
    }).catch(error => {
      var errorMessage = error.response ? error.response.data.message : SERVICE_DOWN_MESSAGE
      this.setState({ loginErrMsg: errorMessage })
      console.error('Login post call failed: ' + error.message);
    })
  }

  async executeSignup() {
    var { openOrCloseLoginModal } = this.props
    var user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fullName: this.state.firstName + " " + this.state.lastName,
      email: this.state.signupEmail,
      password: this.state.signupPassword,
      gender: this.state.gender,
      country: this.state.country,
      region: this.state.region,
      //placeholders
      homeCountry: this.state.homeCountry,
      homeRegion: this.state.homeRegion
    }

    // post signup
    dataSource.PostData("signup", user)
    .then(function(res) {
        openOrCloseLoginModal();
        window.location.href = `/Home?user=${res.data.userId}`
    }).catch(error => {
      var errorMessage = error.response ? error.response.data.message : SERVICE_DOWN_MESSAGE
      this.setState({ signupErrMsg: errorMessage })
      console.error('Signup post call failed: ' + error.message);
    })
  }

  selectComponent(comp) {
      var args
      const wrap = (Component, props) => <Component {...props} ></Component>
      switch (comp) {
        case "Login" :
          args = {
            validateEmail:this.validateEmail,
            validatePwd:this.validatePwd,
            showHidePassword:this.showHidePassword,
            submit:this.submit,
            serviceErrMsg:this.state.loginErrMsg,
            emailErrMsg:this.state.loginEmailErrMsg,
            passErrMsg:this.state.loginPassErrMsg,
            valid:this.state.loginValid,
            show:this.state.show,
            email:this.state.loginEmail,
            password:this.state.loginPassword
          }
          return wrap(Login, args)
        case "Form1" :
          args = {
            validateEmail:this.validateEmail, 
            validatePwd:this.validatePwd, 
            validateName:this.validateName, 
            showHidePassword:this.showHidePassword,
            changeForm:this.changeForm,
            next: this.nextForm,
            serviceErrMsg:this.state.signupErrMsg,
            firstNameErrMsg:this.state.firstNameErrMsg, 
            lastNameErrMsg:this.state.lastNameErrMsg, 
            emailErrMsg:this.state.signupEmailErrMsg, 
            passErrMsg:this.state.signupPassErrMsg,
            show:this.state.show,
            valid:this.state.signupValid,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.signupEmail,
            password:this.state.signupPassword
          }
          return wrap(Form1, args)
        case "Form2" :
          args = {
            submit:this.submit,   
            changeForm:this.changeForm,
            update:this.updateFormValue,
            updateCountry:this.updateCountry,
            updateHomeCountry:this.updateHomeCountry,
            updateRegion:this.updateRegion,
            updateHomeRegion:this.updateHomeRegion,
            serviceErrMsg:this.state.signupErrMsg,
            gender:this.state.gender,
            country:this.state.country,
            region:this.state.region,
            homeCountry:this.state.homeCountry,
            homeRegion:this.state.homeRegion,
            valid:this.state.signupValid
          }
          return wrap(Form2, args)
      }
  }

  render() {
    var isLogin = this.state.currentForm === "Login"
    return(
      <Modal title={isLogin ? 'LOG IN' : 'SIGN UP'} id="login" isOpen={this.props.isLoginSignupModalOpen}>
        {this.selectComponent(this.state.currentForm)}
        <div className="logintypebox">
          <span className="signtypehint">{isLogin ? 'No account yet?' : 'Already have an account?'}</span>
          <span className="signuplink" onClick={this.changeLoginType}>{isLogin ? 'Sign up' : 'Log in'}</span>
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