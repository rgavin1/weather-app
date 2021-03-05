import React from 'react';
import WeeklyForecast from './WeeklyForecast';

const Body = ({ location, current, forecast }) => {
    return  <div className="body">
                <WeeklyForecast location={location} current={current} forecast={forecast} />
            </div>
}

export default Body;