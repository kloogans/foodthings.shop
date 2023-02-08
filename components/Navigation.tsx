import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavMenuWrapper = ({ children, show, isMobile }) => {
  if (isMobile) {
    return (
      <ul
        style={{ transition: "all 0.2s ease-in-out" }}
        className={`items-center place-items-center grid grid-cols-2 md:grid-cols-7 text-black text-sm md:text-lg flex-wrap overflow-y-hidden z-20 w-full border-8 border-black border-b-0 child:bg-black ${
          show ? "opacity-100 h-[250px] md:h-[60px]" : "opacity-0 min-h-0 h-0"
        }`}
      >
        {children}
      </ul>
    );
  }

  return (
    <ul
      style={{ transition: "all 0.2s ease-in-out" }}
      className={`items-center place-items-center grid grid-cols-2 md:grid-cols-7 text-black text-sm md:text-lg flex-wrap overflow-y-hidden z-20 w-full border-8 border-black border-b-0 child:bg-black opacity-100 h-[120px] md:h-[60px]`}
    >
      {children}
    </ul>
  );
};

const menuItems = [
  "all",
  "tees",
  "tanks",
  "hoodies",
  "sweatshirts",
  "mugs",
  "stickers",
];

export const NavMenu = ({ show = true }) => {
  const router = useRouter();
  return (
    <NavMenuWrapper show={show} isMobile={window.innerWidth < 768}>
      {menuItems.map((item) => {
        return (
          <li className="min-w-[118px] h-full text-center w-full col-span-2 md:col-span-1">
            <Link
              href={`/${item === "all" ? "" : item}`}
              className={`w-full h-full flex items-center justify-center leading-none shadow-md transition text-center text-white ${
                router.asPath === `/${item}`
                  ? "bg-secondary font-bold"
                  : " hover:bg-rose-600 focus:bg-rose-600"
              }`}
              title={item}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </NavMenuWrapper>
  );
};

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowMenu(false);
    }
  }, []);
  return (
    <div className="w-full border-b-8 border-b-black">
      <nav
        style={{ transition: "all 0.2s ease" }}
        className={`w-full flex flex-col items-center justify-center z-10 max-w-[1540px] mx-auto`}
      >
        <NavMenu show={showMenu} />

        <div
          style={{ transition: "all 0.2s ease" }}
          className={`bg-black ${
            showMenu ? "pt-6" : "pt-2"
          } w-full z-30 md:hidden`}
        >
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`mx-auto w-full max-w-[5rem] flex items-center justify-center gap-1 transition h-2 py-3 text-white text-sm z-20`}
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
  );
};

export default Navigation;
