import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import JobProfile from "./components/JobProfile/JobProfile";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import SearchResults from "./components/SearchResults/SearchResults";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import DataManager from "./data/DataManager"
import LandingPage from './components/LandingPage/LandingPage'
import { Components } from "./data/Constants"

class App extends Component {
  constructor(){
    super()
    this.state = {
      isAccount: false,
      isLanding: true
    }
  }
  login = () => {
    this.setState({isAccount:true})
    this.setIsLanding(false)
    window.url = ""
  }
  logout = () => {
    this.setState({isAccount:false})
    this.setIsLanding(true)
    document.getElementById("SideMenu").classList.add("none")
  }
  componentDidMount(){
    this.updateIsLandingIfNeeded(this.props.location.pathname)
  }
  componentDidUpdate(prevProps){
    if(this.props.location.pathname !== prevProps.location.pathname)
      this.updateIsLandingIfNeeded(this.props.location.pathname)
  }
  updateIsLandingIfNeeded = (pathname) =>{
    var isItLandingAndNotAccount = pathname === "/" && !this.state.isAccount
    this.setIsLanding(isItLandingAndNotAccount)
  }
  setIsLanding = (isLanding) => {
    this.setState({isLanding:isLanding})
  }

  render() {
    return(
      <div className="App">
        <NavBar isAccount={this.state.isAccount} logout={this.logout} isLanding={this.state.isLanding}/>
        <LoginSignup login={this.login}/>
        <Switch>
          <Route exact path="/" component={!this.state.isAccount ? LandingPage : () => <DataManager component={Components.HOME_PAGE}/> } />
          <Route path="/JobProfile" component={JobProfile} />
          <Route path="/AccountProfile" component={ () => <DataManager component={Components.ACCT_PROFILE}/> } />
          <Route path="/Results" component={SearchResults} />
          <Redirect to="/" />
        </Switch>
      </div>
  )}
}

export default withRouter(props => <App {...props}/>)