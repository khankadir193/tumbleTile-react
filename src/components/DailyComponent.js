import React from 'react';
import '../Style/Daily.css';
import CarouselComp from '../crousel/CarouselComp';

const DailyComponent = () => {
  console.log('dailyComponent...?????????');
  return (
    <div className='daily-container'>
          {/* DailyComponent */}
      <CarouselComp />
    </div>
  )
}

export default DailyComponent;