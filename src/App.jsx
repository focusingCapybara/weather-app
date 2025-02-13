import React, { useState, useEffect } from 'react';

import Hero from "./components/Hero.jsx"
import WeatherStatsSection from "./components/WeatherStatsSection.jsx"
import HourForecast from "./components/Card/HourForecast.jsx";

function App() {
	const [locationName, setLocationName] = useState("Loading...");

	async function fetchGeoLocation(place) {
		try {
			const GEO_API = import.meta.env.VITE_GEO_API_KEY;
			const URL = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${GEO_API}`;
			const response = await fetch(URL);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const geoData = await response.json();
			console.log(geoData);
			let locationName = geoData.results[0].formatted;

			for (let i = 0; i < locationName.length; i++) {
				if (locationName[i] === ",") {
					locationName = locationName.slice(0, i);
				}
			}

			console.log(locationName);
			setLocationName(locationName);

			const lat = geoData.results[0].geometry.lat;
			const lng = geoData.results[0].geometry.lng;
			fetchWeatherData(lat, lng);
		}
		catch (err){
			setError(err.message)
		}
	}

	async function fetchWeatherData(lat, lng) {
		try {
			const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon`;
			const response = await fetch(WEATHER_URL);

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

	function getFromHero(data) {
		fetchGeoLocation(data);
	}

	const [error, setError] = useState(null);
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		async function fetchWeatherData() {
			try {
				const WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=55.9521&longitude=-3.1965&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
				const response = await fetch(WEATHER_URL);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const weatherData = await response.json();

				setWeatherData(weatherData);
			}
			catch (err) {
				setError(err.message);
			}
		};

		async function fetchGeoLocation() {
			try {
				const GEO_API = import.meta.env.VITE_GEO_API_KEY;
				const URL = `https://api.opencagedata.com/geocode/v1/json?q=Dalkeith+1%EH222JR&key=${GEO_API}`;
				const response = await fetch(URL);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const geoData = await response.json();

				let locationName = geoData.results[0].formatted;

				for (let i = 0; i < locationName.length; i++) {
					if (locationName[i] === ",") {
						locationName = locationName.slice(0, i);
					}
				}

				setLocationName(locationName);
				console.log(geoData);
			}
			catch (err){
				setError(err.message)
			}
		}
		
		fetchWeatherData();
		fetchGeoLocation();
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
			<Hero getFromHero={getFromHero} locationName={locationName} date={weatherData.daily.time[0]} weatherCode={weatherData.current.weather_code} temperature={weatherData.current.temperature_2m}></Hero>
			<HourForecast temperatures={weatherData.hourly.temperature_2m} weatherCodes={weatherData.hourly.weather_code}></HourForecast>
			<WeatherStatsSection windSpeed={weatherData.current.wind_speed_10m} humidity={weatherData.current.relative_humidity_2m} pressure={weatherData.current.surface_pressure} maxTemperatures={weatherData.daily.temperature_2m_max} minTemperatures={weatherData.daily.temperature_2m_min} weatherCodes={weatherData.daily.weather_code} dailyDates={weatherData.daily.time}></WeatherStatsSection>
		</>
	);
}

export default App