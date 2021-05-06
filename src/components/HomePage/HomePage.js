import React, { Component } from "react"
import "../../css/HomePage/HomePage.css"
import UserProfile from "./UserProfile"
import PreviewCard from "./PreviewCard"
import DisplayItem from "./DisplayItem"
import { Checkbox, FormControlLabel } from '@material-ui/core'
import Giphy from '../Gif/Gif'

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      goToAccountProfile: false,
      searchForADay: false,
      createADay: false,
      completeChecklist: false
    }
  }

  componentDidMount(){
    this.setState({
      goToAccountProfile: localStorage.getItem("goToAccountProfile"),
      searchForADay: localStorage.getItem("searchForADay"),
      createADay: localStorage.getItem("createADay"),
    })
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
  goToCreateADay() {
    window.location.href = `create?user=${localStorage.getItem('userId')}`
  }

  render() {
    const { goToAccountProfile, searchForADay, createADay } = this.state
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
                  checked={searchForADay}
                  color='primary'
                  onClick={()=> console.log('word')}
                />
                }
                label="Go search for a Day"
              />
              <FormControlLabel 
                control={
                  <Checkbox 
                  checked={goToAccountProfile}
                  color='primary'
                  onClick={() => this.goToAccountProfile()}
                />
                }
                label="Go to Account Profile"
              />
              <FormControlLabel 
                control={
                  <Checkbox 
                  checked={createADay}
                  color='primary'
                  onClick={() => this.goToCreateADay()}
                />
                }
                label="Go Create a Day"
              />
              {goToAccountProfile && searchForADay && createADay && <Giphy query="Congratulations"/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}