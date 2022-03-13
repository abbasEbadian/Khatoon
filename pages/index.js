import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title + " "+ "test"}>
          Welcome to <a>Khaatoon !</a>
        </h1>
        <h1 className={styles.title2}>
          Welcome to <a>Khaatoon !</a>
        </h1>


    </div>
  )
}
