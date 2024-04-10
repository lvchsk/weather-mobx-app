import { makeAutoObservable } from "mobx";
import { getWeather } from "../services/weatherApi";
import { fromPromise } from "mobx-utils";

class WeatherStore {
  weatherData = {};

  constructor() {
    makeAutoObservable(this);
  }

  getWeatherAction = async () => {
    this.weatherData = fromPromise(getWeather());
  };
}

const weatherStore = new WeatherStore();

export default weatherStore;
