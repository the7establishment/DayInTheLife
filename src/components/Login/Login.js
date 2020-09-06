import React from "react";
import "../../css/Login.css"
import close_icon from "../../resource/icons/close_icon.png"

export default class Login extends React.Component {

  closeModal = () => {
    var modal = document.getElementById("login")
    var body = document.body
    modal.style.display = "none"
    body.classList.remove("modal-open")
  }

  render() {
    return (
      <div id="login" className="login modalbackground">
        <div className="modal">
          <div className="modalheader">
            <span className="modaltitle">Login</span>
          </div>
          <div className="modalbody">
            <input className="modalinput" placeholder="Email"/>
            <input className="modalinput" placeholder="Password"/>
            <div className="rememberforgotbar">
              <div className="remembermebox">
                <input className="rememberme" type="checkbox" />
                <span>Keep me logged in</span>
              </div>
              <div>
                <span className="forgotpassword">Forgot Password?</span>
              </div>
            </div>
            <button className="ditl-button modalbutton">LOG IN</button>
            <div className="logintypebox">
              <span className="signtypehint">No account yet?</span>
              <span className="signuplink">Sign up</span>
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