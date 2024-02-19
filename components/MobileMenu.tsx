import { useState } from "react"
import SubMenu from "./SubMenu"
import Link from "next/link"

const MENU_ITEMS = [
  "home",
  "track order",
  [
    "clothing",
    "tees",
    "crop tees",
    "sports bras",
    "leggings",
    "hoodies",
    "sweatshirts"
  ],
  ["bags", "totes", "fanny packs", "drawstrings"],
  ["accessories", "tumblers", "headbands", "scrunchies"]
]

const MobileMenu = ({
  showMenu,
  close
}: {
  showMenu: boolean
  close: () => void
}) => {
  const [currentOpenSubmenu, setCurrentSubmenuOpen] = useState(null)

  const toggleSubMenu = (id: number) => {
    if (currentOpenSubmenu === id) {
      setCurrentSubmenuOpen(null)
    } else {
      setCurrentSubmenuOpen(id)
    }
  }

  return (
    <div
      className="fixed right-0 top-0 w-full max-w-md h-full overflow-y-auto flex flex-col items-center justify-start bg-black md:border-l-4 border-primary z-50 transform transition duration-300 ease-in-out"
      style={{ transform: showMenu ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="fixed top-0 left-0 bg-black w-full flex items-center justify-between z-[9999]">
        <p className="text-zinc-400 text-sm font-bold p-4">menu</p>
        <button
          onClick={close}
          className="p-4 text-white select-none font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col items-center justify-start w-full overflow-y-auto pt-[3.5rem]">
        {MENU_ITEMS.map((items, index) => {
          if (typeof items === "object") {
            return (
              <SubMenu
                key={items[0]}
                items={items}
                id={index}
                open={currentOpenSubmenu === index}
                toggleSubMenu={toggleSubMenu}
                closeMainMenu={close}
              />
            )
          }
          return (
            <li key={items} className={`w-full`}>
              <Link
                href={`/${items !== "home" ? items.split(" ").join("-") : ""}`}
                className={`block border-b-4 border-zinc-700 bg-zinc-800 w-full px-4 py-8 text-white text-lg font-bold`}
                title={items}
                onClick={close}
              >
                {items}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileMenu
