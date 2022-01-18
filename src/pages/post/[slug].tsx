import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const Post: NextPage = () => {
  const { query } = useRouter();
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
      <h1>{query.slug}</h1>
      <Link href="/">
        <a>
          <h3>← Back to home</h3>
        </a>
      </Link>
    </div>
  );
};

export default Post;
