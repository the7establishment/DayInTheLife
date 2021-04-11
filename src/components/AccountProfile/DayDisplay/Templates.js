import React from 'react'
import StatsComponent from '../../JobProfile/JobOverview/StatsComponent'

// create components that will be expecting other attributes of the items array as props based on the label

// the labels associated to a job should be based on the job title so this will affect creation flow

export const Templates = {
    Overview: Overview,
    Description: Description
}

export const DayType = {
    STANDARD: ['Description', 'Overview']
}

export function Overview(props) {
    return (
        <div className="account-overview">
            <StatsComponent salary={props.salary}/>
        </div>
    )
}

export function Description(props, current) {
    let { title, company, description } = props
    return (
        <div>
            <div className="largetext">
                <span>{title}</span>
            </div>
            <div className="small">
                <span>{company}</span> 
            </div>
            <hr className="spacer-shrt"/>
            <p>{description}</p>
        </div>
    )
}