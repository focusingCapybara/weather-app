import { WiDaySunny, WiDaySunnyOvercast, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import Header from "./Header.jsx"

function Hero(props) {
    function getPlaceFromHeader(place) {
		props.getFromHero(place);
	}

    function getUnitsFromHeader(isMetric) {
        props.getUnitsFromHero(isMetric);
    }

    function getWeatherIcon() {
        let icon = null;

        if (props.weatherCode == 0) {
            icon = <WiDaySunny size={500} color="white"></WiDaySunny>;
        }
        else if (props.weatherCode >= 1 && props.weatherCode <= 3) {
            icon = <WiDaySunnyOvercast size={500} color="white"></WiDaySunnyOvercast>;
        }
        else if (props.weatherCode == 2) {
            icon = <WiDayCloudy size={500} color="white"></WiDayCloudy>;
        }
        else if (props.weatherCode == 3) {
            icon = <WiCloud size={500} color="white"></WiCloud>;
        }
        else if (props.weatherCode >= 45 && props.weatherCode <= 48) {
            icon = <WiFog size={500} color="white"></WiFog>;
        }
        else if ((props.weatherCode >= 51 && props.weatherCode <= 67) || (props.weatherCode >= 80 && props.weatherCode <= 82)) {
            icon = <WiRain size={500} color="white"></WiRain>;
        }
        else if ((props.weatherCode >= 71 && props.weatherCode <= 77) || (props.weatherCode >= 85 && props.weatherCode <= 86)) {
            icon = <WiSnow size={500} color="white"></WiSnow>;
        }
        else if (props.weatherCode >= 95 && props.weatherCode <= 99) {
            icon = <WiThunderstorm size={500} color="white"></WiThunderstorm>;
        }

        return icon;
    }

    const icon = getWeatherIcon();

    return (
        <div className="hero flex flex-col">
            <Header getPlaceFromHeader={getPlaceFromHeader} getUnitsFromHeader={getUnitsFromHeader} locationName={props.locationName} date={props.date}></Header>

            <div className="hero-current-weather flex flex-col flex-center">
                <span>{icon}</span>
                <span className="current-temperature">{props.isMetric ? props.temperature + "°C" : ((props.temperature * 9/5) + 32).toFixed(1) + "F"}</span>
            </div>
        </div>
    );
}

export default Hero