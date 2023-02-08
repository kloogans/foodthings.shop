import { useEffect, useState } from "react"

export const useProduct = (product) => {
  const { variants, id } = product

  const [activeVariantExternalId, setActiveVariantExternalId] = useState(
    variants[0].external_id
  )

  const [activeVariant, setActiveVariant] = useState(() => {
    return variants.find((v) => v.external_id === activeVariantExternalId)
  })

  const [activeVariantFile, setActiveVariantFile] = useState(() => {
    return activeVariant.files.find(({ type }) => type === "preview")
  })

  const [images, setImages] = useState(() => {
    const variant = activeVariant.files.find(({ type }) => type === "preview")
    return [variant.preview_url]
  })

  const previewFilePath = `/assets/product-design-previews/${product.name
    .split(" ")
    .join("-")}.jpg`

  const previewImageExists = async () => {
    return await fetch(previewFilePath).then((res) => res.ok)
  }

  const initImages = async () => {
    const exists = await previewImageExists()
    if (exists) {
      setImages([...images, previewFilePath])
    }
  }

  useEffect(() => {
    initImages()
  }, [])

  const [selectedImage, setSelectedImage] = useState(images[0])

  useEffect(() => {
    const newVariant = variants.find(
      (v) => v.external_id === activeVariantExternalId
    )

    const newVariantFile = newVariant.files.find(
      ({ type }) => type === "preview"
    )

    const newImages = [...images]
    newImages[0] = newVariantFile.preview_url
    setActiveVariant(newVariant)
    setActiveVariantFile(newVariantFile)
    setImages(newImages)
    setSelectedImage(newImages[0])
  }, [activeVariantExternalId])

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: activeVariant.currency
  }).format(activeVariant.retail_price)

  return {
    activeVariantExternalId,
    setActiveVariantExternalId,
    activeVariant,
    activeVariantFile,
    formattedPrice,
    selectedImage,
    setSelectedImage,
    images,
    setImages
  }
}
