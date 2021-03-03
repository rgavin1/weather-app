import React from 'react';
import AutoComplete from './AutoComplete';

const SearchBox = ({ handleChange, handleSelected, input, autoComplete }) => {
    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            <AutoComplete autoComplete={autoComplete} handleSelected={handleSelected} />
        </>
    );
}

export default SearchBox;