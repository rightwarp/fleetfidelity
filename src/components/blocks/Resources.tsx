import { PageBlocksResources } from "@tina/__generated__/types"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"

import { Container } from "../app/Container"

export const Resources = ({ resources, isCollapsed }: PageBlocksResources) => {
  return (
    <Container tag="section" isCollapsed={isCollapsed}>
      <ul className="grid gap-2 lg:grid-cols-2">
        {resources.map(
          ({
            resourceRef: { id, href, title, description, thumbnail, type },
          }) => (
            <li
              key={id}
              className="relative flex gap-2 rounded-2xl border border-base-300 py-3 pe-8 ps-3 hover:border-navy-50 hover:bg-navy-50 sm:gap-3 lg:gap-4"
            >
              <a href={href} className="absolute inset-0 z-10">
                <span className="sr-only">{title} (opens in new tab)</span>
              </a>
              <SquareArrowOutUpRight
                size={20}
                className="absolute right-3 top-3 opacity-60"
              />
              <Image
                src={thumbnail.src}
                alt={""}
                width={128}
                height={128}
                className="size-16 rounded-lg border border-base-200 md:size-32"
              />
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase text-base-content">
                  {type}
                </span>
                <h3 className="text-base font-semibold leading-6 text-black sm:text-lg">
                  {title}
                </h3>
                <p className="text-sm">{description}</p>
              </div>
            </li>
          ),
        )}
      </ul>
    </Container>
  )
}
