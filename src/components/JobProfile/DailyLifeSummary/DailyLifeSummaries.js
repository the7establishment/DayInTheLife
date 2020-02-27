import React, { useState } from "react"
import Summary from "./Summary"

export default function DailyLifeSummaries() {

  const[dailyLife, setDailyLife] = useState(
    [{
      id: 0,
      name: 'Matthew',
      summary: 'Hello everyone! My name is Trang, I\'m 27 years old and I\'m from Vietnam! I was born in Phu Quoc island, whose beauty should be compared with a paradise I believe, I\'m proud to get to say that it is my original hometown, I have been living in Ho Chi Minh city (Saigon city) for almost 9 years now, and with no doubt, I love this city like my second home, it never stops making me feel amazed! I once decided to spend a month to travel around Vietnam when I was 22 since I love traveling! Beside it, I also love making new friends, because when we get to meet and talk to people, the world is naturally brought to us then, through other stories and experiences, I do believe so!',
      age: '2 Days Ago',
      likes: 0,
      dislikes: 0
    },
    {
      id: 1,
      name: 'Matthew',
      summary: 'Hello everyone! My name is Trang, I\'m 27 years old and I\'m from Vietnam! I was born in Phu Quoc island, whose beauty should be compared with a paradise I believe, I\'m proud to get to say that it is my original hometown, I have been living in Ho Chi Minh city (Saigon city) for almost 9 years now, and with no doubt, I love this city like my second home, it never stops making me feel amazed! I once decided to spend a month to travel around Vietnam when I was 22 since I love traveling! Beside it, I also love making new friends, because when we get to meet and talk to people, the world is naturally brought to us then, through other stories and experiences, I do believe so!',
      age: '2 Days Ago',
      likes: 0,
      dislikes: 0
    }
  ])

    const dailyLifeList = dailyLife.map((dailyLife) => <Summary dailyLife={dailyLife}/>)
  
  return (
    <div className="dailylifesummaries">
      <div className='dailylife-header'>
        <h2>A Day In The Life</h2>
        <button className="ditl-button">ADD A DAY</button>
      </div>
      {dailyLifeList}
    </div>
  );
}