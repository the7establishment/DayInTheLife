import React from "react";
import Listings from "./Listings/Listings"
import Tools from "./Tools/Tools"
import Summaries from "./DailyLifeSummary/DailyLifeSummaries"
import Overview from "./JobOverview/Overview"
import "../../css/JobProfile/JobProfile.css"


export default function JopProfile() {
  return (
    <div className="jobprofile">
      Job Profile -
      <Tools/>
      <Overview/>
      <Summaries/>
      <Listings/>
    </div>
  );
}
