import { WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiCloud, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import { Droplet } from "lucide-react";
import styles from "./Card.module.css";

function DaysCard(props) {
    function getIconArray() {
        const weatherIcons = {
            0: <WiDaySunny size={60} color="white" />,
            1: <WiDaySunnyOvercast size={60} color="white" />,
            2: <WiDayCloudy size={60} color="white" />,
            3: <WiCloud size={60} color="white" />,
            45: <WiFog size={60} color="white" />,
            48: <WiFog size={60} color="white" />,
            51: <WiRain size={60} color="white" />,
            53: <WiRain size={60} color="white" />,
            55: <WiRain size={60} color="white" />,
            56: <WiRain size={60} color="white" />,
            57: <WiRain size={60} color="white" />,
            61: <WiRain size={60} color="white" />,
            63: <WiRain size={60} color="white" />,
            65: <WiRain size={60} color="white" />,
            66: <WiRain size={60} color="white" />,
            67: <WiRain size={60} color="white" />,
            80: <WiRain size={60} color="white" />,
            81: <WiRain size={60} color="white" />,
            82: <WiRain size={60} color="white" />,
            71: <WiSnow size={60} color="white" />,
            73: <WiSnow size={60} color="white" />,
            75: <WiSnow size={60} color="white" />,
            77: <WiSnow size={60} color="white" />,
            85: <WiSnow size={60} color="white" />,
            86: <WiSnow size={60} color="white" />,
            95: <WiThunderstorm size={60} color="white" />,
            96: <WiThunderstorm size={60} color="white" />,
            99: <WiThunderstorm size={60} color="white" />,
        };

        let array = [];

        for (let i = 0; i < props.weatherCodes.length; i++) {
            array.push(weatherIcons[props.weatherCodes[i]]);
        }

        return array;
    }

    function getDayNames() {
        let array = [];

        props.dailyDates.forEach((date) => {
            const newDate = new Date(date);
            const options = { weekday: 'long' };
            array.push(newDate.toLocaleDateString('en-US', options));

        });

        return array;
    };

    const iconCodes = getIconArray();
    const dayNames = getDayNames();
    
    let maxTemperatures = props.maxTemperatures.slice();
    let minTemperatures = props.minTemperatures.slice();

    if (props.isMetric === false) {
        maxTemperatures = [];
        minTemperatures = [];

        for (let i = 0; i < props.maxTemperatures.length; i++) {
            maxTemperatures.push(((props.maxTemperatures[i] * 9/5) + 32).toFixed(1));
            minTemperatures.push(((props.minTemperatures[i] * 9/5) + 32).toFixed(1));
        }
    }
      
    return (
        <div className="days-section">
            <div className="forecast-title flex flex-center">
                <h2>7-Day Forecast</h2>
            </div>

            <div className="weather-days-row flex flex-center">
                <div className={`${styles.daysCard} ${styles.card} flex`}>
                    <div className={`${styles.dayCol} flex`}>
                        <span className={styles.valueItem}>{dayNames[0]}</span>
                        <span className={styles.valueItem}>{<Droplet size={20} color="white" />}{props.rainChances[0]}%</span>
                        <span className={styles.valueItem}>{iconCodes[0]}</span>
                        <span className={styles.valueItem}>{maxTemperatures[0]}{props.isMetric ? "°C" : "F"}</span>
                        <span className={styles.valueItem}>{minTemperatures[0]}{props.isMetric ? "°C" : "F"}</span>
                    </div>

                    <div className={`${styles.dayCol} flex`}>
                        <span className={styles.valueItem}>{dayNames[1]}</span>
                        <span className={styles.valueItem}>{<Droplet size={20} color="white" />}{props.rainChances[1]}%</span>
                        <span className={styles.valueItem}>{iconCodes[1]}</span>
                        <span className={styles.valueItem}>{maxTemperatures[1]}{props.isMetric ? "°C" : "F"}</span>
                        <span className={styles.valueItem}>{minTemperatures[1]}{props.isMetric ? "°C" : "F"}</span>
                    </div>

                    <div className={`${styles.dayCol} flex`}>
                        <span className={styles.valueItem}>{dayNames[2]}</span>
                        <span className={styles.valueItem}>{<Droplet size={20} color="white" />}{props.rainChances[2]}%</span>
                        <span className={styles.valueItem}>{iconCodes[2]}</span>
                        <span className={styles.valueItem}>{maxTemperatures[2]}{props.isMetric ? "°C" : "F"}</span>
                        <span className={styles.valueItem}>{minTemperatures[2]}{props.isMetric ? "°C" : "F"}</span>
                    </div>

                    <div className={`${styles.dayCol} flex`}>
                        <span className={styles.valueItem}>{dayNames[3]}</span>
                        <span className={styles.valueItem}>{<Droplet size={20} color="white" />}{props.rainChances[3]}%</span>
                        <span className={styles.valueItem}>{iconCodes[3]}</span>
                        <span className={styles.valueItem}>{maxTemperatures[3]}{props.isMetric ? "°C" : "F"}</span>
                        <span className={styles.valueItem}>{minTemperatures[3]}{props.isMetric ? "°C" : "F"}</span>
                    </div>

                    <div className={`${styles.dayCol} flex`}>
                        <span className={styles.valueItem}>{dayNames[4]}</span>
                        <span className={styles.valueItem}>{<Droplet size={20} color="white" />}{props.rainChances[4]}%</span>
                        <span className={styles.valueItem}>{iconCodes[4]}</span>
                        <span className={styles.valueItem}>{maxTemperatures[4]}{props.isMetric ? "°C" : "F"}</span>
                        <span className={styles.valueItem}>{minTemperatures[4]}{props.isMetric ? "°C" : "F"}</span>
                    </div>

                    <div className={`${styles.dayCol} flex`}>
                        <span className={styles.valueItem}>{dayNames[5]}</span>
                        <span className={styles.valueItem}>{<Droplet size={20} color="white" />}{props.rainChances[5]}%</span>
                        <span className={styles.valueItem}>{iconCodes[5]}</span>
                        <span className={styles.valueItem}>{maxTemperatures[5]}{props.isMetric ? "°C" : "F"}</span>
                        <span className={styles.valueItem}>{minTemperatures[5]}{props.isMetric ? "°C" : "F"}</span>
                    </div>

                    <div className={`${styles.dayCol} flex`}>
                        <span className={styles.valueItem}>{dayNames[6]}</span>
                        <span className={styles.valueItem}>{<Droplet size={20} color="white" />}{props.rainChances[6]}%</span>
                        <span className={styles.valueItem}>{iconCodes[6]}</span>
                        <span className={styles.valueItem}>{maxTemperatures[6]}{props.isMetric ? "°C" : "F"}</span>
                        <span className={styles.valueItem}>{minTemperatures[6]}{props.isMetric ? "°C" : "F"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaysCard