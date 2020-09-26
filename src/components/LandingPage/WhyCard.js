import React from 'react'


export default class WhyCard extends React.Component {
  constructor(){
    super()
  }
  
  render(){
    return(
      <div className="whycard box-shadow">
        <img alt="" src={this.props.img} className="whyimg"></img>
        <h2>{this.props.title}</h2>
        <hr />
        <p>{this.props.content}</p>
      </div>
    )
  }
}