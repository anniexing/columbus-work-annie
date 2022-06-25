import Head from "next/head";
import styles from "../styles/Home.module.css";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Columbus frontend work test</title>
        <meta
          name="description"
          content="Display the product list for Columbus frontend work test"
        />
        <meta property="og:locale" content="en_US"/>
        <meta
          property="og:title"
          content="Display the product list for Columbus frontend work test "
        />
        <meta
          property="og:description"
          content="Display the product list for Columbus frontend work test"
        />
        <meta property="og:url" content="https://www.columbusglobal.com" />
        <meta property="og:type" content="product" />
        <meta property="product:section" content="Product List" />
        <meta
          property="twitter:card"
          content="summary"
        />
        <meta
          property="twitter:title"
          content="Display the product list for Columbus frontend work test "
        />
        <meta
          property="twitter:description"
          content="Display the product list for Columbus frontend work test"
        />
        <link rel="icon" href="/original.ico" />
      </Head>

      <main>
        <Product />
      </main>
    </div>
  );
};

export default Home;
