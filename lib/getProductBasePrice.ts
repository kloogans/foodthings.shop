import { BASE_PRICES } from "./base-prices"
import { getProductType } from "./getProductType"

export const getProductBasePrice = (name: string) => {
  const productType = getProductType(name)

  if (
    name === "crippling depression hoodie" ||
    name === "crippling anxiety hoodie"
  ) {
    return 55
  }

  if (BASE_PRICES[productType]) {
    return BASE_PRICES[productType]
  }

  return 24
}
