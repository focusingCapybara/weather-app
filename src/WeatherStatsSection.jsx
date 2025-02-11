import StatsCard from "./Card/StatsCard.jsx"
import DaysCard from "./Card/DaysCard.jsx"

function WeatherStatsSection(props) {
    return (
        <>
            <div className="days-title-container flex flex-center">
                <h2>7-Day Forecast</h2>
            </div>

            <div className="weather-days-row flex flex-center">
                <DaysCard weatherCodes={props.weatherCodes} maxTemperatures={props.maxTemperatures} minTemperatures={props.minTemperatures}></DaysCard>
            </div>

            <div className="weather-card-row flex flex-center">
                <StatsCard title="Wind" value={props.windSpeed} unit="km/h"></StatsCard>
                <StatsCard title="Humidity" value={props.humidity} unit="%"></StatsCard>
                <StatsCard title="Pressure"></StatsCard>
            </div>
        </>
    );
}

export default WeatherStatsSection