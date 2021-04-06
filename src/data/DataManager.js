import React, { Component } from "react"
import AccountProfile from "../components/AccountProfile/AccountProfile"
import JobProfile from "../components/JobProfile/JobProfile"
import HomePage from "../components/HomePage/HomePage"
import SearchResults from "../components/SearchResults/SearchResults"
import { RestDataSource } from "../data/RestDataSource"
import Splash from "../components/Splash/SplashScreen"
import { DataMap } from "../data/Constants"
import CreateADay from "../components/Creation/CreateADay"

var dataSource = new RestDataSource()

export default class DataManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {}
        }
    }

    loadData(paths, param) {
        let dataLoad = []
        let parameters = []
        let paramPropertyName, paramPropertyValue
        for (var index in paths) {
            parameters = []
            for( var i in param){
                paramPropertyName = Object.keys(param[i])[0]
                if( paramPropertyName === paths[index]){
                    paramPropertyValue = Object.values(param[i])[0] 
                    parameters.push(paramPropertyValue)
                }
            }
            dataLoad.push(dataSource.GetData(paths[index], parameters))
        }
        Promise.all(dataLoad)
            .then((responses) => {
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
            .catch(error => {
                console.log(error)
                this.setState({
                    data: param[0],
                    loading: false
                })
            })
    }

    selectComponent(comp) {
        const wrap = (Component) => <Component {...this.state.data} />
        switch (comp) {
            case "AccountProfile":
                return wrap(AccountProfile)
            case "JobProfile":
                return wrap(JobProfile)
            case "SearchResults":
                return wrap(SearchResults)
            case "HomePage":
                return wrap(HomePage)
            case "Create":
                return wrap(CreateADay)
            default:
                return wrap(HomePage)
        }
    }

    getParams = () => {
        var params = [], tmp = [];
        window.location.search
        .substr(1)
        .split("&")
        .forEach(function (nameAndValue) {
            tmp = nameAndValue.split("=");
            var tempObject = {}
            tempObject= {[tmp[0]]: tmp[1]}
            params.push(tempObject) //add value object to param
        });
        return params
    }

    componentDidMount = () => {
        var params = this.getParams()
        this.loadData(DataMap[this.props.component], params)
    }

    render() {
        if (this.state.loading) {
            return <Splash />
        } else {
            return this.selectComponent(this.props.component)
        }
    }
}