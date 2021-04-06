import React from "react";
import profilePic from '../../resource/icons/default_user.png'
import { Link } from 'react-router-dom'
import logout from '../../resource/icons/logout.png'
import SearchResults from "../SearchResults/SearchResults";

export default class NavRight extends React.Component {

  openSideMenu = () => {
    document.getElementById("SideMenu").classList.remove("none")
  }
  closeSideMenu = () => {
    document.getElementById("SideMenu").classList.add("none")
  }
  logout = () => {
    localStorage.removeItem('userId')
    this.closeSideMenu()
  }
  render(){
    const loggedIn = this.props.loggedIn
    return (
      <div className="navright center">
        <li className={loggedIn ? "navitem" : "none" }>Notifications</li>
        <li className={loggedIn ? "navitem" : "none" }>Messages</li>
        <li className={loggedIn ? "none" : "navitem"} onClick={this.props.openOrCloseLoginModal}>Login</li>
        <Link to={{ pathname: "/AccountProfile", search: `?user=${localStorage.getItem('userId')}`}}>
          <img src={profilePic} alt="" className={loggedIn ? "navprofile" : "none"} onMouseEnter={this.openSideMenu}></img>
        </Link>
        <ul className={this.props.isSideMenuOpen ? "nav-menu" : "nav-menu none"} id="SideMenu" onMouseLeave={this.closeSideMenu}>
          <Link to="/">
            <li className="nav-menu-item" onClick={this.logout}>
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
