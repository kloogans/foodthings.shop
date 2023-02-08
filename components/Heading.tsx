import { useRouter } from "next/router"
import React from "react"
import { ACCEPTED_PATHS } from "../lib/acceptedPaths"

const Heading: React.FC<{ overloaded?: boolean }> = ({ overloaded }) => {
  const router = useRouter()
  const { pathname } = router
  const path = pathname.split("/")[1]
  const is404 = path === "404"
  if (!ACCEPTED_PATHS.includes(path)) return null
  return (
    <div className="text-center py-2">
      <h1
        className={`text-black text-3xl font-bold slab mb-2 ${
          pathname === "/" || is404 ? "hidden" : ""
        }`}
      >
        {overloaded ? "we're slammed!" : path}
      </h1>

      {is404 && (
        <h1
          className={`text-black text-3xl font-bold slab mb-2 ${
            pathname === "/" ? "hidden" : ""
          }`}
        >
          couldn&apos;t find that page
        </h1>
      )}

      <h2
        className={`inline text-black text-md lg:lg max-w-lg mx-auto text-center ${
          overloaded ? "" : "hidden"
        }`}
      >
        looks like our servers are at capacity. try again in 30 seconds!
      </h2>
    </div>
  )
}

export default Heading
