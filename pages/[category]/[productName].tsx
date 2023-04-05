import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
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
import { useRouter } from "next/router"
import Link from "next/link"
import { getProductBasePrice } from "lib/getProductBasePrice"
const VariantPicker = dynamic(() => import("../../components/VariantPicker"))

const SkeletonLoader = dynamic(() => import("../../components/SkeletonLoader"))

const RelatedProducts = ({ products }: { products: PrintfulProductFull[] }) => {
  return (
    <div className="mt-10 bg-white border-8 border-black p-4 items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          const productType = getProductType(product.name)
          const { thumbnail_url, name } = product
          const price = getProductBasePrice(name)
          const link = product.name.split(" ").join("-").toLowerCase()

          return (
            <Link
              href={`/${productType}s/${link}`}
              key={product.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative w-48 h-48">
                <Image
                  key={thumbnail_url}
                  src={thumbnail_url}
                  fill
                  alt={product.name}
                />
              </div>
              <h3 className="text-lg leading-none mt-1">{name}</h3>
              <p className="text-xl mb-1">
                <strong>${price}</strong>
              </p>
              <button className="lowercase border-4 border-black bg-primary text-black px-4 py-2">
                View
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

type ProductPageProps = {
  product: PrintfulProductFull
  relatedProducts: PrintfulProductFull[]
}

const ProductPagePage: React.FC<ProductPageProps> = ({
  product,
  relatedProducts
}) => {
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

  const hasMockupImages =
    product.additional_images != null && product.additional_images.length > 0

  const hasMultipleImages = images.length > 1
  let description = getProductDescription(product.name)
  const productType = getProductType(product.name)
  // @ts-ignore
  const isSquare = productType !== "sticker" && productType !== "mug"

  const { featuredProducts } = storeConfig

  const featuredProduct = featuredProducts.find((featuredProduct) => {
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
        <div className="flex flex-col items-center justify-center relative p-0 md:p-4 z-10 bg-white shadow-md border-8 border-black">
          <BreadCrumbs className="mb-1 self-start" />
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center w-full">
            <div className={`flex items-center justify-center`}>
              <div className="h-[20rem] w-[20rem] md:w-[45rem] md:h-[45rem] relative flex flex-col items-center justify-center">
                <div className="w-full h-full grid place-items-center relative">
                  <SkeletonLoader show={!imageLoaded} type={productType} />
                  <Image
                    src={selectedImage || ""}
                    key={product.id}
                    onLoadStart={() => setImageLoaded(false)}
                    onLoadingComplete={() => setImageLoaded(true)}
                    alt={product.name}
                    fill
                  />
                </div>

                {/* {hasMockupImages && (
                  <div className="w-full flex items-center justify-center gap-1 mt-2">
                    {product.additional_images.map((image, index) => {
                      return (
                        <button
                          key={image}
                          className={`w-20 h-20 border-2 ${
                            selectedImage === image
                              ? "border-secondary"
                              : "border-neutral-400"
                          } relative aspect-square`}
                          onClick={() => setSelectedImage(image)}
                        >
                          <Image src={image} alt={product.name} fill />
                        </button>
                      )
                    })}
                  </div>
                )} */}
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
                  changeVariant={(externalId: string) =>
                    setActiveVariantExternalId(externalId)
                  }
                  className="py-4 !text-lg"
                  variants={product.variants}
                  disabled={product.variants.length === 1}
                  activeVariant={activeVariant.name.split(" / ")[0]}
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
      <RelatedProducts products={relatedProducts} />
    </ProductPageLayout>
  )
}

const getRelatedProducts = async (category: string) => {
  try {
    const { result } = await printful.get(
      `sync/products?search=${category
        .split("-")
        .join(" ")
        .slice(0, -1)}&limit=12`
    )
    const randomProducts = result.sort(() => Math.random() - 0.5).slice(0, 3)
    return randomProducts
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productName = context.params.productName as string
  const category = context.params.category as string
  const cleanedUpProductName = productName.split("-").join(" ")
  const encodedProductName = encodeURIComponent(cleanedUpProductName as string)

  try {
    // find product
    const { result } = await printful.get(
      `sync/products?search=${encodedProductName}`
    )

    const route = (context.resolvedUrl as string).split("/")[2]

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

    const mockupsUrls = [
      `${process.env.STORE_URL}/assets/mockups/${route}.png`,
      `${process.env.STORE_URL}/assets/mockups/${route}-2.png`
    ]
    const additionalImages = []
    const imageMockupsExist = async () => {
      const response = await fetch(mockupsUrls[0])
      return response.status === 200
    }

    if (await imageMockupsExist()) {
      product.additional_images = mockupsUrls
    }

    return {
      props: {
        product: product || {},
        relatedProducts: await getRelatedProducts(category)
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
