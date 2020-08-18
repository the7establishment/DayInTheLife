import React from "react";
import NavBar from "./components/NavBar/NavBar";
import JobProfile from "./components/JobProfile/JobProfile";
import "./styles.css";
import AccountProfile from "./components/AccountProfile/AccountProfile";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/JobProfile" component={JobProfile} />
          <Route path="/AccountProfile" component={AccountProfile} />
        </Switch>
      </div>
    </Router>
  );
}
