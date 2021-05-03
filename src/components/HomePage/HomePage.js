import React, { Component } from "react"
import "../../css/HomePage/HomePage.css"
import UserProfile from "./UserProfile"
import PreviewCard from "./PreviewCard"
import DisplayItem from "./DisplayItem"
import { Checkbox, FormControlLabel } from '@material-ui/core'

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      goToAccountProfile: false
    }
  }

  componentDidMount(){
    this.setState({goToAccountProfile: localStorage.getItem("goToAccountProfile")})
  }

  getHistory() {
    return <PreviewCard />
  }

  getWhatsNew() {
    return <DisplayItem />
  }

  getTrending() {
    return <DisplayItem />
  }

  goToAccountProfile() {
    window.location.href = `AccountProfile?user=${localStorage.getItem('userId')}`
    localStorage.setItem('goToAccountProfile', true)
  }

  render() {
    return (
      <div className="page-slim">
        <div className="stage-type-slim">
          <div className="stage-left">
            <UserProfile { ...this.props } />
            {/* <div className="viewbox">
              <h3 >History</h3>
              { this.getHistory() }
              { this.getHistory() }
              { this.getHistory() }
              <a className="show-more-hist ditl-a">...</a>
            </div> */}
          </div>
          <div className="stage-right">
            {/* <div className="viewbox-no-pad">
              <h3 className="home-header">What's New</h3>
              { this.getWhatsNew() }
              { this.getWhatsNew() }
              { this.getWhatsNew() }
            </div> */}
            {/* <div className="viewbox-no-pad">
              <h3 className="home-header">Trending</h3>
              { this.getTrending() }
              { this.getTrending() }
              { this.getTrending() }
            </div> */}
            <div className="viewbox">
              <h3 className="home-header">Tutorial Checklist</h3>
              <FormControlLabel 
                control={
                  <Checkbox 
                  checked={false}
                  color='primary'
                  onClick={()=> console.log('word')}
                />
                }
                label="Go search for a Day"
              />
              <FormControlLabel 
                control={
                  <Checkbox 
                  checked={this.state.goToAccountProfile}
                  color='primary'
                  onClick={() => this.goToAccountProfile()}
                />
                }
                label="Go to Account Profile"
              />
              <FormControlLabel 
                control={
                  <Checkbox 
                  checked={false}
                  color='primary'
                />
                }
                label="Go Create a Day"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}