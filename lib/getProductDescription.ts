export const getProductDescription = (name: string) => {
  if (name.includes("tee"))
    return `regular tees are printed on bella + canvas 3001 unisex t-shirts. all-over print tees are printed on 95% polyester, 5% elastane fabric t-shirts.`

  if (name.includes("tank"))
    return `printed on bella + canvas 3480 unisex tank tops`

  if (name.includes("hoodie"))
    return `printed on cotton heritage m2580 unisex hoodies`

  if (name.includes("sweatshirt"))
    return `printed on cotton heritage m2480 unisex sweatshirts`

  if (name.includes("mug"))
    return `11oz ceramic mug with a colorful rim, handle, and igonside. all mugs are dishwasher/ microwave safe`

  if (name.includes("sticker sheet"))
    return `kiss cut vinyl sticker sheet. all stickers are waterproof and weatherproof`

  if (name.includes("sticker"))
    return `kiss cut vinyl sticker. all stickers are waterproof and weatherproof`
}
