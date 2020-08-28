import React, { Component } from "react"

export default class HeaderMenu extends Component {

    getMenuOptions = (items) => 
        items.map( (item,index) => 
            <div className="displaymenuitem">
                <span className={ this.props.currentTab !== index ? "menuoption" : "" } 
                    onClick={ () => this.props.callback(index) } >{ item }</span>
                { this.props.currentTab === index && <hr className="selectionindicator" /> }
            </div>
        )
    

    render = () => 
    <div className="optionheader">
        <h2>{ this.props.header }</h2>
        <div className="displaymenu">
            { this.getMenuOptions(this.props.items)}
        </div>
    </div>
}