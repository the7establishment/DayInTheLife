import React from "react";

export default function DisplayItem() {
    return (
        <div className="item-display">
                <div className="display-item">
                    <div className="display-item-top">
                        <div className="display-item-pic">
                            <img className="profile-pic-2" alt="" src={require('../../resource/profile/profilePicMatthew.jpg')}></img>
                        </div>
                        <div className="item-overview">
                            <div className="day-title">Software Engineer
                                <img className="launch-arrow" alt="" src={require('../../resource/icons/blue-arrow.png')} />
                            </div>
                            <div className="day-info">
                                <div className="day-author">Matthew Chuong</div>
                                <div className="day-stat-group">
                                    <div className="day-likes">
                                        <img className="likes-pic" alt="" src={require('../../resource/icons/thumb-up.png')}></img>
                                        <span className="likes-count">34</span>
                                    </div>
                                    <div className="day-cmnts">
                                        <img className="cmnts-pic" alt="" src={require('../../resource/icons/comments.png')}/>
                                        <span className="cmnts-count">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-desc">
                        <div className="text-overflow">
                            I completed 420 hours "Japanese teacher training course" and have taught at Japanese language school for 2 years. Before working as a teacher, I have taught Japanese to foreigners as a volunteer. I have studied abroad in Canada, therefore I understand how difficult to learn foreign language. Based on these my experiences, I will think of student's feeling and support them in my lessons.
                            <span className="text-overflow-more">
                                <span className="text-overflow-more-ellipsis">&nbsp;...</span>
                                <span className="text-overflow-more-text">
                                    <span>Read More</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}