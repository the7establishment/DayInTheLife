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
      jobCards: []
    } 
  }

  componentDidMount(){
    var jobCards = []
    if(this.state.job){
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
        }
        )})
      }
    this.setState({jobCards: jobCards})
  }

  getCardList = () => {
    return this.state.jobCards.map(card => {
        return <Card key={card.jobId} card={card} />
    })
  }

  render(){
    return (
      <div className="searchresults gray">
      <div className="results-column">
        <label className={this.state.jobCards.length > 0 ? "results-count" : "none"}>{this.state.jobCards.length} Results Found</label>
        <h1 className={this.state.jobCards.length <= 0 ? "" : "none" }>No Results</h1>  
        {this.getCardList()}
        <Pagination />
      </div>
    </div>
  )}
}