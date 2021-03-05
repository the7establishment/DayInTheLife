import React from "react";
import { Link } from 'react-router-dom'

export default function NavLeft(props) {
  
    const loggedIn = props.loggedIn
    const URL = loggedIn ? `/?user=${loggedIn}` : "/"
    return (
      <Link to={URL} className="navleft center" style={{textDecoration: 'none', color: loggedIn ? 'black' : 'white'}}>
        <div>DayInTheLife</div>
      </Link>
    )
}
