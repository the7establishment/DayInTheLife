import React, { useState } from "react";
import WorkerCard from "./WorkerCard";
import '../../css/SearchResults/SearchResults.css'

export default function SearchResults(props) {

  return (
    <div className="searchresults gray">
        <label className="results-count">Results Found</label>
        <h2 className="resultsnotfound">No Results</h2>
        <WorkerCard/>
    </div>
  );
}