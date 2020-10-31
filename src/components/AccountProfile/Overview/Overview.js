import React, { Component } from "react"

export default class Overview extends Component {

    constructor(props) {
        super(props)
    }

    render = () =>
        <div className="viewbox">
            <img className="circle-pic" alt="" src={require('../../../resource/profile/profilePicMatthew.jpg')}></img>
            <p className="largertext">{this.props.user[0].fullName}</p>
            <p className="smalltext">{this.props.user[0].title}</p>
            <p className="xsmalltext">{this.props.user[0].timeAt}</p>
            <hr className="spacer-shrt" />
            <p className="smalltext">{this.props.user[0].gender}, From {this.props.user[0].homeTown}</p>
            <p className="smalltext">Living in {this.props.user[0].location}</p>
            <p className="smalltext">User Id: {this.props.user[0]._id}</p>
            <button className="btn-wide btn-navy">ADD AS FRIEND</button>
            <button className="btn-wide btn-wht">SEND MESSAGE</button>
        </div>

}