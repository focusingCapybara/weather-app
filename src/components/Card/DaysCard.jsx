import { WiDaySunny, WiDaySunnyOvercast, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import styles from "./Card.module.css"

function DaysCard(props) {
    function getIconArray() {
        let array = [];

        props.weatherCodes.forEach(code => {
            if (code == 0) {
                array.push(<WiDaySunny size={50} color="white"></WiDaySunny>);
            }
            else if (code >= 1 && code <= 3) {
                array.push(<WiDaySunnyOvercast size={50} color="white"></WiDaySunnyOvercast>);
            }
            else if (code >= 45 && code <= 48) {
                array.push(<WiFog size={50} color="white"></WiFog>);
            }
            else if (code >= 51 && code <= 55) {
                array.push("");
            }
            else if (code >= 56 && code <= 57) {
                array.push("");
            }
            else if (code >= 61 && code <= 65) {
                array.push(<WiRain size={50} color="white"></WiRain>);
            }
            else if (code >= 66 && code <= 67) {
                array.push("");
            }
            else if (code >= 71 && code <= 75) {
                array.push(<WiSnow size={50} color="white"></WiSnow>);
            }
            else if (code == 77) {
                array.push("");
            }
            else if (code >= 80 && code <= 82) {
                array.push("");
            }
            else if (code >= 85 && code <= 86) {
                array.push("");
            }
            else if (code == 95) {
                array.push(<WiThunderstorm size={50} color="white"></WiThunderstorm>);
            }
            else if (code >= 96 && code <= 99)
                array.push(<WiThunderstorm size={50} color="white"></WiThunderstorm>);
            }
        );

        return array;
    }

    function getDayNames() {
        let array = [];

        props.dates.forEach((date) => {
            const newDate = new Date(date);
            const options = { weekday: 'long' };
            array.push(newDate.toLocaleDateString('en-US', options));

        });

        return array;
    };
      
    const iconCodes = getIconArray();
    const dayNames = getDayNames();

    return (
        <div className={`${styles.daysCard} ${styles.card} flex`}>
            <div className={`${styles.dayCol} flex flex-col`}>
                {dayNames.map((day, index) => (
                    <span key={index} className={styles.valueItem}>{day}</span>
                ))}
            </div>

            <div className={`${styles.dayLogoCol} flex flex-col`}>
                {iconCodes.map((icon, index) => (
                    <span key={index} className={styles.valueItem}>{icon}</span>
                ))}
            </div>

            <div className={`${styles.dayTempCol} flex flex-col`}>
                {props.maxTemperatures.map((temp, index) => (
                    <span key={index} className={styles.valueItem}>{temp}°C</span>
                ))}
            </div>

            <div className={`${styles.nightTempCol} flex flex-col`}>
                {props.minTemperatures.map((temp, index) => (
                    <span key={index} className={styles.valueItem}>{temp}°C</span>
                ))}
            </div>
        </div>
    );
}

export default DaysCard