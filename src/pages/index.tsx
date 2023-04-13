import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { QuizOption, QuizText, QuizCount } from '@/components/quizOption'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  const questions = [
    ['Только фанатичная толпа легко управляема', 0],
    ['Цитата 2', 1],
    ['Цитата 3', 1],
    ['Цитата 4', 0],
    ['Цитата 5', 0],
    ['Цитата 6', 0]
  ]

  function randomQuestion() {
    return Math.floor(Math.random() * questions.length)
  }

  const [question, setQuestion] = useState(randomQuestion)

  const [rightnum, setRightnum] = useState(0);
  const [totalnum, setTotalnum] = useState(0);

  function answerQuestion(value: number) {
    if (currentQuestion[1] == value) {
      console.log('You did it!')
      setRightnum(rightnum + 1);
    } else {
      console.log('haha loser')
    }
    setTotalnum(totalnum + 1);
  }

  function handleNextClick(value: number) {
    answerQuestion(value)
    setQuestion(randomQuestion)
  }

  let currentQuestion = questions[question];
  return (
    <>
      <Head>
        <title>Соловьев или Гитлер</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}><span>Соловьев</span> или <span>Гитлер</span>?</h1>
        <p className={styles.mainDescription}>Проверьте свою интуицию с помощью простой игры, в которой вам нужно угадать кому принадлежит предложенная цитата: Соловьеву или Гитлеру.</p>
        <Button onClick={() => console.log('bitch')} text='Начать' />
      </main>
      <section className={styles.quizSection}>
        <QuizOption onclick={() => handleNextClick(0)} src="/hitler.jpg" alt="Гитлера" />
        <QuizOption onclick={() => handleNextClick(1)} src="/solovyev.png" alt="Соловьева" />
      </section>

      <QuizText text={currentQuestion[0]} hoverSide={0} />

      <QuizCount right={rightnum} total={totalnum} />

    </>
  )
}

function Button(props: any) {
  return (
    <button style={props.style} className={styles.devuiButton} onClick={props.onClick}>{props.text}</button>
  )
}