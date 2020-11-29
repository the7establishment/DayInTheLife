import React, {useState, Component} from "react";
import HeaderMenu from "../HeaderMenu"

export default class Tools extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            currentTab: 0            
        }
    }

    getToolList = () => this.props.tools[0].categories[this.state.currentTab].products.map(product =>
         <li key={product.label}>{product.label}</li>
        )

    render = () =>
        <div className="viewbox">
            <HeaderMenu header={this.props.tools[0].productType} 
                items={ this.props.tools[0].categories.map(cat => cat.name)}
                    currentTab={ this.state.currentTab }
                        callback={(newTab) => this.setState({currentTab: newTab})} />
            <hr/>
            {this.getToolList()}
                
        </div>
}