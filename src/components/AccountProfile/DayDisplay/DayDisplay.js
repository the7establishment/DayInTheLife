import React, { Component } from "react";
import HeaderMenu from "../HeaderMenu"

export default class DayDisplay extends Component {

    constructor(props){
        super(props)
        this.state = { 
            currentTab: 0
        }
    }

    render() {
        return(
        <div className="viewbox">
            <HeaderMenu 
                header={"A Day In The Life of " + this.props.user.firstName}
                items={ this.props.day.items.map(item => item.label) }
                currentTab={ this.state.currentTab }
                callback={(newTab) => this.setState({currentTab: newTab})} />
            <hr/>
            {/*}
            <div className="largetext">
                <span>{this.props.day.job}</span>
            </div>
            <div className="small">
                <span>{this.props.day.company}</span> 
            </div>
            <hr className="spacer-shrt"/>
        */}
            <div>{this.props.day.items[this.state.currentTab].body}</div>
            
        </div>
    )}
}