import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const MENU_ITEMS = [
  "all",
  ["clothing", "tees", "crop tees", "sweatshirts", "hoodies"],
  // "tanks",
  ["bags", "totes", "fanny packs", "backpacks", "drawstrings"],
  "mugs",
  ["accessories", "aprons", "headbands", "stickers"]
]

const NavMenuWrapper = ({ children, show, isMobile }) => {
  if (isMobile) {
    return (
      <ul
        style={{ transition: "all 0.2s ease-in-out" }}
        className={`relative items-center place-items-center grid grid-cols-2 md:grid-cols-${
          MENU_ITEMS.length
        } md:hidden text-black text-sm  md:text-lg flex-wrap overflow-y-hidden z-20 w-full border-0 md:border-8 border-black border-b-0 child:bg-black ${
          show ? "translate-y-0 h-[40rem]" : "-translate-y-full h-0"
        }`}
      >
        {children}
      </ul>
    )
  }

  return (
    <ul
      style={{ transition: "all 0.2s ease-in-out" }}
      className={`items-center place-items-center grid grid-cols-2 md:grid-cols-${MENU_ITEMS.length} text-black text-sm md:text-lg flex-wrap overflow-y-hidden z-20 w-full border-8 border-black border-b-0 child:bg-black opacity-100 h-[120px] md:h-[60px]`}
    >
      {children}
    </ul>
  )
}

const SubMenu = ({ items }: { items: string[] }) => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const numItems = items.length - 1
  const isOdd = (numItems + 1) % 2 !== 0
  return (
    <li
      onClick={() => setShow(!show)}
      className="md:min-w-[118px] h-full grid place-items-center text-center w-full group text-white hover:bg-rose-600 focus:bg-rose-600 select-none"
    >
      {items[0]}
      <ul
        className={`absolute overflow-hidden top-0 lg:top-full left-0 w-full h-full lg:min-h-[80px] bg-black border-8 border-black border-t-0 py-2 -translate-x-full lg:translate-x-0 ${
          show ? "translate-x-0" : ""
        } grid lg:hidden lg:group-hover:grid grid-cols-2 lg:grid-cols-3 transition z-50`}
      >
        {/* back button */}
        <button
          onClick={() => setShow(false)}
          className={`flex items-center justify-center gap-1 py-2 text-white transition lg:hidden`}
        >
          {/* left arrow svg icon */}
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          back
        </button>
        {items
          .filter((i) => i !== items[0])
          .map((subItem) => {
            const formattedName = subItem.split(" ").join("-").slice(0, -1)
            return (
              <li
                className={`md:min-w-[118px] h-full text-center w-full group text-white ${
                  isOdd ? "last:col-span-2 lg:last:col-span-1" : ""
                }`}
              >
                <Link
                  href={`/${items[0]}/${formattedName}`}
                  onClick={() => setShow(false)}
                  className={`w-full h-full flex items-center justify-center leading-none shadow-md transition text-center select-none text-white py-6 ${
                    router.asPath === `/${subItem}`
                      ? "bg-secondary font-bold"
                      : " hover:bg-rose-600 focus:bg-rose-600"
                  }
                      `}
                  title={subItem}
                >
                  {subItem}
                </Link>
              </li>
            )
          })}
      </ul>
    </li>
  )
}

export const NavMenu = ({ show = true, setShowMenu }) => {
  const router = useRouter()

  // hide menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setShowMenu(false)
    }
    router.events.on("routeChangeStart", handleRouteChange)
  }, [])

  const oddAmountOfMenuItems = MENU_ITEMS.length % 2 !== 0

  return (
    <NavMenuWrapper show={show} isMobile={window.innerWidth < 768}>
      {MENU_ITEMS.map((item) => {
        if (typeof item === "object") {
          return <SubMenu items={item} />
        }
        return (
          <li
            className={`md:min-w-[118px] h-full text-center w-full ${
              oddAmountOfMenuItems ? "last:col-span-2 lg:last:col-span-1" : ""
            }`}
          >
            <Link
              href={`/${item === "all" ? "" : item}`}
              className={`w-full h-full flex items-center justify-center leading-none shadow-md transition text-center text-white ${
                router.asPath === `/${item}`
                  ? "bg-neutral-800 font-bold"
                  : " hover:bg-rose-600 focus:bg-rose-600"
              }
              ${
                router.asPath === `/` && item === "all"
                  ? "bg-secondary font-bold"
                  : " hover:bg-rose-600 focus:bg-rose-600"
              }
              `}
              title={item}
            >
              {item}
            </Link>
          </li>
        )
      })}
    </NavMenuWrapper>
  )
}

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowMenu(false)
    }
  }, [])
  return (
    <div className="w-full border-b-8 border-b-black z-50 relative">
      <nav
        style={{ transition: "all 0.2s ease" }}
        className={`w-full flex flex-col items-center justify-center z-40 max-w-[1540px] mx-auto relative `}
      >
        <NavMenu show={showMenu} setShowMenu={setShowMenu} />

        <div
          style={{ transition: "all 0.2s ease" }}
          className={`bg-black w-full z-30 md:hidden`}
        >
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`mx-auto w-full md:max-w-[5rem] flex items-center justify-center gap-1 transition h-2 py-6 text-white text-sm z-20 ${
              showMenu ? "bg-neutral-800" : ""
            }`}
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-3 w-3 transition translate-y-[1px]`}
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
            ) : (
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            <strong>{showMenu ? "close" : "menu"}</strong>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
