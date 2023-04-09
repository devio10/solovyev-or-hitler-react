import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.pageFooter}>
            <p>devio Inc.</p>
            <Link href="/about">About this application</Link>
        </footer>
    )
}