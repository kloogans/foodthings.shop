import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const MENU_ITEMS = [
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

const NavMenuWrapper = ({ children, setShow, isMobile }) => {
  if (isMobile) {
    return (
      <ul
        style={{ transition: "all 0.2s ease-in-out" }}
        className={`relative [&>*:nth-child(2)]:border-t-0 grid grid-cols-1 min-h-[100svh] lg:hidden text-black text-md md:text-lg flex-wrap w-full border-0 md:border-8 border-black border-b-0 child:bg-zinc-900 odd:bg-zinc-900`}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-0 right-0 p-4 bg-secondary text-white select-none font-bold"
        >
          close
        </button>
        {children}
      </ul>
    )
  }

  return (
    <ul
      style={{ transition: "all 0.2s ease-in-out" }}
      className={`items-center place-items-center grid grid-cols-3 text-black text-md md:text-lg flex-wrap overflow-y-hidden z-20 w-full lg:flex-auto lg:border-8 lg:border-secondary child:bg-black opacity-100`}
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
    <>
      <li
        onClick={() => setShow(!show)}
        className="peer border-t-2 lg:border-t-0 border-zinc-500 !bg-zinc-900 lg:bg-transparent md:min-w-[118px] h-full py-6 lg:py-4 grid place-items-center text-center w-full group text-white lg:hover:bg-rose-600 lg:focus:bg-rose-600 select-none"
      >
        {items[0]}
        <ul
          className={`absolute overflow-x-hidden top-0 lg:top-full -translate-y-[8px] left-0 w-full h-full lg:min-h-[20rem] bg-black -translate-x-full lg:translate-x-0 lg:border-8 lg:border-secondary lg:border-t-4 ${
            show ? "translate-x-0" : ""
          } grid lg:hidden [&>*:nth-child(2)]:border-t-0 hover:grid lg:group-hover:grid grid-cols-1 lg:grid-cols-3 transition z-50 odd:bg-zinc-900 pt-[5rem] lg:pt-0`}
        >
          {/* back button */}
          <button
            onClick={() => setShow(false)}
            className={`absolute left-0 top-0 pt-8 pl-8 flex items-center justify-center col-span-2 gap-1 text-white transition lg:hidden md:text-lg`}
          >
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
              const formattedName = subItem.split(" ").join("-")
              return (
                <li
                  key={subItem}
                  className={`md:min-w-[118px] text-center w-full border-t-2 border-zinc-700  lg:border-t-0 group text-white first:mt-8 md:first:mt-0 ${
                    isOdd ? "lg:last:col-span-1" : ""
                  }`}
                >
                  <Link
                    href={`/${formattedName}`}
                    onClick={() => setShow(false)}
                    className={`w-full h-full flex items-center justify-center leading-none shadow-md transition text-center select-none text-white text-md md:text-lg ${
                      router.asPath === `/${subItem}`
                        ? "bg-zinc-800 !text-primary md:text-white font-bold"
                        : " lg:hover:bg-rose-600 lg:focus:bg-rose-600"
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
    </>
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

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [show])

  const oddAmountOfMenuItems = MENU_ITEMS.length % 2 !== 0

  return (
    <NavMenuWrapper isMobile={window.innerWidth < 821} setShow={setShowMenu}>
      {MENU_ITEMS.map((item) => {
        if (typeof item === "object") {
          return <SubMenu key={item[0]} items={item} />
        }
        return (
          <li
            key={item}
            className={`md:min-w-[118px] text-center w-full lg:h-full ${
              oddAmountOfMenuItems ? "last:col-span-2 lg:last:col-span-1" : ""
            }`}
          >
            <Link
              href={`/${item === "home" ? "" : item + "s"}`}
              className={`w-full h-full py-6 lg:py-4 flex items-center justify-center leading-none shadow-md transition text-center text-md md:text-lg text-white ${
                router.asPath === `/${item}`
                  ? "lg:bg-neutral-900 font-bold"
                  : " lg:hover:bg-rose-600 lg:focus:bg-rose-600"
              }
              ${
                router.asPath === `/` && item === "home"
                  ? "lg:bg-neutral-900 font-bold"
                  : " lg:hover:bg-rose-600 lg:focus:bg-rose-600"
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
    if (window.innerWidth < 821) {
      setShowMenu(false)
    }
  }, [])
  return (
    <>
      <nav
        style={{ transition: "all 0.2s ease" }}
        className={`relative w-full flex flex-col items-center justify-center max-w-[1540px] mx-auto`}
      >
        <div className="w-full hidden lg:block">
          <NavMenu show={showMenu} setShowMenu={setShowMenu} />
        </div>

        <div
          style={{ transition: "all 0.2s ease" }}
          className={`bg-zinc-800 border-b-primary border-b-4 w-full z-30 lg:hidden`}
        >
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`mx-auto w-full md:max-w-[5rem] flex items-center justify-center gap-1 transition h-2 py-6 text-white text-md md:text-lg z-20 ${
              showMenu ? "bg-zinc-800" : ""
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
                className="w-3 h-3 md:w-6 md:h-6"
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

            <strong>menu</strong>
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black lg:hidden z-[200] transition duration-100 ease-in-out origin-top ${
          showMenu
            ? "scale-y-100 child:opacity-100"
            : "scale-y-0 child:opacity-0"
        }`}
      >
        <NavMenu show={showMenu} setShowMenu={setShowMenu} />
      </div>
    </>
  )
}

export default Navigation
