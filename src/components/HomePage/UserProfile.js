import React from "react"

export default function UserProfile(props) {

    return (
        <div className="viewbox">
            <div className="user-profile-top">
                <div className="user-id">
                    ID: { "3243423423" }
                </div> 
                <a href="/AccountProfile">
                    <img className="profile-pic" alt="" src={require("../../resource/profile/profilePicMatthew.jpg")}/>
                </a>
            </div>
            
            <div className="flex-start">
                <a className="largetext ditl-a" href="/AccountProfile">{ "Tucker" }</a>
                <a className="edit-profile">
                    <img className="edit-profile" alt="" src={require("../../resource/icons/edit.png")}/>
                </a>
            </div>
            <hr className="spacer-shrt"/>
            <p className="smalltext">{ "Male" }, From { "Topeka, Kansas" }</p>
            <p className="smalltext">Living in { "Connecticut"}</p>
        </div>
    )
}