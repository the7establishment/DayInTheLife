import React from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import 'react-calendar-heatmap/dist/styles.css';

export default class Heatmap extends React.Component {

  render() {
    var startDate = new Date('2020-01-01')
    var endDate = new Date('2020-4-31')
    var values = [
      { date: '2020-01-01', count: 1 },
      { date: '2020-01-02', count: 3 },
      { date: '2020-01-03', count: 6 },
      { date: '2020-01-04', count: 9 }
    ]
    return (
      <div>
        <ReactCalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
           />
      </div>
    )
  }
}