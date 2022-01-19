import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from "next";
import { useContext } from "react";
import { ContextApp } from "../../context";
import { PostData } from "../../types";
import { getPostBySlug, getAllPosts } from "../../service/blog";
import Link from "next/link";
import Head from "next/head";
import * as S from "../../styles";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { posts } = await getAllPosts();
//   const paths = posts
//     ? posts.map((post: PostData) => ({
//         params: { slug: post.slug },
//       }))
//     : [];
//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const slug = context.params && context.params.slug;
//   const { post } = await getPostBySlug(slug);
//   return { props: { post } };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params && context.params.slug;
  const { post } = await getPostBySlug(slug);
  return { props: { post } };
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
