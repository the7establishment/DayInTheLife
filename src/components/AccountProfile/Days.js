import React, { useState } from 'react'

export default function() {


const [days, setDays] = useState([
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
        ],
        products: [{
            productType: "Tools",
            categories: [{
                category: "Hardware",
            products:[
                { label: "Hardware Tool 1", company: "Comany 1"},
                { label: "Hardware Tool 2", company: "Comany 2"},
                { label: "Hardware Tool 3", company: "Comany 3"},
                { label: "Hardware Tool 4", company: "Comany 4"},
                { label: "Hardware Tool 5", company: "Comany 5"},
            ]
            },
            {
                category: "Software",
            products:[
                { label: "Software Tool 1", company: "Comany 1"},
                { label: "Software Tool 2", company: "Comany 2"},
                { label: "Software Tool 3", company: "Comany 3"},
                { label: "Software Tool 4", company: "Comany 4"},
                { label: "Software Tool 5", company: "Comany 5"},
            ]
            }
        ]
            
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
            body: "Gamer overview"
            },{
            label: "Routine",
            body: "Gamer description"
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
])

return days
}