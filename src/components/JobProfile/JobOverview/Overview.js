import React from "react"
import StatsComponent from './StatsComponent'
import JobDescription from './JobDescription'

export default function Overview() {
  return (
    <div className="overview">
        <h2>Software Engineer</h2>
        <hr/>
        <StatsComponent />
        <JobDescription />
    </div>
  );
}