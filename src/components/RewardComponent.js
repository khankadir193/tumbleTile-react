import React, { useState } from 'react';
import Image from './Image';
import './Reward.css'
import hourlySelected from '../images/Leaderboard/Hourly-selected.png';
import dailySelected from '../images/Leaderboard/Daily-selected.png';
import overAllSelected from '../images/Leaderboard/Overall-selected.png';
import hourlyUnSelected from '../images/Leaderboard/Hourly-unselected.png';
import dailyUnSelected from '../images/Leaderboard/Daily-unselected.png';
import overAllUnSelected from '../images/Leaderboard/Overall-unselected.png';
import leftArrow from '../images/Leaderboard/Left-arrow.png';
import rightArrow from '../images/Leaderboard/Right-arrow.png';
import DailyComponent from './DailyComponent';
import OverAllComponent from './OverAllComponent';


const RewardComponent = () => {
    const [selectedTab, setSelectedTab] = useState('daily');


    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className='reward-container'>
            <div className='reward-hourly-daily-overallBtn'>
                <button onClick={() => handleTabChange('daily')}>
                    <Image src={selectedTab === 'daily' ? dailySelected : dailyUnSelected} alt="user-talent" />
                </button>
                <button onClick={() => handleTabChange('overall')}>
                    <Image src={selectedTab === 'overall' ? overAllSelected : overAllUnSelected} alt="user-talent" />
                </button>
            </div>
            {/* <div className='left-right-arrow'>
                <button>
                    <Image src={leftArrow} alt="leftArrow" />
                </button>
                <button>
                    <Image src={rightArrow} alt="rightArrow" />
                </button>
            </div> */}


            <div className="daily-overall-container">
                {/* {selectedTab === 'user' && <UserContent />} */}
                {selectedTab === 'daily' && <DailyComponent />}
                {selectedTab === 'overall' && <OverAllComponent />}
            </div>
        </div>
    );
}

export default RewardComponent