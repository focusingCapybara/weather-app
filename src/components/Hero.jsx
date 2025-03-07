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
        document.documentElement.style.setProperty("--dynamic-background-1", "#FFC21A");
        document.documentElement.style.setProperty("--dynamic-background-2", "#f5c74a");
    }
    else if (icon.type.name === "WiCloud" || icon.type.name === "WiSnow") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#1879d1");
        document.documentElement.style.setProperty("--dynamic-background-2", "#0869c0");
    }
    else if (icon.type.name === "WiRain" || icon.type.name === "WiThunderstorm") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#2492f1");
        document.documentElement.style.setProperty("--dynamic-background-2", "#2492f1");
    }
    else if (icon.type.name === "WiFog") {
        document.documentElement.style.setProperty("--dynamic-background-1", "#c4c4c4");
        document.documentElement.style.setProperty("--dynamic-background-2", "#a6a6a6");
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