import validator from "validator"

// These are common rules to be applied to forms

export function ValidateData(data, rules) {
    let errors = {};
    Object.keys(data).forEach(field => {
        if (rules.hasOwnProperty(field)) {
            let fieldErrors = [];
            let val = data[field];
            if (rules[field].required && validator.isEmpty(val)) {
                fieldErrors.push("Value required")
            }
            if (!validator.isEmpty(val)) {
                if (rules[field].numeric && !validator.isNumeric(val)) {
                    fieldErrors.push("Enter numeric value")
                }
            }
            if (fieldErrors.length > 0) {
                errors[field] = fieldErrors;
            }
        }
    })
    return errors;
}