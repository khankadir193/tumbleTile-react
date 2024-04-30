// Popup.js
import React from 'react';
import './Popup.css'
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


const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>
        <Image src={closeBtn} alt="close button" />
      </button>
      <div class="guide-character">
        <Image src={guideBanner} alt="guideBanner" />
        <Image src={character} alt="characterRight" />
      </div>
      <div className="popup-content">
        {/* guide content goes here */}
        <div class="guide">
          <div class="event-gifts">
            <Image src={eventGifts} alt="event-gifts" />
          </div>
          <div class="display">
            <div class="first-display">
              <div class="treasure-warrior">
                <Image src={treasureBox} alt="warrior" />
                <Image src={warrior} alt="warrior" />
              </div>
              <Image src={display1} alt="guideBanner" />
            </div>
            <div class="second-display">
              <div class="game-party">
                <Image src={gameWorld} alt="game-world" />
                <Image src={partyBrust} alt="partyBrust" />
              </div>
              <Image src={display2} alt="display2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
