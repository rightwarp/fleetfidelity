import { PageBlocksWysiwyg } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"

export const WYSIWYG = ({ isCollapsed, content }: PageBlocksWysiwyg) => {
  return (
    <Container tag="section" isCollapsed={isCollapsed}>
      <div className="prose mx-auto max-w-[70rem]">
        <TinaMarkdown content={content} />
      </div>
    </Container>
  )
}
