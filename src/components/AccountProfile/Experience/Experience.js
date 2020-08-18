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
            className = "sidenav-item sidenav-current"
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
            <div className="viewbox">
                <h2>Experience</h2>
                <ul className = "sidenav-list">
                    { this.expNavRows() }
                </ul>
            </div>
        )
    }
}