import React from 'react';
import Image from './Image';
import './Reward.css'
import hourlySelected from '../images/Leaderboard/Hourly-selected.png';
import dailySelected from '../images/Leaderboard/Daily-selected.png';
import overAllSelected from '../images/Leaderboard/Overall-selected.png';
import hourlyUnSelected from '../images/Leaderboard/Hourly-unselected.png';
import dailyUnSelected from '../images/Leaderboard/Daily-unselected.png';
import overAllUnSelected from '../images/Leaderboard/Overall-unselected.png';


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
        </div>
    );
}

export default RewardComponent