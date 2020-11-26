import React from "react";
import leftarrow from '../../resource/icons/left-arrow.png'

export default class Pagination extends React.Component {

  getPageTabs = () => {
    var numOfPages=[]
    for(var i = 1; i <= this.props.pageNum; i++)
      numOfPages.push(i)
    
    return numOfPages.map(page => {
      return <div className={this.props.pageCurrent===page ? "pagecurrent pagenum" : "pagenum"} onClick={this.props.setCurrentPage}>{page}</div>
    })
  }

  render() {
    return (
      <div className="pagination-row">
        <div className="pages">
          <img className="icon left-arrow" alt="" src={leftarrow} style={{height: '30px'}} onClick={this.props.prevPage}></img>
          {this.getPageTabs()}
          <img className="icon right-arrow" alt="" src={leftarrow} style={{height: '30px'}} onClick={this.props.nextPage}></img>
        </div>
      </div>
    )
  }
}