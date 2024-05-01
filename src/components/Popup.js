// Popup.js
import React from 'react';
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

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>
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
    </div>
  );
};

export default Popup;
