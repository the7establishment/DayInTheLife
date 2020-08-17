import React, { Component } from "react";
import { isConstructorDeclaration, isThrowStatement } from "typescript";
import { render } from "react-dom";
import HeaderMenu from "../HeaderMenu"




export default class DayDisplay extends Component {

    constructor(props){
        super(props)
        this.state = { 
            currentTab: this.props.day.items[0].label
        }
    }

    render() {
        return(
        <div className="viewbox">
            <HeaderMenu header={"A Day In The Life of " + this.props.user.firstName} 
                items={ this.props.day.items.map(item => item.label) } 
                    currentTab={ this.state.currentTab }
                        callback={(newTab) => this.setState({currentTab: newTab})} />
            <hr/>
            <div className="largetext">
                <span>{this.props.day.job.title}</span>
            </div>
            <div className="small">
                <span>{this.props.day.company}</span> 
            </div>
            <hr className="spacer-shrt"/>
            <p>{this.props.day.items.find(item => item.label === this.state.currentTab).body}</p>
            
        </div>
    )}
}