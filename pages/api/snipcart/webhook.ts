import type { NextApiResponse } from "next"

import createOrder from "lib/create-order"

import { SnipcartRequest, SnipcartWebhookEvent } from "types"

export default async function handler(
  req: SnipcartRequest,
  res: NextApiResponse
) {
  const allowedEvents: SnipcartWebhookEvent[] = [
    "order.completed",
    "customauth:customer_updated"
  ]

  console.log(req.headers)
  const token = req.headers["x-snipcart-requesttoken"]
  console.log(token)

  const { eventName, content } = req.body

  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" })

  if (!allowedEvents.includes(eventName))
    return res.status(400).json({ message: "This event is not permitted" })

  try {
    switch (eventName) {
      case "order.completed":
        await createOrder(content)
        break
      case "customauth:customer_updated":
        return res
          .status(200)
          .json({ message: "Customer updated - no action taken" })
      default:
        throw new Error("No such event handler exists")
    }

    res.status(200).json({ message: "Done" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Something went wrong" })
  }
}
