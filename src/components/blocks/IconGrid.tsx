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
  DefaultSectionHeadingMarkdownComponents,
} from "../app/MarkdownComponents"

const Themes = {
  PRIMARY: "Primary",
  DEFAULT: "Default",
}

const IconSizes = {
  NORMAL: "Normal",
  LARGE: "Large",
}

const IconLayouts = {
  VERTICAL: "Vertical",
  HORIZONTAL: "Horizontal",
}

const Displayicon = ({
  icon,
  iconSize,
}: {
  icon: PageBlocksIconGridIconsIcon
  iconSize: PageBlocksIconGrid["iconSize"]
}) => {
  return (
    <div
      className={cn("relative flex flex-shrink-0", {
        "size-16 sm:size-28": iconSize === IconSizes.LARGE,
        "size-12": iconSize === IconSizes.NORMAL,
      })}
    >
      <Image src={icon.src} alt={icon.alt || ""} fill />
    </div>
  )
}

export const IconGrid = ({
  theme,
  iconLayout,
  heading,
  iconSize,
  // hasIconBadge,
  icons,
  // bottomText,
}: PageBlocksIconGrid) => {
  return (
    <Container
      tag="section"
      outerProps={{
        className: cn({
          "bg-base-100": theme === Themes.DEFAULT,
          "bg-navy-800": theme === Themes.PRIMARY,
        }),
      }}
    >
      <div className="mb-12 flex flex-col gap-5 text-center md:gap-8">
        <TinaMarkdown
          content={heading}
          components={
            theme === Themes.PRIMARY
              ? PrimarySectionHeadingMarkdownComponents
              : DefaultSectionHeadingMarkdownComponents
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
        {icons.map((icon) => {
          return (
            <div
              key={icon.title}
              className={cn(
                "relative flex max-w-64 flex-col gap-4 text-center md:gap-8",
                {
                  "pt-10 sm:pt-[3.5rem]": iconSize === IconSizes.LARGE,
                  "flex-col items-center": iconLayout === IconLayouts.VERTICAL,
                  "mx-auto flex-col items-center md:mx-[unset] md:flex-row md:items-start":
                    iconLayout === IconLayouts.HORIZONTAL,
                },
              )}
            >
              {iconSize === IconSizes.LARGE && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 z-0 size-36 rounded-full bg-navy-700 opacity-20 sm:size-56"
                />
              )}
              <Displayicon icon={icon.icon} iconSize={iconSize} />
              <div
                className={cn("flex flex-col gap-3", {
                  "items-center text-center":
                    iconLayout === IconLayouts.VERTICAL,
                  "items-center text-center md:items-start md:text-start":
                    iconLayout === IconLayouts.HORIZONTAL,
                })}
              >
                <h3
                  className={cn(
                    "z-10 font-heading text-xl font-semibold sm:text-2xl",
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
