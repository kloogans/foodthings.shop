import Link from "next/link"
import React from "react"

interface PrimaryLinkProps {
  href: string
  text?: string
  className?: string
  display?: boolean
  isExternal?: boolean
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  href,
  text = "view",
  className = "",
  display = false,
  isExternal = false
}) => {
  let classList = `block w-full text-center py-2 px-4 border-4 border-black hover:bg-secondary focus:bg-secondary hover:text-white focus:text-white transition text-md font-bold text-black`

  if (display)
    classList =
      "mb-3 block w-full text-center py-3 px-4 border-4 border-black bg-secondary hover:bg-rose-900 focus:bg-rose-900 hover:text-white transition text-lg font-bold text-white"

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        title={text}
        className={`${classList} ${className}`}
      >
        {text}
      </a>
    )
  }

  return (
    <Link href={href} title={text} className={`${classList} ${className}`}>
      {text}
    </Link>
  )
}

export default PrimaryLink
