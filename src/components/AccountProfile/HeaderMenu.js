import React, { Component } from "react"

export default class HeaderMenu extends Component {

    getMenuOptions = (items) => 
        items.map(item => 
            <div className="displaymenuitem">
                <span className="menuoption"  onClick={ () => this.props.callback(item) } >{ item }</span>
                { this.props.currentTab === item && <hr className="selectionindicator" /> }
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