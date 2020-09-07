import React, { Component } from "react"

export default class SplashScreen extends Component {

    render() {
        return(
            <div className="page">
                    <img className="splashgif" alt="" src={require('../../resource/gifs/loading.gif')}></img>
                </div>
        )
    }
}