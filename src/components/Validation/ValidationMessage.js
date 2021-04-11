import React, { Component, useContext } from "react"
import { ValidationContext } from "./ValidationContext";
import "../../css/Validation/Validation.css"

export function ValidationMessage(props) {
  const {field} = props
  const { getMessagesForField } = useContext(ValidationContext)

  return (
    getMessagesForField(field).map(err => 
      <div className="warning" key={ err } >
        { err }
      </div> 
    )
  )
}