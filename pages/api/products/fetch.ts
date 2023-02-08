import { PrintfulProduct } from "types";
import { NextApiRequest, NextApiResponse } from "next";
import { printful } from "lib/printful-client";

type Data = {
  products: PrintfulProduct[] | null;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { offset } = req.query;

  try {
    const { result: products } = await printful.get(
      `sync/products?limit=21&offset=${offset}`
    );

    res.status(200).json({ products });
  } catch ({ error }) {
    console.log(error);
    res.status(404).json({ products: null, error: error.message });
  }
}
