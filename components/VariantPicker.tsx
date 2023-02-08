const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null

  return (
    <select
      {...props}
      className={`appearance-none w-full max-w-[13rem] md:max-w-none relative mb-0 sm:mb-0 flex-grow pl-3 py-2 bg-white border-4 border-black shadow-sm text-black text-sm lowercase focus:outline-none focus:text-black ${
        props.className || ""
      }`}
    >
      {variants.map(({ external_id, name }) => (
        <option className="lowercase" key={external_id} value={external_id}>
          {name}
        </option>
      ))}
    </select>
  )
}

export default VariantPicker
