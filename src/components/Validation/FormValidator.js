import React, { Component } from "react"
import { ValidateData } from "./Validation"
import { ValidationContext } from "./ValidationContext"

export class FormValidator extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            dirty: {},
            formSubmitted: false,
            getMessagesForField: this.getMessagesForField
        }
    }

    static getDerivedStateFromProps(props, state) {
        var errors = ValidateData(props.data, props.rules);
        let result = {
            errors: errors
        };
        let formValid = Object.keys(errors).length === 0;
        if(formValid !== props.data.isValid) {
            var data = props.data;
            data.isValid = formValid;
            props.setIsValid(data)
        }
        return result;
    }

    get formValid() {
        return Object.keys(this.state.errors).length === 0;
    }

    handleChange = (ev, errors) => {
        let name = ev.target.name;
        this.setState(state => state.dirty[name] = true);
    }

    handleClick = (ev) => {
        this.setState({ formSubmitted: true }, () => {
            if (this.formValid) {
                this.props.submit(this.props.data)
            } 
        });
    }

    getButtonClasses() {
        return this.state.formSubmitted && !this.formValid
            ? "btn-dsbld" : "btn-navy";
    }

    getMessagesForField = (field) => {
        return (this.state.formSubmitted || this.state.dirty[field]) ?
            this.state.errors[field] || [] : []
    }

    render() {
        return <React.Fragment>
            <ValidationContext.Provider value={ this.state }>
                <div onChange={ (e) => this.handleChange(e, this.state.errors) }>
                    { this.props.children }
                </div>
            </ValidationContext.Provider>

            <div className="text-center">
                <button className={ `btn-reg ${ this.getButtonClasses() }`}
                    onClick={ this.handleClick }
                    disabled={ this.state.formSubmitted && !this.formValid } >
                        { this.props.buttonTxt }
                    </button>
            </div>
        </React.Fragment>
    }
}