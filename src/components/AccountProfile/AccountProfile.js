import React, { Component } from "react";
import Overview from "./Overview/Overview"
import Visual from "./Visual/Visual"
import DayDisplay from "./DayDisplay/DayDisplay"
import Experience from "./Experience/Experience"
import Tools from "./Tools/Tools"
import { MockUser, MockDays, MockProducts } from "../../mock/MockData"
import { RestDataSource } from "../../data/RestDataSource"
import "../../css/AccountProfile/AccountProfile.css"

const dataSource = new RestDataSource();

export default class AccountProfile extends Component {

    constructor(props) {         
        super(props);
        this.state = {
            currentDay: MockDays[0],
            days: MockDays,
            user: MockUser,
            users: MockUser,
            products: MockProducts
        }
    }

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
                        <Overview user={ this.state.user }/>
                        <Experience days={ this.state.days }
                            currentDay={ this.state.currentDay }
                                callback={ this.updateDay }/>
                    </div>
                    <div className="stage-right">
                        <Visual/> 
                        <DayDisplay day={ this.state.currentDay } user={ this.state.user }/>
                        <Tools tools={ this.state.products }/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        dataSource.GetData("days").then(response => {
            this.setState({ currentDay: response.data[0], days: response.data })
        })
        dataSource.GetData("users").then(response => {
            this.setState({ users: response.data })
        })
        dataSource.GetData("user").then(response => {
            this.setState({ user: response.data})
        })
        dataSource.GetData("products").then(response => {
            this.setState({ products: response.data })
        })
    }
}
