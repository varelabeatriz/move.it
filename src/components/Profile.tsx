import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/varelabeatriz.png" alt="Beatriz Varela"></img>
            <div>
                <strong>Beatriz Varela</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level {level}
                    </p>
            </div>
        </div>

    )
}