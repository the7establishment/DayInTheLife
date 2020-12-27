import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import JobProfile from "./components/JobProfile/JobProfile";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import SearchResults from "./components/SearchResults/SearchResults";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import DataManager from "./data/DataManager"
import LandingPage from './components/LandingPage/LandingPage'
import CreateADay from "./components/Creation/CreateADay"
import { Components } from "./data/Constants"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAccount: false,
      isLanding: true,
      isLoginSignupModalOpen: false
    }
  }
  componentDidMount() {
    this.updateIsLandingIfNeeded(this.props.location.pathname)
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname)
      this.updateIsLandingIfNeeded(this.props.location.pathname)
  }
  updateIsLandingIfNeeded = (pathname) => {
    var isItLandingAndNotAccount = pathname === "/" && !this.state.isAccount
    this.setIsLanding(isItLandingAndNotAccount)
  }
  setIsLanding = (isLanding) => {
    this.setState({ isLanding: isLanding })
  }
  login = () => {
    this.setState({ isAccount: true })
    this.setIsLanding(false)
    window.url = ""
  }
  logout = () => {
    this.setState({ isAccount: false })
    this.setIsLanding(true)
    document.getElementById("SideMenu").classList.add("none")
  }
  openOrCloseLoginModal = () => {
    var body = document.body
    !this.state.isLoginSignupModalOpen ? body.classList.add("modal-open") : body.classList.remove("modal-open")
    this.state.isLoginSignupModalOpen ? this.setState({ isLoginSignupModalOpen: false }) : this.setState({ isLoginSignupModalOpen: true })
  }
  render() {
    return (
      <div className="App">
        <NavBar isAccount={this.state.isAccount} logout={this.logout} isLanding={this.state.isLanding} openOrCloseLoginModal={this.openOrCloseLoginModal} isSideMenuOpen={this.state.isSideMenuOpen} openSideMenu={this.openSideMenu} />
        <LoginSignup login={this.login} isLoginSignupModalOpen={this.state.isLoginSignupModalOpen} openOrCloseLoginModal={this.openOrCloseLoginModal} />
        <Switch>
          <Route exact path="/" component={!this.state.isAccount ? LandingPage : () => <DataManager component={Components.HOME_PAGE} />} />
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