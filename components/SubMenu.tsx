import Link from "next/link"
import { useRouter } from "next/router"

const SubMenu = ({
  items,
  id,
  open,
  toggleSubMenu,
  closeMainMenu
}: {
  items: string[]
  id: number
  open: boolean
  toggleSubMenu: (id: number) => void
  closeMainMenu: () => void
}) => {
  const router = useRouter()

  const toggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    toggleSubMenu(id)
  }

  return (
    <>
      <li className="relative text-white text-lg font-bold w-full">
        <details
          open={open}
          onClick={toggle}
          className="w-full border-b-4 border-zinc-700 first:border-t-0"
        >
          <summary
            className={`w-full text-left bg-zinc-800 p-4 py-8 ${
              open ? "bg-rose-600" : ""
            }`}
          >
            {items[0]}
          </summary>
          <ul className={`flex flex-col items-start justify-center h-full`}>
            {items
              .filter((i) => i !== items[0])
              .map((subItem) => {
                const formattedName = subItem.split(" ").join("-")
                const isCurrentPath =
                  router.asPath === `/${subItem.split(" ").join("-")}`
                return (
                  <li
                    key={subItem}
                    className={`bg-zinc-900 w-full border-y-2 border-zinc-800`}
                  >
                    <Link
                      href={`/${formattedName}`}
                      onClick={closeMainMenu}
                      className={`py-6 w-full h-full flex items-center justify-center leading-none shadow-md transition text-center select-none text-white text-md ${
                        isCurrentPath
                          ? "bg-zinc-800 !text-primary !font-bold"
                          : ""
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
        </details>
      </li>
    </>
  )
}

export default SubMenu
