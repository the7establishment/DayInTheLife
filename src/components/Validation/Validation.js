import validator from "validator"

// These are common rules to be applied to forms
export function ValidateData(data, rules) {
    let errors = {};
    Object.keys(data).forEach(field => {
        if (rules.hasOwnProperty(field)) {
            let fieldErrors = [];
            let val = data[field];
            if (rules[field].required && validator.isEmpty(val, {ignore_whitespace: true})) {
                fieldErrors.push("Value required")
            }
            if (!validator.isEmpty(val, {ignore_whitespace: true})) {
                if (rules[field].numeric && !validator.isNumeric(val)) {
                    fieldErrors.push("Enter numeric value")
                }
            }
            if (rules[field].maxWordLength) {
                let limit = rules[field].maxWordLength
                if(containsLongWord(val, limit))
                fieldErrors.push("Description cannot contain words with more than " + limit + " characters")
            }
            if (rules[field].charLimit) {
                let limit = rules[field].charLimit
                if(val.length > limit) {
                    fieldErrors.push("Description cannot contain more than " + limit + " characters")
                }
            }
            if (fieldErrors.length > 0) {
                errors[field] = fieldErrors;
            }
        }
    })
    return errors;
}

const containsLongWord = (val, limit) => {
    let arr = val.split(' ');
    for(let i=0; i<arr.length; i++) {
        if(arr[i].length > limit) 
            return true
    }
    return false
}