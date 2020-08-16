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

    getMenu = (header, day) => 
    <div className="optionheader">
        <h2>{ header }</h2>
        <div className="displaymenu">
            { this.getMenuOptions(["Routine", "Overview"])}
        </div>
    </div>

    getMenuOptions = (items) => 
        items.map(item => 
            <div className="displaymenuitem">
                <span className="menuoption" onClick={ () => this.setState({ currentTab: item }) } >{ item }</span>
                { this.state.currentTab === item && <hr className="selectionindicator" /> }
            </div>
        )

    render() {
        return(
        <div className="day viewbox">
            <HeaderMenu header={"A Day In The Life of " + this.props.user.firstName} 
                items={ this.props.day.items.map(item => item.label) } 
                    currentTab={ this.state.currentTab }
                        callback={(newTab) => this.setState({currentTab: newTab})} />
            <hr/>
            <div className="keyvaluepair largetext">
                <span>{this.props.day.job.title}</span>
            </div>
            <div className="keyvaluepair small">
                <span>{this.props.day.company}</span> 
            </div>
            <hr className="shorthr"/>
            <p>{this.props.day.items.find(item => item.label === this.state.currentTab).body}</p>
            
        </div>
    )}
}