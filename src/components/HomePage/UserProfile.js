import React from "react"

export default function UserProfile(props) {

    return (
        <div className="viewbox">
            <div className="user-profile-top">
                <div className="user-id">
                    ID: { props.user[0]._id }
                </div> 
                <a href="/AccountProfile">
                    <img className="profile-pic" alt="" src={require("../../resource/profile/profilePicMatthew.jpg")}/>
                </a>
            </div>
            
            <div className="flex-start">
                <a className="largetext ditl-a" href="/AccountProfile">{ props.user[0].firstName }</a>
                <a className="edit-profile">
                    <img className="edit-profile" alt="" src={require("../../resource/icons/edit.png")}/>
                </a>
            </div>
            <hr className="spacer-shrt"/>
            <p className="smalltext">{ props.user[0].gender }, From { props.user[0].homeTown }</p>
            <p className="smalltext">Living in { props.user[0].location }</p>
        </div>
    )
}