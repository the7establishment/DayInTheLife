import React, { Component } from "react"
import { FormValidator } from "../Validation/FormValidator"
import { ValidationMessage } from "../Validation/ValidationMessage"
import money from "../../resource/icons/money.png"
import plane from "../../resource/icons/plane.png"
import balance from "../../resource/icons/balance.png"
import walk from "../../resource/icons/walk.png"
import home from "../../resource/icons/home.png"
import work from "../../resource/icons/work.png"

const defaultOpt = "--";

export default class Overview extends Component {

    constructor(props) {
        super(props)
        var data = this.props.data;
        this.state = {
            jobTitle: data.jobTitle || "",
            company: data.company || "",
            salary: data.salary || "",
            travel: data.travel || "",
            worklife: data.worklife || "",
            physical: data.physical || "",
            workenv: data.workenv || "",
            isValid: data.isValid || false
        }
        this.rules = {
            jobTitle: { required: true },
            company: { required: true },
            salary: { numeric: true },
            travel: { required: true },
            worklife: { required: true },
            physical: { required: true },
            workenv: { required: true }
        }
    }

    updateFormValue = (event) => {
        if(event.target.value == '--') event.target.value = null;
            this.setState({ [event.target.name]: event.target.value },
                () => this.props.update(this.state))
    }

    setIsValid = (data) => {
        this.setState({ ...data },
            () => this.props.update(this.state))
    }

    formatSalary = (number) => {
        var amount = number
        return amount
    }

    getPercentages(numOptions) {
        var result = []
        result.push(<option>{defaultOpt}</option>)
        var i;
        for(i=0; i<numOptions+1; i++) {
            var div;
            if(i==0) div=0;
            else div = i/10;
            var val = Math.round(100 * div) + "%";
            result.push(<option>{val}</option>)
        }
        return result
    }

    getOptions(list) {
        var result = []
        result.push(<option>{defaultOpt}</option>)
        list.forEach(val => {
            result.push(<option>{val}</option>)
        })
        return result;
    }
    render() {
        return (
            <div>
                <FormValidator data={ this.state } rules={ this.rules } 
                        submit={ this.props.submit }
                        buttonTxt={ "Next" }
                        setIsValid={ this.setIsValid }>
                    <div className="viewbox">
                        <div className="create-overview">    
                            <div className="create-view create-overview-job">
                                <img className="create-view-icon" src={work} alt=""/>
                                <div>
                                    <p>Job Title</p>
                                    <input className="create-input input-job" name="jobTitle" maxLength="40"
                                        value={ this.state.jobTitle } onChange={ this.updateFormValue } />
                                    <ValidationMessage field="jobTitle" />
                                    <p>Company</p>
                                    <input className="create-input input-job" name="company" maxLength="40"
                                        value={ this.state.company } onChange={ this.updateFormValue } />
                                    <ValidationMessage field="company" />
                                </div>
                            </div>
                            <div className="create-view">
                                <img className="create-view-icon" src={plane} alt=""/>
                                <div>
                                    <p>Travel</p>
                                    <select className="create-select select-nrw" name="travel" 
                                        value={ this.state.travel } onChange={ this.updateFormValue }>
                                        { this.getPercentages(10) }
                                    </select>
                                    <ValidationMessage field="travel" />
                                </div>
                            </div>
                            <div className="create-view">
                                <img className="create-view-icon" src={walk} alt=""/>
                                <div>
                                    <p>Physical Demand</p>
                                    <select className="create-select select-reg" name="physical" 
                                        value={ this.state.physical } onChange={ this.updateFormValue }>
                                        { this.getOptions(["Low","Moderate","High"]) }
                                    </select>
                                    <ValidationMessage field="physical" />
                                </div>
                            </div>
                            <div className="create-view">
                                <img className="create-view-icon" src={balance} alt=""/>
                                <div>
                                    <p>Work-Life Balance</p>
                                    <select className="create-select select-nrw" name="worklife" 
                                        value={ this.state.worklife } onChange={ this.updateFormValue }>
                                        { this.getPercentages(10) }
                                    </select>
                                    <ValidationMessage field="worklife" />
                                </div>
                            </div>
                            <div className="create-view">
                                <img className="create-view-icon" src={home} alt=""/>
                                <div>
                                    <p>Work Environment</p>
                                    <select className="create-select select-reg" name="workenv" 
                                        value={ this.state.workenv } onChange={ this.updateFormValue }>
                                        <option>--</option>
                                        <option>Office</option>
                                        <option>Outdoors</option>
                                    </select>
                                    <ValidationMessage field="workenv" />
                                </div>
                            </div>
                            <div className="create-view">
                                <img className="create-view-icon" src={money} alt=""/>
                                <div>
                                    <p>Salary - <span className="optional">Optional</span></p>
                                    <input className="create-input input-sal" name="salary" maxLength="10"
                                        value={ this.state.salary } onChange={ this.updateFormValue } />
                                    <ValidationMessage field="salary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </FormValidator>
            </div>
        )    
    } 
}