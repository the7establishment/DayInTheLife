import React, { Component } from "react"
import "../../css/HomePage/HomePage.css"
import UserProfile from "./UserProfile"
import PreviewCard from "./PreviewCard"
import DisplayItem from "./DisplayItem"

export default class HomePage extends Component {

    getHistory() {
        return <PreviewCard />
    }

    getWhatsNew() {
        return (
            <DisplayItem />
            )
    }

    getTrending() {
        return <DisplayItem />
    }

    render() {
        return (
            <div className="page-slim">
                <div className="stage-type-slim">
                    <div className="stage-left">
                        <UserProfile { ...this.props } />
                        <div className="viewbox">
                            <h3 >History</h3>
                            { this.getHistory() }
                            { this.getHistory() }
                            { this.getHistory() }
                            <a className="show-more-hist ditl-a">...</a>
                        </div>
                    </div>
                    <div className="stage-right">
                        <div className="viewbox-no-pad">
                            <h3 className="home-header">What's New</h3>
                            { this.getWhatsNew() }
                            { this.getWhatsNew() }
                            { this.getWhatsNew() }
                        </div>
                        <div className="viewbox-no-pad">
                            <h3 className="home-header">Trending</h3>
                            { this.getTrending() }
                            { this.getTrending() }
                            { this.getTrending() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}