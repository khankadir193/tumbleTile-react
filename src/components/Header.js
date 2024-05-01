import React, { useState } from 'react'
import './Header.css';
import Image from './Image';
import guideButton from '../images/Guide/Guide-button.png';
import myJumps from '../images/Header/myJumps.png';
import leaderBoardButton from '../images/Leaderboard/leaderboard-button.png';
import Popup from './Popup';

const Header = () => {
  const [showPopup,setShowPopup] = useState();
  const [popupContent,setPopupContent] = useState();

  const togglePopup = (event)=>{
    console.log("event...poput...",event);
    if(event === "Guide"){
      setPopupContent("Guide")
    }else{
      setPopupContent("leaderBoard");
    }
    setShowPopup(!showPopup);
  }


  return (
    <div className='HeaderContainer'>
      <div className="topElement-container">
        <div className="guide-button">
          <button onClick={()=>{togglePopup("Guide")}}>
            <Image src={guideButton} alt="myJumps" />
          </button>
        </div>
        <span>Jumps:xxx</span>
        <Image src={myJumps} alt="myJumps" />
        <div className="leaderboardButton">
          <button onClick={()=>{togglePopup("leaderBoard")}}>
            <Image src={leaderBoardButton} alt="myJumps" />
          </button>
        </div>
      </div>

      {showPopup && <Popup onClose={togglePopup} popupProps={popupContent} />}
    </div>
  );
}

export default Header