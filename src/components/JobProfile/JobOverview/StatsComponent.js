import React from "react";

export default function StatsComponent() {
  return (
    <div className='statscomponent'>
        <img className='icon' src={require('../../../resource/icons/dollar-sign-inside-black-circle.png')} alt="Dollar"></img>
        <span>55,000$ - 65,000$</span>

        <img className='icon' src={require('../../../resource/icons/walk.png')} alt="Walk"></img>
        <span>Low</span>

        <img className='icon' src={require('../../../resource/icons/plane.png')} alt="Plane"></img>
        <span>50%</span>

        <img className='icon' src={require('../../../resource/icons/home.png')} alt="Home"></img>
        <span>Office</span>

        <img className='icon' src={require('../../../resource/icons/balance.png')} alt="Balance"></img>
        <div style={{display:'inline-flex'}}>
          <span>Work</span>
          <span>Life</span>
        </div>
    </div>
  );
}