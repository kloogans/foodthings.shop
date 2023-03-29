import dynamic from "next/dynamic"
import { GetServerSideProps } from "next"
import { printful } from "lib/printful-client"
import { fetchMoreProducts } from "lib/fetchMoreProducts"
import { SEO } from "components/SEO"
import { ProductPageProps } from "types/productPages"
import { useEffect, useState } from "react"
import { ProductPageLayout } from "components/ProductPageLayout"
import { FeaturedProduct, storeConfig } from "config/storeConfig"
import Link from "next/link"
import SkeletonLoader from "components/SkeletonLoader"
import Image from "next/image"
import PrimaryLink from "components/PrimaryLink"
import FeaturedCategories from "components/FeaturedCategories"
const Heading = dynamic(() => import("../components/Heading"), { ssr: false })
const ProductGrid = dynamic(() => import("../components/ProductGrid"))

const { featuredProducts } = storeConfig

const FeaturedProduct = ({ product }: { product: FeaturedProduct }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const {
    name,
    image,
    link,
    description,
    price,
    productType,
    isFeatured,
    featuredBackground
  } = product

  return (
    <article
      className={`w-full flex flex-col relative group !cursor-pointer group ${
        isFeatured ? "col-span-2" : ""
      }`}
    >
      {/* <div className="absolute hidden md:block top-0 left-0 bg-black w-full h-full shadow-md -translate-x-[1rem] transition translate-y-[1rem] z-0 md:group-hover:-translate-x-0 md:group-hover:-translate-y-0 md:group-focus:-translate-x-0 md:group-focus:-translate-y-0" /> */}
      <div
        style={{
          background: isFeatured
            ? `url(${featuredBackground}) repeat center`
            : "white"
        }}
        className={`z-10 bg-white border-8 border-black bg-contain shadow-md grid place-items-center ${
          isFeatured ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <Link href={`/${link}`} passHref>
          <div
            className={`flex items-center justify-center flex-1 w-full p-6 ${
              isFeatured ? "py-0" : ""
            } overflow-hidden`}
          >
            <div
              className={`w-[350px] h-[350px] ${
                isFeatured
                  ? "lg:w-[500px] lg:h-[500px]"
                  : "lg:w-[500px] lg:h-[500px]"
              } ${
                isFeatured ? "" : "border-4 lg:border-8 border-black shadow-md"
              } relative grid place-items-center  overflow-hidden`}
            >
              <div
                className={`text-black text-md ${imageLoaded ? "hidden" : ""}`}
              >
                <SkeletonLoader type={productType} />
              </div>
              {isFeatured && (
                <Image
                  src={image as string}
                  fill
                  alt={`${name}`}
                  title={`${name}`}
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              )}

              {!isFeatured && (
                <>
                  <div className="h-full transition duration-200 ease-in-out absolute top-0 left-0 w-full opacity-100 group-hover:opacity-0">
                    <Image
                      src={image[0]}
                      fill
                      alt={`${name}`}
                      title={`${name}`}
                      onLoadingComplete={() => setImageLoaded(true)}
                    />
                  </div>

                  <div className="h-full transition duration-200 ease-in-out absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100">
                    <Image
                      src={image[1]}
                      fill
                      alt={`${name}`}
                      title={`${name}`}
                      // onLoadingComplete={() => setImageLoaded(true)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Link>
        <div
          className={`${
            isFeatured
              ? "bg-white p-4 w-full max-w-lg border-t-8 lg:border-8 border-black shadow-md"
              : "w-full"
          }`}
        >
          <p className="mb-1 text-xl font-bold text-black w-full text-center">
            {name}
          </p>

          <p className="mb-1 text-3xl lg:text-4xl slab font-bold text-black w-full text-center">
            ${price}
          </p>

          <p
            className={`mb-1 font-bold text-black w-full max-w-sm mx-auto text-left lowercase ${
              !isFeatured ? "hidden" : ""
            }`}
          >
            {description}
          </p>
          <div className=" py-3 flex flex-col items-center w-full max-w-sm mx-auto">
            <PrimaryLink href={`/${link}`} display />
          </div>
        </div>
      </div>
    </article>
  )
}

const IndexPage: React.FC<ProductPageProps> = ({ products }) => {
  const [offset, setOffset] = useState(0)
  const [currentProducts, setCurrentProducts] = useState([...products])
  const [showFeaturedCategories, setShowFeaturedCategories] = useState(true)

  const [allProductsAreShown, setAllProductsAreShown] = useState(false)

  useEffect(() => {
    const loadMoreElement = document.getElementById("loadMore")
    if (loadMoreElement && !allProductsAreShown) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !allProductsAreShown) {
          setOffset((prev) => prev + 21)
        }
      })
      observer.observe(loadMoreElement)

      return () => {
        if (loadMoreElement) {
          observer.unobserve(loadMoreElement)
        }
      }
    }
  }, [allProductsAreShown])

  const handleUpdateProducts = async () => {
    const { products } = await fetchMoreProducts(offset)
    if (products.length === 0) {
      setAllProductsAreShown(true)
      return
    }
    setCurrentProducts([...currentProducts, ...products])
  }

  const productListWithoutStickers = currentProducts.filter(
    (product) => !product.name.includes("sticker")
  )

  useEffect(() => {
    offset > 0 && handleUpdateProducts()
  }, [offset])

  return (
    <ProductPageLayout noProducts={products.length < 1}>
      <SEO />
      <Heading />
      {/* <ProductGrid
        products={currentProducts.filter(
          (product) => !product.name.includes("sticker")
        )}
      /> */}
      {/* <div id="loadMore" /> */}

      {/* <FeaturedCategories
        products={storeConfig.featuredCategories}
        setShowFeaturedProducts={setShowFeaturedCategories}
        show={showFeaturedCategories}
      /> */}

      <div className="w-full flex flex-col lg:grid lg:grid-cols-2 place-items-center gap-2 mt-2">
        {featuredProducts.map((product) => {
          return <FeaturedProduct key={product.name} product={product} />
        })}
      </div>
    </ProductPageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { result } = await printful.get("sync/products?limit=21")

    const shuffledProducts = result.sort(() => Math.random() - 0.5)

    return {
      props: {
        products: shuffledProducts
      }
    }
  } catch (e) {
    return {
      props: {
        products: []
      }
    }
  }
}

export default IndexPage
