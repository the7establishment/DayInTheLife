import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import JobProfile from "./components/JobProfile/JobProfile";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SearchResults from "./components/SearchResults/SearchResults";
import DataManager from "./data/DataManager"
import { Components } from "./data/Constants"

export default class App extends Component {


  render() {
    return(
      <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ () => <DataManager component={Components.HOME_PAGE}/> } />
          <Route path="/JobProfile" component={JobProfile} />
          <Route path="/AccountProfile" component={ () => <DataManager component={Components.ACCT_PROFILE}/> } />
          <Route path="/Results" component={SearchResults} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    )
  }
}
