import React from 'react';

const SearchBox = ({ handleSubmit, handleChange, input }) => {
    return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange} />
                <input type="submit" value="find" />
            </form>
    );
}

export default SearchBox;