import { Icon } from "./Icon"

const SkeletonLoader = ({ type }) => {
  return (
    <Icon
      url={`/assets/skeleton-icons/${type.split(" ").join("-")}.svg`}
      className="w-28 h-28"
      animated
    />
  )
}

export default SkeletonLoader
