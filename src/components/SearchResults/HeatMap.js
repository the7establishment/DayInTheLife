import React from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import 'react-calendar-heatmap/dist/styles.css';

export default class Heatmap extends React.Component {

  render() {
    var {heatmap} = this.props
    return (
      <div>
        <ReactCalendarHeatmap
          startDate={heatmap.startDate}
          endDate={heatmap.endDate}
          values={heatmap.values}
           />
      </div>
    )
  }
}