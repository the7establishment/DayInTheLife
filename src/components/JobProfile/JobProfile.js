import React from "react";
import Listings from "./Listings/Listings"
import Tools from "./Tools/Tools"
import Summaries from "./DailyLifeSummary/DailyLifeSummaries"
import Overview from "./JobOverview/Overview"
import Qualifications from './Qualifications/Qualifications'
import "../../css/JobProfile/JobProfile.css"


export default class JopProfile extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      data: this.props.jobDescription
    }
  }

  render(){
    let { jobDescription } = this.props
    return (
      <div className="jobprofile">
        <div className="profile">
          <div className="profile-left">
            <Overview purpose={jobDescription.Purpose}/>
            <Summaries/>
          </div>
          <div className="profile-right">
            <Qualifications knowledge={jobDescription.KnowledgeList}/>
            <Tools toolsTech={jobDescription.ToolsTech}/>
            <Listings/>
          </div>
        </div>
      </div>
    );
  }
}
