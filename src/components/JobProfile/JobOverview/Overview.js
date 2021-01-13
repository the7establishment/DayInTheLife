import React from "react"
import StatsComponent from './StatsComponent'

export default function Overview(props) {
  return (
    <div className="overview">
        <h2 className="gray">{props.purpose.OnetTitle}</h2>
        <hr/>
        <StatsComponent salary={props.salary}/>
        <div className="jobdescription">
        <h3 className="job-label">Description: </h3>
        <span className="job-description">{props.purpose.OnetDesc}</span>
        </div>
    </div>
  );
}