import { PageBlocksCompanyStory } from "@tina/__generated__/types"
import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"
import { PrimarySectionHeadingMarkdownComponents } from "../app/MarkdownComponents"

export const CompanyStory = ({ content, bgImage }: PageBlocksCompanyStory) => {
  return (
    <Container
      tag="section"
      outerProps={{ className: "bg-primary relative overflow-hidden" }}
    >
      <div className="pointer-events-none absolute -inset-y-8 inset-x-0">
        <Image
          src={bgImage.src}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50 lg:opacity-100"
        />
      </div>
      <div className="mx-auto max-w-[70rem] py-8 lg:py-16">
        <TinaMarkdown
          content={content}
          components={PrimarySectionHeadingMarkdownComponents}
        />
      </div>
    </Container>
  )
}
