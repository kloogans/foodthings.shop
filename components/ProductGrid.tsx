import { useRouter } from "next/router"
import { useState } from "react"
import { storeConfig } from "../config/storeConfig"
import dynamic from "next/dynamic"

const Product = dynamic(() => import("./Product"), { ssr: false })
const FeaturedCategories = dynamic(() => import("./FeaturedCategories"), {
  ssr: false
})

const ProductGrid = ({ products }) => {
  const [showFeaturedCategories, setShowFeaturedCategories] = useState(true)
  const router = useRouter()
  const isHome = router.pathname === "/"
  if (!products || products.length === 0) return null

  return (
    <div className="flex flex-col items-center justify-start">
      <div
        className={`w-full mb-4 ${
          showFeaturedCategories && isHome ? "" : "hidden"
        }`}
      >
        {isHome && (
          <FeaturedCategories
            products={storeConfig.featuredProductData}
            setShowFeaturedProducts={setShowFeaturedCategories}
          />
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full pb-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
