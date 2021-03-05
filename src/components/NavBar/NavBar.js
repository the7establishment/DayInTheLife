import React from "react"
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavSearch from './NavSearch'
import '../../css/NavBar/NavBar.css'

export default class NavBar extends React.Component {
  render() {
    const loggedInUser = this.props.loggedInUser
    return (
      <div className={loggedInUser ? 'navbar' : 'navbar landing'}>
        <NavLeft loggedIn={loggedInUser}/>
        <NavSearch loggedIn={loggedInUser}/>
        <NavRight loggedIn={loggedInUser} openOrCloseLoginModal={this.props.openOrCloseLoginModal} 
          isSideMenuOpen={this.props.isSideMenuOpen} openSideMenu={this.props.openSideMenu}/>
      </div>
  )}
}
