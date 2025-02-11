import styles from "./Card.module.css"

function Card(props) {
    return (
        <div className={`${styles.statsCard} ${styles.card}`}>
            <h3>{props.title}</h3>
            <span className={styles.valueItem}>{props.value}{props.unit}</span>
        </div>
    );
}

export default Card