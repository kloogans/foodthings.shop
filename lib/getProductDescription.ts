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
    return `Our tank top is a durable and high-quality option for a sunny day out or as a product for your online store. It is constructed with side seams for a comfortable and reliable wear.`

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
    return `Our 11oz ceramic mugs come with a colorful rim, handle, and igonside. All mugs are dishwasher-safe and microwave-safe`

  if (name.includes("tote bag"))
    return `Our tote is a sturdy and versatile bag with dual handles made of 100% natural cotton bull denim that can carry up to 44lbs of weight. The bag is made of 100% spun polyester fabric and it has a capacity of 2.6 US gal and its size is 15″ × 15″.`

  if (name.includes("fanny pack"))
    return `Our fanny pack is made of water-resistant polyester fabric. It features an inside pocket for valuables, adjustable straps, and is a favorite accessory among festival-goers, tourists, and fashion enthusiasts. 
    
It also has a top zipper with two sliders, a small inner pocket, and an inside label. The straps are 1.25 inches wide and have plastic strap regulators available in two sizes.`

  if (name.includes("apron"))
    return `Our apron is a functional and stylish kitchen accessory that can be a great addition to any outfit showcasing your inner foodie. 
    
Made of 100% organic cotton, it features adjustable straps and a large front pocket with two compartments.`

  if (name.includes("backpack")) {
    return `A Food Things medium size backpack has plenty of room with a big inner pocket, separate section for a 15'' laptop, front pocket, and a hidden pocket at the back for valuables. 
    
    The bag is made out of a water-resistant material, which means your belongings will stay crisp and dry no matter the weather!`
  }

  if (name.includes("drawstring bag"))
    return `Our drawstring bag is a great way to showcase your inner foodie with its comfortable and relaxed fit, ideal for sunny days or as an extra layer. Its 100% spun polyester fabric is soft and lightweight, with twin cotton handles.`

  if (name.includes("laptop case"))
    return `Our laptop case is a durable and high-quality option for showcasing your inner foodie. To prevent any scratches, it contains a padded zipper binding and its interior is lined with faux fur.`

  if (name.includes("headband"))
    return `Rising and falling in popularity since the 1920s, the headband has evolved into a full-on fashion statement and is once again back in style, and we've put food on them. 
    
    With its 82% polyester, 18% spandex fabric composition, it's a comfortable and durable choice for workouts, or just hanging out and looking cool and cultured in front of other people.`

  if (name.includes("crop tee") || name.includes("sleeveless crop"))
    return `Our crop top is a comfortable and versatile option suitable for anyone, with a soft and stretchy feel. With its 82% polyester and 18% spandex fabric composition, it's a comfortable and durable choice to wear out.`
}
