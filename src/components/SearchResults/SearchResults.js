import React, { useState } from "react";
import '../../css/SearchResults/SearchResults.css'
import Card from "./Card";
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
        <h2 className={this.state.jobCards.length <= 0 ? "" : "none" }>No Results</h2>  
        {this.getCardList()}
      </div>
    </div>
  )}
}