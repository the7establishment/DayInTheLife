import React from "react";
import profilePicMatthew from '../../resource/profile/profilePicMatthew.jpg'
import { Link } from 'react-router-dom'

export default function NavRight() {
  return (
    <div className="navright center">
      <li className="navitem">Notifications</li>
      <li className="navitem">Messages</li>
      <Link to="/AccountProfile">
        <img src={profilePicMatthew} className="navprofile"></img>
      </Link>
    </div>
  );
}
