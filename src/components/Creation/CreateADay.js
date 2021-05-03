import React, { Component } from "react"
import Overview from "./Overview"
import Routine from "./Routine"
import Description from "./Description"
import Media from "./Media"
import Review from "./Review"
import "../../css/Creation/CreateADay.css"
import { RestDataSource } from "../../data/RestDataSource"

var dataSource = new RestDataSource()

const SERVICE_DOWN_MESSAGE = 'Service is not available at this time. Please try again later.'

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
            media: {},
            serviceErrMsg: ""

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
        var args
        const wrap = (Component, args) => <Component {...args}/>
        switch (comp) {
            case "Overview" : 
                args = {
                    data: this.state.overview,
                    submit: this.submitOverview,
                    setValid: this.setOverviewValid,
                    update: this.updateOverview
                }
                return wrap(Overview, args)
            case "Routine" : 
                args = {}
                return wrap(Routine, args)
            case "Description" :
                args = {
                    data: this.state.description,
                    submit: this.submitDescription,
                    setValid: this.setDescriptionValid,
                    update: this.updateDescription,
                    user: this.props.user
                }
                return wrap(Description, args)
            case "Media" :
                args = {}
                return wrap(Media, args)
            case "Review" :
                args = {
                    data: this.getDayData(),
                    submit: this.submitForm.bind(this),
                    user: this.props.user,
                    serviceErrMsg: this.state.serviceErrMsg
                }
                return wrap(Review, args)
            default :
                args = {
                    data: this.state.overview,
                    submit: this.submitOverview,
                    setValid: this.setOverviewValid,
                    update: this.updateOverview
                }
                return wrap(Overview,  args)
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
        const fromJobProfile = false // placeholder
        const PATH = fromJobProfile ? '/JobProfile': '/AccountProfile?user=' + localStorage.getItem('userId')
        var data =  { ...this.state.overview }
        data.description = this.state.description.text
        data.userId = localStorage.getItem('userId')
        
        // post day
        dataSource.PostData("day", data)
        .then(function(res) {
            localStorage.setItem("createADay", true)
            window.location.href = PATH
        }).catch(error => {
            var errorMessage = error.response ? error.response.data.message : SERVICE_DOWN_MESSAGE
            this.setState({ serviceErrMsg: errorMessage })
        })
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