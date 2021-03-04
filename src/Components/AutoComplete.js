import React from 'react';


const AutoComplete = ({ autoComplete, handleSelected }) => {
    return <ul className="autoComplete">{autoComplete.map((city) => 
                <li onClick={handleSelected} key={city.id} value={city.name}>{city.name}</li>
            )}</ul>
}

export default AutoComplete;