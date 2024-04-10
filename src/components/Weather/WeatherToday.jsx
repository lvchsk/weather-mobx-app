import React from "react";
import { weatherInfo } from "../../utils/weatherHelpers";

const WeatherToday = ({ weather }) => {
  const { time, weatherRound, description } = weatherInfo(weather);

  return (
    <div className="weather_today card">
      <p className="time">{time}</p>
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

export default WeatherToday;
