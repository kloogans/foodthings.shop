import dynamic from "next/dynamic"
import { useState } from "react"
import { GetServerSideProps } from "next"
import { printful } from "lib/printful-client"
import { formatVariantName } from "lib/format-variant-name"
import { PrintfulProductFull } from "types"
import Image from "next/image"
import { useProduct } from "hooks/useProduct"
import { getProductType } from "lib/getProductType"
import { getProductDescription } from "lib/getProductDescription"
import { ProductPageLayout } from "components/ProductPageLayout"
import BreadCrumbs from "components/BreadCrumbs"
import { storeConfig } from "config/storeConfig"
const VariantPicker = dynamic(() => import("../../components/VariantPicker"))

const SkeletonLoader = dynamic(() => import("../../components/SkeletonLoader"))

type ProductPageProps = {
  product: PrintfulProductFull
}

const ProductPagePage: React.FC<ProductPageProps> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const {
    activeVariantExternalId,
    setActiveVariantExternalId,
    activeVariant,
    activeVariantFile,
    formattedPrice,
    selectedImage,
    setSelectedImage,
    images
  } = useProduct(product)

  const hasMultipleImages = images.length > 1
  let description = getProductDescription(product.name)
  const productType = getProductType(product.name)
  // @ts-ignore
  const isSquare = productType !== "sticker" && productType !== "mug"

  const { featuredProducts } = storeConfig

  const featuredProduct = featuredProducts.find((featuredProduct) => {
    // remove the word "aop" from the name
    const formattedProductName = product.name.replace("aop ", "")
    return featuredProduct.name === formattedProductName
  })

  const featuredProductExists = featuredProduct != null

  if (featuredProductExists) description = featuredProduct.description

  return (
    <ProductPageLayout
      noProducts={!product}
      seoImage={product.thumbnail_url}
      seoDescription={description}
      isFeatured={featuredProductExists}
    >
      <div className="text-center relative mb-10">
        {/* <div className="absolute top-0 hidden md:block left-0 bg-black shadow-md w-full h-full -translate-x-[1rem] transition translate-y-[1rem] z-0" /> */}
        <div className="flex flex-col items-center justify-center relative p-0 md:p-4 z-10 bg-white shadow-md border-8 border-black">
          <BreadCrumbs className="mb-1 self-start" />
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center w-full">
            {/* <div
              className={`w-full flex flex-col md:flex-row ${
                hasMultipleImages ? "justify-between" : "justify-center"
              } items-center mb-4`}
            > */}
            {/* <button
                className={`${
                  hasMultipleImages ? "hidden md:block" : "hidden"
                } fill-black hover:scale-[1.05] transition  ${
                  selectedImage === images[0] ? "opacity-0" : "opacity-100"
                }`}
                onClick={() => setSelectedImage(images[0])}
              >
                <svg
                  className="w-6 h-6 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}

            {/* <button
                className={`${
                  hasMultipleImages ? "hidden md:block" : "hidden"
                } fill-black hover:scale-[1.05] transition ${
                  selectedImage === images[1] ? "opacity-0" : "opacity-100"
                }`}
                onClick={() => setSelectedImage(images[1])}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}

            {/* <div className="flex items-center justify-center md:hidden pt-2">
                <button
                  className={`${
                    hasMultipleImages ? "" : "hidden"
                  } fill-white hover:scale-[1.05] transition md:hidden p-2 bg-black ${
                    selectedImage === images[0]
                      ? "opacity-0 hidden"
                      : "opacity-100 block"
                  }`}
                  onClick={() => setSelectedImage(images[0])}
                >
                  <svg
                    className="w-6 h-6 rotate-180"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  className={`${
                    hasMultipleImages ? "" : "hidden"
                  } fill-white hover:scale-[1.05] transition md:hidden p-2 bg-black ${
                    selectedImage === images[1]
                      ? "opacity-0 hidden"
                      : "opacity-100 block"
                  }`}
                  onClick={() => setSelectedImage(images[1])}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div> */}
            {/* </div> */}

            <div className={`flex items-center justify-center`}>
              <div className="h-[20rem] w-[20rem] md:w-[45rem] md:h-[45rem] relative flex flex-col items-center justify-center">
                <div className="w-full h-full grid place-items-center relative">
                  <SkeletonLoader show={!imageLoaded} type={productType} />
                  <Image
                    src={selectedImage || ""}
                    onLoadStart={() => setImageLoaded(false)}
                    onLoadingComplete={() => setImageLoaded(true)}
                    alt={product.name}
                    fill
                  />
                </div>

                {hasMultipleImages && (
                  <div className="w-full flex items-center justify-center gap-1 mt-2">
                    {images.map((image, index) => (
                      <button
                        key={image}
                        className={`w-20 h-20 border-2 ${
                          selectedImage === image
                            ? "border-secondary"
                            : "border-neutral-400"
                        } relative aspect-square`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image src={image || ""} alt={product.name} fill />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="px-4 w-full flex flex-col items-center justify-center">
              <h1 className="text-black slab text-4xl lg:text-6xl font-bold leading-none mb-2">
                {product.name}
              </h1>

              <h2 className="font-bold text-4xl lg:text-5xl text-secondary mb-2 slab">
                {formattedPrice}
              </h2>

              <div className="max-w-sm w-full mb-2">
                <VariantPicker
                  value={activeVariantExternalId}
                  onChange={({ target: { value } }) =>
                    setActiveVariantExternalId(value)
                  }
                  className="py-4 !text-lg"
                  variants={product.variants}
                  disabled={product.variants.length === 1}
                />
              </div>

              <p
                className={`text-black text-sm lg:text-lg mb-4 max-w-sm text-left lowercase whitespace-pre-wrap`}
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <button
                className="snipcart-add-item w-full max-w-sm transition flex-shrink-0 py-2 px-4 border-4 border-black shadow-sm text-md lg:text-lg font-bold bg-secondary text-white hover:bg-rose-700 focus:bg-rose-700 focus:outline-none mb-4"
                data-item-id={activeVariantExternalId}
                data-item-price={activeVariant.retail_price}
                data-item-url={`/api/products/${activeVariantExternalId}`}
                data-item-description={activeVariant.name}
                data-item-image={
                  activeVariantFile ? activeVariantFile.preview_url || "" : ""
                }
                data-item-name={product.name}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productName = context.params.productName as string
  const cleanedUpProductName = productName.split("-").join(" ")
  const encodedProductName = encodeURIComponent(cleanedUpProductName as string)

  try {
    const { result } = await printful.get(
      `sync/products?search=${encodedProductName}`
    )

    if (result.length < 1) {
      return {
        redirect: {
          permanent: false,
          destination: `/404`
        }
      }
    }

    const matchingProduct = result.find(
      ({ name }) => name.split(" ").join("-") === productName
    )

    const matchedProductData = await printful.get(
      `sync/products/${matchingProduct.id}`
    )

    const product = {
      ...matchedProductData.result.sync_product,
      variants: matchedProductData.result.sync_variants.map(
        ({ name, ...variant }) => ({
          name: formatVariantName(name),
          ...variant
        })
      )
    }

    return {
      props: {
        product: product || {}
      }
    }
  } catch (e) {
    console.log(e.message)
    return {
      redirect: {
        permanent: false,
        destination: `/404`
      }
    }
  }
}

export default ProductPagePage
