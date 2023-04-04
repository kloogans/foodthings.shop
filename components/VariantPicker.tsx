const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null

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

  console.log(filteredVariants)

  return (
    <div>
      <select
        {...props}
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
      {/* <div className="grid grid-cols-3 place-items-center w-full">
        {filteredVariants.map((variant) => {
          const { name, files } = variant
          return (
            <div key={name} className="w-full">
              <img
                src={files[1].thumbnail_url}
                alt={name}
                className="w-20 h-20 mx-auto"
              />
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default VariantPicker
