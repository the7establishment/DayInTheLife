import React from "react"
import '../../css/SearchResults/SearchResults.css'
import Card from "./Card"
import Pagination from "./Pagination"
import work from '../../resource/icons/work.png'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      job: props.job,
      jobCards: [],
      query: "",
      pageCurrent: 1,
      pageItems: 10,
      pageList: [],
      pageNum: 0
    }
  }

  componentDidMount() {
    var jobCards = []
    if (this.state.job && typeof this.state.job === "object") {
      this.state.job.OccupationList.map(job => {
        jobCards.push(
          {
            type: 'Job',
            jobId: job.OnetCode,
            image: work,
            title: job.OnetTitle,
            name: '',
            location: '',
            starNumber: '5.0',
            new: false,
            favorite: false,
            details: [job.OccupationDescription],
            cardRight: {
              header: "",
              tabs: [
                {
                  name: 'Popular Day',
                  content: ""
                },
              ]
            }
          })
      })
      this.setState({ jobCards: jobCards, pageNum: Math.ceil(jobCards.length/this.state.pageItems) })
    }
    else {
      this.setState({ query: this.state.job })
    }
  }

  getCardList = () => {
    var pageList = []
    var order = 0
    var begin = (this.state.pageCurrent - 1) * this.state.pageItems
    var end = begin + this.state.pageItems
    pageList = this.state.jobCards.slice(begin, end)
    return pageList.map(card => {
      return <Card key={card.jobId} card={card} order={order++}/>
    })
  }

  setCurrentPage = (event) => {
    this.setState({pageCurrent: parseInt(event.target.textContent, 10)})
  }

  nextPage = () => {
    if(!(this.state.pageCurrent === this.state.pageNum))
      this.setState({pageCurrent: ++this.state.pageCurrent})
  }

  prevPage = () => {
    if(!(this.state.pageCurrent === 1))
    this.setState({pageCurrent: --this.state.pageCurrent})
  }

  render() {
    let query
    if(typeof this.state.job === "object")
      query = this.state.job.Request.InputOccupation
    return (
      <div className="searchresults gray">
        <div className="results-column">
          <Pagination 
            pageNum={this.state.pageNum} 
            pageCurrent={this.state.pageCurrent} 
            setCurrentPage={this.setCurrentPage} 
            nextPage={this.nextPage} 
            prevPage={this.prevPage}
            style={{'transform': 'translateY(45px)'}}/>
          <label className={this.state.jobCards.length > 0 ? "results-count" : "none"}>
            {this.state.jobCards.length} Results Found for {query}
          </label>
          <h1 className={typeof this.state.job === "object" ? "none" : ""}>No Results for {this.state.query}</h1>
          {this.getCardList()}
          <Pagination 
            pageNum={this.state.pageNum} 
            pageCurrent={this.state.pageCurrent} 
            setCurrentPage={this.setCurrentPage} 
            nextPage={this.nextPage} 
            prevPage={this.prevPage}
            style={{'paddingBottom': '30px'}}
            />
        </div>
      </div>
    )
  }
}