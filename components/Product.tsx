import { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { getProductType } from "../lib/getProductType"

const SkeletonLoader = dynamic(() => import("./SkeletonLoader"))
const PrimaryLink = dynamic(() => import("./PrimaryLink"))

const BASE_PRICES = {
  "sticker sheet": 8,
  sticker: 5,
  tee: 24,
  "aop tee": 35,
  "crop tee": 28,
  "aop crop tee": 35,
  tank: 20,
  "aop tank": 32,
  hoodie: 35,
  "aop hoodie": 55,
  sweatshirt: 35,
  "aop sweatshirt": 50,
  mug: 20,
  "iphone case": 20,
  "samsung case": 20,
  apron: 33,
  headband: 17,
  backpack: 50,
  drawstring: 25,
  tote: 30,
  "fanny pack": 35,
  "laptop case": 30,
  "crop sleeveless tee": 28,
  tumbler: "28"
}

const getProductBasePrice = (name: string) => {
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

const Product = (product) => {
  const { name, is_ignored } = product
  const [imageLoaded, setImageLoaded] = useState(false)

  if (is_ignored) return null

  const productType = getProductType(name)

  let productCategory: string
  productType !== "leggings"
    ? (productCategory = productType + "s")
    : (productCategory = productType)

  const productBasePrice = getProductBasePrice(name)

  const imageSize = "w-[260px] h-[260px] xl:w-[300px] xl:h-[300px]"

  return (
    <article className="flex flex-col relative group !cursor-pointer">
      {/* <div className="absolute hidden md:block top-0 left-0 bg-black w-full h-full shadow-md -translate-x-[1rem] transition translate-y-[1rem] z-0 md:group-hover:-translate-x-0 md:group-hover:-translate-y-0 md:group-focus:-translate-x-0 md:group-focus:-translate-y-0" /> */}
      <div className="z-10 bg-white border-8 border-black shadow-md">
        <Link
          href={`/${productCategory.split(" ").join("-")}/${product.name
            .split(" ")
            .join("-")}`}
          passHref
        >
          <div className="flex items-center justify-center flex-1 w-full p-6 pb-0 overflow-hidden">
            <div
              className={`${imageSize} relative grid place-items-center overflow-hidden`}
            >
              <p
                className={`text-black text-md ${imageLoaded ? "hidden" : ""}`}
              >
                <SkeletonLoader type={productType} />
              </p>
              <Image
                src={product.thumbnail_url}
                fill
                alt={`${name}`}
                title={`${name}`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </Link>
        <p className="mb-1 text-lg font-bold text-black w-full text-center">
          {name}
        </p>
        <p className="mb-1 text-3xl slab font-bold text-black w-full text-center">
          ${productBasePrice}
        </p>
        <div className=" p-3 flex flex-col items-center">
          <PrimaryLink
            href={`/${productCategory.split(" ").join("-")}/${product.name
              .split(" ")
              .join("-")}`}
          />
        </div>
      </div>
    </article>
  )
}

export default Product
