import { PageBlocksHero } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"
import {
  HeadingMarkdownComponents,
  MarkdownComponentsType,
} from "../app/MarkdownComponents"

export const Hero = ({ heading, hasDivider }: PageBlocksHero) => {
  return (
    <Container tag="section" hasDivider={hasDivider}>
      <div className="text-start">
        <TinaMarkdown
          content={heading}
          components={
            {
              ...HeadingMarkdownComponents,
              h1: (props) =>
                HeadingMarkdownComponents.h1({
                  ...props,
                  className: "mb-0 lg:mb-0",
                }),
            } as MarkdownComponentsType
          }
        />
      </div>
    </Container>
  )
}
