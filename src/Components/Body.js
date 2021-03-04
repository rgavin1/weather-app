import React from 'react';
import SearchBox from './SearchBox';
import WeeklyForecast from './WeeklyForecast';

const Body = ({ handleChange, handleSelected, input, autoComplete, location, current, forecast }) => {
    return (
        <>
            <SearchBox handleChange={handleChange} handleSelected={handleSelected} input={input} autoComplete={autoComplete}  />
            <WeeklyForecast location={location} current={current} forecast={forecast} />
        </>
    )
}

export default Body;