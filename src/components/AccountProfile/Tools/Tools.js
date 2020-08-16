import React, {useState, Component} from "react";
import HeaderMenu from "../HeaderMenu"

export default class Tools extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            currentTab: "Software",
            products: {
                productType: "Tools",
                categories: [{
                    name: "Software",
                products:[
                    { label: "Software Tool 1", company: "Comany 1"},
                    { label: "Software Tool 2", company: "Comany 2"},
                    { label: "Software Tool 3", company: "Comany 3"},
                    { label: "Software Tool 4", company: "Comany 4"},
                    { label: "Software Tool 5", company: "Comany 5"},
                ]
                },{
                    name: "Hardware",
                products:[
                    { label: "Hardware Tool 1", company: "Comany 1"},
                    { label: "Hardware Tool 2", company: "Comany 2"},
                    { label: "Hardware Tool 3", company: "Comany 3"},
                    { label: "Hardware Tool 4", company: "Comany 4"},
                    { label: "Hardware Tool 5", company: "Comany 5"},
                ]
                }
            ]
        }
    }
    }

    getToolList = () => this.state.products.categories.find(cat => cat.name === this.state.currentTab).products.map(product =>
         <li key={product.label}>{product.label}</li>
        )
/*
    const[softwareSelected, setSoftwareSelected] = useState(true)
    const[hardwareSelected, setHardwareSelected] = useState(false)
    const[softTools, setSoftTools] = useState(
        ["YouTube","Adobe After Effects","Adobe Photoshop","SquareSpace","Patreon"]
    )
    const[hardTools, setHardTools] = useState(
        ["Laptop", "Headphones", "Microphone", "Dance Shoes", "Camera"]
    )

    const[toolList, setToolList] = useState(
        getToolList(softTools)
    )

    function getToolList(list) {
       return <ul>
            {list.map(function(item) {
                return <li key={item}>{item}</li>
            })}
        </ul>
}
    

    function onClickSoftware(softwareSelected) {
        if (!softwareSelected){
            setSoftwareSelected(true)
            setHardwareSelected(false)
            setToolList(getToolList(softTools))
        }
    }
    function onClickHardware(hardwareSelected) {
        if (!hardwareSelected){
            setHardwareSelected(true)
            setSoftwareSelected(false)
            setToolList(getToolList(hardTools))
        }
    }

    function SelectionIndicator(props) {
        const isSelected = props.isSelected
        let indicator = null
        if (isSelected) {
            indicator = <hr className="selectionindicator"/>
        }
        return indicator
    }

    */

    render = () =>
        <div className="accounttools viewbox">
            <HeaderMenu header={this.state.products.productType} 
                items={ this.state.products.categories.map(cat => cat.name)}
                    currentTab={ this.state.currentTab }
                        callback={(newTab) => this.setState({currentTab: newTab})} />
            {this.getToolList()}
                
        </div>
    
}