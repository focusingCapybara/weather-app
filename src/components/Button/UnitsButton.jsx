import styles from "./Button.module.css";

function UnitsButton() {
    return (
        <button className={`${styles.btn} ${styles.unitsButton}`} onClick={""}>Imperial Units</button>
    );
}

export default UnitsButton;