import { useEffect, useState } from "react";
import styles from "./Button.module.css";

function UnitsButton(props) {
    const [isMetric, setIsMetric] = useState(true);

    // Updates the units state
    function changeUnits() {
        setIsMetric(!isMetric);
    }

    // Returns boolean value of isMetric
    useEffect(() => {
        props.getUnitsFromUnitsButton(isMetric);
    }, [isMetric])

    return (
        <button className={`${styles.btn} ${styles.unitsButton}`} onClick={changeUnits}>{isMetric ? "Imperial" : "Metric"} Units</button>
    );
}

export default UnitsButton;