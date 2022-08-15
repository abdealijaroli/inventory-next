import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POS System Skeleton</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Inventory POS Management System
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/varuuntiwari/inventory-next" target="_blank" rel="noopener noreferrer">
          <span className={styles.div}>
            Created for J-Component
          </span>
        </a>
      </footer>
    </div>
  )
}
