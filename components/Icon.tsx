interface IconProps {
  className?: string
  url: string
  animated?: boolean
}

export const Icon: React.FC<IconProps> = ({ url, className, animated }) => {
  return (
    <>
      <span
        aria-label={url.replace(".svg", "")}
        role="img"
        className={`block icon-mask ${className || ""} ${
          animated ? "skeleton-background" : ""
        }`}
      />
      <style jsx>{`
        .icon-mask {
          mask: url(${url}) no-repeat center;
          mask-size: contain;
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  )
}
