import React from "react";
import walk from '../../../resource/icons/walk.png'
import money from '../../../resource/icons/money.png'
import plane from '../../../resource/icons/plane.png'
import home from '../../../resource/icons/home.png'
import balance from '../../../resource/icons/balance.png'
import { addComma } from '../../Common/Common'

export default class StatsComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      salary: ''
    }
  }

  componentDidMount(){
    this.setState({salary: this.formatSalary(this.props.salary)})
  }

  formatSalary = (salaryValues) => {
    var low, high, salary;
    if(salaryValues.length !== 0){
      if(!salaryValues[1]){
        low = salaryValues[0].Pct10
        high = salaryValues[0].Pct90
      }
      else{
        low = salaryValues[1].Pct10
        high = salaryValues[1].Pct90
      } 
    }
  
    if(low && high) return salary = `${addComma(low)}$ - ${addComma(high)}$`
    else            return salary = "Not Found"
  }

  render(){
    return (
      <div className='statscomponent'>
        <img className='icon' src={money} alt="Dollar"></img>
        <span>{this.state.salary}</span>

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
    )
  }
}

