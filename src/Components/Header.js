import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ handleChange, handleSelected, input, autoComplete, location, current, forecast }) => {
    return (
        <div className="header">
            <SearchBox handleChange={handleChange} handleSelected={handleSelected} input={input} autoComplete={autoComplete}  />
        </div>
    )
}

export default Header;