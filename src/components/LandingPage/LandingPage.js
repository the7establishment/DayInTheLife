import React from 'react'
import '../../css/LandingPage.css'
import landingimg from '../../resource/img/laptop-iphone-desk-notebook.jpg'

export default class LandingPage extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="landingpage">
        <img alt="" src={landingimg} className="landingimage"></img>
        <div className="imgmsg">
          <h1>TAKE A PEEK INTO EVERYDAY LIFE</h1>
          <p>Look at a day in the life from over hundreds of people</p>
        </div>
      </div>
    )
  }
}