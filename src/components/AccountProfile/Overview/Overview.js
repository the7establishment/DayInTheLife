import React, { Component } from "react"

export default class Overview extends Component {

    constructor(props) {
        super(props)
    }

    render = () =>
        <div className="viewbox">
            <img className="circle-pic" alt="" src={require('../../../resource/icons/default_user.png')}></img>
            <p className="largertext">{this.props.user.fullName}</p>
            <p className="smalltext">{this.props.user.title}</p>
            <p className="xsmalltext">{this.props.user.timeAt}</p>
            <hr className="spacer-shrt" />
            <p className="smalltext">{this.props.user.gender ? this.props.user.gender : ""}</p>
            <p className="smalltext">{this.props.user.region? `From ${this.props.user.region}` : ""}</p>
            <p className="smalltext">User Id: {this.props.user._id}</p>
            <button className="btn-wide btn-navy">ADD AS FRIEND</button>
            <button className="btn-wide btn-wht">SEND MESSAGE</button>
        </div>

}