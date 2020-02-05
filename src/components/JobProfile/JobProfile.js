import React from "react";
import Listings from "./Listings/Listings"
import Tools from "./Tools/Tools"
import Summaries from "./DailyLifeSummary/DailyLifeSummaries"
import Overview from "./JobOverview/Overview"
import Qualifications from './Qualifications/Qualifications'
import "../../css/JobProfile/JobProfile.css"


export default function JopProfile() {
  return (
    <div className="jobprofile">
      <div className="profile">
        <div className="profile-left">
          <Overview/>
          <Summaries/>
        </div>
        <div className="profile-right">
          <Qualifications/>
          <Tools/>
          <Listings/>
        </div>
      </div>
    </div>
  );
}
