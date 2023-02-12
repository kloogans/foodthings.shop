import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { GetServerSideProps } from "next"
import { printful } from "lib/printful-client"
import { ProductPageLayout } from "components/ProductPageLayout"
import { ProductPageProps } from "types/productPages"
import { ACCEPTED_PATHS } from "lib/acceptedPaths"

const ProductGrid = dynamic(() => import("../../components/ProductGrid"))

const CategoryPage: React.FC<ProductPageProps> = ({ products }) => {
  const [currentProducts, setCurrentProducts] = useState([...products])

  useEffect(() => {
    setCurrentProducts(products)
  }, [products])

  return (
    <ProductPageLayout noProducts={products.length < 1} isCategoryPage>
      <ProductGrid products={currentProducts} />
      <div id="loadMore" />
    </ProductPageLayout>
  )
}

const accessories = ["sticker", "apron"]

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { category } = context.query

  if (!ACCEPTED_PATHS.includes(category as string)) {
    return {
      redirect: {
        permanent: false,
        destination: `/404`
      }
    }
  }

  category = encodeURI((category as string).split("-").join(" ")).slice(
    0,
    -1
  ) as string

  try {
    let { result } = await printful.get(
      `sync/products?limit=100&offset=0&search=${category}`
    )

    const shuffledResult = result.sort(() => Math.random() - 0.5)
    return {
      props: {
        products: shuffledResult
      }
    }
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: `/404`
      }
    }
  }
}

export default CategoryPage
