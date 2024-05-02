import React from 'react';
import Image from './Image';
import './Reward.css'
import hourlySelected from '../images/Leaderboard/Hourly-selected.png';
import dailySelected from '../images/Leaderboard/Daily-selected.png';
import overAllSelected from '../images/Leaderboard/Overall-selected.png';
import hourlyUnSelected from '../images/Leaderboard/Hourly-unselected.png';
import dailyUnSelected from '../images/Leaderboard/Daily-unselected.png';
import overAllUnSelected from '../images/Leaderboard/Overall-unselected.png';
import leftArrow from  '../images/Leaderboard/Left-arrow.png';
import rightArrow from  '../images/Leaderboard/Right-arrow.png';


const RewardComponent = () => {
    return (
        <div className='reward-container'>
            <div className='reward-hourly-daily-overallBtn'>
                <button>
                    <Image src={dailySelected} alt="dailySelected" />
                </button>

                <button>
                    <Image src={overAllUnSelected} alt="overAllUnSelected" />
                </button>
            </div>
            <div className='left-right-arrow'>
                <button>
                    <Image src={leftArrow} alt="leftArrow" />
                </button>
                <button>
                    <Image src={rightArrow} alt="rightArrow" />
                </button>
            </div>
        </div>
    );
}

export default RewardComponent