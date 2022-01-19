import CardPost from "../components/CardPost";
import type { NextPage, GetServerSideProps } from "next";
import { PostData } from "../types";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.HOST}/api/posts`);
  const data = await res.json();
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
