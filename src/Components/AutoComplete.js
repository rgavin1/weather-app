import React from 'react';


const AutoComplete = ({ autoComplete }) => {
    return <ul>{autoComplete.map((city) => 
                <li key={city.id}>{city.name}</li>
            )}</ul>
}

export default AutoComplete;