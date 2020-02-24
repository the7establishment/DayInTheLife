import React from "react"
import Summary from "./Summary"

export default function DailyLifeSummaries() {
  return (
    <div className="dailylifesummaries">
      <div className='summary-header'>
        <h2>A Day In The Life</h2>
        <button className="ditl-button">ADD A DAY</button>
      </div>
      <Summary/>
    </div>
  );
}