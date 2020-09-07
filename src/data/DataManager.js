import React, { Component } from "react"
import AccountProfile from "../components/AccountProfile/AccountProfile"
import JobProfile from "../components/JobProfile/JobProfile"
import HomePage from "../components/HomePage/HomePage"
import { RestDataSource } from "../data/RestDataSource"
import Splash from "../components/Splash/SplashScreen"
import {  DataMap } from "../data/Constants"

var dataSource = new RestDataSource()

export default class DataManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {}
        }
    } 

    loadData(paths) {
        let dataLoad = []
        for (var index in paths) {
            dataLoad.push(dataSource.GetData(paths[index]))
        }
        Promise.all(dataLoad).then((responses) => {
            let paths = DataMap[this.props.component]
            let data = responses.reduce((obj, res, i) => {
                obj[paths[i]] = res.data
                return obj
            }, {})
            this.setState({ 
                data: data,
                loading: false
             })
        })
    }

    selectComponent(comp) {
        const wrap = (Component) =><Component {...this.state.data} />
        switch (comp) {
            case "AccountProfile" :
                return wrap(AccountProfile)
            case "JobProfile" :
                return wrap(JobProfile)
            default : 
                return wrap(HomePage)
        }
    }

    render() {
        if (this.state.loading) {
            return <Splash />
        } else {
            return this.selectComponent(this.props.component) 
        }
    }

    componentDidMount = () => this.loadData(DataMap[this.props.component])
}