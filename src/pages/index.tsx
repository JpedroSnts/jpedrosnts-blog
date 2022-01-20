import type { NextPage, GetServerSideProps } from "next";
import { getAllPosts } from "../service/blog";
import { PostData } from "../types";
import CardPost from "../components/CardPost";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  const { posts } = await getAllPosts();
  return { props: { posts } };
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
