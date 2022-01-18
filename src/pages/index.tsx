import CardPost from "../components/CardPost";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - JpedroSnts</title>
        <meta
          name="description"
          content="Leia as últimas postagens de JpedroSnts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
    </div>
  );
};

export default Home;
