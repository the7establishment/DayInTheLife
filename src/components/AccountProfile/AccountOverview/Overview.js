import React from "react"
import User from "./User"

export default function () {
    return (
        <div className="viewbox">
            <img className="circle-pic" alt="" src={require('../../../resource/profile/profilePicMatthew.jpg')}></img>
            <p className="largertext">Matthew Chuong</p>
            <p className="smalltext">Software Developer</p>
            <p className="xsmalltext">5 years</p>
            <hr className="spacer-shrt"/>
            <p className="smalltext">Non-binary Male, From Hotlanta</p>
            <p className="smalltext">Living in Florida</p>
            <p className="smalltext">User Id: 2383328</p>
            <button className="btn-wide btn-navy">ADD AS FRIEND</button>
            <button className="btn-wide btn-wht">SEND MESSAGE</button>
        </div>
    )
}