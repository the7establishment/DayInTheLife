import React, { Component, useState } from "react";

export default class Experience extends Component {


    constructor(props) {
        super(props)
        this.state = {
           // days: this.props.days
        }
    }

    getClassName(day) {
        let className=""
        if (this.props.currentDay.dayId === day.dayId) {
            className = "sidenav-item-current"
        } else {
            className = "sidenav-item"
        }
        return className
    }

    expNavRows() {
        return(
            this.props.days.map(day =>
            <li 
            className={this.getClassName(day)}  onClick={ () => this.props.callback(day.dayId) } >{ day.job.title } 
            </li>
            )
        )
    }

    render() {
        return(
            <div className="accountexperience viewbox">
                <h2>Experience</h2>
                <ul className = "sel-list">
                    { this.expNavRows() }
                </ul>
            </div>
        )
    }
}

/*
return (
    <div className="accountexperience viewbox">
        <h2>Experience</h2>
        <ul className = "sel-list">
            <li className="sidenav-item current">Software Developer</li>
            <li className="sidenav-item">Kpop Idol</li>
            <li className="sidenav-item">Taekwando Instructor</li>    
            <li className="sidenav-item">Pro Gamer</li>
            <li className="sidenav-item">Cage Dancer</li>
        </ul>
    </div>
)
*/