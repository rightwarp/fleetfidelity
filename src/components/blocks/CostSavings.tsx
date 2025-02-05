import { PageBlocksCostSavings } from "@tina/__generated__/types"
import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"
import {
  HeadingMarkdownComponents,
  MarkdownComponentsType,
} from "../app/MarkdownComponents"

export const CostSavings = ({
  heading,
  image,
  hasDivider,
}: PageBlocksCostSavings) => {
  return (
    <Container
      hasDivider={hasDivider}
      tag="section"
      className="grid gap-8 lg:grid-cols-2 lg:items-center"
    >
      <div className="text-center lg:text-start">
        <TinaMarkdown
          content={heading}
          components={
            {
              ...HeadingMarkdownComponents,
              p: (props) => (
                <p {...props} className="text-sm text-neutral-500" />
              ),
            } as MarkdownComponentsType
          }
        />
      </div>
      <div className="flex items-center justify-center">
        <Image src={image.src} alt={image.alt || ""} width={500} height={250} />
      </div>
    </Container>
  )
}
