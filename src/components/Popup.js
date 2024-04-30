// Popup.js
import React from 'react';
import './Popup.css'
import Image from './Image';
import closeBtn from '../images/Guide/close-button.png';
import guideBanner from '../images/Guide/Guide-banner.png';
import character from '../images/Guide/charcter-right.gif';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose}>
          <Image src={closeBtn} alt="close button" />
        </button>
        <div class="guide-character">
          <Image src={guideBanner} alt="guideBanner" />
          <Image src={character} alt="characterRight" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
