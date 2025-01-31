"use client"

import { Footer as FooterType } from "@tina/__generated__/types"
import { Mail, Phone, MapPin, LucideIcon, Copyright } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes } from "react"
import { SocialIcon } from "react-social-icons"

// import Instagram from "@/app/_assets/instagram.svg"
import YaharaIcon from "@/app/_assets/yahara-icon.svg"
import { cn, getRoute } from "@/utils/helpers"

interface FooterProps extends HTMLAttributes<HTMLElement> {
  query: FooterType
}

const ContactIcons: Record<string, LucideIcon> = { Phone, Mail }

export const Footer = ({ query }: FooterProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AddressTag: any = query.address?.mapLink ? "a" : "div"
  const year = new Date().getFullYear()

  return (
    <footer className="flex justify-center border-t border-base-300 bg-base-100 py-12">
      <div className="md:max-w-800 grid w-full grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:w-auto md:px-8">
        <div>
          <Image
            priority
            src={query.logo.src}
            width={160}
            height={18}
            className="w-[10rem] lg:w-[14rem]"
            alt={query.logo.alt || ""}
          />
        </div>
        <div className="flex items-center text-sm md:text-base">
          <span className="flex items-center gap-1">
            {query.tagline} <YaharaIcon className="inline" />
          </span>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase">Get In Touch</h3>
          <ul className="flex flex-col gap-4 text-sm">
            {query.contact.map((contactMethod) => {
              const Icon = contactMethod.icon
                ? ContactIcons[contactMethod!.icon!]
                : null
              let href: string

              switch (contactMethod.icon) {
                case "Phone":
                  href = `tel:+${contactMethod.label.replaceAll(/[.-]/g, "")}`
                  break
                case "Mail":
                  href = `mailto:${contactMethod.label}`
                  break
                default:
                  href = "#"
              }

              return (
                <li
                  key={contactMethod.label}
                  className="flex items-center gap-4"
                >
                  <div className="size-4 opacity-60">
                    {Icon && <Icon size={16} />}
                  </div>
                  <a href={href} className="hover:link">
                    {contactMethod.label}
                  </a>
                </li>
              )
            })}
            {query.address && (
              <li className="flex gap-4">
                <div className="mt-[0.125rem] size-4 opacity-60">
                  <MapPin size={16} />
                </div>
                <AddressTag
                  className={cn("grid gap-1", {
                    "hover:link": query.address.mapLink,
                  })}
                  {...(query.address.mapLink && {
                    href: query.address.mapLink,
                    target: "_blank",
                  })}
                >
                  <span>{query.address.line1}</span>
                  <span>{query.address.line2}</span>
                </AddressTag>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase">Navigation</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm sm:text-base">
            {query.navigation?.map((navItem) => {
              if (!navItem) return null

              const href =
                navItem.href || getRoute(navItem.pageRef?._sys.filename)

              const Tag = navItem.href ? "a" : Link

              return (
                <li key={navItem.label}>
                  <Tag href={href} className="hover:link">
                    {navItem.label}
                  </Tag>
                </li>
              )
            })}
          </ul>
        </div>
        {query.social?.length && query.social.length > 0 && (
          <div className="flex items-center gap-4">
            <h3 className="inline text-xs font-bold uppercase">Follow Us</h3>
            <ul className="flex gap-2">
              {query.social.map((socialLink) => {
                if (!socialLink) return null

                return (
                  <li
                    key={socialLink.href}
                    className="text-primary/80 hover:text-primary"
                  >
                    <SocialIcon
                      bgColor="currentColor"
                      style={{ height: 32, width: 32 }}
                      url={socialLink.href}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {query.copyright && (
          <div className="flex items-center gap-2 text-sm sm:text-base">
            {query.copyright} <Copyright size={16} className="inline" /> {year}
          </div>
        )}
      </div>
    </footer>
  )
}
