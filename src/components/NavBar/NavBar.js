import React from "react"
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavSearch from './NavSearch'
import '../../css/NavBar/NavBar.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <div className={this.props.isLanding ? 'navbar landing' : "navbar"}>
        <NavLeft isLanding={this.props.isLanding}/>
        <NavSearch isLanding={this.props.isLanding}/>
        <NavRight isAccount={this.props.isAccount} logout={this.props.logout}/>
      </div>
  )}
}
