export const fetchMoreProducts = async (offset: number, search?: string) => {
  try {
    const products = await fetch(
      `/api/products/fetch?limit=21&offset=${offset}${
        search ? `&search=${search}` : ""
      }`
    )
    return products.json()
  } catch (e) {
    console.error(e)
    return []
  }
}
