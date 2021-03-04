import React from 'react';
import SearchBox from './SearchBox';
import WeeklyForecast from './WeeklyForecast';

const Body = ({ handleChange, handleSelected, input, autoComplete, location, current, forecast }) => {
    return (
        <div className="body">
            <SearchBox handleChange={handleChange} handleSelected={handleSelected} input={input} autoComplete={autoComplete}  />
            <WeeklyForecast location={location} current={current} forecast={forecast} />
        </div>
    )
}

export default Body;