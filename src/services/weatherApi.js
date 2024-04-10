export const getWeather = async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const cityName = "Санкт-Петербург";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ru&units=metric&appid=${apiKey}`
  );
  const data = await response.json();
  return data;
};
