import React from 'react';


const AutoComplete = ({ autoComplete, handleSelected }) => {
    return <ul>{autoComplete.map((city) => 
                <li onClick={handleSelected} key={city.id} value={city.name}>{city.name}</li>
            )}</ul>
}

export default AutoComplete;