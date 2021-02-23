import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/varelabeatriz.png" alt="Beatriz Varela"></img>
            <div>
                <strong>Beatriz Varela</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level 1
                    </p>
            </div>
        </div>

    )
}