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
  twitterHandle: string
  logo: string
  seoImage: string
  storeUrl: string
  featuredCategories: FeaturedCategory[]
  featuredProducts: FeaturedProduct[]
}

export const storeConfig = {
  storeName: "Food Things",
  supportEmail: "support@foodthings.shop",
  twitterHandle: "@",
  description:
    "We offer a wide variety of food-themed clothing and accessories that are perfect for any foodie. From graphic tees to aprons, hoodies, bags, and even stickers, we have everything you need to express your passion for good, bad, and weird eats. Browse our collection and add some flavor to your wardrobe with Food Things.",
  logo: "/assets/logo.svg",
  seoImage: "https://littlebuilds.s3.us-east-1.amazonaws.com/seo-image.jpg",
  storeUrl: "https://foodthings.net",
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
      description: `Introducing the Chicken Wing Tee! Featuring a mouth-watering print of delicious chicken all over it, the chicken wing tee is perfect for those who can't get enough of their favorite snack. Made from comfortable and durable materials, it's also great for casual wear or for showing off your love for chicken wings at your next game day party. This is a must-have for fried chicken enthusiasts!
        
So whether you like them hot and spicy or mild and saucy, this chicken wing t-shirt is sure to make you and everyone around you hungry for more.`,
      productType: "tee",
      price: 35,
      image: "/assets/mockups/chicken-wings-tee.png",
      link: "tees/chicken-wings-aop-tee",
      isFeatured: true,
      featuredBackground: "/assets/vectors/chicken-wings.svg"
    },
    {
      name: "banana hoodie",
      description: `This hoodie is a unique and playful addition to any wardrobe. Featuring a vibrant and eye-catching banana print, it's perfect for anyone who wants to add a touch of fun to their outfit. Made from comfortable materials and with a cozy hood, this hoodie is perfect for lounging around or running errands in style. 
        
Our unisex hoodie is a soft and comfortable option with a front pouch pocket, matching flat drawstrings, and a tear-away tag. `,
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
      description: `This tote bag is perfect for donut lovers! Featuring a fun and playful design of delicious donuts printed all over it, this bag is both functional and stylish. It's sure to add a touch of sweetness to any outfit or shopping trip. 
        
Our bags are made of 100% spun polyester fabric and it has a capacity of 2.6 US gallons.`,
      productType: "bag",
      price: 25,
      image: [
        "/assets/mockups/donuts-tote-1.png",
        "/assets/mockups/donuts-tote-2.png"
      ],
      link: "totes/donuts-tote-bag",
      isFeatured: false
    },
    {
      name: "pizza fanny pack",
      description: `This fanny pack is a must-have for pizza lovers on the go. With a fun and appetizing print of delicious pizza slices all over it, it's a stylish and functional accessory for carrying your essentials.
        
The adjustable waist strap ensures a comfortable and secure fit, while the multiple compartments provide ample space for your phone, wallet, keys, and more. Perfect for travel, concerts, or any hands-free activity where you want to keep your valuables close and your love for pizza on display.`,
      productType: "bag",
      price: 30,
      image: "/assets/mockups/pizza-fanny-pack-feature.png",
      link: "fanny-packs/pizza-fanny-pack-bag",
      isFeatured: true,
      featuredBackground: "/assets/vectors/pizza.svg"
    },

    {
      name: "breakfast leggings",
      description: `Our delicious leggings are a fun and playful way to show off your love for breakfast! Featuring a unique and quirky design of delicious breakfast foods printed all over them, these leggings are perfect for anyone who wants to add a touch of whimsy to their wardrobe. 
      
      Made from soft and stretchy materials, they're also comfortable and stylish for any occasion!`,
      productType: "leggings",
      price: 37,
      image: [
        "/assets/mockups/breakfast-leggings.jpg",
        "/assets/mockups/breakfast-leggings-2.jpg"
      ],
      link: "leggings/breakfast-leggings",
      isFeatured: false
    },
    {
      name: "broccoli tumbler",
      description: `The broccoli tumbler is a fun and playful way to show off your love for healthy eating. Featuring a unique and quirky design of broccoli printed all over it, this cup is perfect for carrying your favorite hot or cold beverage on the go. Made from high-quality materials, it's also durable and easy to clean. 
        
Whether you're sipping on green tea or a refreshing smoothie, our broccoli tumbler is sure to add a touch of fun and whimsy to your daily routine.`,
      productType: "tumbler",
      price: 25,
      image: [
        "/assets/mockups/broccoli-tumbler-1.png",
        "/assets/mockups/broccoli-tumbler-2.png"
      ],
      link: "tumblers/broccoli-tumbler",
      isFeatured: false
    },

    {
      name: "donuts crop tee",
      description: `This crop top t-shirt is a sweet and sassy addition to any wardrobe. With a fun and playful design of delicious donuts printed all over it, this shirt is perfect for donut lovers who want to show off their playful side. Made from soft and breathable materials, it's also comfortable and stylish for any occasion. 
        
Whether you're hitting the gym or hanging out with friends, this crop top is sure to turn heads and make everyone crave a sweet treat.`,
      productType: "crop-tee",
      price: 30,
      image: "/assets/mockups/donuts-crop-tee-feature.png",
      link: "crop-tees/donuts-crop-tee",
      isFeatured: true,
      featuredBackground: "/assets/vectors/donuts.svg"
    },
    {
      name: "broccoli sweatshirt",
      productType: "sweatshirt",
      description: `This sweatshirt is a fun and unique way to showcase your love for healthy eating. With a playful and quirky design of broccoli printed all over it, this sweatshirt is perfect for those who want to add a touch of humor to their wardrobe. Made from soft and cozy materials, it's also perfect for lounging around the house or running errands on a chilly day. 
      
Whether you're a lifelong veggie lover or just looking for a fun and comfortable sweatshirt, this broccoli-printed sweatshirt is sure to satisfy.`,
      price: 47,
      image: [
        "/assets/mockups/broccoli-sweatshirt.png",
        "/assets/mockups/broccoli-sweatshirt-2.png"
      ],
      link: "aop-sweatshirts/broccoli-aop-sweatshirt",
      isFeatured: false
    },
    {
      name: "french fries sports bra",
      productType: "sports-bra",
      description: `The french fries sports bra is a fun and playful way to show off your love for fries. With a unique and quirky design of delicious fries printed all over it, this sports bra is perfect for anyone who wants to add a touch of whimsy to their workout wardrobe. 
      
      Made from soft and stretchy materials, it's also comfortable and supportive for any activity.`,
      price: 32,
      image: [
        "/assets/mockups/fries-sports-bra.jpg",
        "/assets/mockups/fries-sports-bra-2.jpg"
      ],
      link: "sports-bras/french-fries-sports-bra",
      isFeatured: false
    }
  ]
} as StoreConfig
