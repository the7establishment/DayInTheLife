import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import LoginSignup from "./components/LoginSignup/LoginSignup";
import DataManager from "./data/DataManager"
import LandingPage from './components/LandingPage/LandingPage'
import CreateADay from "./components/Creation/CreateADay"
import { Components } from "./data/Constants"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoginSignupModalOpen: false
    }
  }
  openOrCloseLoginModal = () => {
    var body = document.body
    !this.state.isLoginSignupModalOpen ? body.classList.add("modal-open") : body.classList.remove("modal-open")
    this.state.isLoginSignupModalOpen ? this.setState({ isLoginSignupModalOpen: false }) : this.setState({ isLoginSignupModalOpen: true })
  }

  render() {
    const loggedInUser = localStorage.getItem('userId')
    return (
      <div className="App">
        <NavBar loggedInUser={loggedInUser} openOrCloseLoginModal={this.openOrCloseLoginModal} isSideMenuOpen={this.state.isSideMenuOpen} openSideMenu={this.openSideMenu} />
        <LoginSignup isLoginSignupModalOpen={this.state.isLoginSignupModalOpen} openOrCloseLoginModal={this.openOrCloseLoginModal} />
        <Switch>
          <Route exact path="/" component={ loggedInUser ? () => <DataManager component={Components.HOME_PAGE} />  : LandingPage } />
          <Route path="/JobProfile" component={() => <DataManager component={Components.JOB_PROFILE} />} />
          <Route path="/AccountProfile" component={() => <DataManager component={Components.ACCT_PROFILE} />} />
          <Route path="/Results" component={()=> <DataManager component={Components.RESULTS} />} />
          <Route path="/Create" component={CreateADay} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(props => <App {...props} />)