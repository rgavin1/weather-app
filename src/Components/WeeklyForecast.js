import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faUmbrella } from '@fortawesome/free-solid-svg-icons'

const IconImage = ({ image }) => {
    return  <>
                <img src={image.icon} alt={image.text} />
                <h1>{image.text}</h1>
            </>        
}

const Forecast = ({ forecast, location }) => {
    const list = forecast.forecastday;
    console.log(list);
    return <>
        <h1>{ location.name }</h1> 
        <ul>
            {
                list 
                ? list.map( (item, id) =>
                    <li key={id} >
                        <IconImage image={item.day.condition} />
                        <FontAwesomeIcon icon={faUmbrella} />
                        {item.day.daily_chance_of_rain}%
                        <FontAwesomeIcon icon={faWind} />
                        {item.day.maxwind_mph} mph     
                    </li>
                )
                : ''
            }
        </ul>
    </>
}

const WeeklyForecast = ({ location, current, forecast }) => {
    console.log(forecast );
    return  <div> 
                <Forecast forecast={forecast} location={location} />
            </div>
}

export default WeeklyForecast;