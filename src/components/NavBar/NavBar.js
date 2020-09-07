import React from "react"
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavSearch from './NavSearch'
import '../../css/NavBar/NavBar.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavLeft />
        <NavSearch />
        <NavRight isAccount={this.props.isAccount} logout={this.props.logout}/>
      </div>
  )}
}
