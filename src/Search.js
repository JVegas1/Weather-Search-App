import React, { useState } from "react";
import { Audio } from "react-loader-spinner";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState();
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  let [temperatures, setTemperature] = useState(props.temperature);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2e705076d5a554467e9b0adf9237ef52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  function showFahrenheit(event) {
    event.preventDefault();
    let apiKey = "2e705076d5a554467e9b0adf9237ef52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }
  function showCelsius(event) {
    event.preventDefault();
    let apiKey = "2e705076d5a554467e9b0adf9237ef52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature: {weather.temperature}
            <a href="/" onClick={showCelsius}>
              {" "}
              °C
            </a>
            |{temperatures}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F
            </a>{" "}
          </li>
          <li>Description: {weather.description}</li>

          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
