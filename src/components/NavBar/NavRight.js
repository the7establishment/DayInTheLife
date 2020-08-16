import React from "react";
import profilePicMatthew from '../../resource/profile/profilePicMatthew.jpg'

export default function NavRight() {
  return (
    <div className="navright center">
      <li className="navitem">Notifications</li>
      <li className="navitem">Messages</li>
      <img src={profilePicMatthew} className="navprofile"></img>
    </div>
  );
}
