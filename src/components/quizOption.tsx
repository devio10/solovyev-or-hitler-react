import Image from "next/image"
import styles from "@/styles/quizOption.module.scss"
import { ReactComponentElement } from "react"

export function QuizOption({src, alt, onclick}: {src: string, alt: string, onclick: React.MouseEventHandler}) {
    let altText = "Выбрать " + alt

    return (
        <button className={styles.quizOptionButton} onClick={onclick}>
            <Image className={styles.quizOption} fill alt={altText} src={src}></Image>
        </button>
    )
}
export function QuizText({text, hoverSide}: {text: string | number, hoverSide: number}) {
    return (
        <div className={styles.quizTextBlock}>
            <p className={styles.quizText}> «{text}» </p>
        </div>
    )
}

export function QuizCount({right, total}: {right: number, total: number}) {
    return (
        <div className={styles.quizCount}>
            <p className={styles.quizText}>{right} из {total}</p>
        </div>
    )
}