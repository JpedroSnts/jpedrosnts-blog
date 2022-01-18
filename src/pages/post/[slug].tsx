import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
import { useContext } from "react";
import { ContextApp } from "../../context";
import { PostData } from "../../types";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

interface PostProps {
  post: PostData;
}

// export async function getStaticPaths() {
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/posts`);
//   const slug = data.posts.map((post: any) => post.slug);
//   return {
//     paths: { params: slug },
//     fallback: true,
//   };
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_HOST}/api/posts/${
//       context.params && context.params.slug
//     }`,
//   );
//   return {
//     props: {
//       post: "data.post",
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/posts/${
      context.params && context.params.slug
    }`,
  );
  return {
    props: {
      post: data.post,
    },
  };
};

const Post: NextPage<PostProps> = ({ post }) => {
  const { lang } = useContext(ContextApp);
  return (
    <div>
      <Head>
        <title>Post - JpedroSnts</title>
        <meta
          name="description"
          content="Leia as últimas postagens de JpedroSnts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>{post.title[lang]}</h1>
        <p>{post.content[lang]}</p>
      </section>
      <br />
      <Link href="/">
        <a>
          <h3>← Back to home</h3>
        </a>
      </Link>
    </div>
  );
};

export default Post;
