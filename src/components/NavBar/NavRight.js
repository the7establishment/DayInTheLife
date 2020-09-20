import React from "react";
import profilePicMatthew from '../../resource/profile/profilePicMatthew.jpg'
import { Link } from 'react-router-dom'
import logout from '../../resource/icons/logout.png'

export default class NavRight extends React.Component {

  openLoginModal = () => {
    var modal = document.getElementById("login")
    var body = document.body
    modal.style.display = "block"
    body.classList.add("modal-open")
  }

  openSideMenu = () => {
    document.getElementById("SideMenu").classList.remove("none")
  }
  closeSideMenu = () => {
    document.getElementById("SideMenu").classList.add("none")
  }

  render(){
    return (
      <div className="navright center">
        <li className={!this.props.isAccount ? "none" : "navitem"}>Notifications</li>
        <li className={!this.props.isAccount ? "none" : "navitem"}>Messages</li>
        <li className={this.props.isAccount ? "none" : "navitem"} onClick={this.openLoginModal}>Login</li>
        <Link to="/AccountProfile">
          <img src={profilePicMatthew} className={this.props.isAccount ? "navprofile" : "none"} onMouseEnter={this.openSideMenu}></img>
        </Link>
        <ul className="nav-menu none" id="SideMenu" onMouseLeave={this.closeSideMenu}>
          <Link to="/">
            <li className="nav-menu-item" onClick={this.props.logout}>
              <div className="nav-menu-item-content">
                <img className="nav-menu-icon" src={logout} alt="logout"></img>
                <span className="nav-menu-item-title">Log Out</span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}
