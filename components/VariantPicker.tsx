const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null

  const selectProps = { ...props }

  delete selectProps.activeVariant
  delete selectProps.changeVariant

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
    </div>
  )
}

export default VariantPicker
