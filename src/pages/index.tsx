import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'


export default function Home() {
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
      </main>
    </>
  )
}
