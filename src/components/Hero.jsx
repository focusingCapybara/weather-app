import { WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiCloud, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import Header from "./Header.jsx"

function Hero(props) {
    function getPlaceNameFromHeader(place) {
		props.getPlaceNameFromHero(place);
	}

    function getUnitsFromHeader(isMetric) {
        props.getUnitsFromHero(isMetric);
    }

    function getWeatherIcon() {
        const weatherIcons = {
            0: <WiDaySunny size={500} color="white" />,
            1: <WiDaySunnyOvercast size={500} color="white" />,
            2: <WiDayCloudy size={500} color="white" />,
            3: <WiCloud size={500} color="white" />,
            45: <WiFog size={500} color="white" />,
            48: <WiFog size={500} color="white" />,
            51: <WiRain size={500} color="white" />,
            53: <WiRain size={500} color="white" />,
            55: <WiRain size={500} color="white" />,
            56: <WiRain size={500} color="white" />,
            57: <WiRain size={500} color="white" />,
            61: <WiRain size={500} color="white" />,
            63: <WiRain size={500} color="white" />,
            65: <WiRain size={500} color="white" />,
            66: <WiRain size={500} color="white" />,
            67: <WiRain size={500} color="white" />,
            80: <WiRain size={500} color="white" />,
            81: <WiRain size={500} color="white" />,
            82: <WiRain size={500} color="white" />,
            71: <WiSnow size={500} color="white" />,
            73: <WiSnow size={500} color="white" />,
            75: <WiSnow size={500} color="white" />,
            77: <WiSnow size={500} color="white" />,
            85: <WiSnow size={500} color="white" />,
            86: <WiSnow size={500} color="white" />,
            95: <WiThunderstorm size={500} color="white" />,
            96: <WiThunderstorm size={500} color="white" />,
            99: <WiThunderstorm size={500} color="white" />
        };
        
        return weatherIcons[props.weatherCode] || "Unknown Icon";
    }

    const icon = getWeatherIcon();

    if (icon.type.name === "WiDaySunny" || icon.type.name === "WiDayOvercast" || icon.type.name === "WiDayCloudy") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#FFA500");
        document.documentElement.style.setProperty("--dynamic-background-2", "#FFD700");
    }
    else if (icon.type.name === "WiCloud") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#B0BEC5");
        document.documentElement.style.setProperty("--dynamic-background-2", "#78909C");
    }
    else if (icon.type.name === "WiRain") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#37474F");
        document.documentElement.style.setProperty("--dynamic-background-2", "#607D8B");
    }
    else if (icon.type.name === "WiThunderstorm") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#263238");
        document.documentElement.style.setProperty("--dynamic-background-2", "#546E7A");
    }
    else if (icon.type.name === "WiSnow") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#E1F5FE");
        document.documentElement.style.setProperty("--dynamic-background-2", "#B3E5FC");
    }
    else if (icon.type.name === "WiFog") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#ECEFF1");
        document.documentElement.style.setProperty("--dynamic-background-2", "#B0BEC5");
    }
    
    return (
        <div className="hero flex flex-col">
            <Header getPlaceNameFromHeader={getPlaceNameFromHeader} getUnitsFromHeader={getUnitsFromHeader} locationName={props.locationName} date={props.date}></Header>

            <div className="hero-current-weather flex flex-col flex-center">
                <span className="icon">{icon}</span>
                <span className="current-temperature">{props.isMetric ? props.temperature + "°C" : ((props.temperature * 9/5) + 32).toFixed(1) + "F"}</span>
            </div>
        </div>
    );
}

export default Hero