import React from "react";
import leftarrow from '../../resource/icons/left-arrow.png'

export default class Pagination extends React.Component {
  constructor(props){
    super()
    this.state = {
      pageCount: 0
    }
  }

  render() {
    return (
      <div className="pagination-row">
        <div className="pages">
          <img className="icon left-arrow" alt="" src={leftarrow}></img>
          <div className="page">1</div>
          <div className="page">2</div>
          <div className="page">3</div>
          <div className="page">4</div>
          <div className="page">5</div>
          <img className="icon right-arrow" alt="" src={leftarrow}></img>
        </div>
      </div>
    )
  }
}