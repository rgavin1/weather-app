import React from 'react';
import WeeklyForecast from './WeeklyForecast';
import Photos from './Photos';
import Videos from './Videos';

const Body = ({ location, current, forecast }) => {
    return  <div className="body">
                <WeeklyForecast location={location} current={current} forecast={forecast} />
                <Photos />
                <Videos />
            </div>
}

export default Body;