import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../service/supabase";
import { PostData } from "../../../types";

type Data = {
  posts?: PostData[] | null;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { data: posts, error } = await supabase.from("post").select("*");
  const Posts = posts?.map((post) => {
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
  if (error) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(200).json({ posts: Posts });
  }
}
