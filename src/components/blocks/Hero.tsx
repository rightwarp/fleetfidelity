import { PageBlocksHero } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"
import {
  HeadingMarkdownComponents,
  MarkdownComponentsType,
} from "../app/MarkdownComponents"

export const Hero = ({ heading, isCollapsed }: PageBlocksHero) => {
  return (
    <Container tag="section" isCollapsed={isCollapsed}>
      <div className="mx-auto max-w-[70rem]">
        <TinaMarkdown
          content={heading}
          components={
            {
              ...HeadingMarkdownComponents,
              h1: (props) =>
                HeadingMarkdownComponents.h1({
                  ...props,
                  className: "mb-0 lg:mb-0 text-center",
                }),
            } as MarkdownComponentsType
          }
        />
      </div>
    </Container>
  )
}
