import React from "react";
import heart from '../../resource/icons/heart.png'
import empty_heart from '../../resource/icons/empty_heart.png'
import star from '../../resource/icons/star.png'
import work from '../../resource/icons/work.png'

export default class JobCard extends React.Component {

    setCurrentTab = (event, name) => {
        var i, tab, tabcontent
        tab = document.getElementsByClassName('tab')
        tabcontent = document.getElementsByClassName('card-tabcontent')
        for (i = 0; i < tab.length; i++) {
            tab[i].className = tab[i].className.replace(" active", "")
        }
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"
        }
        document.getElementById(name).style.display = "block"
        event.target.className += " active"
    }

    render() {
        return (
            <div className="card">
                <div className="card-left">
                    <div className="card-detail-left">
                        <img src={work} alt="" className="cardprofile"></img>
                        <span className="stars-box">
                            <img src={star} alt="" className="star"></img>
                            <img src={star} alt="" className="star"></img>
                            <img src={star} alt="" className="star"></img>
                            <img src={star} alt="" className="star"></img>
                            <img src={star} alt="" className="star"></img>
                            <span className="star-number">5.0</span>
                        </span>
                        <span className="card-new">new</span>
                        <button className="card-button">View</button>
                    </div>
                    <div className="card-detail-right">
                        <span className="card-title">United Healthgroup</span>
                        <span className="card-name">Software Developer</span>
                        <span>Miami, FL</span>
                        <li className="card-list gray">Software Development: 3 Years (Preferred)</li>
                        <li className="card-list gray">Interface with developers to help support issues and bugs.</li>
                        <li className="card-list gray">Build and maintain MVC and REST applications.</li>
                        <img src={heart} alt="" className="cardicon"></img>
                        <img src={empty_heart} alt="" className="cardicon"></img>
                    </div>
                </div>
                <div className="card-right">
                    <div className="card-tabmenu">
                        <span className="tab active" onClick={(e) => {
                            this.setCurrentTab(e, 'card-video')
                        }}>Video</span>
                        <span className="tab" onClick={(e) => {
                            this.setCurrentTab(e, 'card-intro')
                        }}>Popular Day</span>
                        <span className="tab" onClick={(e) => {
                            this.setCurrentTab(e, 'card-heatmap')
                        }}>Activity</span>
                    </div>
                    <div className="card-tabbody">
                        <div id="card-video" className="card-tabcontent">
                            <iframe id="video" width="100%" height="100%" src="https://www.youtube.com/embed/3cpA_nQb09w\&t=3s" allowFullScreen></iframe>
                        </div>
                        <div id="card-intro" className="card-tabcontent">
                            <span>
                                Hi. My name is Thao Pham. I was born and raised in Vung Tau, Vietnam. The city is in the south of Vietnam. I am currently living in Vancouver, Canada. I am a native Vietnamese speaker. I love languages in general, so I decided to get into linguistics major to learn more about the connection between languages and human history. I also like
              </span>
                            <span>...</span>
                            <a>Read More</a>
                        </div>
                        <div id="card-heatmap" className="card-tabcontent">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}