import StatsCard from "./Card/StatsCard.jsx"
import DaysCard from "./Card/DaysCard.jsx"

function WeatherStatsSection(props) {
    return (
        <div className="weather-stats-section">
            <div className="days-title-container flex flex-center">
                <h2>7-Day Forecast</h2>
            </div>

            <div className="weather-days-row flex flex-center">
                <DaysCard isMetric={props.isMetric} weatherCodes={props.weatherCodes} maxTemperatures={props.maxTemperatures} minTemperatures={props.minTemperatures} dates={props.dailyDates}></DaysCard>
            </div>

            <div className="weather-card-row flex flex-center">
                <StatsCard title="Wind" value={props.isMetric ? props.windSpeed : (props.windSpeed * 0.621371).toFixed(1)} isMetric={props.isMetric} unit={props.isMetric ? "kmph" : "mph"}></StatsCard>
                <StatsCard title="Humidity" value={props.humidity} unit="%"></StatsCard>
                <StatsCard title="Pressure" value={props.pressure}></StatsCard>
            </div>
        </div>
    );
}

export default WeatherStatsSection