import React from "react"

export default function UserProfile(props) {
    var user = props.user
    var getInfo = (gender, region) => {
        var info = ""
        if(gender) info += gender
        if(gender && region) info += ", From "
        if(region) info += region
        return info
    }
    const URL = `/AccountProfile?user=${localStorage.getItem('userId')}`
    return (
        <div className="viewbox">
            <div className="user-profile-top">
                <div className="user-id">
                    ID: { user.userId }
                </div> 
                <a href={URL}>
                    <img className="profile-pic" alt="" src={require("../../resource/icons/default_user.png")}/>
                </a>
            </div>
            
            <div className="flex-start">
                <a className="largetext ditl-a" href={URL}>{ user.firstName }</a>
                <a className="edit-profile">
                    <img className="edit-profile" alt="" src={require("../../resource/icons/edit.png")}/>
                </a>
            </div>
            <hr className="spacer-shrt"/>
            <p className="smalltext">{user.gender ? user.gender : ""}</p>
            <p className="smalltext">{user.region? `From ${user.region}` : ""}</p>
        </div>
    )
}