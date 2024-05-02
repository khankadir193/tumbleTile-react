// Popup.js
import React,{useState} from 'react';
import './Popup.css';
import Image from './Image';
import closeBtn from '../images/Guide/close-button.png';
import guideBanner from '../images/Guide/Guide-banner.png';
import character from '../images/Guide/charcter-right.gif';
import eventGifts from '../images/Guide/event-gifts.png';
import treasureBox from '../images/Guide/treasure-box.png';
import warrior from '../images/Guide/warrior.png';
import display1 from '../images/Guide/display-1.png';
import gameWorld from '../images/Guide/game-world.png';
import partyBrust from '../images/Guide/party-brust.png';
import display2 from '../images/Guide/display-2.png';
import eventDetails from '../images/Guide/event-detail-bg.png';
import leaderboardBanner from '../images/Leaderboard/leaderboard-banner.png';
import Userselected from '../images/Leaderboard/Userselected-main.png';
import UserUnselected from '../images/Leaderboard/Userunselected-main.png';
import Talentselected from '../images/Leaderboard/Talentselected-main.png';
import Talentunselected from '../images/Leaderboard/Talentunselected-main.png';
import UserContent from './UserContent';
import TalentContent from './TalentContent';

// import { closeBtn, guideBanner, character, eventGifts, treasureBox, warrior, display1, gameWorld, partyBrust, display2, eventDetails } from '../images/Guide';


const Popup = ({ onClose, popupProps }) => {

  const [selectedTab, setSelectedTab] = useState('user');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };



  return (
    <div className="popup">
      {/* guide popup design */}
      {popupProps === "Guide" && <div>
        <button className='guideCloseBtn' onClick={onClose}>
          <Image src={closeBtn} alt="close button" />
        </button>
        <div className="guide-character">
          <Image src={guideBanner} alt="guideBanner" />
          <Image src={character} alt="characterRight" />
        </div>
        <div className="popup-content">
          <div className="guide">
            <div className="event-gifts">
              <Image src={eventGifts} alt="event-gifts" />
            </div>
            <div className="display">
              <div className="first-display">
                <div className="treasure-warrior">
                  <Image src={treasureBox} alt="treasureBox" />
                  <Image src={warrior} alt="warrior" />
                </div>
                <Image src={display1} alt="display1" />
              </div>
              <div className="second-display">
                <div className="game-party">
                  <Image src={gameWorld} alt="game-world" />
                  <Image src={partyBrust} alt="partyBrust" />
                </div>
                <Image src={display2} alt="display2" />
              </div>
            </div>
          </div>
          <div className="event-details">
            <Image src={eventDetails} alt="event-details" />
          </div>
        </div>
      </div>}
      {
        popupProps === "leaderBoard" && (
          <div>
            <button className='closeBtn' onClick={onClose}>
              <Image src={closeBtn} alt="close button" />
            </button>
            <div className="leaderboard-banner">
              <Image src={leaderboardBanner} alt="guideBanner" />
            </div>
            <div className="leaderboard-content">
              <div className="user-talent-btn">
                <button onClick={() => handleTabChange('user')}>
                  <Image src={selectedTab === 'user' ? Userselected : UserUnselected} alt="user-talent" />
                </button>
                <button onClick={() => handleTabChange('talent')}>
                  <Image src={selectedTab === 'talent' ? Talentselected : Talentunselected} alt="user-talent" />
                </button>
              </div>
              <div className="content-container">
                {selectedTab === 'user' && <UserContent />}
                {selectedTab === 'talent' && <TalentContent />}
              </div>
            </div>
          </div>)
      }

    </div>
  );
};

export default Popup;
