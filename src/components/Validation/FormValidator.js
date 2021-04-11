import React, { useEffect, useState } from "react"
import { ValidateData } from "./Validation"
import { ValidationContext } from "./ValidationContext"

export function FormValidator(props) {
  const { 
      data, rules, setIsValid,
      submit, children, buttonTxt,
  } = props
  const { isValid } = props.data

  const [errors, setErrors] = useState(ValidateData(data, rules))
  const [dirty, setDirty] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  var isFormValid = Object.keys(errors).length === 0;

  //this will run everytime data props is changed/updated
  useEffect(
    () => {
      setErrors(ValidateData(data, rules))
      isFormValid = Object.keys(errors).length === 0;
      if(isFormValid !== isValid) {
        const formData = data;
        formData.isValid = isFormValid;
        setIsValid(formData)
      }
    },
  [data])

  const handleChange = (event) => {
    const name = event.target.name;
    setDirty({...dirty, [name]:true})
  }

  const handleClick = () => {
    setFormSubmitted(true)
    if(isFormValid) submit(data)
  }

  const getMessagesForField = field => {
    return (formSubmitted || dirty[field]) 
      ? errors[field] || [] 
      : []
  }

  const getButtonClasses = () => {
    return formSubmitted && !isFormValid
      ? "btn-dsbld" 
      : "btn-navy";
  }

  return (
    <React.Fragment>
      <ValidationContext.Provider value={{
        errors: errors,
        dirty: dirty,
        formSubmitted: formSubmitted,
        getMessagesForField: getMessagesForField
      }}>
        <div onChange={ (e) => handleChange(e, errors) }>
          { children }
        </div>
      </ValidationContext.Provider>

      <div className="text-center">
        <button className={ `btn-reg ${ getButtonClasses() }`}
          onClick={ handleClick }
          disabled={ formSubmitted && !isFormValid } >
            { buttonTxt }
        </button>
      </div>
    </React.Fragment>
  )
}