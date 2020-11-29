import React, { Component, useState } from "react";

export default class Experience extends Component {

    constructor(props) {
        super(props)
        this.state = {
            days: this.props.days
        }
    }

    getClassName(day) {
        let className = ""
        this.props.currentDay._id === day._id ? className = "sidenav-item sidenav-current" : className = "sidenav-item"
        return className
    }

    expNavRows() {
        return (
            this.props.days.map(day =>
                <li key={day._id} className={this.getClassName(day)} onClick={() => this.props.callback(day._id)}>
                    {day.job}
                </li>
            )
        )
    }

    render() {
        return (
            <div className="viewbox">
                <h2>Experience</h2>
                <ul className="sidenav-list">
                    {this.expNavRows()}
                </ul>
            </div>
        )
    }
}