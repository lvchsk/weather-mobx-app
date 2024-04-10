import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import weatherStore from "../../stores/weatherStore";
import WeatherToday from "./WeatherToday";
import WeatherOtherDays from "./WeatherOtherDays";
import { parseWeatherData } from "../../utils/weatherHelpers";
import "./Weather.css";

const Weather = observer(() => {
  const { getWeatherAction, weatherData } = weatherStore;

  useEffect(() => {
    getWeatherAction();
  }, []);

  if (weatherData.state === "pending" || weatherData.state === undefined) {
    return <div>Loading...</div>;
  } else if (weatherData.state === "rejected") {
    return <div>Error</div>;
  }

  const {
    city,
    todayLocalTimeString,
    todayWeatherList,
    currentWeather,
    otherDaysWeather,
  } = parseWeatherData(weatherData);

  return (
    <div className="weather_container">
      <h1 className="city">Погода в городе {city}</h1>
      <div className="weather_current_card">
        <p className="current_time">{todayLocalTimeString}</p>
        <p className="current_temp">{currentWeather} °C</p>
        <img
          className="img_current"
          src={`http://openweathermap.org/img/wn/${todayWeatherList[0].weather[0].icon}@2x.png`}
          alt="Погода"
        />
        <p className="info">{todayWeatherList[0].weather[0].description}</p>
      </div>

      <h1>Cегодня</h1>
      <div className="weather_today_list">
        {todayWeatherList.map((weather) => (
          <WeatherToday weather={weather} key={weather.dt} />
        ))}
      </div>

      <h2>Погода на другие дни</h2>
      <div className="weather_other_days_list">
        {otherDaysWeather.map((weather) => (
          <WeatherOtherDays weather={weather} key={weather.dt} />
        ))}
      </div>
    </div>
  );
});

export default Weather;
