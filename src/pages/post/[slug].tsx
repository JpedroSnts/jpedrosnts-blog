import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ContextApp } from "../../context";
import { PostData } from "../../types";
import { getPostBySlug, getAllPosts } from "../../service/blog";
import Link from "next/link";
import Head from "next/head";
import Loader from "../../components/Loader";
import * as S from "../../styles";

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getAllPosts();
  const paths =
    posts?.map((post: PostData) => {
      return {
        params: { slug: post.slug },
      };
    }) ?? [];
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { post } = await getPostBySlug(
    context.params ? context.params.slug : "",
  );
  return { props: { post } };
};

interface PostProps {
  post: PostData;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const router = useRouter();
  const { lang } = useContext(ContextApp);
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>{`Loading...`}</title>
        </Head>
        <Loader />
      </>
    );
  }
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
