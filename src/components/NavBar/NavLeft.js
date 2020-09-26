import React from "react";
import { Link } from 'react-router-dom'

export default class NavLeft extends React.Component {
  render(){
    return (
      <Link to="/" className="navleft center" style={{textDecoration: 'none', color: this.props.isLanding ? " white" : "black"}}>
        <div>DayInTheLife</div>
      </Link>
    )
  }
}
