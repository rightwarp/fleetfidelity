import {
  PageBlocksIconGrid,
  PageBlocksIconGridIconsIcon,
} from "@tina/__generated__/types"
import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { cn } from "@/utils/helpers"

import { Container } from "../app/Container"
import {
  PrimarySectionHeadingMarkdownComponents,
  HeadingMarkdownComponents,
} from "../app/MarkdownComponents"

import { Themes } from "./utils"

const IconSizes = {
  NORMAL: "Normal",
  LARGE: "Large",
}

const IconLayouts = {
  VERTICAL: "Vertical",
  HORIZONTAL: "Horizontal",
}

const DisplayIcon = ({
  theme,
  icon,
  iconSize,
  badge,
  hasIconBadge,
}: {
  icon: PageBlocksIconGridIconsIcon
  theme: PageBlocksIconGrid["theme"]
  iconSize: PageBlocksIconGrid["iconSize"]
  badge?: number
  hasIconBadge: PageBlocksIconGrid["hasIconBadge"]
}) => {
  return (
    <div
      className={cn({
        "relative rounded-full bg-base-200 p-7":
          iconSize === IconSizes.NORMAL && theme === Themes.DEFAULT,
      })}
    >
      {hasIconBadge && (
        <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border-2 border-navy-950 bg-base-100">
          <span className="text-lg font-semibold">{badge}</span>
        </div>
      )}
      <div
        className={cn("relative flex flex-shrink-0", {
          "size-16 md:size-28": iconSize === IconSizes.LARGE,
          "size-12": iconSize === IconSizes.NORMAL,
        })}
      >
        <Image src={icon.src} alt={icon.alt || ""} fill />
      </div>
    </div>
  )
}

export const IconGrid = ({
  theme,
  iconLayout,
  heading,
  iconSize,
  hasIconBadge,
  icons,
  hasDivider,
  // bottomText,
}: PageBlocksIconGrid) => {
  return (
    <Container
      hasDivider={hasDivider}
      tag="section"
      outerProps={{
        className: cn({
          "bg-base-100": theme === Themes.DEFAULT,
          "bg-navy-800": theme === Themes.PRIMARY,
        }),
      }}
    >
      <div className="text-center">
        <TinaMarkdown
          content={heading}
          components={
            theme === Themes.PRIMARY
              ? PrimarySectionHeadingMarkdownComponents
              : HeadingMarkdownComponents
          }
        />
      </div>
      <div
        className={cn("mx-auto max-w-[56rem]", {
          "flex flex-wrap justify-center gap-12 md:gap-16":
            iconSize === IconSizes.LARGE,
          "grid gap-16 md:grid-cols-2": iconSize === IconSizes.NORMAL,
        })}
      >
        {icons.map((icon, idx) => {
          return (
            <div
              key={icon.title}
              className={cn(
                "relative flex max-w-64 flex-col gap-4 text-center md:gap-8",
                {
                  "pt-10 md:pt-[3.5rem]": iconSize === IconSizes.LARGE,
                  "flex-col items-center": iconLayout === IconLayouts.VERTICAL,
                  "mx-auto flex-col items-center sm:max-w-[unset] md:mx-[unset] md:flex-row md:items-start":
                    iconLayout === IconLayouts.HORIZONTAL,
                },
              )}
            >
              {iconSize === IconSizes.LARGE && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 z-0 size-36 rounded-full bg-navy-700 opacity-20 md:size-56"
                />
              )}
              <DisplayIcon
                badge={idx + 1}
                theme={theme}
                hasIconBadge={hasIconBadge}
                icon={icon.icon}
                iconSize={iconSize}
              />
              <div
                className={cn("flex flex-col gap-2", {
                  "items-center text-center":
                    iconLayout === IconLayouts.VERTICAL,
                  "items-center text-center md:items-start md:pt-4 md:text-start":
                    iconLayout === IconLayouts.HORIZONTAL,
                })}
              >
                <h3
                  className={cn(
                    "z-10 font-heading text-lg font-semibold sm:text-xl",
                    {
                      "text-white": theme === Themes.PRIMARY,
                      "text-black": theme === Themes.DEFAULT,
                    },
                  )}
                >
                  {icon.title}
                </h3>
                <p
                  className={cn("text-sm sm:text-base", {
                    "text-primary-content": theme === Themes.PRIMARY,
                  })}
                >
                  {icon.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
