import React from "react";
import { Link } from 'react-router-dom'

export default function NavLeft() {
  return (
    <Link to="/" className="navleft center" style={{textDecoration: 'none', color: "black"}}>
      <div>DayInTheLife</div>
    </Link>
  );
}
