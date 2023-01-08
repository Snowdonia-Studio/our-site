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
          Coming soon!
        </div>

        <div className={styles.center}>
          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Our Work <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              ...
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              ...
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Work with us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              ...
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
