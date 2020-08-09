import React from "react";

export default function () {
    return (
        <div className="overview1">
            <img className="overview1-pic" alt="" src={require('../../../resource/profile/profilePicMatthew.jpg')}></img>
            <p className="largertext">Matthew Chuong</p>
            <p className="smalltext">Gay Pride Activist</p>
            <p className="xsmalltext">5 years</p>
            <hr/>
            <p className="smalltext">Non-binary Male, From Hotlanta</p>
            <p className="smalltext">Living in Florida</p>
            <p className="smalltext">User Id: 2383328</p>
            <button className="addfriend">ADD AS FRIEND</button>
            <button className="sendmessage">SEND MESSAGE</button>
        </div>
    )
}