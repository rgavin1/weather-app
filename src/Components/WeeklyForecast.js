import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCompass, faUmbrella } from '@fortawesome/free-solid-svg-icons'

const IconImage = ({ image }) => {
    // const iconImage = image ? '//cdn.weatherapi.com/weather/64x64/day/113.png' : image;
    return <img src={image.icon} alt={image.text} />        
}

const WeeklyForecast = ({ location, current, forecast }) => {
    
    return <div>
            <h1>{ location.name }</h1>  
            <h2>{ current.temp_f }°F</h2> 
            { 
                current.condition 
                ? <IconImage image={current.condition} />
                : ''
            } 
            <FontAwesomeIcon icon={faUmbrella} />
            {/* <h2>{ forecast.forecastday[0].day.daily_chance_of_rain }</h2>  */}
            <FontAwesomeIcon icon={faWind} />
            <h2>{ current.wind_mph }mph</h2> 
            <FontAwesomeIcon icon={faCompass} />
            <h2>{ current.wind_dir }</h2> 
        </div>
}

export default WeeklyForecast;