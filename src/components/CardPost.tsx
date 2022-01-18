import Link from "next/link";
import * as S from "../styles";

interface CardPostProps {
  post: {
    title: string;
    data: string;
    text: string;
    slug: string;
  };
}

export default function CardPost({ post }: CardPostProps) {
  return (
    <S.CardPost>
      <Link href={`/post/${post.slug}`}>
        <a>
          <h1>{post.title}</h1>
        </a>
      </Link>
      <small>{post.data}</small>
      <p>{post.text.substring(0, 40) + "..."}</p>
    </S.CardPost>
  );
}
