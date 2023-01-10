import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Snowdonia Studio</title>
        <meta name="description" content="Snowdonia studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.navbartext}>
            Snowdonia Studio
          </p>
        </div>
        <div className={styles.center}>
          Our Website is coming soon!
        </div>
      </main>
    </>
  )
}
