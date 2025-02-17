import { WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiCloud, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import styles from "./Card.module.css"

function HourForecast(props) {
    function getIconArray() {
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
            99: <WiThunderstorm size={500} color="white" />,
        };

        let array = [];

        for (let i = 0; i < 24; i++) {
            array.push(weatherIcons[props.weatherCodes[i]]);
        }

        return array;
    }

    function getHourlyTemperatures() {
        let array = [];

        for (let i = 0; i < 24; i++) {
            array.push(props.temperatures[i]);
        }

        if (props.isMetric) {
            return array;
        }

        for (let i = 0; i < array.length; i++) {
            array[i] = ((array[i] * 9/5) + 32).toFixed(1);
        }

        return array;
    }

    const iconCodes = getIconArray();
    const temperatures = getHourlyTemperatures();
    
    return (
        <div className="weather-hour-row flex flex-center">
            <div className={`${styles.hourForecast} ${styles.card} flex flex-col flex-center`}>
                <div className={`${styles.hourCol} flex`}>
                    <span className={styles.valueItem}>00:00</span>
                    <span className={styles.valueItem}>01:00</span>
                    <span className={styles.valueItem}>02:00</span>
                    <span className={styles.valueItem}>03:00</span>
                    <span className={styles.valueItem}>04:00</span>
                    <span className={styles.valueItem}>05:00</span>
                    <span className={styles.valueItem}>06:00</span>
                    <span className={styles.valueItem}>07:00</span>
                    <span className={styles.valueItem}>08:00</span>
                    <span className={styles.valueItem}>09:00</span>
                    <span className={styles.valueItem}>10:00</span>
                    <span className={styles.valueItem}>11:00</span>
                    <span className={styles.valueItem}>12:00</span>
                    <span className={styles.valueItem}>13:00</span>
                    <span className={styles.valueItem}>14:00</span>
                    <span className={styles.valueItem}>15:00</span>
                    <span className={styles.valueItem}>16:00</span>
                    <span className={styles.valueItem}>17:00</span>
                    <span className={styles.valueItem}>18:00</span>
                    <span className={styles.valueItem}>19:00</span>
                    <span className={styles.valueItem}>20:00</span>
                    <span className={styles.valueItem}>21:00</span>
                    <span className={styles.valueItem}>22:00</span>
                    <span className={styles.valueItem}>23:00</span>
                </div>

                <div className={`${styles.hourCodeCol} flex`}>
                    {iconCodes.map((icon, index) => (
                        <span key={index} className={styles.valueItem}>{icon}</span>
                    ))}
                </div>

                <div className={`${styles.hourTempCol} flex`}>
                    {temperatures.map((temp, index) => (
                        <span key={index} className={styles.valueItem}>{props.isMetric ? temp + "°C" : temp + "F"}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HourForecast