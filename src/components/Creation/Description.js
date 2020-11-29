import React, { Component } from "react"
import { FormValidator } from "../Validation/FormValidator"
import { ValidationMessage } from "../Validation/ValidationMessage"
import user from "../../resource/icons/default_user.png"

export default class Description extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            text: props.data.text || "",
            isValid: props.data.isValid || false
        }
        this.rules = {
            text: { required: true }
        }
    }

    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value },
            () => this.props.update(this.state))
    }

    setIsValid = (data) => {
        this.setState({ ...data },
            () => this.props.update(this.state))
    }

    render() {
        return(
            <div>
                <FormValidator data={ this.state } rules={ this.rules } 
                        submit={ this.props.submit }
                        buttonTxt={ "Next" }
                        setIsValid={ this.setIsValid }>
                    <div className="viewbox create-desc-view">
                        <img className="create-view-icon" src={user} alt=""/>
                        <div className="create-description">
                            <p>A Day in the Life of [ Username ] ...</p>
                            <textarea className="create-textarea" name="text"
                                onChange={ this.updateFormValue } value={ this.state.text }/>
                            <ValidationMessage field="text" />
                        </div>
                    </div>
                </FormValidator>
            </div>
        )
    }    
}