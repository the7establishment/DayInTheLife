import React, { Component } from "react";
import Overview from "./AccountOverview/Overview"
import Stage from "./Stage/Stage"
import DayDisplay from "./DayDisplay/DayDisplay"
import Experience from "./Experience/Experience"
import Tools from "./Tools/Tools"
import Days from "./Days"
import User from "./User"
import "../../css/AccountProfile/AccountProfile.css"

export default class AccountProfile extends Component {

    constructor(props) {         
        super(props);
        this.state = {
                days: [
                {
                    dayId: "5645446",
                    job: {
                        jobId: "854685",
                        title: "Software Developer"
                    },
                    company: "UnitedHealth Group",
                    items: [{
                        label: "Overview",
                        body: "Wake up. Eat fruit loops. Own the day"
                        },{
                        label: "Routine",
                        body: "Every intending pop star has an itinerary of what they do daily, which is targeted towards making them a better pop star.   It is the same with K-pop trainees. To be a K Pop star, there are lots of activities lined up for them to undergo each day, but these activities vary depending on the establishment they are working with.   K Pop trainees spend the most part of their week rehearsing. They rehearse singing and dancing from Monday to Saturday.   Only Sunday is partially free because Sundays are for studying especially for trainees who are still in school, or those who are non-Koreans who are just learning the Korean language. A trainee studies for 2 hours on Sunday.   The daily rehearsals are for them to learn how to sing, and also dance for their music videos and stage performances.   These rehearsals can go on for hours depending on their establishment’s schedule. The rehearsals entail voice training and keep fit exercises, to make their bodies flexible and fit for various dance moves.   The allotted time for the voice training and exercises (choreography) is a minimum of 5 hours respectively, making it 10 hours for both activities. During the exercises, trainees also learn to model and strut for one hour thrice a week.   In between the rehearsals, there are times scheduled for etiquette training, where they are thought how to behave in public, and when they are around people.   Also, K-pop trainees are put on a special diet, which means they have specific times during the day when they can eat, and their meals are monitored. Only healthy and nutritious meals are allowed.   A K-pop trainee is allowed to sleep for at most 4 hours and at least 1 hour daily.  This can include or exclude the naps they take in the afternoon."
                        }
                    ]
                },
                {
                    dayId: "6846836",
                    job: {
                        jobId: "658368",
                        title: "Kpop Idol"
                    },
                    company: "JYP",
                    items: [{
                        label: "Overview",
                        body: "Kpop overview"
                        },{
                        label: "Routine",
                        body: "Kpop description"
                        }
                    ]
                },
                {
                    dayId: "6846846",
                    job: {
                        jobId: "658468",
                        title: "Taekwando Instructor"
                    },
                    company: "Taekwando Company",
                    items: [{
                        label: "Overview",
                        body: "Taekwando overview"
                        },{
                        label: "Routine",
                        body: "Taekwando description"
                        }
                    ]
                },
                {
                    dayId: "6846896",
                    job: {
                        jobId: "698468",
                        title: "Pro Gamer"
                    },
                    company: "Game Company",
                    items: [{
                        label: "Overview",
                        body: "Game overview"
                        },{
                        label: "Routine",
                        body: "Game description"
                        }
                    ]
                },
                {
                    dayId: "6836846",
                    job: {
                        jobId: "658268",
                        title: "Cage Dancer"
                    },
                    company: "Dancer Company",
                    items: [{
                        label: "Overview",
                        body: "Dancer overview"
                        },{
                        label: "Routine",
                        body: "Dancer description"
                        }
                    ]
                }
            ],
            currentDay: {
                dayId: "5645446",
                job: {
                    jobId: "854685",
                    title: "Software Developer"
                },
                company: "UnitedHealth Group",
                items: [{
                    label: "Overview",
                    body: "Wake up. Eat fruit loops. Own the day"
                    },{
                    label: "Routine",
                    body: "Every intending pop star has an itinerary of what they do daily, which is targeted towards making them a better pop star.   It is the same with K-pop trainees. To be a K Pop star, there are lots of activities lined up for them to undergo each day, but these activities vary depending on the establishment they are working with.   K Pop trainees spend the most part of their week rehearsing. They rehearse singing and dancing from Monday to Saturday.   Only Sunday is partially free because Sundays are for studying especially for trainees who are still in school, or those who are non-Koreans who are just learning the Korean language. A trainee studies for 2 hours on Sunday.   The daily rehearsals are for them to learn how to sing, and also dance for their music videos and stage performances.   These rehearsals can go on for hours depending on their establishment’s schedule. The rehearsals entail voice training and keep fit exercises, to make their bodies flexible and fit for various dance moves.   The allotted time for the voice training and exercises (choreography) is a minimum of 5 hours respectively, making it 10 hours for both activities. During the exercises, trainees also learn to model and strut for one hour thrice a week.   In between the rehearsals, there are times scheduled for etiquette training, where they are thought how to behave in public, and when they are around people.   Also, K-pop trainees are put on a special diet, which means they have specific times during the day when they can eat, and their meals are monitored. Only healthy and nutritious meals are allowed.   A K-pop trainee is allowed to sleep for at most 4 hours and at least 1 hour daily.  This can include or exclude the naps they take in the afternoon."
                    }
                ]
            },
            user: {
                userId: "32454",
                fullName: "Matthew Chuong",
                firstName: "Matthew",
                lastName: "Chuong",
                gender: "Male",
                title: "Software Developer",
                timeAt: "5 years",
                location: "Florida"
            },
            
    }}

    updateDay = (dayId) => {
        const day = this.state.days.find(d => d.dayId === dayId)
        this.setState({
            currentDay: day
        }) 
    }

    render() {
        return(
            <div className="accountprofile">
                <div className="profile1">
                    <div className="profile-left1">
                        <Overview/>
                        <Experience days={ this.state.days }
                            currentDay={ this.state.currentDay }
                                callback={ this.updateDay }/>
                    </div>
                    <div className="profile-right1">
                        <Stage/> 
                        <DayDisplay day={ this.state.currentDay } user={ this.state.user }/>
                        <Tools />
                    </div>
                </div>
            </div>
        )
    }
}
