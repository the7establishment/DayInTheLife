import React from "react";
import profilePicMatthew from '../../resource/profile/profilePicMatthew.jpg'
import { Link } from 'react-router-dom'

export default class NavRight extends React.Component {

  openLoginModal = () => {
    var modal = document.getElementById("login")
    var body = document.body
    modal.style.display = "block"
    body.classList.add("modal-open")
  }

  render(){
    return (
      <div className="navright center">
      <li className="navitem">Notifications</li>
      <li className="navitem">Messages</li>
      <li className={this.props.isAccount ? "none" : "navitem"} onClick={this.openLoginModal}>Login</li>
      <Link to="/AccountProfile">
        <img src={profilePicMatthew} className={this.props.isAccount ? "navprofile" : "none"}></img>
      </Link>
      </div>
    )
  }
}
