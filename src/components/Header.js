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
import firstTileLeft from '../images/Header/Unselected/1-left.png';
import firstTileRight from '../images/Header/Unselected/1-right.png';
import secondTileLeft from '../images/Header/Unselected/2-left.png';
import secondTileRight from '../images/Header/Unselected/2-right.png';
import thirdTileLeft from '../images/Header/Unselected/3-left.png';
import thirdTileRight from '../images/Header/Unselected/3-right.png';
import fourthTileLeft from '../images/Header/Unselected/4-left.png';
import fourthTileRight from '../images/Header/Unselected/4-right.png';
import fifthTileLeft from '../images/Header/Unselected/5-left.png';
import fifthTileRight from '../images/Header/Unselected/5-right.png';
import sixTileLeft from '../images/Header/Unselected/6-left.png';
import sixTileRight from '../images/Header/Unselected/6-right.png';
import sevenTileLeft from '../images/Header/Unselected/7-left.png';
import sevenTileRight from '../images/Header/Unselected/7-right.png';
import eightTileLeft from '../images/Header/Unselected/8-left.png';
import eightTileRight from '../images/Header/Unselected/8-right.png';
import Popup from './Popup';

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

      <div className='tile-container'>
        <div className='first-tile'>
          <button>
            <Image src={firstTileLeft} alt="firstTile" />
          </button>

          <button>
            <Image src={firstTileRight} alt="secondTile" />
          </button>
        </div>
        <div className='second-tile'>
          <button>
            <Image src={secondTileLeft} alt="secondTile" />
          </button>

          <button>
            <Image src={secondTileRight} alt="secondTile" />
          </button>
        </div>

        <div className='third-tile'>
          <button>
            <Image src={thirdTileLeft} alt="thirdTile" />
          </button>

          <button>
            <Image src={thirdTileRight} alt="thirdTile" />
          </button>
        </div>

        <div className='fourth-tile'>
          <button>
            <Image src={fourthTileLeft} alt="thirdTile" />
          </button>

          <button>
            <Image src={fourthTileRight} alt="thirdTile" />
          </button>
        </div>

        <div className='fifth-tile'>
          <button>
            <Image src={fifthTileLeft} alt="thirdTile" />
          </button>

          <button>
            <Image src={fifthTileRight} alt="thirdTile" />
          </button>
        </div>

        <div className='six-tile'>
          <button>
            <Image src={sixTileLeft} alt="thirdTile" />
          </button>

          <button>
            <Image src={sixTileRight} alt="thirdTile" />
          </button>
        </div>

        <div className='seven-tile'>
          <button>
            <Image src={sevenTileLeft} alt="thirdTile" />
          </button>

          <button>
            <Image src={sevenTileRight} alt="thirdTile" />
          </button>
        </div>

        <div className='eight-tile'>
          <button>
            <Image src={eightTileLeft} alt="thirdTile" />
          </button>

          <button>
            <Image src={eightTileRight} alt="thirdTile" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Header