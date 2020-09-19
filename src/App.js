import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import JobProfile from "./components/JobProfile/JobProfile";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SearchResults from "./components/SearchResults/SearchResults";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import DataManager from "./data/DataManager"
import LandingPage from './components/LandingPage/LandingPage'
import { Components } from "./data/Constants"

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      isAccount: false
    }
  }
  login = () => {
    this.setState({isAccount:true})
    window.url = ""
  }
  logout = () => {
    this.setState({isAccount:false})
    document.getElementById("SideMenu").classList.add("none")
  }

  render() {
    return(
      <Router>
      <div className="App">
        <NavBar isAccount={this.state.isAccount} logout={this.logout}/>
        <Switch>
          <Route exact path="/" component={!this.state.isAccount ? LandingPage : () => <DataManager component={Components.HOME_PAGE}/> } />
          <Route path="/JobProfile" component={JobProfile} />
          <Route path="/AccountProfile" component={ () => <DataManager component={Components.ACCT_PROFILE}/> } />
          <Route path="/Results" component={SearchResults} />
          <Redirect to="/" />
        </Switch>
        <LoginSignup login={this.login}/>
      </div>
    </Router>
  )}
}
