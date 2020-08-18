import React, { Component } from "react";
import Overview from "./Overview/Overview"
import Visual from "./Visual/Visual"
import DayDisplay from "./DayDisplay/DayDisplay"
import Experience from "./Experience/Experience"
import Tools from "./Tools/Tools"
import { MockUser, MockDays, MockProducts } from "../../mock/MockData"
import "../../css/AccountProfile/AccountProfile.css"

export default class AccountProfile extends Component {

    constructor(props) {         
        super(props);
        this.state = {
            currentDay: MockDays[0]
    }}

    updateDay = (dayId) => {
        const day = this.state.days.find(d => d.dayId === dayId)
        this.setState({
            currentDay: day
        }) 
    }

    render() {
        return(
            <div className="page">
                <div className="stage-type-2">
                    <div className="stage-left">
                        <Overview user={ MockUser }/>
                        <Experience days={ MockDays }
                            currentDay={ this.state.currentDay }
                                callback={ this.updateDay }/>
                    </div>
                    <div className="stage-right">
                        <Visual/> 
                        <DayDisplay day={ this.state.currentDay } user={ MockUser }/>
                        <Tools tools={ MockProducts }/>
                    </div>
                </div>
            </div>
        )
    }
}
