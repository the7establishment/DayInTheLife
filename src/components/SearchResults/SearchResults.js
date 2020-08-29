import React, { useState } from "react";
import '../../css/SearchResults/SearchResults.css'
import WorkerCard from "./WorkerCard";
import JobCard from "./JobCard";
import { MockCard } from '../../mock/MockData'

export default class SearchResults extends React.Component {
  constructor(){
    super()
    this.state = {
      card: MockCard
    } 
  }

  render(){
    return (
      <div className="searchresults gray">
      <div className="results-column">
        <label className="results-count">Results Found</label>
        <h2 className="resultsnotfound">No Results</h2>  
        <WorkerCard card={this.state.card}/>
        <JobCard/>
      </div>
    </div>
  )}
}