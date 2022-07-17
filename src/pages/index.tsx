import type { NextPage, GetStaticProps } from "next";
import { getAllPosts, getHomeData } from "../service/blog";
import { HomeDataProps, PostData } from "../types";
import { useContext } from "react";
import { ContextApp } from "../context";
import CardPost from "../components/CardPost";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await getAllPosts();
  const { home } = await getHomeData();
  return { props: { posts, home }, revalidate: 30 };
};

interface HomeProps {
  posts: PostData[];
  home: HomeDataProps;
}

const Home: NextPage<HomeProps> = ({ posts, home }) => {
  const { lang } = useContext(ContextApp);
  return (
    <>
      <Head>
        <title>{home.title[lang]}</title>
        <meta name="description" content={home.description[lang]} />
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
