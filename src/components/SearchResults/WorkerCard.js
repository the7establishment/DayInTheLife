import React, { useState } from "react";
import heart from '../../resource/icons/heart.png'
import empty_heart from '../../resource/icons/empty_heart.png'
import star from '../../resource/icons/star.png'
import profilePicMatthew from '../../resource/profile/profilePicMatthew.jpg'
import Heatmap from "./HeatMap";

export default class WorkerCard extends React.Component {

  setCurrentTab = (event, name) => {
    var i, tab, tabcontent
    tab = document.getElementsByClassName('tab')
    tabcontent = document.getElementsByClassName('worker-tabcontent')
    for(i = 0; i < tab.length; i++){
      tab[i].className = tab[i].className.replace(" active", "")
    }
    for(i = 0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none"
    }
    document.getElementById(name).style.display = "block"
    event.target.className += " active"
  }

  render() {
    return (
      <div className="worker-card">
        <div className="worker-left">
          <div className="worker-detail-left">
            <img src={profilePicMatthew} alt="" className="workerprofile"></img>
            <span className="stars-box">
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <img src={star} alt="" className="star"></img>
              <span className="star-number">5.0</span>
            </span>
            <span className="worker-new">new</span>
            <button className="worker-button">View</button>
          </div>
          <div className="worker-detail-right">
            <span className="worker-title">Matthew Chuong</span>
            <span className="worker-name">Software Developer</span>
            <span>United Healthgroup Miami, FL</span>
            <li className="worker-list gray">Software Development: 3 Years</li>
            <li className="worker-list gray">Interface with developers to help support issues and bugs.</li>
            <li className="worker-list gray">Build and maintain MVC and REST applications.</li>
            <img src={heart} alt="" className="workericon"></img>
            <img src={empty_heart} alt="" className="workericon"></img>
          </div>
        </div>
        <div className="worker-right">
          <div className="worker-tabmenu">
            <span className="tab active" onClick={(e) => {
              this.setCurrentTab(e, 'worker-video')
            }}>Video</span>
            <span className="tab" onClick={(e)=> {
              this.setCurrentTab(e, 'worker-intro')
            }}>Popular Day</span>
            <span className="tab" onClick={(e) => {
              this.setCurrentTab(e, 'worker-heatmap')
            }}>Activity</span>
          </div>
          <div className="worker-tabbody">
            <div id="worker-video" className="worker-tabcontent">
              <iframe id="video" width="100%" height="100%" src="https://www.youtube.com/embed/xqgH9j3x2OE" allowFullScreen></iframe>
            </div>
            <div id="worker-intro" className="worker-tabcontent">
              <span>
                Hi. My name is Thao Pham. I was born and raised in Vung Tau, Vietnam. The city is in the south of Vietnam. I am currently living in Vancouver, Canada. I am a native Vietnamese speaker. I love languages in general, so I decided to get into linguistics major to learn more about the connection between languages and human history. I also like
              </span>
              <span>...</span>
              <a>Read More</a>
            </div>
            <div id="worker-heatmap" className="worker-tabcontent">
              <Heatmap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}