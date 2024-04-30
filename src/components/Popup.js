// Popup.js
import React from 'react';
import './Popup.css'
import Image from './Image';
import closeBtn from '../images/Guide/close-button.png';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        {/* Content of your popup */}
        <button onClick={onClose}>
          <Image src={closeBtn} alt="close button" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
