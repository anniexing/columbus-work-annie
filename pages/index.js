import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Product from '../components/Product';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Columbus</title>
        <meta name="description" content="Columbus frontend work test" />
        <link rel="icon" href="/original.ico" />
      </Head>

      <main className={styles.main}>
        <Product />
      </main>


    </div>
  )
}

export default Home;
