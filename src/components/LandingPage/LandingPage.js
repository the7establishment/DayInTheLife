import React from 'react'
import '../../css/LandingPage.css'
import landingimg from '../../resource/img/laptop-iphone-desk-notebook.jpg'
import search from '../../resource/icons/search.png'
import know from '../../resource/icons/know.png'
import calendar from '../../resource/icons/calendar.png'
import lightbulb from '../../resource/icons/lightbulb.png'

export default class LandingPage extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="landingpage">
        <img alt="" src={landingimg} className="landingimage"></img>
        <div className="imgmsg">
          <h1>TAKE A PEEK INTO EVERYDAY LIFE</h1>
          <p>Look at a day in the life from over millions of people</p>
        </div>
        <div className="howditl">
          <h1 className="ditltitle">How DayInTheLife works for You</h1>
          <div className="iconbar">
            <div className="how-wrapper">
              <img alt="" src={search} className="howicon"></img>
              <span>Find Real Workers</span>
            </div>
            <div className="how-wrapper">
              <img alt="" src={know} className="howicon"></img>
              <span>Look at Everyday Life</span>
            </div>
            <div className="how-wrapper">
              <img alt="" src={calendar} className="howicon"></img>
              <span>See a specific Day</span>
            </div>
            <div className="how-wrapper">
              <img alt="" src={lightbulb} className="howicon"></img>
              <span>Know what you want</span>
            </div>
          </div>
        </div>
        <div className="exploreditl">
          <h1 className="ditltitle">Explore DayInTheLife</h1>
        </div>
        <div className="whyditl">
          <h1 className="ditltitle">Why DayInTheLife?</h1>

        </div>
      </div>
    )
  }
}