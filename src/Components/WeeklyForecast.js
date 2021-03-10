import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faUmbrella, faCompass } from "@fortawesome/free-solid-svg-icons";

const IconImage = ({ image }) => {
  return (
    <>
      <img src={image.icon} alt={image.text} />
      <h1>{image.text}</h1>
    </>
  );
};

const CurrentTemp = ({ temp }) => {
  const get_rounded_num = Math.round(temp);
  return (
    <>
      <h2>{get_rounded_num}°F</h2>
    </>
  );
};

const FollowingDayTemp = ({ maxtemp, mintemp }) => {
  const get_rounded_maxtemp = Math.round(maxtemp);
  const get_rounded_mintemp = Math.round(mintemp);
  return (
    <>
      <h3>{get_rounded_maxtemp}°F</h3>
      <h4>{get_rounded_mintemp}°F</h4>
    </>
  );
};

const GetTemp = ({ temp, id, maxtemp, mintemp }) => {
  const get_rounded_num = Math.round(temp);
  let output = '';
  if(id <= 0){
      output = <CurrentTemp temp={get_rounded_num} />;
  } else { 
      output = <FollowingDayTemp maxtemp={maxtemp} mintemp={mintemp} />;
  }
  return output;
};

const GetDay = ({ id }) => {
  var today = new Date();
  var index = today.getDay();
  const list_of_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const output_day = list_of_days[index + id];
  return output_day;
};



const Forecast = ({ forecast, location, current, winddirection }) => {
  const list = forecast.forecastday;
  return (
    <div className="weeklyforecast">
      <ul>
        {list
          ? list.map((item, id) => (
              <li key={id}>
                <div className="weeklyforecast__date">
                  <GetDay id={id} />
                </div>
                <div className="weeklyforecast__wrapper">
                  <div className="weeklyforecast__container left">
                    <h1>{location.name}</h1>
                <GetTemp temp={current} id={id} maxtemp={item.day.maxtemp_f} mintemp={item.day.mintemp_f} />
                    <div className="weeklyforecast__container__meta">
                        <div className="weeklyforecast__container__meta--container rain">
                            <FontAwesomeIcon icon={faUmbrella} />
                            <h5>{item.day.daily_chance_of_rain} %</h5>
                        </div>
                        <div className="weeklyforecast__container__meta--container wind">
                            <FontAwesomeIcon icon={faWind} />
                            <h5>{item.day.maxwind_mph} mph</h5>
                        </div>
                        <div className="weeklyforecast__container__meta--container winddirection">
                            <FontAwesomeIcon icon={faCompass} />
                            <h5>{winddirection}</h5>
                        </div>
                    </div>
                  </div>
                  </div>
                  <div className="weeklyforecast__container right">
                    <IconImage image={item.day.condition} />
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
        winddirection={current.wind_dir}
        location={location}
      />
    </div>
  );
};

export default WeeklyForecast;
