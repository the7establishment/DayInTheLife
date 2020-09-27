import React, { Component } from "react"
import "../../css/Creation/CreateADay.css"

export default class CreateADay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMap : {
                overview : "Overview",
                routine : "Routine",
                description : "Description",
                media : "Media"
            },
            selection : "Overview"
        }
    }

    updateView(view) {
        var selection = this.state.viewMap[view]
        this.setState({
            selection: selection
        })
    }

    render() {
        return(
            <div className="page-wide">
                <div className="stage-type-2">
                    <div className="stage-left">
                        <div className="viewbox">
                            <ul className="sidenav-list">
                                <li className="sidenav-item sidenav-current" onClick={ () => this.updateView("overview") }>
                                    { this.state.viewMap.overview }
                                </li>
                                <li className="sidenav-item" onClick={ () => this.updateView("routine") }>
                                    { this.state.viewMap.routine }
                                </li>
                                <li className="sidenav-item" onClick={ () => this.updateView("description") }>
                                    { this.state.viewMap.description }
                                </li>
                                <li className="sidenav-item" onClick={ () => this.updateView("media") }>
                                    { this.state.viewMap.media }
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="stage-right">
                        <div className="create-view viewbox">
                            <h2> { this.state.selection } </h2>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}