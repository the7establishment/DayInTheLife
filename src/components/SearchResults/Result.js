import React, { useState } from "react";
import heart from '../../resource/icons/heart.png'

export default class Result extends React.Component {

  setCurrentTab = (event) => {
    var active = document.getElementById("tab-active")
    if(event.target.innerText == "Tool"){
      active.setAttribute("style", "grid-column:1; width: 33px")
    }
    if(event.target.innerText == "Qualifications"){
      active.setAttribute("style", "grid-column:2; width: 95px")
    }
    if(event.target.innerText == "Listings"){
      active.setAttribute("style", "grid-column:3; width: 54px")
    }
  }

  render(){
    return (
      <div className="result-card">
        <div className="result-left">
          <div className="result-detail-left">
            Left
          </div>
          <div className="result-detail-right">
            <span className="result-title">Software Developer</span>
            <span>United Healthgroup</span>
            <span>Miami, FL</span>
            <li className="result-list gray">Software Development: 3 Years (Preferred)</li>
            <li className="result-list gray">Interface with our existing developers to help support issues and bugs.</li>
            <li className="result-list gray">Build and maintain MVC and REST applications.</li>
            <img src={heart} alt="" className="resulticon"></img>
          </div>
        </div>
        <div className="result-right">
          <div className="result-tabmenu">
            <span className="tab" onClick={this.setCurrentTab}>Tool</span>
            <span className="tab" onClick={this.setCurrentTab}>Qualifications</span>
            <span className="tab" onClick={this.setCurrentTab}>Listings</span>
            <div id="tab-active"></div>
          </div>
          <div className="result-tabbody">
            Body
          </div>
        </div>
      </div>
    );
  }
}