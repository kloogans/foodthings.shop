interface IconProps {
  className?: string
  url: string
  animated?: boolean
}

export const Icon: React.FC<IconProps> = ({ url, className, animated }) => {
  return (
    <span
      aria-label={url.replace(".svg", "")}
      role="img"
      className={`block icon-mask ${className || ""} ${
        animated ? "skeleton-background" : ""
      }`}
      style={{
        mask: `url(${url}) no-repeat center`,
        maskSize: "contain",
        animationFillMode: "forwards"
      }}
    />
  )
}
