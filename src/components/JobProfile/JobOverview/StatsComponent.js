import React from "react";
import walk from '../../../resource/icons/walk.png'
import money from '../../../resource/icons/money.png'
import plane from '../../../resource/icons/plane.png'
import home from '../../../resource/icons/home.png'
import balance from '../../../resource/icons/balance.png'

export default function StatsComponent() {
  return (
    <div className='statscomponent'>
        <img className='icon' src={money} alt="Dollar"></img>
        <span>55,000$ - 65,000$</span>

        <img className='icon' src={walk} alt="Walk"></img>
        <span>Low</span>

        <img className='icon' src={plane} alt="Plane"></img>
        <span>50%</span>

        <img className='icon' src={home} alt="Home"></img>
        <span>Office</span>

        <img className='icon' src={balance} alt="Balance"></img>
        <div style={{display:'inline-flex'}}>
          <span>Work Life</span>
        </div>
    </div>
  );
}