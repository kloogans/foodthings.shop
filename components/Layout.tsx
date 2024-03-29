import Link from "next/link"
import useSnipcartCount from "../hooks/useSnipcartCount"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { NavMenu } from "./Navigation"
import { useRouter } from "next/router"
import { AnnouncementBanner } from "./AnnouncementBanner"
import MobileMenu from "./MobileMenu"
const Navigation = dynamic(() => import("./Navigation"), { ssr: false })

const Layout = ({ children }) => {
  const { cart } = useSnipcartCount()
  const [showContact, setShowContact] = useState(false)
  const [hideAnnouncement, setHideAnnouncement] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const cartHasItems = cart.items.count !== 0
  const router = useRouter()
  const { pathname } = router

  // const [currentOpenSubmenu, setCurrentSubmenuOpen] = useState(null)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showMenu])

  return (
    <div className="bg-primary min-h-screen relative">
      <header
        style={{ transition: "all .2s ease-in-out" }}
        className={`fixed top-0 left-0 w-full z-[100] bg-primary shadow-md border-y-8 border-black ${
          !hideAnnouncement ? "border-t-0" : ""
        }`}
      >
        <AnnouncementBanner
          hide={hideAnnouncement}
          handleHideBanner={() => setHideAnnouncement(true)}
        />
        <div className="relative max-w-[1540px] w-full mx-auto px-2 md:px-0 lg:py-2 bg-primary z-50">
          <div className="w-screen lg:w-full flex items-center space-between relative">
            {/* logo */}
            <div className="ml-2 xl:ml-0 flex items-center max-h-[60px] md:max-h-[80px] self-center justify-start flex-auto lg:flex-0">
              <Link href="/" className="flex items-center text-black">
                <span className="w-16 h-16 md:w-[6rem] md:h-[6rem] lg:w-[6.5rem] lg:h-[6.5rem] -translate-y-[1px] flex items-center justify-center relative">
                  <Image src="/assets/logo.svg" alt="Logo" fill />
                </span>
              </Link>
            </div>
            {/* desktop nav */}
            <div className="w-full hidden lg:block px-16">
              <Navigation />
            </div>
            {/* controls */}
            <div className="flex items-center justify-end mr-4 lg:mr-0">
              <Link
                href="/track-order"
                className={`hover:text-secondary text-sm mr-2 lg:min-w-[75px] hidden lg:block ${
                  pathname.includes("track-order")
                    ? "text-secondary font-bold"
                    : "text-black"
                }`}
              >
                <strong>track order</strong>
              </Link>
              <button
                className={`group snipcart-checkout appearance-none px-2 text-black hover:text-rose-500 rounded-md cursor-pointer focus:outline-none focus:text-rose-500 transition relative ${
                  cartHasItems ? "mr-4 lg:mr-6" : ""
                }`}
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-secondary rounded-full text-white text-xs font-bold border-2 border-black py-[0.2rem] px-2  top-0 right-0 -translate-y-3 translate-x-3">
                    {cart.items.count || 0}
                  </span>
                )}
                <svg
                  className="transition w-6 h-6 fill-black group-hover:fill-secondary group-focus:fill-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 100 100"
                  xmlSpace="preserve"
                >
                  <polygon points="81,78 81,70 34.1,70 35.2,65.4 77.6,63.4 95.2,25.8 26,22.6 23.1,11 5,11 5,19 16.8,19 27.9,61.8   23.9,78 "></polygon>
                  <circle cx="31.5" cy="87.5" r="7.5"></circle>
                  <circle cx="76.5" cy="87.5" r="7.5"></circle>
                </svg>
              </button>

              <button
                className="text-sm text-black px-4 lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
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
              </button>
            </div>
          </div>
        </div>

        {/* new mobile nav menu */}
        <MobileMenu showMenu={showMenu} close={() => setShowMenu(false)} />
      </header>
      <main
        style={{ minHeight: "calc(100vh - 180px)" }}
        className={`py-6 pb-10 flex-auto relative px-2 bg-black background-food ${
          hideAnnouncement
            ? "mt-[4.5rem] lg:mt-[7rem]"
            : "mt-52 md:mt-[14rem] lg:mt-44"
        }`}
      >
        <div className="w-full max-w-[1540px] mx-auto">{children}</div>
      </main>
      <footer className="w-full flex items-center justify-center px-6 bg-primary border-t-8 border-black">
        <div className="py-6 text-center flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center justify-center mb-2">
            <p className="text-black mb-2 lg:mb-1">questions?</p>

            {showContact ? (
              <a
                href="mailto:support@foodthings.net"
                title="support@foodthings.net"
                className="text-black font-bold hover:text-secondary transition mb-2 lg:mb-1"
              >
                support@foodthings.net
              </a>
            ) : (
              <button
                onClick={() => setShowContact(true)}
                className="text-black font-bold hover:text-secondary transition mb-2 lg:mb-1"
              >
                contact us
              </button>
            )}
            <Link
              href="/terms-of-sale"
              className="text-black font-bold hover:text-secondary transition mb-2 lg:mb-1"
            >
              terms of sale
            </Link>
          </nav>
          <p className="text-black text-sm">
            &copy; {new Date().getFullYear()} food things
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
