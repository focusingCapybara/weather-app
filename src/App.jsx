import React, { useState, useEffect } from 'react';

import Hero from "./components/Hero.jsx"
import WeatherStatsSection from "./components/WeatherStatsSection.jsx"
import HourForecast from "./components/Card/HourForecast.jsx";

function App() {
	const [error, setError] = useState(null);
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		async function fetchWeatherData() {
			try {
				const API_KEY = "https://api.open-meteo.com/v1/forecast?latitude=55.9521&longitude=-3.1965&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
				const response = await fetch(API_KEY);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const weatherData = await response.json();
				console.log(weatherData);

				setWeatherData(weatherData);
			}
			catch (err) {
				setError(err.message);
			}
		};
		
		fetchWeatherData();
	}, []);


	if (!weatherData) {
		document.body.style.opacity = 1;
		return (
			<div></div>
		);
	}

	if (error) {
		return <div>Error</div>
	}

	return (
		<>
			<Hero></Hero>
			<HourForecast temperatures={weatherData.hourly.temperature_2m} weatherCodes={weatherData.hourly.weather_code}></HourForecast>
			<WeatherStatsSection windSpeed={weatherData.current.wind_speed_10m} humidity={weatherData.current.relative_humidity_2m} pressure={weatherData.current.surface_pressure} maxTemperatures={weatherData.daily.temperature_2m_max} minTemperatures={weatherData.daily.temperature_2m_min} weatherCodes={weatherData.daily.weather_code} dailyDates={weatherData.daily.time}></WeatherStatsSection>
		</>
	);
}

export default App