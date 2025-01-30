"use client"

import { Header as HeaderType } from "@tina/__generated__/types"
import { CircleUser, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, useCallback, useEffect, useState } from "react"

import { cn, getRoute } from "@/utils/helpers"
import { useIsLarge, useIsMedium } from "@/utils/useMediaQuery"

interface Headerprops extends HTMLAttributes<HTMLElement> {
  query: HeaderType
}

const DesktopNavigation = ({
  navigation,
}: {
  navigation: HeaderType["navigation"]
}) => {
  const isLargeSize = useIsLarge()

  return (
    <ul className="flex gap-2">
      {navigation?.map((item) => {
        if (!item) return null

        const href = item.href || getRoute(item.pageRef?._sys.filename)
        let element: React.ReactNode

        switch (item.actionType) {
          case "login":
            element = (
              <a
                href={href}
                target="_blank"
                className="btn btn-ghost items-center py-0 md:btn-sm lg:btn-md"
              >
                <span className="flex h-full flex-col items-center md:justify-center lg:justify-between">
                  <CircleUser size={28} />
                  <span
                    aria-hidden={!isLargeSize ? true : undefined}
                    className="hidden text-sm font-normal uppercase leading-none lg:flex"
                  >
                    {item.label}
                  </span>
                  {!isLargeSize && (
                    <span className="sr-only">{item.label}</span>
                  )}
                  <span className="sr-only">(opens in new window)</span>
                </span>
              </a>
            )
            break
          case "primary":
          case "secondary":
          default:
            element = (
              <a
                href={href}
                className={cn("btn md:btn-sm lg:btn-md", {
                  "btn-primary": item.actionType === "primary",
                  "btn-ghost": item.actionType === "secondary",
                })}
              >
                {item.label}
              </a>
            )
        }

        return <li key={item.label}>{element}</li>
      })}
    </ul>
  )
}

const MobileNavigation = ({
  menuOpen,
  navigation,
}: {
  menuOpen: boolean
  navigation: HeaderType["navigation"]
}) => {
  return (
    <nav
      className={cn(
        "grid grid-rows-[0fr] overflow-hidden bg-base-100 transition-[grid-template-rows] duration-500 md:hidden",
        {
          "grid-rows-[1fr]": menuOpen,
        },
      )}
      aria-hidden={!menuOpen ? true : undefined}
    >
      <ul
        className={cn(
          "flex min-h-0 flex-col transition-[visibility] duration-500",
          {
            invisible: !menuOpen,
            visible: menuOpen,
          },
        )}
      >
        {navigation
          ?.filter((item) => item?.pageRef?._sys.filename !== "contact")
          .map((item) => {
            if (!item) return null
            const href = item.href || getRoute(item.pageRef?._sys.filename)

            return (
              <li key={item.label}>
                <a
                  href={href}
                  className={cn(
                    "flex items-center justify-center gap-2 border-b border-base-300 py-3 font-semibold",
                    {
                      "bg-base-100 text-base-content hover:bg-base-200":
                        item.actionType !== "login",
                      "bg-navy-800 text-white hover:bg-navy-900":
                        item.actionType === "login",
                    },
                  )}
                >
                  {item.actionType === "login" && <CircleUser size={20} />}{" "}
                  {item.label}
                </a>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export const Header = ({ query }: Headerprops) => {
  const isMediumSize = useIsMedium()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isMediumSize) {
      setMenuOpen(false)
    }
  }, [isMediumSize])

  const handleMenuOpen = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  const contactItem = query.navigation?.find(
    (item) => item?.pageRef?._sys.filename === "contact",
  )
  const contactHref = getRoute(contactItem?.pageRef?._sys.filename)

  return (
    <header>
      <div className="flex items-center justify-between bg-base-200 px-3 py-2 md:px-16">
        <Link href="/">
          <Image
            priority
            src={query.logo.src}
            width={160}
            height={18}
            className="w-[7rem] md:w-[10rem] lg:w-[14rem]"
            alt={query.logo.alt}
          />
        </Link>
        <nav
          aria-hidden={!isMediumSize ? true : undefined}
          className="hidden md:flex"
        >
          <DesktopNavigation navigation={query.navigation} />
        </nav>
        <div
          aria-hidden={isMediumSize ? true : undefined}
          className="inline-flex gap-2 md:hidden"
        >
          {!isMediumSize && contactItem && (
            <a href={contactHref} className="btn btn-primary btn-xs sm:btn-sm">
              {contactItem.label}
            </a>
          )}
          <button
            type="button"
            className="btn btn-ghost btn-xs sm:btn-sm"
            onClick={handleMenuOpen}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      {!isMediumSize && (
        <MobileNavigation menuOpen={menuOpen} navigation={query.navigation} />
      )}
    </header>
  )
}
