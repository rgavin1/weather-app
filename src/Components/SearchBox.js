import React from 'react';
import AutoComplete from './AutoComplete';

const SearchBox = ({ handleChange, handleSelected, input, autoComplete }) => {
    return (
        <div className="searchbox">
            <input type="text" value={input} onChange={handleChange} placeholder="Search by City, State, or Zipcode" />
            <AutoComplete autoComplete={autoComplete} handleSelected={handleSelected} />
        </div>
    );
}

export default SearchBox;