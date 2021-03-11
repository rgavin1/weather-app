import React from 'react';
import WeeklyForecast from './WeeklyForecast';
import Photos from './Photos';
import Videos from './Videos';

const Body = ({ location, current, forecast, images }) => {
    return  <div className="body">
                <WeeklyForecast location={location} current={current} forecast={forecast} />
                <Photos images={images} />
                <Videos />
            </div>
}

export default Body;