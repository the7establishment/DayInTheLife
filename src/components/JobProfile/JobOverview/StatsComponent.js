import React from "react";
import walk from '../../../resource/icons/walk.png'
import money from '../../../resource/icons/money.png'
import plane from '../../../resource/icons/plane.png'
import home from '../../../resource/icons/home.png'
import balance from '../../../resource/icons/balance.png'
import { addComma } from '../../Common/Common'

export default function StatsComponent(props) {
  var low = addComma(props.salary[1].Pct10)
  var high = addComma(props.salary[1].Pct90)
  return (
    <div className='statscomponent'>
        <img className='icon' src={money} alt="Dollar"></img>
        <span>{low}$ - {high}$</span>

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