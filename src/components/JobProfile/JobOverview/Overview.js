import React from "react";
import OverviewLeft from "./OverviewLeft"
import OverviewRight from "./OverviewRight"
import "../../../css/JobProfile/JobOverview.css"

export default function Overview() {
  return (
    <div className="overview">
      <OverviewLeft/><OverviewRight/>

    </div>
  );
}