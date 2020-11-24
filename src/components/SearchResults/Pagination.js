import React from "react";
import leftarrow from '../../resource/icons/left-arrow.png'

export default class Pagination extends React.Component {

  showPage = () => {
    console.log('works')
  }
  getPages = () => {
    var pages=[]
    for(var i = 1; i <= this.props.pageNum; i++){
      pages.push(i)
    }
    return pages.map(page => {
      return <div className={this.props.pageCurrent===page ? "pagecurrent pagenum" : "pagenum"} onClick={this.showPage}>{page}</div>
    })
  }

  render() {
    return (
      <div className="pagination-row">
        <div className="pages">
          <img className="icon left-arrow" alt="" src={leftarrow} style={{height: '30px'}}></img>
          {this.getPages()}
          <img className="icon right-arrow" alt="" src={leftarrow} style={{height: '30px'}}></img>
        </div>
      </div>
    )
  }
}