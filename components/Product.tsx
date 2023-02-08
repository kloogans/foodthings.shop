import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { getProductType } from "../lib/getProductType";

const SkeletonLoader = dynamic(() => import("./SkeletonLoader"));
const PrimaryLink = dynamic(() => import("./PrimaryLink"));

const getProductBasePrice = (name: string) => {
  const productType = getProductType(name);

  if (
    name === "crippling depression hoodie" ||
    name === "crippling anxiety hoodie"
  ) {
    return 55;
  }

  switch (productType) {
    case "sticker sheet":
      return 8;
    case "sticker":
      return 5;
    case "tee":
      return 20;
    case "aop tee":
      return 35;
    case "crop tee":
      return 28;
    case "aop crop tee":
      return 35;
    case "tank":
      return 20;
    case "aop tank":
      return 32;
    case "hoodie":
      return 35;
    case "aop hoodie":
      return 55;
    case "sweatshirt":
      return 35;
    case "aop sweatshirt":
      return 50;
    case "mug":
      return 20;
    case "iphone case":
      return 20;
    case "samsung case":
      return 20;
    default:
      return 20;
  }
};

const Product = (product) => {
  const { name, is_ignored } = product;
  const [imageLoaded, setImageLoaded] = useState(false);

  if (is_ignored) return null;

  const productType = getProductType(name);

  let productCategory: string;
  productType !== "leggings"
    ? (productCategory = productType + "s")
    : (productCategory = productType);

  const productBasePrice = getProductBasePrice(name);

  const imageSize = "w-[260px] h-[260px] xl:w-[300px] xl:h-[300px]";

  return (
    <article className="flex flex-col relative group md:hover:scale-[1.014] md:focus:scale-[1.014] md:active:scale-100 transition !cursor-pointer">
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
  );
};

export default Product;
