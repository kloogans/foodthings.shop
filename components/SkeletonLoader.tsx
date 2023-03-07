import { Icon } from "./Icon"

const SkeletonLoader = ({
  type,
  show = true
}: {
  type: string
  show?: boolean
}) => {
  if (!show) return null

  return (
    <Icon
      url={`/assets/skeleton-icons/${type.split(" ").join("-")}.svg`}
      className="w-28 h-28"
      animated
    />
  )
}

export default SkeletonLoader
