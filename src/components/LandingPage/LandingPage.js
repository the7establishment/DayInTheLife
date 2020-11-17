import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/LandingPage.css'
import landingimg from '../../resource/img/laptop-iphone-desk-notebook.jpg'
import search from '../../resource/icons/search.png'
import search_green from '../../resource/icons/search_green.png'
import know from '../../resource/icons/know.png'
import calendar from '../../resource/icons/calendar.png'
import lightbulb from '../../resource/icons/lightbulb.png'
import callToActionImg from '../../resource/img/asian-guy.jpg'
import man from '../../resource/img/man_desk.png'
import man_idea from '../../resource/img/man_idea.png'
import man_thinking from '../../resource/img/man_thinking.png'
import mountain_textbook from '../../resource/img/mountain_textbooks.png'
import WhyCard from './WhyCard'

export default class LandingPage extends React.Component {
  constructor(){
    super()
    this.state = {
      title: "Check Anytime",
      content: "Explore DayinTheLife from the comfort of your home or on your mobile device.",
      title2: "Day to Day Routine",
      content2: "See real routines and responsibilities from people that actually work there.",
      title3: "Confidence",
      content3: "Have confidence in your career or when changing careers. Know exactly what you are going to be doing.",
      title4: "Level Up",
      content4: "See what skills other people have and know the end goal of what you should achieve to be the right fit for the job.",
      query: ''
    }
  }

  searchJobs = (event) => {
    var query = event.target.value
    this.setState({query: query})
    if(event.key === "Enter"){
      console.log("Hit Enter")
      window.location.href = `/Results?job=${query}` 
    }
  }

  render(){
    return(
      <div className="landingpage">
        <div className="top">
          <img alt="" src={landingimg} className="landingimage"></img>
          <div className="imgmsg">
            <h1>TAKE A PEEK INTO EVERYDAY LIFE</h1>
            <p>Look at a day in the life from over millions of people. See their day to day routine, responsibilities, and balance.</p>
            <div className="searchbar">
              <input className="modalinput" onKeyPress={this.searchJobs} onChange={this.searchJobs}/>
              <Link to={`/Results?job=${this.state.query}`}>
                <img alt="" src={search_green} className="searchicon"></img>
              </Link>
            </div>
          </div>
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
        {/* <div className="exploreditl">
          <h1 className="ditltitle">Explore DayInTheLife</h1>
          <span>Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on DayInTheLife today.</span>
        </div> */}
        <div className="whyditl">
          <h1 className="ditltitle">Why DayInTheLife?</h1>
          <div className="cardbar">
            <WhyCard title={this.state.title} content={this.state.content} img={man}/>
            <WhyCard title={this.state.title2} content={this.state.content2} img={man_thinking}/>
            <WhyCard title={this.state.title3} content={this.state.content3} img={man_idea}/>
            <WhyCard title={this.state.title4} content={this.state.content4} img={mountain_textbook}/>
          </div>
        </div>
        <div className="calltoaction">
          <img alt="" src={callToActionImg} className="landingimage"></img>
          <div className="imgmsg" style={{top:"-80%"}}>
            <h1>Find the Job That Fits Your Life</h1>
            <p>On DayInTheLife it's about searching for the perfect lifestyle without questioning if the job is the right fit for you.</p>
            <Link to="/Results">
              <button className="ditl-button">GET STARTED NOW</button>
            </Link>
          </div>
        </div>
        <div className="footer">
          <span>Copyright © 2020, DayInTheLife, Inc. "DayInTheLife" and logo are registered trademarks of DayInTheLife, Inc</span>
        </div>
      </div>
    )
  }
}