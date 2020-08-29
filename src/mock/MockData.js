import mattProfilePic from '../resource/profile/profilePicMatthew.jpg'
import work from '../resource/icons/work.png'

export const MockUser = {
    userId: "32454",
    fullName: "Matthew Chuong",
    firstName: "Matthew",
    lastName: "Chuong",
    gender: "Male",
    title: "Software Developer",
    timeAt: "5 years",
    location: "Florida",
    homeTown: "Atlanta, GA"
    }

export const MockDays = [
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
]

export const MockProducts = {
    productType: "Tools",
    categories: [{
        name: "Software",
        products:[
            { label: "Software Tool 1", company: "Comany 1"},
            { label: "Software Tool 2", company: "Comany 2"},
            { label: "Software Tool 3", company: "Comany 3"},
            { label: "Software Tool 4", company: "Comany 4"},
            { label: "Software Tool 5", company: "Comany 5"},
        ]
        },{
        name: "Hardware",
        products:[
            { label: "Hardware Tool 1", company: "Comany 1"},
            { label: "Hardware Tool 2", company: "Comany 2"},
            { label: "Hardware Tool 3", company: "Comany 3"},
            { label: "Hardware Tool 4", company: "Comany 4"},
            { label: "Hardware Tool 5", company: "Comany 5"},
        ]
    }]
}

export const MockCards = [
    {
        type: 'Worker',
        image: mattProfilePic,
        title: 'Matthew Chuong',
        name: 'Software Developer',
        location: 'United Healthgroup, Miami, FL',
        starNumber: '5.0',
        new: true,
        details:[
            'Software Development: 3 Years',
            'Interface with developers to help support issues and bugs.',
            'Build and maintain MVC and REST applications.'
        ],
        cardRight:{
            header: "",
            tabs:[
                {
                    name:'Video',
                    content: 'https://www.youtube.com/embed/xqgH9j3x2OE'
                },
                {
                    name:'Popular Day',
                    content: 'Hi. My name is Thao Pham. I was born and raised in Vung Tau, Vietnam. The city is in the south of Vietnam. I am currently living in Vancouver, Canada. I am a native Vietnamese speaker. I love languages in general, so I decided to get into linguistics major to learn more about the connection between languages and human history. I also like'
                },
                {
                    name:'Activity',
                    content: {
                        startDate: new Date('2020-01-01'),
                        endDate: new Date('2020-04-31'),
                        values: [
                            { date: '2020-01-01', count: 1 },
                            { date: '2020-01-02', count: 3 },
                            { date: '2020-01-03', count: 6 },
                            { date: '2020-01-04', count: 9 }
                        ]
                    }
                }
            ]
        }
    },
    {
        type: 'Job',
        image: work,
        title: 'Software Developer',
        name: 'United Healthgroup',
        location: 'Miami, FL',
        starNumber: '5.0',
        new: false,
        details:[
            'Software Development: 3 Years (Preferred)',
            'Interface with developers to help support issues and bugs.',
            'Build and maintain MVC and REST applications.'
        ],
        cardRight:{
            header: "",
            tabs:[
                {
                    name:'Video',
                    content: 'https://www.youtube.com/embed/3cpA_nQb09w'
                },
                {
                    name:'Popular Day',
                    content: 'Our businesses are committed to transforming health care worldwide. No matter where you start, you\'ll be leaving the world a better place than you found it. Discover a path to your life’s best work.'
                },
                {
                    name:'Activity',
                    content: {
                        startDate: new Date('2020-01-01'),
                        endDate: new Date('2020-04-31'),
                        values: [
                            { date: '2020-01-01', count: 1 },
                            { date: '2020-01-02', count: 3 },
                            { date: '2020-01-03', count: 6 },
                            { date: '2020-01-04', count: 9 }
                        ]
                    }
                }
            ]
        }
    }
]