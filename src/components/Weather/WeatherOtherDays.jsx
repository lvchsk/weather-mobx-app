import React from "react";
import { weatherInfo } from "../../utils/weatherHelpers";

const WeatherOtherDays = ({ weather }) => {
  const { day, weatherRound, description } = weatherInfo(weather);

  return (
    <div className="weather_other_days card">
      <p className="time">{day.toUpperCase()}</p>
      <p className="temp">{weatherRound} °C</p>
      <img
        className="img"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Погода"
      />
      <p className="info">{description}</p>
    </div>
  );
};

export default WeatherOtherDays;
