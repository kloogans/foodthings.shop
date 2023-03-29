export interface FeaturedProduct {
  name: string
  image: string | string[]
  link: string
  description: string
  price: number
  productType: string
  isFeatured: boolean
  featuredBackground?: string
}

export interface FeaturedCategory {
  name: string
  description: string
  productType: string
  image: string
  buttonText: string
}

interface StoreConfig {
  storeName: string
  supportEmail: string
  description: string
  logo: string
  seoImage: string
  storeUrl: string
  featuredCategories: FeaturedCategory[]
  featuredProducts: FeaturedProduct[]
}

export const storeConfig = {
  storeName: "Food Things",
  supportEmail: "support@foodthings.shop",
  description:
    "We offer a wide variety of food-themed clothing and accessories that are perfect for any foodie. From graphic tees to aprons, hoodies, bags, and even stickers, we have everything you need to express your passion for good, bad, and weird eats. Browse our collection and add some flavor to your wardrobe with Food Things.",
  logo: "/assets/logo.svg",
  seoImage: "https://littlebuilds.s3.us-east-1.amazonaws.com/seo-image.jpg",
  storeUrl: "https://foodthings.shop",
  featuredCategories: [
    {
      name: "fanny packs",
      description:
        "fanny packs are back and better than ever. wear one and you'll be the coolest person in the room.",
      productType: "bag",
      image:
        "https://littlebuilds.s3.amazonaws.com/foodthings/pizza-fanny-pack-feature.png",
      buttonText: "shop fanny packs"
    },
    {
      name: "tees",
      description:
        "good quality tees with food and things on them. what more could you ask for",
      productType: "tee",
      image:
        "https://littlebuilds.s3.amazonaws.com/foodthings/crippling-depression-tee-feature.png",
      buttonText: "shop tees"
    },
    {
      name: "totes",
      description:
        "our tote bags are perfect for carrying all of your stuff. or just your lunch.",
      productType: "bag",
      image:
        "https://littlebuilds.s3.amazonaws.com/foodthings/donuts-tote-feature.png",
      buttonText: "shop tote bags"
    },
    {
      name: "hoodies",
      description:
        "wearing one of these hoodies is like wearing a hug. kind of.",
      productType: "hoodie",
      image:
        "https://littlebuilds.s3.amazonaws.com/foodthings/banana-hoodie-feature.png",
      buttonText: "shop hoodies"
    },
    {
      name: "sweatshirts",
      description:
        "our sweaters will keep you the perfect temperature while looking cool as hell.",
      productType: "sweatshirt",
      image:
        "https://littlebuilds.s3.amazonaws.com/foodthings/broccoli-sweatshirt-feature.png",
      buttonText: "shop sweatshirts"
    },
    {
      name: "mugs",
      description:
        "bring one to the office and your boss will probably give you a raise. they're that good.",
      productType: "mug",
      image: "https://littlebuilds.s3.us-east-1.amazonaws.com/nuggie-mug.webp",
      buttonText: "shop mugs"
    },
    {
      name: "tumblers",
      description:
        "our tumblers are perfect for keeping your drinks cold or hot. or both. whatever you're into. you freak",
      productType: "mug",
      image:
        "https://littlebuilds.s3.amazonaws.com/foodthings/breakfast-tumbler.png",
      buttonText: "shop tumblers"
    },
    {
      name: "kids tees",
      description: "our kids tees are perfect for your little foodie. ",
      productType: "kids tee",
      image:
        "https://littlebuilds.s3.amazonaws.com/foodthings/kids-chicken-wings-tee.png",
      buttonText: "shop kids tees"
    }
  ],
  featuredProducts: [
    {
      name: "chicken wings tee",
      description:
        "introducing the cluckin dope chicken wings tee! Featuring an all-over print of juicy chicken wings, it's the perfect attire for any wing-loving foodie or casual BBQ enthusiast.",
      productType: "tee",
      price: 35,
      image: "/assets/mockups/chicken-wings-tee.png",
      link: "tees/chicken-wings-aop-tee",
      isFeatured: true,
      featuredBackground: "/assets/vectors/chicken-wings.svg"
    },
    {
      name: "banana hoodie",
      description:
        "our unisex hoodie is a soft and comfortable option with a front pouch pocket, matching flat drawstrings, and a tear-away tag. ",
      productType: "hoodie",
      price: 35,
      image: [
        "/assets/mockups/banana-hoodie.png",
        "/assets/mockups/banana-hoodie-2.png"
      ],
      link: "hoodies/banana-hoodie",
      isFeatured: false
    },

    {
      name: "donuts tote bag",
      description:
        "this tote bag is perfect for carrying all of your stuff. or just your lunch.",
      productType: "bag",
      price: 30,
      image: [
        "/assets/mockups/donuts-tote-1.png",
        "/assets/mockups/donuts-tote-2.png"
      ],
      link: "totes/donuts-tote",
      isFeatured: false
    },
    {
      name: "pizza fanny pack",
      description:
        "The perfect accessory for any pizza lover is here. Our pizza fanny pack has enough room to store all of your essentials comfortably. You'll never have to sacrifice style for convenience again.",
      productType: "bag",
      price: 35,
      image: "/assets/mockups/pizza-fanny-pack-feature.png",
      link: "fanny-packs/pizza-fanny-pack-bag",
      isFeatured: true,
      featuredBackground: "/assets/vectors/pizza.svg"
    },

    {
      name: "crippling anxiety tee",
      description:
        "this tee is perfect for wearing to the grocery store or the gym. or both. whatever you're into. you freak",
      productType: "tee",
      price: 24,
      image: [
        "/assets/mockups/crippling-anxiety-tee-1.png",
        "/assets/mockups/crippling-anxiety-tee-2.png"
      ],
      link: "tees/crippling-anxiety-orange-tee",
      isFeatured: false
    },
    {
      name: "broccoli tumbler",
      description:
        "our unisex hoodie is a soft and comfortable option with a front pouch pocket, matching flat drawstrings, and a tear-away tag. ",
      productType: "hoodie",
      price: 35,
      image: [
        "/assets/mockups/broccoli-tumbler-1.png",
        "/assets/mockups/broccoli-tumbler-2.png"
      ],
      link: "tumblers/broccoli-tumbler",
      isFeatured: false
    },

    {
      name: "donuts crop tee",
      description:
        "Make a sweet statement with this cute and trendy donuts crop top tee! It's perfect for adding a playful touch to any outfit. This top is sure to satisfy your sweet tooth and turn heads wherever you go.",
      productType: "crop-tee",
      price: 28,
      image: "/assets/mockups/donuts-crop-tee-feature.png",
      link: "crop-tees/donuts-crop-tee",
      isFeatured: true,
      featuredBackground: "/assets/vectors/donuts.svg"
    }
  ]
} as StoreConfig
