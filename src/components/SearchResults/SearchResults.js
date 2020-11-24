import React from "react"
import '../../css/SearchResults/SearchResults.css'
import Card from "./Card"
import Pagination from "./Pagination"
import { MockCards } from '../../mock/MockData'
import work from '../../resource/icons/work.png'

export default class SearchResults extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: MockCards,
      job: props.job,
      jobCards: [],
      query: ""
    } 
  }

  componentDidMount(){
    var jobCards = []
    if(this.state.job && typeof this.state.job === "object"){
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
          details: [],
          cardRight: {
            header: "",
            tabs:[
              {
                name: 'Popular Day',
                content: job.OccupationDescription
              },
            ]
          }
        })
      })
    }
    else{
        this.setState({query: this.state.job})
    }
      this.setState({jobCards: jobCards})
  }

  getCardList = () => {
    return this.state.jobCards.map(card => {
        return <Card key={card.jobId} card={card} />
    })
  }

  render(){
    var query = window.location.search
    return (
      <div className="searchresults gray">
      <div className="results-column">
        <label className={this.state.jobCards.length > 0 ? "results-count" : "none"}>{this.state.jobCards.length} Results Found for {this.state.job.Request.InputOccupation}</label>
    <h1 className={typeof this.state.job === "object" ? "none" : "" }>No Results for {this.state.query}</h1>  
        {this.getCardList()}
        <Pagination />
      </div>
    </div>
  )}
}