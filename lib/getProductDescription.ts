export const getProductDescription = (name: string) => {
  if (name.includes("tee") && name.includes("aop"))
    return `Achieve your inner foodie aspirations with this high-quality All-Over Print Crew Neck T-Shirt, featuring a comfortable and fade-resistant polyester and elastane fabric blend. 
    
Our all-over print tees are made with a premium knit mid-weight jersey and four-way stretch fabric that allows for flexibility and shape retention. The regular fit design is available in a variety of fabric compositions and weights, with a weight variation of up to 5%.`

  if (name.includes("tee"))
    return `Our unisex staple t-shirt is a comfortable and versatile option suitable for anyone, with a soft and stretchy feel. 

Our shirts are available in a range of colors and materials, with solid colors made from 100% Airlume combed and ring-spun cotton. Food Things tees are pre-shrunk and feature tear-away labeling and shoulder-to-shoulder taping, making it a durable and reliable choice.`

  if (name.includes("tank") && name.includes("aop"))
    return `Our premium quality all-over print tank top is a great way to showcase your inner foodie with its comfortable and relaxed fit, ideal for sunny days or as an extra layer. 
  
Made with a high-quality polyester and elastane blend with four-way stretch capabilities that allow for flexibility and shape retention.`

  if (name.includes("tank"))
    return `Our Tank Tops are made from a comfortable 95% polyester and 5% elastane blend. Featuring four-way stretch material that recovers on the cross and lengthwise grains, it's perfect for a sunny day out or as an extra layer on colder days.  
  `

  if (name.includes("hoodie") && name.includes("aop"))
    return `Our all-over print unisex hoodie is a relaxed fit and made with a unique blend of polyester, cotton, and elastane for a soft and comfortable feel. 
    
The hoodie features a double-lined hood with designs on both sides and white or black drawstrings. With a nice brushed fleece fabric inside, this hoodie is a wardrobe favorite. `

  if (name.includes("hoodie"))
    return `Our unisex hoodie is a soft and comfortable option with a front pouch pocket, matching flat drawstrings, and a tear-away tag. 
    
Made with a 100% cotton face, the hoodie is a great way to showcase your love for food with style. The hoodie features a 3-panel hood, a self-fabric patch on the back. Our hoodies are a durable and reliable choice!`

  if (name.includes("sweatshirt") && name.includes("aop"))
    return `Our all-over print unisex sweatshirt features a soft and durable fabric that includes brushed fleece on the inside. 
    
With a 70% polyester, 27% cotton, and 3% elastane blend, it offers a soft comfortable cotton-feel fabric face.`

  if (name.includes("sweatshirt"))
    return `Our unisex premium sweatshirt features a classic crew neck, a flattering unisex fit, and a soft 100% cotton exterior. 
    
The sweatshirt has tightly knit 3-end fleece, double-needle stitched rib collar, cuffs, and hem, and a tear-away label.`

  if (name.includes("mug"))
    return `Our 11oz ceramic mugs come with a colorful rim, handle, and igonside. 
    
All mugs are dishwasher-safe and microwave-safe`

  if (name.includes("tote bag"))
    return `Our tote is a sturdy and versatile bag with dual handles made of 100% natural cotton bull denim that can carry up to 44lbs of weight. 
    
The bag is made of 100% spun polyester fabric and it has a capacity of 2.6 US gal and its size is 15″ × 15″.`

  if (name.includes("fanny pack"))
    return `Our fanny pack is made of water-resistant polyester fabric. It features an inside pocket for valuables, adjustable straps, and is a favorite accessory among festival-goers, tourists, and fashion enthusiasts. 
    
It also has a top zipper with two sliders, a small inner pocket, and an inside label. The straps are 1.25 inches wide and have plastic strap regulators available in two sizes.`

  if (name.includes("apron"))
    return `Upgrade your kitchen attire with our amazing aprons! Not only are they functional and stylish, but they're the perfect addition to any outfit for showcasing your inner foodie. 
    
Made from 100% organic cotton, our aprons feature adjustable straps for a comfortable fit and a large front pocket with two compartments for keeping your utensils close at hand. 

Whether you're a seasoned chef or a novice in the kitchen, our aprons are a must-have for any food lover.`

  if (name.includes("backpack")) {
    return `A Food Things medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. 
    
The bag is made out of a water-resistant material, which means your belongings will stay crisp and dry no matter the weather!`
  }

  if (name.includes("drawstring bag"))
    return `Our drawstring bag is a great way to showcase your inner foodie with its comfortable and relaxed fit, ideal for sunny days or as an extra layer. 
    
Its 100% spun polyester fabric is soft and lightweight, with twin cotton handles.`

  if (name.includes("laptop case"))
    return `Our laptop case is a durable and high-quality option for showcasing your inner foodie. To prevent any scratches, it contains a padded zipper binding and its interior is lined with faux fur.`

  if (name.includes("headband"))
    return `Rising and falling in popularity since the 1920s, the headband has evolved into a full-on fashion statement and is once again back in style, and we've put food on them. 
    
With its 82% polyester, 18% spandex fabric composition, it's a comfortable and durable choice for workouts, or just hanging out and looking cool and cultured in front of other people.`

  if (name.includes("crop tee") || name.includes("sleeveless crop"))
    return `Our crop top is a comfortable and versatile option suitable for anyone, with a soft and stretchy feel. With its 82% polyester and 18% spandex fabric composition, it's a comfortable and durable choice to wear out.`

  if (name.includes("gym bag"))
    return `Upgrade your workout gear with our All-Over Print Gym Bag! Made from 100% polyester, it's sturdy, water-resistant, and features a sturdy fabric with fusible backing to add firmness. 
    
With a side pocket and a discreet inside pocket, as well as T-piping for stability and dual padded handles, this gym bag is sure to be a fan favorite among fitness enthusiasts and foodies alike.`

  if (name.includes("tumbler")) {
    return `Introducing our must-have tumblers for foodies! Keep your favorite drinks hot or cold in style with our high-grade Stainless Steel Tumblers, available in a variety of food-themed designs. Each 20 oz (600 ml) tumbler features a matte finish and comes with a plastic lid and metal straw, making it perfect for on-the-go or at home. 
    
Plus, the protective varnish layer ensures your custom food-themed design won't peel or fade. Satisfy your hunger for style and function with our food-themed tumblers today!`
  }

  if (name.includes("scrunchie")) {
    return `Elevate your hairstyle and stay on-trend with our foodie scrunchies! Made with sustainability in mind, our scrunchies are crafted from leftover materials from the manufacturing of our other products, reducing environmental impact. 
    
Featuring a smooth and stretchy fabric outside and elastic inside, as well as breathable and fast-drying material, our scrunchies are perfect for all-day wear.`
  }

  if (name.includes("bandana")) {
    return `Bring a stylish touch to your look with our foodie bandanas! 
    
Made from lightweight and breathable microfiber polyester, our bandanas can be worn as a headband, armband, necktie, bag accessory, or even a scarf for your beloved furry friend.
    
With double-folded edges and a detailed single-sided print, our bandanas are sturdy and durable for long-lasting wear.`
  }
  if (name.includes("sticker")) {
    return `Decorate your belongings with our food-themed kiss-cut stickers! Made from high opacity film that's impossible to see through, our stickers are durable vinyl and perfect for indoor use. 
  
With a thickness of 95µ and fast, easy bubble-free application, our stickers are perfect for adding a touch of foodie flair to laptops, water bottles, notebooks, and more. `
  }
}
