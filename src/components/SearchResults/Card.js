import React from "react";
import heart from '../../resource/icons/heart.png'
import empty_heart from '../../resource/icons/empty_heart.png'
import star from '../../resource/icons/star.png'
import Heatmap from "./HeatMap";
import HeaderMenu from "../AccountProfile/HeaderMenu";
import { Link } from 'react-router-dom'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0,
      favorite: this.props.card.favorite
    }
  }

  setFavorite = () => {
    if (this.state.favorite)
      this.setState({ favorite: false })
    else
      this.setState({ favorite: true })
  }

  render() {
    var { card } = this.props
    var details = card.details.map((detail) => <li key={detail} className="card-list gray">{detail}</li>)
    var stars = []
    for (var i = 0; i < parseInt(card.starNumber); i++) {
      stars.push(<img key={i} src={star} alt="" className="star"></img>)
    }
    return (
      <div className="card">
        <div className="card-left">
          <div className="card-detail-left">
            <img src={card.image} alt="" className="cardprofile"></img>
            <span className="stars-box">
              {stars}
              <span className="star-number">{card.starNumber}</span>
            </span>
            <span className={card.new ? 'card-new' : 'none'}>new</span>
            <Link to={card.type === 'Worker' ? `/AccountProfile/${card.userId}` : "/JobProfile"}>
              <button className="card-button">View</button>
            </Link>
          </div>
          <div className="card-detail-right">
            <span className="card-title">{card.title}</span>
            <span className="card-name">{card.name}</span>
            <span className="card-location">{card.location}</span>
            {details}
            <img src={this.state.favorite ? heart : empty_heart} alt="" className="cardicon" onClick={this.setFavorite}></img>
          </div>
        </div>
        <div className="card-right">
          <div className="card-tabmenu">
            <HeaderMenu
              header={card.cardRight.header}
              items={card.cardRight.tabs.map(tab => tab.name)}
              currentTab={this.state.currentTab}
              callback={(newTab) => this.setState({ currentTab: newTab })} />
          </div>
          <div className="card-tabbody">
            {this.getCardTabContent()}
          </div>
        </div>
      </div>
    );
  }

  getCardTabContent = () => {
    var { currentTab } = this.state
    var { tabs } = this.props.card.cardRight
    if (tabs[currentTab].name === 'Video') {
      return (
        <div id="card-video" className="card-tabcontent">
          <iframe id="video" width="100%" height="100%" src={tabs[currentTab].content} allowFullScreen></iframe>
        </div>
      )
    }
    else if (tabs[currentTab].name === 'Popular Day') {
      return (
        <div id="card-intro" className="card-tabcontent">
          <span>{tabs[currentTab].content}</span>
          <span>...</span>
          <a>Read More</a>
        </div>
      )
    }
    else if (tabs[currentTab].name === 'Activity') {
      return (
        <div id="card-heatmap" className="card-tabcontent">
          <Heatmap heatmap={tabs[currentTab].content} />
        </div>
      )
    }
    else
      return <div>Not Found</div>
  }
}