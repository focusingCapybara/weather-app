import { WiDaySunny, WiDaySunnyOvercast, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import Header from "./Header.jsx"

function Hero(props) {
    function getFromHeader(data) {
		props.getFromHero(data);
	}

    function getWeatherIcon() {
        let icon = null;

        if (props.weatherCode == 0) {
            icon = <WiDaySunny size={500} color="white"></WiDaySunny>;
        }
        else if (props.weatherCode >= 1 && props.weatherCode <= 3) {
            icon = <WiDaySunnyOvercast size={500} color="white"></WiDaySunnyOvercast>;
        }
        else if (props.weatherCode >= 45 && props.weatherCode <= 48) {
            icon = <WiFog size={500} color="white"></WiFog>;
        }
        else if (props.weatherCode >= 51 && props.weatherCode <= 55) {
            icon = "";
        }
        else if (props.weatherCode >= 56 && props.weatherCode <= 57) {
            icon = "";
        }
        else if (props.weatherCode >= 61 && props.weatherCode <= 65) {
            icon = <WiRain size={500} color="white"></WiRain>;
        }
        else if (props.weatherCode >= 66 && props.weatherCode <= 67) {
            icon = "";
        }
        else if (props.weatherCode >= 71 && props.weatherCode <= 75) {
            icon = <WiSnow size={500} color="white"></WiSnow>;
        }
        else if (props.weatherCode == 77) {
            icon = "";
        }
        else if (props.weatherCode >= 80 && props.weatherCode <= 82) {
            icon = "";
        }
        else if (props.weatherCode >= 85 && props.weatherCode <= 86) {
            icon = "";
        }
        else if (props.weatherCode == 95) {
            icon = <WiThunderstorm size={500} color="white"></WiThunderstorm>;
        }
        else if (props.weatherCode >= 96 && props.weatherCode <= 99) {
            icon = <WiThunderstorm size={500} color="white"></WiThunderstorm>;
        }

        return icon;
    }

    const icon = getWeatherIcon();

    return (
        <div className="hero flex flex-col">
            <Header getFromHeader={getFromHeader} locationName={props.locationName} date={props.date}></Header>

            <div className="hero-current-weather flex flex-col flex-center">
                <span>{icon}</span>
                <span className="current-temperature">{props.temperature}°C</span>
            </div>
        </div>
    );
}

export default Hero