import React from "react";
import profilePicMatthew from '../../resource/profile/profilePicMatthew.jpg'
import { Link } from 'react-router-dom'
import logout from '../../resource/icons/logout.png'

export default class NavRight extends React.Component {

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
        <li className={this.props.isAccount ? "none" : "navitem"} onClick={this.props.openOrCloseLoginModal}>Login</li>
        <Link to="/AccountProfile">
          <img src={profilePicMatthew} alt="" className={this.props.isAccount ? "navprofile" : "none"} onMouseEnter={this.openSideMenu}></img>
        </Link>
        <ul className={this.props.isSideMenuOpen ? "nav-menu" : "nav-menu none"} id="SideMenu" onMouseLeave={this.closeSideMenu}>
          <Link to="/">
            <li className="nav-menu-item" onClick={this.props.logout}>
              <div className="nav-menu-item-content">
                <img className="nav-menu-icon" alt="" src={logout} alt="logout"></img>
                <span className="nav-menu-item-title">Log Out</span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}
