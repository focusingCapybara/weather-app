import React, { useState, useEffect } from 'react';

import Hero from "./components/Hero.jsx"
import HourForecast from "./components/Card/HourForecast.jsx";
import DaysCard from './components/Card/DaysCard.jsx';
import CurrentWeather from "./components/CurrentWeather.jsx"

function App() {
	const [isMetric, setIsMetric] = useState(true);
	const [error, setError] = useState(null);
	const [weatherData, setWeatherData] = useState(null);
	const [geoData, setGeoData] = useState(null);
	const [place, setPlace] = useState(null);
	const [locationName, setLocationName] = useState(null);

	// Gets the current units
	function getUnitsFromHero(isMetric) {
		setIsMetric(isMetric);
	}

	// Gets place name
	function getPlaceNameFromHero(data) {
		setPlace(data);
	}

	// Gets geographic location
	useEffect(() => {
		async function fetchGeoLocation() {
			try {
				const GEO_API = import.meta.env.VITE_GEO_API_KEY;
				let url = place == null
					? `https://api.opencagedata.com/geocode/v1/json?q=Edinburgh&key=${GEO_API}`
					: `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${GEO_API}`;
	
				const response = await fetch(url);
	
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
	
				const geoData = await response.json();
				console.log(geoData);
	
				setGeoData(geoData);
	
				let locationName = geoData.results[0].formatted.split(",")[0];
				setLocationName(locationName);
			}
			catch (err) {
				setError(err.message);
			}
		}
	
		fetchGeoLocation();
	}, [place]);
	
	// Update weather data if geoData is available
	useEffect(() => {
		if (!geoData) return;
	
		async function fetchWeatherData() {
			try {
				const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?latitude=${geoData.results[0].geometry.lat}&longitude=${geoData.results[0].geometry.lng}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,cloud_cover,surface_pressure,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&timezone=Europe%2FLondon`
	
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
		}
	
		fetchWeatherData();
	}, [geoData]);


	// What happens when data is not loaded
	if (!weatherData) {
		document.body.style.opacity = 1;
		return (
			<div></div>
		);
	}

	// Display error if something went wrong with getting data
	if (error) {
		return <div>Error</div>
	}

	return (
		<>
			<Hero getUnitsFromHero={getUnitsFromHero} getPlaceNameFromHero={getPlaceNameFromHero} isMetric={isMetric} locationName={locationName} date={weatherData.daily.time[0]} weatherCode={weatherData.current.weather_code} temperature={weatherData.current.temperature_2m}></Hero>
			<HourForecast isMetric={isMetric} temperatures={weatherData.hourly.temperature_2m} weatherCodes={weatherData.hourly.weather_code} rainChances={weatherData.hourly.precipitation_probability}></HourForecast>
			<DaysCard isMetric={isMetric} dailyDates={weatherData.daily.time} rainChances={weatherData.daily.precipitation_probability_max} maxTemperatures={weatherData.daily.temperature_2m_max} minTemperatures={weatherData.daily.temperature_2m_min} weatherCodes={weatherData.daily.weather_code}></DaysCard>
			<CurrentWeather isMetric={isMetric} windSpeed={weatherData.current.wind_speed_10m} humidity={weatherData.current.relative_humidity_2m} pressure={weatherData.current.surface_pressure} cloudCover={weatherData.current.cloud_cover}></CurrentWeather>
		</>
	);
}

export default App