import type { NextPage, GetServerSideProps } from "next";
import { PostData } from "../types";
import { getAllPosts } from "../service/blog";
import { useRouter } from "next/router";
import CardPost from "../components/CardPost";
import Head from "next/head";
import Loader from "../components/Loader";

export const getServerSideProps: GetServerSideProps = async () => {
  const { posts } = await getAllPosts();
  return { props: { posts } };
};

interface HomeProps {
  posts: PostData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home - JpedroSnts</title>
        <meta
          name="description"
          content="Leia as últimas postagens de JpedroSnts"
        />
      </Head>
      {router.isFallback ? (
        <Loader />
      ) : (
        <section>
          {posts.map((post) => (
            <CardPost post={post} key={post.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Home;
