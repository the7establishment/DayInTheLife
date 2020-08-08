import React, { useState } from "react";

export default function Summary(props) {

  return (
    <div className="summary">
      {/* Will have to find a good way to store images so we can do this part though props */}
      <img className="summary-pic" alt="" src={require('../../../resource/profile/profilePicMatthew.jpg')}></img>
      <label className="summary-name">{props.dailyLife.name}</label>
      <label className="summary-age">{props.dailyLife.age}</label>
      <p className="summary-summary">{props.dailyLife.summary}</p>
      <div className="likes">
        <img className="summary-thumbs-up" src={require('../../../resource/icons/thumb-up.png')}></img>
        <hr></hr>
        <img className="summary-thumbs-down" src={require('../../../resource/icons/thumb-down.png')}></img>
      </div>
      <a className="report">Report</a>
    </div>
  );
}