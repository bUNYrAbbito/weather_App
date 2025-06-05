import React, { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 34,
    temp_min: 33,
    temp_max: 23,
    humidity: 45,
    feels_like: 45,
    country: "India",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="main">
      <h3>Search for the Weather</h3>
      <SearchBox updateInfo={updateInfo} />
      <WeatherCard info={weatherInfo} />
    </div>
  );
}
