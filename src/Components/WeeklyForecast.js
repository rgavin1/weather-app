import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faUmbrella } from "@fortawesome/free-solid-svg-icons";

const IconImage = ({ image }) => {
  return (
    <>
      <img src={image.icon} alt={image.text} />
      <h1>{image.text}</h1>
    </>
  );
};

const CurrentTemp = ({ temp }) => {
  return (
    <>
      <h2>{temp}F</h2>
    </>
  );
};

const Forecast = ({ forecast, location, current }) => {
  const list = forecast.forecastday;
  return (
    <div className="weeklyforecast">
      <ul>
        {list
          ? list.map((item, id) => (
              <li key={id}>
                <div className="weeklyforecast__date">{item.date}</div>
                <div className="weeklyforecast__wrapper">
                  <div className="weeklyforecast__container left">
                    <h1>{location.name}</h1>
                    <CurrentTemp temp={current} />
                    <FontAwesomeIcon icon={faUmbrella} />
                    {item.day.daily_chance_of_rain}%
                    <FontAwesomeIcon icon={faWind} />
                    {item.day.maxwind_mph} mph
                  </div>
                  <div className="weeklyforecast__container">
                    <IconImage image={item.day.condition} />
                  </div>
                </div>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

const WeeklyForecast = ({ location, current, forecast }) => {
  return (
    <div>
      <Forecast
        forecast={forecast}
        current={current.temp_f}
        location={location}
      />
    </div>
  );
};

export default WeeklyForecast;
