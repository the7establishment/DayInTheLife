import React from "react"

export default function UserProfile(props) {

    return (
        <div className="viewbox">
            <div className="user-profile-top">
                <div className="user-id">
                    ID: { props.user.userId }
                </div> 
                <a href="/AccountProfile">
                    <img className="profile-pic" alt="" src={require("../../resource/profile/profilePicMatthew.jpg")}/>
                </a>
            </div>
            
            <div className="flex-start">
                <a className="largetext ditl-a" href="/AccountProfile">{ props.user.firstName }</a>
                <a className="edit-profile">
                    <img className="edit-profile" src={require("../../resource/icons/edit.png")}/>
                </a>
            </div>
            <hr className="spacer-shrt"/>
            <p className="smalltext">{ props.user.gender }, From { props.user.homeTown }</p>
            <p className="smalltext">Living in { props.user.location }</p>
        </div>
    )
}