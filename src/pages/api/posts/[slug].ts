import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../service/supabase";
import { PostData } from "../../../types";

type Data = {
  post?: PostData | null;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { data: post, error } = await supabase
    .from("post")
    .select("*")
    .eq("slug", req.query.slug);
  if (error) res.status(400).json({ error: error.message });
  if (post?.length === 0) res.status(404).json({ error: "Post not found!" });
  if (post) {
    const Post = post?.map((post) => {
      return {
        id: post.id,
        title: {
          "en-US": post.title_en,
          "pt-BR": post.title_pt,
        },
        content: {
          "en-US": post.content_en,
          "pt-BR": post.content_pt,
        },
        date: {
          "en-US": post.date_en,
          "pt-BR": post.date_pt,
        },
        slug: post.slug,
      };
    });
    res.status(200).json({ post: Post[0] });
  }
}
