import styles from "./Card.module.css"

function DaysCard() {
    return (
        <div className={`${styles.daysCard} ${styles.card} flex`}>
            <div className={`${styles.dayCol} flex flex-col`}>
                <span className={styles.colItem}>Monday</span>
                <span className={styles.colItem}>Tuesday</span>
                <span className={styles.colItem}>Wednesday</span>
                <span className={styles.colItem}>Thursday</span>
                <span className={styles.colItem}>Friday</span>
                <span className={styles.colItem}>Saturday</span>
                <span className={styles.colItem}>Sunday</span>
            </div>

            <div className={`${styles.dayLogoCol} flex flex-col`}>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
            </div>

            <div className={`${styles.nightLogoCol} flex flex-col`}>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
            </div>

            <div className={`${styles.dayTempCol} flex flex-col`}>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
            </div>

            <div className={`${styles.nightTempCol} flex flex-col`}>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
                <span className={styles.colItem}>Test</span>
            </div>
        </div>
    )
}

export default DaysCard