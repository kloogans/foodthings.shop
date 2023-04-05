import Image from "next/image"
import { useState } from "react"

const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null

  // const [activeVariant, setActiveVariant] = useState({
  //   name: "",
  //   size: "",
  //   externalId: ""
  // })

  const selectProps = { ...props }

  delete selectProps.activeVariant
  delete selectProps.changeVariant

  const filteredVariants = []

  variants.map((variant) => {
    const variantName = variant.name.split("/")[0].trim()

    if (filteredVariants.some((variant) => variant.name === variantName)) return

    filteredVariants.push({
      name: variantName,
      external_id: variant.external_id,
      files: variant.files
    })

    return null
  })

  return (
    <div>
      <select
        {...selectProps}
        className={`appearance-none w-full max-w-[13rem] md:max-w-none relative mb-0 sm:mb-0 flex-grow pl-3 py-2 bg-white border-4 border-black shadow-sm text-black text-sm lowercase focus:outline-none focus:text-black ${
          props.className || ""
        }`}
      >
        {variants.map((variant) => {
          const { external_id, name } = variant
          return (
            <option className="lowercase" key={external_id} value={external_id}>
              {name}
            </option>
          )
        })}
      </select>
      <div
        className={`grid grid-cols-3 gap-2 place-items-center w-full  mt-4 child:p-2`}
      >
        {filteredVariants.map((variant) => {
          const { name, files, external_id } = variant
          const isActiveVariant = props.activeVariant === name
          return (
            <div
              role="button"
              onClick={() => props.changeVariant(external_id)}
              key={name}
              className={`w-full relative group border-4 cursor-pointer ${
                isActiveVariant ? "border-secondary" : "border-black"
              }`}
            >
              <div
                className={`z-10 absolute top-0 left-0 bg-black text-white grid place-items-center w-full h-full ${
                  isActiveVariant
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }  transition duration-200 ease-in-out`}
              >
                <p className="lowercase text-xs md:text-sm font-bold">{name}</p>
              </div>
              <div className="w-full h-full">
                <div className="relative w-20 h-20 mx-auto">
                  <Image src={files[1].preview_url} alt={name} fill />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VariantPicker
