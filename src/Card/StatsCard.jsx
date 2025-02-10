import styles from "./Card.module.css"

function Card(props) {
    return (
        <div className={`${styles.statsCard} ${styles.card}`}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Card