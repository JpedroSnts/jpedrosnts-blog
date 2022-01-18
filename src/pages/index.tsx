import CardPost from "../components/CardPost";
import type { NextPage } from "next";
import Head from "next/head";

const post = {
  title: "Lorem Ipsum",
  data: "18/01/2022 - 17:10",
  slug: "lorem-ipsum",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius leo ac erat rutrum varius. Curabitur et magna vel felis commodo ornare viverra et felis. Ut a lacus massa. Vivamus sed molestie metus. Praesent vitae erat eu augue porta vestibulum ac ac augue. Vestibulum fermentum porttitor sollicitudin. Proin a dictum ligula.",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - JpedroSnts</title>
        <meta
          name="description"
          content="Leia as últimas postagens de JpedroSnts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <CardPost post={post} />
        <CardPost post={post} />
        <CardPost post={post} />
        <CardPost post={post} />
        <CardPost post={post} />
      </section>
    </>
  );
};

export default Home;
