import React, { useState } from "react";
import '../../css/SearchResults/SearchResults.css'
import Card from "./Card";
import { MockCards } from '../../mock/MockData'

export default class SearchResults extends React.Component {
  constructor(){
    super()
    this.state = {
      cards: MockCards
    } 
  }

  getCardList = () => 
    this.state.cards.map(card => {
      // if(card.type == 'Worker')
        return <Card key={card.title} card={card} />
    })
  

  render(){
    return (
      <div className="searchresults gray">
      <div className="results-column">
        <label className={this.state.cards.length > 0 ? "results-count" : "none"}>{this.state.cards.length} Results Found</label>
        <h2 className={this.state.cards.length <= 0 ? "" : "none" }>No Results</h2>  
        {this.getCardList()}
      </div>
    </div>
  )}
}