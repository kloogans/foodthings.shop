import { useRouter } from "next/router"
import React, { useState } from "react"
import BreadCrumbs from "components/BreadCrumbs"
import { Icon } from "components/Icon"
import { ProductPageLayout } from "components/ProductPageLayout"

const fetchOrderById = async (orderId: string) => {
  try {
    const order = await fetch(`/api/orders/${orderId}`)
    return order
  } catch (error) {
    return null
  }
}

const OrderPage = () => {
  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const router = useRouter()

  const handleOrderLookup = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const order = await fetchOrderById(orderId.toUpperCase())
    if (!order) {
      setNotFound(true)
      setLoading(false)
      setTimeout(() => {
        setNotFound(false)
      }, 3000)
      return
    }
    router.push(`/track-order/${orderId}`)
    setLoading(false)
    return
  }

  return (
    <ProductPageLayout noProducts={false} isFeatured={false}>
      <div className="text-center relative mb-10">
        <div className="flex flex-col items-center justify-start relative p-0 md:p-4 z-10 bg-white shadow-md border-8 border-black md:min-h-[40rem]">
          <BreadCrumbs className="mb-1 self-start" />
          <div
            className={`w-full flex flex-col justify-center items-center mb-4 flex-auto px-2 pt-4 md:pt-0`}
          >
            <Icon url="/assets/track.svg" className="w-24 h-24 bg-black" />
            <h1 className="text-3xl md:text-5xl text-black text-center leading-none mb-1 slab">
              <strong>track</strong> your order
            </h1>
            <h2 className="text-md max-w-md text-black text-left mb-4 leading-[1.1rem]">
              want to know the whereabouts of your order? we&apos;ll need your{" "}
              <strong>order id</strong>, which can be found in the email you
              received when you placed your order.
            </h2>
            <form
              onSubmit={handleOrderLookup}
              className="flex flex-col items-center justify-center w-full max-w-md"
            >
              <input
                name="orderId"
                type="text"
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full p-4 text-xl text-zinc-700 placeholder:text-zinc-400 mb-2 border-4 border-black shadow-md outline-secondary"
                placeholder="FUCK1234"
              />
              <button
                type="submit"
                disabled={orderId.length < 1 || loading}
                className="shadow-md w-full p-4 bg text-lg text-white bg-secondary hover:bg-rose-700 transition ease-in-out duration-200 border-4 disabled:opacity-60 border-black"
              >
                {loading ? "loading..." : "track order"}
              </button>
            </form>
            {notFound && (
              <p className="text-red-500 text-lg mt-4">order not found</p>
            )}
          </div>
        </div>
      </div>
    </ProductPageLayout>
  )
}

export default OrderPage
