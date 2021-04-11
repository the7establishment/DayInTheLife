import React, { useState } from "react";

export default function Summary(props) {
  const { 
    name, age, description,
    likes, dislikes
  } = props.dailyLife;
  return (
    <div className="summary">
      {/* Will have to find a good way to store images so we can do this part though props */}
      <img className="summary-pic" alt="" src={require('../../../resource/icons/default_user.png')}></img>
      <label className="summary-name">{name}</label>
      <label className="summary-age">{age}</label>
      <p className="summary-summary">{description}</p>
      <div className="likes">
        <img className="summary-thumbs-up" alt="" src={require('../../../resource/icons/thumb-up.png')}></img>
        <label>{likes}</label>
        <hr></hr>
        <img className="summary-thumbs-down" alt="" src={require('../../../resource/icons/thumb-down.png')}></img>
        <label>{dislikes}</label>
      </div>
      <a className="report">Report</a>
    </div>
  );
}