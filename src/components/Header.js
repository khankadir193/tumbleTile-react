import React, { useState } from 'react'
import './Header.css';
import Image from './Image';
import guideButton from '../images/Guide/Guide-button.png';
import myJumps from '../images/Header/myJumps.png';
import leaderBoardButton from '../images/Leaderboard/leaderboard-button.png';
import rewardHistory from '../images/Header/reward-history-icon.gif';
import titlePosition from '../images/Header/tile-Position-icon.png';
import characterLeft from '../images/Header/charcter-left.gif';
import characterRight from '../images/Header/charcter-right.gif';
import frontPosition from '../images/Header/Front-position.gif';
import chanceToPlay from '../images/Header/Chances-to-play.png';
import manualToPlay from '../images/Header/manual-auto-slider-bg.png';
import JumpButton from '../images/Header/Jump-button.gif';


import Popup from './Popup';
import TileComponent from './TileComponent';

const Header = () => {
  const [showPopup, setShowPopup] = useState();
  const [popupContent, setPopupContent] = useState();

  const togglePopup = (event) => {
    console.log("event...poput...", event);
    if (event === "Guide") {
      setPopupContent("Guide");
    } else {
      setPopupContent("leaderBoard");
    }
    setShowPopup(!showPopup);
  }


  return (
    <div className='HeaderContainer'>
      <div className="topElement-container">
        <div className="guide-button">
          <button onClick={() => { togglePopup("Guide") }}>
            <Image src={guideButton} alt="myJumps" />
          </button>
        </div>
        <span>Jumps:xxx</span>
        <Image src={myJumps} alt="myJumps" />
        <div className="leaderboardButton">
          <button onClick={() => { togglePopup("leaderBoard") }}>
            <Image src={leaderBoardButton} alt="myJumps" />
          </button>
        </div>
      </div>

      {showPopup && <Popup onClose={togglePopup} popupProps={popupContent} />}

      <div class="reward-tile-container">
        <Image src={titlePosition} alt="rewardHistory" />
        <Image src={rewardHistory} alt="tilepositionIcon" />
      </div>

      <div class="character-container">
        <Image src={characterLeft} alt="rewardHistory" />
        <Image src={characterRight} alt="tilepositionIcon" />
      </div>

      <TileComponent />

      <div className='chance-front-manual'>
        <div className="chanceToPlay">
          <img src={chanceToPlay} alt="rewardHistory"  />
        </div>
        <div className='front-position'>
          <img src={frontPosition} alt="rewardHistory" />
        </div>
        <div className="chanceToPlay">
          <img src={manualToPlay} alt="rewardHistory" />
        </div>
      </div>

    </div>
  );
}

export default Header