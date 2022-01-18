import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  slug: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ slug: req.query.slug });
}
