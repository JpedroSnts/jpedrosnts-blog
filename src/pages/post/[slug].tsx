import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useContext } from "react";
import { ContextApp } from "../../context";
import { PostData } from "../../types";
import Link from "next/link";
import Head from "next/head";
import * as S from "../../styles";

export const getStaticPaths: GetStaticPaths = async () => {
  const postsFetch = await fetch(`${process.env.HOST}/api/posts`);
  const data = await postsFetch.json();
  const paths = data.posts.map((post: PostData) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params && context.params.slug;
  const res = await fetch(`${process.env.HOST}/api/posts/${slug}`);
  const data = await res.json();
  return {
    props: {
      post: data.post,
    },
  };
};

interface PostProps {
  post: PostData;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const { lang } = useContext(ContextApp);
  return (
    <>
      <Head>
        <title>{`${post.title[lang]} - JpedroSnts`}</title>
        <meta name="description" content={post.title[lang]} />
      </Head>
      <section>
        <S.Title>{post.title[lang]}</S.Title>
        <div dangerouslySetInnerHTML={{ __html: post.content[lang] }} />
      </section>
      <br />
      <Link href="/">
        <a>
          <h3>{lang === "en-US" ? "← Back to home" : "← Voltar ao início"}</h3>
        </a>
      </Link>
    </>
  );
};

export default Post;
