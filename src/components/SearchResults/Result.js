import React, { useState } from "react";
import heart from '../../resource/icons/heart.png'
import empty_heart from '../../resource/icons/empty_heart.png'
import star from '../../resource/icons/star.png'
import profilePicMatthew from '../../resource/profile/profilePicMatthew.jpg'

export default class Result extends React.Component {

  setCurrentTab = (event) => {
    var active = document.getElementById("tab-active")
    if(event.target.innerText == "Video"){
      active.setAttribute("style", "grid-column:1; width: 40px")
    }
    if(event.target.innerText == "Popular Day"){
      active.setAttribute("style", "grid-column:2; width: 82px")
    }
    if(event.target.innerText == "Activity"){
      active.setAttribute("style", "grid-column:3; width: 50px")
    }
  }

  render(){
    return (
      <div className="result-card">
        <div className="result-left">
          <div className="result-detail-left">
            <img src={profilePicMatthew} alt="" className="resultprofile"></img>
            <span className="stars-box">
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <span className="star-number">5.0</span>
            </span>
            <span className="result-new">new</span>
            <button className="result-button">View</button>
          </div>
          <div className="result-detail-right">
            <span className="result-title">Matthew Chuong</span>
            <span className="result-name">Software Developer</span>
            <span>United Healthgroup Miami, FL</span>
            <li className="result-list gray">Software Development: 3 Years</li>
            <li className="result-list gray">Interface with developers to help support issues and bugs.</li>
            <li className="result-list gray">Build and maintain MVC and REST applications.</li>
            <img src={heart} alt="" className="resulticon"></img>
            <img src={empty_heart} alt="" className="resulticon"></img>
          </div>
        </div>
        <div className="result-right">
          <div className="result-tabmenu">
            <span className="tab" onClick={this.setCurrentTab}>Video</span>
            <span className="tab" onClick={this.setCurrentTab}>Popular Day</span>
            <span className="tab" onClick={this.setCurrentTab}>Activity</span>
            <div id="tab-active"></div>
          </div>
          <div className="result-tabbody">
            <div className="result-video">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xqgH9j3x2OE" allowfullscreen></iframe>
            </div>
            <div className="result-popular">
              <span>
              Hi. My name is Thao Pham. I was born and raised in Vung Tau, Vietnam. The city is in the south of Vietnam. I am currently living in Vancouver, Canada. I am a native Vietnamese speaker. I love languages in general, so I decided to get into linguistics major to learn more about the connection between languages and human history. I also like
              </span>
              <span>...</span>
              <a>Read More</a>
            </div>
            <div className="result-activity">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}