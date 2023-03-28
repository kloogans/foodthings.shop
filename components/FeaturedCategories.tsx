import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { FeaturedProduct } from "types/featuredProduct"
const SkeletonLoader = dynamic(() => import("./SkeletonLoader"), {
  ssr: false
})

interface FeaturedCategoriesProps {
  products: FeaturedProduct[]
  setShowFeaturedProducts: (arg: boolean) => void
  show?: boolean
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  products,
  setShowFeaturedProducts,
  show = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = activeIndex === products.length - 1 ? 0 : activeIndex + 1
      setActiveIndex(newIndex)
    }, 5000)

    return () => clearTimeout(timer)
  })

  const { name, image, description, productType, buttonText } =
    products[activeIndex]

  return (
    <article
      className={`h-full flex flex-col relative group !cursor-pointer ${
        show ? "" : "hidden"
      }`}
    >
      {/* <div className="absolute hidden md:block top-0 left-0 bg-black w-full h-full shadow-md -translate-x-[1rem] transition translate-y-[1rem] z-0 md:group-hover:-translate-x-0 md:group-hover:-translate-y-0 md:group-focus:-translate-x-0 md:group-focus:-translate-y-0" /> */}
      <div className="h-full z-10 bg-white border-8 border-black shadow-md">
        <button
          aria-label="Close"
          className="appearance-none absolute top-0 right-0 mt-3 mr-3 text-gray-500 focus:text-gray-600 hover:text-secondary transition focus:outline-none"
          onClick={() => setShowFeaturedProducts(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <Link href={`/${name.split(" ").join("-")}`} passHref>
            <div className="flex items-center justify-center px-6">
              <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] relative grid place-items-center">
                <p
                  className={`text-black text-md ${
                    imageLoaded ? "hidden" : ""
                  }`}
                >
                  <SkeletonLoader type={productType} />
                </p>
                <Image
                  src={image}
                  fill
                  alt={`${name}`}
                  title={`${name}`}
                  onLoad={() => setImageLoaded(false)}
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </Link>
          <div className="flex flex-col justify-end items-center px-6 w-full md:max-w-sm pt-4 bg-black">
            <p className="leading-none text-3xl sm:text-4xl lg:text-5xl font-bold text-white slab mb-3 md:mb-0">
              {name}
            </p>
            <p className="text-white mb-2 text-center hidden md:block">
              {description}
            </p>
            <Link
              href={`/${name.split(" ").join("-")}`}
              className="mb-3 block w-full text-center py-3 px-4 border-4 border-black bg-secondary hover:bg-rose-600 focus:bg-rose-600 transition text-lg font-bold text-white"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedCategories
