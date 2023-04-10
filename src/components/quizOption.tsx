import Image from "next/image"
import styles from "@/styles/quizOption.module.scss"

export default function QuizOption(props: any) {
    let altText = "Выбрать " + props.alt

    return (
        <button className={styles.quizOptionButton}>
            <Image className={styles.quizOption} sizes="100vw" alt={altText} src={props.src}></Image>
        </button>
    )
}