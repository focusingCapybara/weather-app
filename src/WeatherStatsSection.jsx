import StatsCard from "./Card/StatsCard.jsx"
import DaysCard from "./Card/DaysCard.jsx"

function WeatherStatsSection() {
    return (
        <>
            <div className="days-title-container flex flex-center">
                <h2>7-Day Forecast</h2>
            </div>

            <div className="weather-days-row flex flex-center">
                <DaysCard></DaysCard>
            </div>

            <div className="weather-card-row flex flex-center">
                <StatsCard title="Wind"></StatsCard>
                <StatsCard title="Humidity"></StatsCard>
                <StatsCard title="Pressure"></StatsCard>
            </div>
        </>
    )
}

export default WeatherStatsSection