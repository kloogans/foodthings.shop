import { NextApiRequest, NextApiResponse } from "next";
import { printful } from "lib/printful-client";

interface Order {
  id: string;
  status: string;
  shipping: string;
  created: string;
  product: {
    name: any;
    files: any;
  };
  tracking: {
    trackingUrl?: string;
    carrier?: string;
  };
}

type Data = {
  order?: Order;
};

type Error = {
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { orderId } = req.query;

  try {
    const {
      code,
      result,
      result: { status, external_id, shipping, created, items, shipments },
    } = await printful.get(`orders/@${orderId}`);

    if (code !== 200) {
      res.json(null);
      return;
    }

    const { name, files } = items[0];

    let order = {
      id: external_id,
      status,
      shipping,
      created,
      product: { name, files },
      tracking: null,
    };

    if (status === "fulfilled") {
      const { tracking_url, carrier } = shipments[0];
      order.tracking = {
        trackingUrl: tracking_url,
        carrier,
      };
    }
    // console.log("here")
    res.json({ order });
    return;
  } catch (e) {
    // console.log(e.message)
    res.json(null);
    return;
  }
}
