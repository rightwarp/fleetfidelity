import { PageBlocksCallToAction } from "@tina/__generated__/types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { cn, getRoute } from "@/utils/helpers"

import { Container } from "../app/Container"
import {
  HeadingMarkdownComponents,
  PrimarySectionHeadingMarkdownComponents,
} from "../app/MarkdownComponents"

import { Themes } from "./utils"

const ActionTypes = {
  PRIMARY: "Primary",
  SECONDARY: "Secondary",
}

export const CallToAction = ({
  theme,
  heading,
  actions,
}: PageBlocksCallToAction) => {
  return (
    <Container
      tag="section"
      outerProps={{
        className: cn({
          "bg-base-200": theme === Themes.DEFAULT,
          "bg-navy-800": theme === Themes.PRIMARY,
        }),
      }}
    >
      <div className="flex flex-col text-center">
        <TinaMarkdown
          content={heading}
          components={
            theme === Themes.PRIMARY
              ? PrimarySectionHeadingMarkdownComponents
              : HeadingMarkdownComponents
          }
        />
      </div>
      <div className="flex flex-col flex-wrap items-center gap-4 md:flex-row md:justify-center md:gap-8">
        {actions.map((action) => {
          const href = action.href || getRoute(action.pageRef?._sys.filename)
          const Tag = action.href ? "a" : Link

          return (
            <Tag
              key={action.label}
              href={href}
              className={cn({
                "btn btn-primary md:btn-lg":
                  action.type === ActionTypes.PRIMARY,
                "btn btn-ghost md:btn-lg":
                  action.type === ActionTypes.SECONDARY,

                // theme overrides
                "bg-white text-black hover:bg-white/80":
                  action.type === ActionTypes.PRIMARY &&
                  theme === Themes.PRIMARY,
                "text-white hover:bg-white/10":
                  action.type === ActionTypes.SECONDARY &&
                  theme === Themes.PRIMARY,
              })}
            >
              {action.label} {action.href && <ExternalLink size={20} />}
            </Tag>
          )
        })}
      </div>
    </Container>
  )
}
