import React from 'react';

const IconImage = ({ image }) => {
    // const iconImage = image ? '//cdn.weatherapi.com/weather/64x64/day/113.png' : image;
    return <img src={image.icon} alt={image.text} />        
}

const WeeklyForecast = ({ location, current }) => {
    
    return <div>
            <h1>{ location.name }</h1>  
            <h2>{ current.temp_f }°F</h2> 
            { 
                current.condition 
                ? <IconImage image={current.condition} />
                : ''
            } 
            
        </div>
}

export default WeeklyForecast;