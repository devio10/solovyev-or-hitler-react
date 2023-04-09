import styles from '@/styles/about.module.scss'
import Image from 'next/image'
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <h1>devio Inc</h1>
        </>
    )
}