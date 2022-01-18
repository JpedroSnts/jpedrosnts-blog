import CardPost from "../components/CardPost";
import axios from "axios";
import type { NextPage, GetServerSideProps } from "next";
import { PostData } from "../types";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/posts`);
  return {
    props: {
      posts: data.posts,
    },
  };
};

interface HomeProps {
  posts: PostData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
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
        {posts.map((post) => (
          <CardPost post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default Home;
