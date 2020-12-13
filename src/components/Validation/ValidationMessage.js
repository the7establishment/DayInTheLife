import React, { Component } from "react"
import { ValidationContext } from "./ValidationContext";
import "../../css/Validation/Validation.css"

export class ValidationMessage extends Component {
    
    static contextType = ValidationContext;

    render() {
        return this.context.getMessagesForField(this.props.field).map(err =>
            <div className="warning" key={ err } >
                { err }
            </div> 
        )
    }
}