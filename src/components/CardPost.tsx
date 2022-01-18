import { PostData } from "../types";
import { useContext } from "react";
import { ContextApp } from "../context";
import Link from "next/link";
import * as S from "../styles";

interface CardPostProps {
  post: PostData;
}

export default function CardPost({ post }: CardPostProps) {
  const { lang } = useContext(ContextApp);
  return (
    <S.CardPost>
      <Link href={`/post/${post.slug}`}>
        <a>
          <h1>{post.title[lang]}</h1>
        </a>
      </Link>
      <small>{post.date[lang]}</small>
      <p>{post.content[lang].substring(0, 40) + "..."}</p>
    </S.CardPost>
  );
}
