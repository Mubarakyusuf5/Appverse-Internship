import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "915e91bd4ec4af9c61f6d76bac288b55";

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Error Handling
      if (response.status === 404) {
        throw new Error("City not found.");
      }

      if (response.status === 429) {
        throw new Error("API limit exceeded.");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setWeather(data);
    } catch (err) {
      if (
        err.message.includes("Failed to fetch")
      ) {
        setError(
          "Network error. Please check your internet connection."
        );
      } else {
        setError(err.message);
      }
    } finally {
      // Loading ends whether success or error
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Weather Info Dashboard</h1>
<div className="search">


      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
      />

      <button onClick={getWeather}>
        Search
      </button>
</div>

      {/* Loading State */}
      {loading && (
        <p>Loading weather data...</p>
      )}

      {/* Error State */}
      {error && (
        <p className="error">{error}</p>
      )}

      {/* Success State */}
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>

          <p>
            Temperature:
            {weather.main.temp}°C
          </p>

          <p>
            Humidity:
            {weather.main.humidity}%
          </p>

          <p>
            Condition:
            {weather.weather[0].main}
          </p>

          <p>
            Wind Speed:
            {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}

