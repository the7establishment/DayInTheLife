import React, { useState } from "react"
import Summary from "./Summary"
import Modal from '../../Modal'
import close_icon from '../../../resource/icons/close_icon.png'

export default function DailyLifeSummaries(props) {

  const[dailyLife, setDailyLife] = useState(
    [{
      id: 0,
      name: 'Matthew',
      description: 'Hello everyone! My name is Trang, I\'m 27 years old and I\'m from Vietnam! I was born in Phu Quoc island, whose beauty should be compared with a paradise I believe, I\'m proud to get to say that it is my original hometown, I have been living in Ho Chi Minh city (Saigon city) for almost 9 years now, and with no doubt, I love this city like my second home, it never stops making me feel amazed! I once decided to spend a month to travel around Vietnam when I was 22 since I love traveling! Beside it, I also love making new friends, because when we get to meet and talk to people, the world is naturally brought to us then, through other stories and experiences, I do believe so!',
      age: '2 Days Ago',
      likes: 0,
      dislikes: 0
    },
    {
      id: 1,
      name: 'Matthew',
      description: 'Hello everyone! My name is Trang, I\'m 27 years old and I\'m from Vietnam! I was born in Phu Quoc island, whose beauty should be compared with a paradise I believe, I\'m proud to get to say that it is my original hometown, I have been living in Ho Chi Minh city (Saigon city) for almost 9 years now, and with no doubt, I love this city like my second home, it never stops making me feel amazed! I once decided to spend a month to travel around Vietnam when I was 22 since I love traveling! Beside it, I also love making new friends, because when we get to meet and talk to people, the world is naturally brought to us then, through other stories and experiences, I do believe so!',
      age: '2 Days Ago',
      likes: 0,
      dislikes: 0
    }
  ])
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = localStorage.getItem('userId')
  const toggleModal = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const addADay = (event) => {
    const { purpose } = props;
    const summary = {
      UserId: localStorage.getItem('userId'), //Work for Account Profile
      OnetCode: purpose.OnetCode, //Work for Job Profile
      title: purpose.OnetTitle,
      company: '',
      travel: '',
      physical: '',
      worklife: '',
      workenv: '',
      salary: '',
      description: event.target[0].value,
      likes: 0,
      dislikes: 0
    }
    setDailyLife([summary,...dailyLife]);
    
    event.preventDefault();
    event.target.reset();
    toggleModal();
  };    

  const dailyLifeList = dailyLife.map((dailyLife) => <Summary dailyLife={dailyLife}/>)

  return (
    <div className="dailylifesummaries box-shadow">
      <div className='dailylife-header'>
        <h2>A Day In The Life</h2>
        <button className="ditl-button" onClick={toggleModal} disabled={loggedInUser ? false : true}>ADD A DAY</button>
      </div>
      {dailyLifeList}
      <Modal title="Add a Day" isOpen={isOpen}>
        <form id="addADay" onSubmit={addADay}>
          <textarea
            className="textarea"
            name="text"
            style={{height:'200px'}}
            placeholder={`Summary of the day in the life of a ${props.purpose.OnetTitle}`}
          />
          <button className="ditl-button">Submit</button>
        </form>
        <button className="modalclosebutton">
          <img
            className="modalcloseicon"
            alt=""
            src={close_icon}
            onClick={toggleModal}
            />
        </button>
      </Modal>
    </div>
  );
}