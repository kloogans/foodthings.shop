import dynamic from "next/dynamic"
const PrimaryLink = dynamic(() => import("../components/PrimaryLink"), {
  ssr: false
})

const NotFoundPage = () => {
  const face = `:(`

  return (
    <div className="flex flex-col items-center justify-center relative p-0 md:p-4 z-10 bg-white shadow-md border-8 border-black md:min-h-[40rem]">
      <h1
        className={`text-5xl text-black slab mb-2 leading-none flex flex-col justify-center items-center`}
      >
        fuck {face}
      </h1>
      <h2 className="text-black text-lg font-bold leading-none mb-4">
        couldn&apos;t find that page
      </h2>
      <PrimaryLink display href="/" text="go home" className="max-w-sm" />
    </div>
  )
}

export default NotFoundPage
