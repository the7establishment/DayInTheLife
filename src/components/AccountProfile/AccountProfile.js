import React, { Component } from "react";
import Overview from "./Overview/Overview"
import Visual from "./Visual/Visual"
import DayDisplay from "./DayDisplay/DayDisplay"
import Experience from "./Experience/Experience"
import Tools from "./Tools/Tools"
import "../../css/AccountProfile/AccountProfile.css"

export default class AccountProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDay: props.day[0],
            days: props.day
        }
    }

    updateDay = (dayId) => {
        const day = this.state.days.find(d => d._id === dayId)
        this.setState({
            currentDay: day
        })
    }

    render() {
        return (
            <div className="page">
                <div className="stage-type-2">
                    <div className="stage-left">
                        <Overview user={this.props.user} />
                        <Experience days={this.props.day}
                            currentDay={this.state.currentDay}
                            callback={this.updateDay} />
                    </div>
                    <div className="stage-right">
                        <Visual />
                        <DayDisplay day={this.state.currentDay} user={this.props.user} />
                        <Tools tools={this.props.product} />
                    </div>
                </div>
            </div>
        )
    }
}
