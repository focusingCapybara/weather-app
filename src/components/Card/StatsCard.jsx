import styles from "./Card.module.css"

function Card(props) {
    return (
        <div className={`${styles.statsCard} ${styles.card} flex flex-center`}>
            <h3>{props.title}</h3>
            <div className="stats-info flex flex-center">
                <div className={`${styles.valueItem} stats-icon`}>{props.icon}</div>
                <span className={styles.valueItem}>{props.value}{props.unit}</span>
            </div>
        </div>
    );
}

export default Card