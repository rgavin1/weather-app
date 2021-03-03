import React from 'react';
import AutoComplete from './AutoComplete';

const SearchBox = ({ handleSubmit, handleChange, input, autoComplete }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange} />
                <input type="submit" value="find" />
            </form>
            <AutoComplete autoComplete={autoComplete} />
        </>
    );
}

export default SearchBox;