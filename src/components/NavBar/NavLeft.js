import React from "react";
import { Link } from 'react-router-dom'

export default function NavLeft(props) {
  
    const { loggedIn, isLanding } =  props
    const URL = loggedIn ? `/?user=${loggedIn}` : "/"
    return (
      <Link to={URL} className="navleft center" style={{textDecoration: 'none', color: isLanding ? 'white' : 'black'}}>
        <div>DayInTheLife</div>
      </Link>
    )
}
