import { WiDaySunny, WiDaySunnyOvercast, WiCloud, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import styles from "./Card/Card.module.css"

function HourForecast(props) {
    function getIconArray() {
        let array = [];

        for (let i = 0; i < 24; i++) {
            if (props.weatherCodes[i] == 0) {
                array.push(<WiDaySunny size={50} color="white"></WiDaySunny>);
            }
            else if (props.weatherCodes[i] >= 1 && props.weatherCodes[i] <= 2) {
                array.push(<WiDaySunnyOvercast size={50} color="white"></WiDaySunnyOvercast>);
            }
            else if (props.weatherCodes[i] == 3) {
                array.push(<WiCloud size={50} color="white"></WiCloud>);
            }
            else if (props.weatherCodes[i] >= 45 && props.weatherCodes[i] <= 48) {
                array.push(<WiFog size={50} color="white"></WiFog>);
            }
            else if (props.weatherCodes[i] >= 51 && props.weatherCodes[i] <= 55) {
                array.push("");
            }
            else if (props.weatherCodes[i] >= 56 && props.weatherCodes[i] <= 57) {
                array.push("");
            }
            else if (props.weatherCodes[i] >= 61 && props.weatherCodes[i] <= 65) {
                array.push(<WiRain size={50} color="white"></WiRain>);
            }
            else if (props.weatherCodes[i] >= 66 && props.weatherCodes[i] <= 67) {
                array.push("");
            }
            else if (props.weatherCodes[i] >= 71 && props.weatherCodes[i] <= 75) {
                array.push(<WiSnow size={50} color="white"></WiSnow>);
            }
            else if (props.weatherCodes[i] == 77) {
                array.push("");
            }
            else if (props.weatherCodes[i] >= 80 && props.weatherCodes[i] <= 82) {
                array.push("");
            }
            else if (props.weatherCodes[i] >= 85 && props.weatherCodes[i] <= 86) {
                array.push("");
            }
            else if (props.weatherCodes[i] == 95) {
                array.push(<WiThunderstorm size={50} color="white"></WiThunderstorm>);
            }
            else if (props.weatherCodes[i] >= 96 && props.weatherCodes[i] <= 99) {
                array.push(<WiThunderstorm size={50} color="white"></WiThunderstorm>);
            }
        }

        return array;
    }

    function getHourlyTemperatures() {
        let array = [];

        for (let i = 0; i < 24; i++) {
            array.push(props.temperatures[i]);
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
                        <span key={index} className={styles.valueItem}>{temp}°C</span>
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default HourForecast