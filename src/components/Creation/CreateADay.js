import React, { Component } from "react"
import Overview from "./Overview"
import Routine from "./Routine"
import Description from "./Description"
import Media from "./Media"
import Review from "./Review"
import "../../css/Creation/CreateADay.css"

export default class CreateADay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMap : {
                overview : "Overview",
                routine : "Routine",
                description : "Description",
                media : "Media",
                review : "Review"
            },
            selection : "overview",
            overview: { isValid: false },
            routine: {},
            description: { isValid: false },
            media: {}

        }
    }

    handleClick = (isValid, selection) => {
        if (isValid) {
            this.setState({ selection: selection })
        }
    }

    handleReview = () => {
        var isValid = this.state.overview.isValid && this.state.description.isValid
        if (isValid) {
            this.setState({ selection: "review" })
        }
    }

    submitOverview = (data) => {
        if(data.isValid) 
        this.setState({ selection: "description" })
    }

    updateOverview = (data) => {
        this.setState({ overview: data });
    }

    setOverviewValid = (data) => {
        if (data !== this.state.overview)
        this.setState({
            overview: { ...data }
        })
    }

    submitDescription = (data) => {
        if(data.isValid) 
        this.setState({ selection: "review" })
    }

    updateDescription = (data) => {
        this.setState({ description: data });
    }

    setDescriptionValid = (data) => {
        if (data !== this.state.description)
        this.setState({
            description: { ...data }
        })
    }

    getDayData() {
        var data = {}
        data.overview = this.state.overview
        data.routine = this.state.routine
        data.description = this.state.description
        data.media = this.state.media
        return data
    }

    selectComponent(comp) {
        const wrap = (Component, data, submit, setValid, update) => <Component data={ data } submit={ submit } setValid={ setValid } update={ update }></Component>
        switch (comp) {
            case "Overview" : 
                return wrap(Overview, this.state.overview, this.submitOverview, this.setOverviewValid, this.updateOverview)
            case "Routine" : 
                return wrap(Routine)
            case "Description" :
                return wrap(Description, this.state.description, this.submitDescription, this.setDescriptionValid, this.updateDescription)
            case "Media" :
                return wrap(Media)
            case "Review" :
                return wrap(Review, this.getDayData())
            default :
                return wrap(Overview,  this.state.overview,  this.updateOverview)
        }
    }

    getClassName(view) {
        var result = "sidenav-item"
        if (this.state.viewMap[this.state.selection] === view) {
            result = "sidenav-item sidenav-current"
        }
        return result
    }

    submitForm() {
        
    }

    render() {
        
        return(
            <div className="page-wide">
                <div className="stage-type-2">
                    <div className="stage-left">
                        <div className="viewbox">  
                            <h2 className="createview-header">Create A Day</h2>
                            <hr className="hr-shrt" />
                            <ul className="sidenav-list">
                                <li className={ this.getClassName("Overview") } onClick={ () => this.setState({selection:"overview"}) }>
                                    { this.state.viewMap.overview }
                                </li>
                                {/* 
                                <li className={ this.getClassName("Routine") } onClick={ () => this.setState({selection:"routine"}) }>
                                    { this.state.viewMap.routine }
                                </li>
                                */}
                                <li className={ this.getClassName("Description") } 
                                        onClick={() => this.handleClick(this.state.overview.isValid, "description") }>
                                    { this.state.viewMap.description }
                                </li>
                                {/*
                                <li className={ this.getClassName("Media") } onClick={ () => this.setState({selection:"media"}) }>
                                    { this.state.viewMap.media }
                                </li>
                                */}
                                <li className={ this.getClassName("Review") } 
                                        onClick={ () => this.handleReview(this.state.description.isValid, "review") }>
                                    { this.state.viewMap.review }
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="stage-right">
                        { this.selectComponent( this.state.viewMap[ this.state.selection ]) }
                    </div>
                </div>
            </div>
        )
    }
}