import React from "react";
import "../../css/Login.css"
import close_icon from "../../resource/icons/close_icon.png"
import eye from '../../resource/icons/eye.png'
import slash_eye from '../../resource/icons/slash_eye.png'

export default class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      isLogin: true,
      show: false
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
  }

  showHidePassword = () => {
    var {show} = this.state
    if(show)
      this.setState({show:false})
    else
      this.setState({show:true})
  }

  render() {
    return (
      <div id="login" className="login modalbackground">
        <div className="modal">
          <div className="modalheader">
            <span className="modaltitle">{this.state.isLogin ? 'LOG IN' : 'SIGN UP'}</span>
          </div>
          <div className="modalbody">
            <input className={this.state.isLogin ? 'none' : 'modalinput'} placeholder="Name"/>
            <input className="modalinput" placeholder="Email"/>
            <div className="passwordwrap">
              <input className="modalinput" placeholder="Password" type={this.state.show ? "text" : "password"}/>
              <img className="showicon" alt="eye" src={this.state.show ?slash_eye : eye} onClick={this.showHidePassword}></img>
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
            <button className="ditl-button modalbutton">{this.state.isLogin ? 'LOG IN' : 'SIGN UP'}</button>
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