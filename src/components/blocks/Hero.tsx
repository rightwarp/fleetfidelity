import { PageBlocksHero } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"
import { HeadingMarkdownComponents } from "../app/MarkdownComponents"

export const Hero = ({ heading, isCollapsed }: PageBlocksHero) => {
  return (
    <Container tag="section" isCollapsed={isCollapsed}>
      <div className="mx-auto max-w-[70rem]">
        <TinaMarkdown
          content={heading}
          components={HeadingMarkdownComponents}
        />
      </div>
    </Container>
  )
}
