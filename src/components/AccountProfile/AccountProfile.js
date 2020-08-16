import React from "react";
import Overview from "./AccountOverview/Overview"
import Stage from "./Stage/Stage"
import "../../css/AccountProfile/AccountProfile.css"

export default function AccountProfile() {
    return (
        <div className="accountprofile">
            <div className="profile1">
                <div className="profile-left1">
                    <Overview/>
                </div>
                <div className="profile-right1">
                    <Stage/> 
                </div>
            </div>
        </div>
    )
}