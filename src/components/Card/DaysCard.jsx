import { WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiCloud, WiFog, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import styles from "./Card.module.css"

function DaysCard(props) {
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

        for (let i = 0; i < props.weatherCodes.length; i++) {
            array.push(weatherIcons[props.weatherCodes[i]]);
        }

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

    console.log(maxTemperatures);
      
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
                {maxTemperatures.map((temp, index) => (
                    <span key={index} className={styles.valueItem}>{props.isMetric ? temp + "°C" : temp + "F"}</span>
                ))}
            </div>

            <div className={`${styles.nightTempCol} flex flex-col`}>
                {minTemperatures.map((temp, index) => (
                    <span key={index} className={styles.valueItem}>{props.isMetric ? temp + "°C" : temp + "F"}</span>
                ))}
            </div>
        </div>
    );
}

export default DaysCard