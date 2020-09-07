import React from "react";
import NavBar from "./components/NavBar/NavBar";
import JobProfile from "./components/JobProfile/JobProfile";
import "./styles.css";
import AccountProfile from "./components/AccountProfile/AccountProfile";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchResults from "./components/SearchResults/SearchResults";
import LoginSignup from "./components/LoginSignup/LoginSignup";

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isAccount: false
    }
  }
  login = () => {
    this.setState({isAccount:true})
  }

  render() {
    return (
      <Router>
      <div className="App">
        <NavBar isAccount={this.state.isAccount}/>
        <Switch>
          <Route path="/JobProfile" component={JobProfile} />
          <Route path="/AccountProfile" component={AccountProfile} />
          <Route path="/Results" component={SearchResults} />
        </Switch>
        <LoginSignup login={this.login}/>
      </div>
    </Router>
  )}
}
